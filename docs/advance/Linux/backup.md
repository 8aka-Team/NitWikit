---
title: 自动备份存档
sidebar_position: 8
---

# 编写备份脚本

在你的服务器上创建一个备份脚本：

```bash
sudo vim /root/backup.sh
```

然后将以下内容粘贴到文件中，按实际情况与需要修改(如果你是Linux新手请不要修改)：

```bash
#!/bin/bash

usage() {
    echo "用法: $0 --server-dir <存档路径> --backup-dir <备份文件保存目录> [--max-backups <最大备份文件数>]"
    echo "参数:"
    echo "  --server-dir, -s:  服务器目录(绝对路径)"
    echo "  --backup-dir, -b:  备份文件保存目录(绝对路径)"
    echo "  --max-backups, -m:  最大备份文件数,选填(默认: 5)"
    exit 1
}

PARSED_ARGUMENTS=$(getopt -n "$0" -o s:b:m: --long server-dir:,backup-dir:,max-backups: -- "$@")
if [ $? -ne 0 ]; then
    usage
fi

eval set -- "$PARSED_ARGUMENTS"

while true; do
    case "$1" in
        -s|--server-dir)
            SERVER_DIR=$2
            shift 2
            ;;
        -b|--backup-dir)
            BACKUP_DIR=$2
            shift 2
            ;;
        -m|--max-backups)
            MAX_BACKUPS=$2
            shift 2
            ;;
        --)
            shift
            break
            ;;
        *)
            usage
            ;;
    esac
done

# 检查必需的参数是否已提供
if [ -z "$SERVER_DIR" ] || [ -z "$BACKUP_DIR" ]; then
    usage
fi

# 检查存档路径 SERVER_DIR/server.properties 是否存在
if [ ! -f "$SERVER_DIR/server.properties" ]; then
    echo "存档路径 $SERVER_DIR/server.properties 不存在"
    exit 1
fi

# 检查备份文件保存目录是否存在
if [ ! -d "$BACKUP_DIR" ]; then
    echo "备份文件保存目录 $BACKUP_DIR 不存在,自动创建"
    mkdir -p $BACKUP_DIR || exit 1
fi

# 检查最大备份文件数是否为正整数
if [ -z "$MAX_BACKUPS" ]; then
    MAX_BACKUPS=5
elif ! [[ "$MAX_BACKUPS" =~ ^[1-9][0-9]*$ ]]; then
    echo "最大备份文件数必须为正整数"
    exit 1
fi

# 备份存档
SERVER_PARENT_DIR=$(dirname $SERVER_DIR)
SERVER_NAME=$(basename $SERVER_DIR)
cd $SERVER_PARENT_DIR || exit
time=$(date "+%Y%m%d-%H%M%S")
tar -czvf "${time}.tar.gz" $SERVER_NAME
mv "${time}.tar.gz" $BACKUP_DIR

# 删除多余的备份文件
cd $BACKUP_DIR || exit
tar_gz_files=($(ls -t *.tar.gz))
if [ ${#tar_gz_files[@]} -gt $MAX_BACKUPS ]; then
    rm "${tar_gz_files[${#tar_gz_files[@]}-1]}"
fi
```

按 `Esc` 键,切换到英文输入法输入 `:wq` 保存并退出。

# 将备份脚本添加到定时任务

编辑定时任务：

```bash
crontab -e
```

在文件末尾添加以下内容：

```bash
0 3 * * * /bin/bash /root/backup.sh -s /path/to/server -b /path/to/backup -m 5
# 如果你有多台服务器，可以添加多个备份任务
# 0 3 * * * /bin/bash /root/backup.sh -s /path/to/server2 -b /path/to/backup2 -m 5
# 0 3 * * * /bin/bash /root/backup.sh -s /path/to/server3 -b /path/to/backup3 -m 5
# 以此类推...
```

其中：

- `/path/to/server`： 替换为你的服务器目录的绝对路径；
- `/path/to/backup`： 替换为你的备份文件保存目录的绝对路径；
- `5`： 是最大备份文件数；

> 如何获得服务器目录的绝对路径？对应目录下执行 `pwd` 命令即可获得当前目录的绝对路径。

上面这个例子表示每天凌晨 3 点执行备份脚本，这里的 `0 3 * * *` 是 cron 表达式。有关 cron 表达式的更多信息，请参阅 [Linux crontab 命令](https://www.runoob.com/linux/linux-comm-crontab.html)。

我在这里提供几个常用的 cron 表达式：

- `0 3 * * *`：每天凌晨 3 点
- `0 3 * * 0`：每周日凌晨 3 点
- `0 3 1 * *`：每月 1 号凌晨 3 点
- `0 3 * * 1`：每周一凌晨 3 点
- `0 3 * * 1,3,5`：每周一、三、五凌晨 3 点
- `0 3 * * 1-5`：每周一至周五凌晨 3 点
- `0 3 * * 1-5`：每周一至周五凌晨 3 点

## 备份文件恢复

1. 首先确定要恢复的备份文件；
2. 将备份文件解压：`tar -zxvf 备份文件名.tar.gz`；
3. 将解压后的文件覆盖到服务器目录：`cp -r 解压后的文件路径/* 服务器目录`。

<!--markdownlint-disable line-length-->

> 如果你恢复存档后启动服务器报错：
> `[main/FATAL]: Failed to start the minecraft server net.minecraft.util.SessionLock$ExceptionWorldConfict: /home/minecraft/lobby/./world/session.lock: already locked (possibly by other Minecraft instance?)`
> 请检查 `world` 存档下是否存在 `session.lock` 文件,如果存在请删除,然后重启服务器。

<!--markdownlint-enable line-length-->