import os
import re
import argparse

IMPORT_STATEMENT = "import Image from '@theme/IdealImage';"


def needs_import(content):
    """检查是否需要添加import语句"""
    return IMPORT_STATEMENT not in content


def add_import_statement(content):
    """智能添加import语句"""
    front_matter_match = re.search(r'^---\n.*?\n---\n', content, flags=re.DOTALL)
    if front_matter_match:
        end_pos = front_matter_match.end()
        return content[:end_pos] + '\n' + IMPORT_STATEMENT + '\n' + content[end_pos:]
    else:
        return IMPORT_STATEMENT + '\n\n' + content


def is_local_image(path):
    """验证是否为合法本地图片路径"""
    return not re.match(r'^(https?://|data:image/)', path, flags=re.IGNORECASE)


def replace_image(match):
    """构建Image组件"""
    alt_text = match.group(1).strip()
    image_path = match.group(2).strip()
    title = match.group(3).strip() if match.group(3) else None

    # 标准化Windows路径
    image_path:str = image_path.replace('\\', '/')

    if not image_path.startswith('/') and not image_path.startswith('./'):
        image_path = './' + image_path

    img_tag = f'<Image img={{require(\'{image_path}\')}} alt="{alt_text}"'
    if title:
        img_tag += f' title="{title}"'
    img_tag += ' />'
    return img_tag


def process_markdown_files(root_dir):
    """处理Markdown文件"""
    # 增强版正则表达式：https://regex101.com/r/9VHfWs/1
    image_pattern = re.compile(
        r'!\[([^\]!]*)\]'  # 匹配alt文本
        r'\(\s*([^)\s]+?\.(?:png|jpe?g)(?:[?#][^)\s]*)?)\s*'  # 匹配图片路径
        r'(?:\s+"([^"]+)")?\)',  # 匹配标题
        flags=re.IGNORECASE
    )

    for root, _, files in os.walk(root_dir):
        for file in files:
            if not file.lower().endswith('.md'):
                continue

            file_path = os.path.join(root, file)

            with open(file_path, 'r+', encoding='utf-8') as f:
                content = f.read()
                original_content = content

                # 查找并替换图片
                new_content = image_pattern.sub(
                    lambda m: replace_image(m) if is_local_image(m.group(2)) else m.group(0),
                    content
                )
                # 仅当内容变化时写入
                if new_content != original_content:
                    # 添加import语句
                    if needs_import(new_content):
                        new_content = add_import_statement(new_content)
                    f.seek(0)
                    f.write(new_content)
                    f.truncate()
                    print(f'Processed: {file_path}')


if __name__ == '__main__':
    process_markdown_files('..')
