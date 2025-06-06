#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
智能图片格式转换器（保持原文件名）
===============================

将目录下的图片文件转换为AVIF或JXL格式，但保持原文件名不变（包括扩展名）。
这样MD文件中的图片链接无需修改。

功能特性：
- 支持多种输入格式（jpg, jpeg, png, webp, bmp, tiff等）
- 支持两种输出格式（AVIF和JXL）
- 自动扫描目录下的所有图片文件
- 转换为现代图像格式但保持原文件名
- 智能压缩比检测，自动跳过无效转换
- 支持dry-run模式（预览不执行）
- 多线程并行处理，加速转换
- 可选择删除原始文件备份
- 进度显示和详细日志记录

压缩优化：
- 自动检测转换效果，只转换能有效压缩的图片
- 如果转换后体积变大，自动跳过
- 可设置最小压缩比阈值

使用示例：
    python image_to_avif_keep_name.py /path/to/images
    python image_to_avif_keep_name.py /path/to/images --format jxl
    python image_to_avif_keep_name.py /path/to/images --format avif --quality 90
    python image_to_avif_keep_name.py /path/to/images --threads 4
    python image_to_avif_keep_name.py /path/to/images --min-compression 10
"""

import os
import sys
import time
import argparse
import logging
import shutil
import tempfile
import threading
import concurrent.futures
from pathlib import Path
from datetime import datetime
from typing import List, Tuple, Set, Dict
from tqdm import tqdm

try:
    from PIL import Image
    from PIL import ImageFile

    # 允许加载截断的图片
    ImageFile.LOAD_TRUNCATED_IMAGES = True

    # 检查AVIF支持
    import pillow_avif

    HAS_AVIF = True
except ImportError as e:
    HAS_AVIF = False
    MISSING_PACKAGES = []
    if 'PIL' in str(e):
        MISSING_PACKAGES.append('Pillow')
    if 'pillow_avif' in str(e):
        MISSING_PACKAGES.append('pillow-avif')

# 检查JXL支持
try:
    import pillow_jxl

    HAS_JXL = True
except ImportError:
    HAS_JXL = False
    MISSING_PACKAGES.append('pillow-jpegxl')

# 支持的图片格式
SUPPORTED_FORMATS = {
    '.jpg', '.jpeg', '.png', '.webp', '.bmp',
    '.tiff', '.tif', '.gif', '.ico'
}


# 日志配置
def setup_logging(log_file: str) -> logging.Logger:
    """设置日志记录"""
    logger = logging.getLogger('avif_converter')
    logger.setLevel(logging.DEBUG)

    # 文件处理器
    fh = logging.FileHandler(log_file, encoding='utf-8')
    fh.setLevel(logging.DEBUG)

    # 控制台处理器
    ch = logging.StreamHandler()
    ch.setLevel(logging.INFO)

    # 格式化器
    formatter = logging.Formatter(
        '%(asctime)s - %(levelname)s - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )
    fh.setFormatter(formatter)
    ch.setFormatter(logging.Formatter('%(levelname)s: %(message)s'))

    logger.addHandler(fh)
    logger.addHandler(ch)

    return logger


class ImageConverter:
    """图像转换器类，支持AVIF和JXL格式"""

    def __init__(self, directory: str, format: str = 'avif', quality: int = 80,
                 dry_run: bool = False, recursive: bool = True, delete_backup: bool = False,
                 check_compression: bool = True, min_compression_ratio: float = 0.05,
                 threads: int = 1, effort: int = 7, show_report: bool = True):
        self.directory = Path(directory)
        self.format = format.lower()  # 'avif' 或 'jxl'
        self.quality = quality
        self.dry_run = dry_run
        self.recursive = recursive
        self.delete_backup = delete_backup
        self.threads = max(1, threads)  # 至少使用1个线程
        self.stats_lock = threading.Lock()  # 用于保护统计数据的线程锁
        self.effort = effort  # JXL特有的参数，压缩速度与质量的平衡，1-9
        self.check_compression = check_compression
        self.min_compression_ratio = min_compression_ratio  # 最小压缩比，默认5%
        self.show_report = show_report  # 是否在结束时显示详细报告

        # 统计信息
        self.stats = {
            'found_images': 0,
            'converted': 0,
            'failed': 0,
            'skipped_larger': 0,  # 因体积变大而跳过的文件
            'skipped_minimal': 0,  # 因压缩效果不明显而跳过的文件
            'total_original_size': 0,
            'total_converted_size': 0,
            'total_saved_size': 0,  # 总节省空间
            'format_counts': {},  # 各种格式的统计
            'conversion_time': 0,  # 总转换时间
            'max_compression': 0,  # 最大压缩率
            'min_compression': 100,  # 最小压缩率
            'avg_compression': 0,  # 平均压缩率
            'errors': []
        }

        # 设置日志
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        log_file = self.directory / f'avif_conversion_{timestamp}.log'
        self.logger = setup_logging(str(log_file))

        self.logger.info(f"开始处理目录: {self.directory}")
        self.logger.info(f"参数 - 输出格式: {self.format.upper()}, 质量: {self.quality}, 递归: {self.recursive}, "
                         f"预览模式: {self.dry_run}, 删除备份: {self.delete_backup}, "
                         f"检测压缩比: {self.check_compression}, 最小压缩比: {self.min_compression_ratio:.1%}, "
                         f"线程数: {self.threads}" +
                         (f", 压缩速度等级: {self.effort}" if self.format == 'jxl' else ""))

    def find_images(self) -> List[Path]:
        """查找所有支持的图片文件"""
        images = []

        if self.recursive:
            pattern = '**/*'
        else:
            pattern = '*'

        for file_path in self.directory.glob(pattern):
            if file_path.is_file() and file_path.suffix.lower() in SUPPORTED_FORMATS:
                # 检查是否已经是目标格式（通过文件头判断）
                if not self._is_already_converted(file_path):
                    images.append(file_path)
                    self.logger.debug(f"找到图片: {file_path}")

                    # 统计原始格式
                    try:
                        with self.stats_lock:
                            with Image.open(file_path) as img:
                                fmt = img.format.lower() if img.format else file_path.suffix.lower().strip('.')
                                if fmt in self.stats['format_counts']:
                                    self.stats['format_counts'][fmt] += 1
                                else:
                                    self.stats['format_counts'][fmt] = 1
                    except Exception:
                        # 如果无法打开图片，使用文件扩展名作为格式
                        ext = file_path.suffix.lower().strip('.')
                        with self.stats_lock:
                            if ext in self.stats['format_counts']:
                                self.stats['format_counts'][ext] += 1
                            else:
                                self.stats['format_counts'][ext] = 1
                else:
                    self.logger.debug(f"跳过已是{self.format.upper()}格式的文件: {file_path}")

        self.stats['found_images'] = len(images)
        self.logger.info(f"找到 {len(images)} 个需要转换的图片文件")
        return images

    def _is_already_converted(self, file_path: Path) -> bool:
        """检查文件是否已经是目标格式"""
        try:
            with Image.open(file_path) as img:
                if self.format == 'avif':
                    return img.format == 'AVIF'
                elif self.format == 'jxl':
                    return img.format == 'JXL'
                return False
        except Exception:
            return False

    def _test_compression(self, image_path: Path, original_size: int):
        """测试转换压缩效果"""
        try:
            # 创建临时文件进行测试转换
            with tempfile.NamedTemporaryFile(suffix=f'.{self.format}', delete=False) as tmp_file:
                temp_path = Path(tmp_file.name)

            try:
                # 读取并转换图片到临时文件
                with Image.open(image_path) as img:
                    # 处理透明度
                    if img.mode in ('RGBA', 'LA'):
                        pass
                    elif img.mode == 'P' and 'transparency' in img.info:
                        img = img.convert('RGBA')
                    else:
                        img = img.convert('RGB')

                    # 保存为目标格式到临时文件
                    if self.format == 'avif':
                        img.save(
                            temp_path,
                            'AVIF',
                            quality=self.quality,
                            optimize=True
                        )
                    elif self.format == 'jxl':
                        img.save(
                            temp_path,
                            'JXL',
                            quality=self.quality,
                            effort=self.effort,  # JXL特有参数
                            lossless=False  # 使用有损模式
                        )

                # 获取转换后文件大小
                converted_size = temp_path.stat().st_size

                # 计算压缩比
                if converted_size >= original_size:
                    return 'skip_larger'

                compression_ratio = ((original_size - converted_size) / original_size) * 100

                # 更新压缩率统计
                with self.stats_lock:
                    if compression_ratio > self.stats['max_compression']:
                        self.stats['max_compression'] = compression_ratio
                    if self.stats['min_compression'] > compression_ratio > 0:
                        self.stats['min_compression'] = compression_ratio

                    # 累加到平均压缩率计算
                    if compression_ratio > 0:
                        current_count = self.stats['converted']
                        if current_count > 0:
                            self.stats['avg_compression'] = ((self.stats['avg_compression'] * current_count) +
                                                             compression_ratio) / (current_count + 1)
                        else:
                            self.stats['avg_compression'] = compression_ratio

                # 检查是否达到最小压缩比
                if compression_ratio < (self.min_compression_ratio * 100):
                    return 'skip_minimal'

                return converted_size, compression_ratio

            finally:
                # 清理临时文件
                if temp_path.exists():
                    temp_path.unlink()

        except Exception as e:
            self.logger.warning(f"测试压缩时出错 {image_path}: {str(e)}")
            # 如果测试失败，假设转换有效
            return original_size * 0.7, 30.0  # 估算70%大小，30%压缩率

    def convert_image(self, image_path: Path) -> bool:
        """转换单个图片到AVIF格式，保持原文件名"""
        try:
            # 获取原始文件信息
            original_size = image_path.stat().st_size

            # 在多线程环境中安全更新统计信息
            with self.stats_lock:
                self.stats['total_original_size'] += original_size

            if self.dry_run:
                # 在预览模式下，如果启用了压缩比检测，进行测试转换
                if self.check_compression:
                    test_result = self._test_compression(image_path, original_size)
                    if test_result == 'skip_larger':
                        self.logger.info(f"[预览] 跳过（体积会变大）: {image_path}")
                        return False
                    elif test_result == 'skip_minimal':
                        self.logger.info(f"[预览] 跳过（压缩效果不明显）: {image_path}")
                        return False
                    else:
                        predicted_size, compression_ratio = test_result
                        self.logger.info(
                            f"[预览] 将转换: {image_path} "
                            f"({self._format_size(original_size)} -> {self._format_size(predicted_size)}, "
                            f"预计压缩 {compression_ratio:.1f}%)"
                        )
                else:
                    self.logger.info(f"[预览] 将转换: {image_path}")
                return True

            # 实际转换模式
            # 如果启用压缩比检测，先进行测试
            if self.check_compression:
                test_result = self._test_compression(image_path, original_size)
                if test_result == 'skip_larger':
                    self.stats['skipped_larger'] += 1
                    self.logger.info(f"跳过（转换后体积更大）: {image_path.name}")
                    return False
                elif test_result == 'skip_minimal':
                    self.stats['skipped_minimal'] += 1
                    self.logger.info(f"跳过（压缩效果不明显）: {image_path.name}")
                    return False

            # 创建备份文件名
            backup_path = image_path.with_suffix(f'{image_path.suffix}.backup')

            # 读取并转换图片
            with Image.open(image_path) as img:
                # 处理透明度
                if img.mode in ('RGBA', 'LA'):
                    # 保持透明度
                    pass
                elif img.mode == 'P' and 'transparency' in img.info:
                    # 调色板模式带透明度，转换为RGBA
                    img = img.convert('RGBA')
                else:
                    # 转换为RGB模式
                    img = img.convert('RGB')

                # 备份原文件
                shutil.copy2(image_path, backup_path)
                self.logger.debug(f"创建备份: {backup_path}")

                # 保存为目标格式，但使用原文件名
                if self.format == 'avif':
                    img.save(
                        image_path,  # 使用原文件路径
                        'AVIF',
                        quality=self.quality,
                        optimize=True
                    )
                elif self.format == 'jxl':
                    img.save(
                        image_path,  # 使用原文件路径
                        'JXL',
                        quality=self.quality,
                        effort=self.effort,  # JXL特有参数
                        lossless=False  # 使用有损模式
                    )
                if self.format == 'webp':
                    img.save(
                        image_path,  # 使用原文件路径
                        'WEBP',
                        quality=self.quality,
                        optimize=True
                    )

            # 获取转换后文件大小
            converted_size = image_path.stat().st_size

            # 在多线程环境中安全更新统计信息
            with self.stats_lock:
                self.stats['total_converted_size'] += converted_size

            # 计算压缩比和节省空间
            saved_size = original_size - converted_size
            self.stats['total_saved_size'] += saved_size
            compression_ratio = (saved_size / original_size) * 100

            self.logger.info(
                f"转换成功: {image_path.name} "
                f"({self._format_size(original_size)} -> {self._format_size(converted_size)}, "
                f"压缩 {compression_ratio:.1f}%)"
            )

            # 如果需要，删除备份文件
            if self.delete_backup and backup_path.exists():
                backup_path.unlink()
                self.logger.debug(f"删除备份: {backup_path}")

            # 在多线程环境中安全更新统计信息
            with self.stats_lock:
                self.stats['converted'] += 1
            return True

        except Exception as e:
            error_msg = f"转换失败 {image_path}: {str(e)}"
            self.logger.error(error_msg)

            # 在多线程环境中安全更新统计信息
            with self.stats_lock:
                self.stats['errors'].append(error_msg)
                self.stats['failed'] += 1

            # 如果转换失败，恢复原文件
            backup_path = image_path.with_suffix(f'{image_path.suffix}.backup')
            if backup_path.exists():
                try:
                    shutil.copy2(backup_path, image_path)
                    backup_path.unlink()
                    self.logger.info(f"已恢复原文件: {image_path}")
                except Exception as restore_error:
                    self.logger.error(f"恢复原文件失败: {restore_error}")

            return False

    def _format_size(self, size_bytes: int) -> str:
        """格式化文件大小"""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size_bytes < 1024:
                return f"{size_bytes:.1f} {unit}"
            size_bytes /= 1024
        return f"{size_bytes:.1f} TB"

    def print_statistics(self):
        """打印统计信息"""
        if not self.show_report:
            return

        print("\n" + "=" * 70)
        print(f"图像转换报告 ({self.format.upper()}格式)")
        print("=" * 70)

        # 基本统计信息
        print(
            f"处理完成 │ 找到图片: {self.stats['found_images']} │ 成功转换: {self.stats['converted']} │ 失败: {self.stats['failed']}")

        # 显示跳过的文件统计
        if self.check_compression:
            total_skipped = self.stats['skipped_larger'] + self.stats['skipped_minimal']
            print(
                f"跳过文件 │ 总计: {total_skipped} │ 体积变大: {self.stats['skipped_larger']} │ 压缩效果不明显: {self.stats['skipped_minimal']}")

        # 空间节省统计
        if self.stats['total_original_size'] > 0:
            original_size_mb = self.stats['total_original_size'] / (1024 * 1024)

            if self.stats['converted'] > 0:
                converted_size_mb = self.stats['total_converted_size'] / (1024 * 1024)
                saved_mb = self.stats['total_saved_size'] / (1024 * 1024)
                saved_percent = (self.stats['total_saved_size'] / self.stats['total_original_size']) * 100

                print("\n" + "-" * 70)
                print("空间节省统计")
                print("-" * 70)
                print(f"原始总大小    : {original_size_mb:.2f} MB")
                print(f"转换后总大小  : {converted_size_mb:.2f} MB")
                print(f"节省空间      : {saved_mb:.2f} MB")
                print(f"总体压缩率    : {saved_percent:.2f}%")

                # 计算平均压缩效果
                if self.stats['converted'] > 0:
                    avg_compression = (self.stats['total_saved_size'] /
                                       (self.stats['total_original_size'] -
                                        (self.stats['total_original_size'] - self.stats['total_converted_size']))) * 100
                    print(f"平均压缩率    : {avg_compression:.2f}%")

                # 显示格式统计信息
                if self.stats['format_counts'] and len(self.stats['format_counts']) > 0:
                    print("\n" + "-" * 70)
                    print("原始图片格式统计")
                    print("-" * 70)
                    for fmt, count in sorted(self.stats['format_counts'].items(), key=lambda x: x[1], reverse=True):
                        percent = (count / self.stats['found_images']) * 100 if self.stats['found_images'] > 0 else 0
                        print(f"{fmt.upper():<10}: {count:>5} 个文件 ({percent:.1f}%)")

        # 显示压缩比检测信息
        if self.check_compression:
            print("\n" + "-" * 70)
            print("压缩检测设置")
            print("-" * 70)
            print(f"检测阈值      : {self.min_compression_ratio:.1%}")
            print(f"跳过体积变大  : {self.stats['skipped_larger']} 个文件")
            print(f"跳过效果不佳  : {self.stats['skipped_minimal']} 个文件")

        # 显示错误信息
        if self.stats['errors']:
            print("\n" + "-" * 70)
            print("错误列表")
            print("-" * 70)
            for error in self.stats['errors'][:5]:  # 只显示前5个错误
                print(f"  - {error}")
            if len(self.stats['errors']) > 5:
                print(f"  ... 还有 {len(self.stats['errors']) - 5} 个错误")

        # 总结报告
        if self.stats['total_original_size'] > 0 and self.stats['converted'] > 0:
            saved_mb = self.stats['total_saved_size'] / (1024 * 1024)
            saved_percent = (self.stats['total_saved_size'] / self.stats['total_original_size']) * 100

            print("\n" + "=" * 70)
            print(
                f"总结: 成功将 {self.stats['converted']} 个图片转换为 {self.format.upper()} 格式，节省了 {saved_mb:.2f} MB 空间 ({saved_percent:.2f}%)")
        else:
            print("\n" + "=" * 70)
            print(f"总结: 没有成功转换任何图片")

        print("=" * 70)

    def convert_all(self):
        """转换所有图片"""
        start_time = time.time()  # 记录开始时间
        images = self.find_images()

        if not images:
            print("没有找到需要转换的图片文件")
            return

        if self.dry_run:
            print(f"\n[预览模式] 将要转换 {len(images)} 个图片文件:")
            for img in images[:10]:  # 只显示前10个
                print(f"  - {img}")
            if len(images) > 10:
                print(f"  ... 还有 {len(images) - 10} 个文件")
            print("\n使用 --execute 参数执行实际转换")
            return

        print(f"\n开始转换 {len(images)} 个图片文件...")

        # 单线程处理
        if self.threads <= 1:
            for i, image_path in enumerate(images, 1):
                print(f"[{i}/{len(images)}] 处理: {image_path.name}")
                self.convert_image(image_path)
        # 多线程处理
        else:
            print(f"使用 {self.threads} 个线程并行处理图片...")

            # 使用tqdm创建进度条
            with tqdm(total=len(images), desc="图片转换进度", unit="个") as pbar:
                # 创建线程池
                with concurrent.futures.ThreadPoolExecutor(max_workers=self.threads) as executor:
                    # 保存所有任务的Future对象
                    future_to_path = {
                        executor.submit(self._convert_thread_worker, image_path): image_path
                        for image_path in images
                    }

                    # 当任务完成时更新进度条
                    for future in concurrent.futures.as_completed(future_to_path):
                        pbar.update(1)

    def _convert_thread_worker(self, image_path):
        """线程工作函数，负责转换单个图片"""
        try:
            # 获取图片名称，用于日志显示
            image_name = image_path.name

            # 转换图片
            success = self.convert_image(image_path)

            # 由于多线程环境，不在控制台打印信息，所有信息由日志和进度条处理
            return success
        except Exception as e:
            # 捕获线程中的所有异常
            with self.stats_lock:
                error_msg = f"线程处理错误 {image_path}: {str(e)}"
                self.logger.error(error_msg)
                self.stats['errors'].append(error_msg)
                self.stats['failed'] += 1
            return False

        # 记录总处理时间
        end_time = time.time()
        self.stats['conversion_time'] = end_time - start_time

        self.print_statistics()


def check_dependencies(format):
    """检查依赖包"""
    global MISSING_PACKAGES
    if format == 'avif' and not HAS_AVIF:
        print("错误：缺少AVIF支持所需的Python包。")
        print("请先安装以下包：")
        for package in MISSING_PACKAGES:
            print(f"  pip install {package}")
        print("\n或者使用：")
        print("  pip install Pillow pillow-avif")
        sys.exit(1)
    elif format == 'jxl' and not HAS_JXL:
        print("错误：缺少JXL支持所需的Python包。")
        print("请先安装以下包：")
        for package in MISSING_PACKAGES:
            print(f"  pip install {package}")
        print("\n或者使用：")
        print("  pip install Pillow pillow-jpegxl")
        sys.exit(1)


def main():
    """主函数"""
    parser = argparse.ArgumentParser(
        description='将图片转换为AVIF或JXL格式，保持原文件名不变',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用示例:
  %(prog)s /path/to/images                           # 转换目录下所有图片为AVIF（默认）
  %(prog)s /path/to/images --format jxl              # 转换为JXL格式
  %(prog)s /path/to/images --dry-run                 # 预览模式
  %(prog)s /path/to/images --quality 90              # 设置质量为90
  %(prog)s /path/to/images --threads 4               # 使用4个线程加速处理
  %(prog)s /path/to/images --no-recursive            # 不处理子目录
  %(prog)s /path/to/images --delete-backup           # 删除备份文件
  %(prog)s /path/to/images --no-compression-check    # 强制转换所有文件
  %(prog)s /path/to/images --min-compression 10      # 设置最小压缩比为10%
  %(prog)s /path/to/images --format jxl --effort 5   # JXL格式的编码速度/质量平衡
  %(prog)s /path/to/images --report                    # 显示详细的转换统计报告

注意：
- 转换后的图片仍保持原文件名，MD文件中的链接无需修改
- 默认启用压缩比检测，只转换能有效压缩的图片
- 如果转换后体积变大或压缩效果不明显，将自动跳过
- AVIF和JXL都是现代高效图像格式，支持更高的压缩率
        """
    )

    parser.add_argument(
        'directory',
        help='要处理的目录路径'
    )

    parser.add_argument(
        '--format',
        type=str,
        choices=['avif', 'jxl','webp'],
        default='avif',
        help='输出格式 (avif,webp 或 jxl, 默认: avif)'
    )

    parser.add_argument(
        '--quality',
        type=int,
        default=80,
        metavar='1-100',
        help='图像压缩质量 (1-100, 默认: 80)'
    )

    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='预览模式，只显示操作不执行'
    )

    parser.add_argument(
        '--no-recursive',
        action='store_true',
        help='不递归处理子目录'
    )

    parser.add_argument(
        '--delete-backup',
        action='store_true',
        help='转换后删除备份文件（谨慎使用）'
    )

    parser.add_argument(
        '--no-compression-check',
        action='store_true',
        help='禁用压缩比检测，强制转换所有文件'
    )

    parser.add_argument(
        '--min-compression',
        type=float,
        default=5.0,
        metavar='PERCENT',
        help='最小压缩比百分比，低于此值跳过转换（默认: 5.0%%）'
    )

    parser.add_argument(
        '--threads',
        type=int,
        default=1,
        metavar='NUM',
        help='使用的线程数（默认: 1）'
    )

    parser.add_argument(
        '--report',
        action='store_true',
        help='显示详细的转换统计报告'
    )

    parser.add_argument(
        '--effort',
        type=int,
        default=7,
        choices=range(1, 10),
        metavar='1-9',
        help='JXL格式的编码速度等级 (1-9, 1最快/质量最低, 9最慢/质量最高, 默认: 7)'
    )

    parser.add_argument(
        '--version',
        action='version',
        version='Image Converter (Keep Name) v1.3'
    )

    args = parser.parse_args()

    # 检查依赖
    check_dependencies(args.format)

    # 验证参数
    if not os.path.exists(args.directory):
        print(f"错误: 目录不存在: {args.directory}")
        sys.exit(1)

    if not os.path.isdir(args.directory):
        print(f"错误: 不是一个目录: {args.directory}")
        sys.exit(1)

    if not (1 <= args.quality <= 100):
        print("错误: 质量参数必须在1-100之间")
        sys.exit(1)

    if not (0 <= args.min_compression <= 100):
        print("错误: 最小压缩比必须在0-100之间")
        sys.exit(1)

    # 创建转换器实例
    converter = ImageConverter(
        directory=args.directory,
        format=args.format,
        quality=args.quality,
        dry_run=args.dry_run,
        recursive=not args.no_recursive,
        delete_backup=args.delete_backup,
        check_compression=not args.no_compression_check,
        min_compression_ratio=args.min_compression / 100.0,
        threads=args.threads,
        effort=args.effort,
        show_report=args.report
    )

    # 执行转换
    try:
        converter.convert_all()
    except KeyboardInterrupt:
        print("\n\n用户中断操作")
        sys.exit(1)
    except Exception as e:
        print(f"\n发生错误: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
