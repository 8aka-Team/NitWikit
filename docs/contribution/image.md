---
title: 图片处理
sidebar_position: 3
---

# 图片处理

提交前你需要对图片进行一些处理,当然,你只需要运行几行命令即可

安装依赖库:

```bash
pip install pillow pillow-avif-plugin tqdm pillow-jxl-plugin
```

处理图片格式(在项目根目录执行):

```bash
python convert.py . --threads 10 --delete-backup --format avif
```

你不需要更改 markdown 文件，直接运行即可