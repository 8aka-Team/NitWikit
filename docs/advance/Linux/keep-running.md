---
title: 如何保持服务器在 Linux 服务器中后台运行
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 如何保持服务器在 Linux 服务器中后台运行

由于Linux的会话机制，在ssh断开连接之后手动启动的服务端会停止运行，而我们需要服务端保持后台运行。

## 方法一 screen(推荐)

使用screen创建一个虚拟的窗口运行服务端，首先安装screen，在终端输入：

确保你的系统上有`screen`包，没有的话安装它们：

<Tabs>
    <TabItem value="debian" label="Debian/Ubuntu Linux" default>
        ```bash
        apt-get install screen
        ```
    </TabItem>
    <TabItem value="redhat" label="CentOS/Redhat Linux">
        ```bash
        yum install screen
        ```
    </TabItem>
    <TabItem value="arch" label="Arch Linux">
        ```bash
         pacman -Sy screen
        ```
    </TabItem>
</Tabs>

screen 的基础指令：

```
screen -ls            # 列出所有的 screen
screen -S xxx         # 创建一个名叫 xxx 的虚拟窗口（推荐以每个子服务器命名）
screen -r xxx         # 进入 xxx 虚拟窗口（只能进入已创建且无人使用的 screen）
screen -D xxx         # 踢出正在使用 xxx 窗口的用户
screen -S xxx -X quit # 删除 xxx 窗口（在 screen 中输入 exit 也可以删除）
```

:::info
重新连接到screen时可以使用 `screen -Dr xxx`指令，意为踢出正在使用 xxx 窗口的用户并回到 xxx 窗口
:::

在 screen 中启动服务端，在 screen 中时，按快捷键 `Ctrl + A + D` 即可返回原窗口。

推荐原因：后台运行的同时还可以在服务端控制台中查看日志，打指令

## 方法二  面板(推荐)

例如 mcsm，简单无脑可视化

## 方法三 Systemd

使用 vim 命令创建 mc.service 单元文件

```bash
vim ~/.config/systemd/user/mc.service
```

文件中的内容按以下配置

```
[Unit]
Description=Minecraft Server
After=network.target

[Service]
WorkingDirectory=这里填工作目录路径
ExecStart=这里填启动命令
ExecStop=/bin/kill -SIGINT $MAINPID
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

配置完成后输入以重新加载：

```bash
systemctl daemon-reload
```

然后启动服务器并设置开机启动，先后输入:

```bash
systemctl --user start mc.service
systemctl --user enable mc.service
```

_可以通过`systemctl --user status mc.service`查看服务运行状态。_

[详细设置说明](https://blog.csdn.net/WHQ78164/article/details/132956725)

[Arch wiki 上的教程](https://wiki.archlinuxcn.org/wiki/Systemd#%E7%BC%96%E5%86%99%E5%8D%95%E5%85%83%E6%96%87%E4%BB%B6)

优点：可以实现自动重启，开机自启等操作

缺点：无法进入控制台打指令

## 方法四 nohup和&

&：在启动时后面加一个&

例如：./start.sh &

nohup：在启动时前面加上这个

例如：nohup ./start.sh > run.log 2>&1 &

详细参数：

:::tip

Start.sh: 你需要后台运行的程序

>: 日志文件追加到文件中

run.log: 运行的日志，或你的文件的输出内容

& 是一个描述符，如果1或2前不加&，会被当成一个普通文件。

1>&2 意思是把标准输出重定向到标准错误.

2>&1 意思是把标准错误输出重定向到标准输出。

&>filename 意思是把标准输出和标准错误输出都重定向到文件filename中

:::
