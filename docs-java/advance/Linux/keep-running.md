---
title: 如何保持服务器在 Linux 服务器中后台运行
sidebar_position: 3
---

# 如何保持服务器在 Linux 服务器中后台运行

由于Linux的会话机制，手动启动的服务端会在ssh断开连接之后停止运行，所以我们需要服务端保持后台运行。

## 方法一 screen(推荐)

使用screen创建一个虚拟的窗口运行服务端，首先安装screen，在终端输入：

```
sudo apt install screen -y
```

screen 的基础指令：

```
screen -ls            # 列出所有的 screen
screen -S xxx         # 创建一个名叫 xxx 的虚拟窗口（推荐以每个子服务器命名）
screen -r xxx         # 进入 xxx 虚拟窗口（只能进入已创建且无人使用的 screen）
screen -D xxx         # 踢出正在使用 xxx 窗口的用户
screen -S xxx -X quit # 删除 xxx 窗口（在 screen 中输入 exit 也可以删除）
```

在 screen 中启动服务端，在 screen 中时，按键盘上的 Ctrl + A + D 即可返回原窗口。

推荐原因：后台运行的同时还可以在服务端控制台中查看日志，打指令

## 方法二  面板(推荐)

例如mcsm，简单无脑可视化

## 方法三 Systemctl

使用vim 创建 mc.service

```
vim /etc/systemd/system/mc.service
```

vim中的内容按以下配置

```
[Unit]
Description=Minecraft Server
After=network.target

[Service]
User=root
Nice=5
KillMode=none
SuccessExitStatus=0 1
ProtectHome=true
ProtectSystem=full
PrivateDevices=true
NoNewPrivileges=true
WorkingDirectory=这里填工作目录路径
ExecStart=这里填启动命令
ExecStop=/bin/kill -SIGINT $MAINPID
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

配置完成后输入以重新加载：

```
systemctl daemon-reload
```

然后启动服务器并设置开机启动，先后输入:

```
systemctl start mc.service
systemctl enable mc.service
```

[详细设置说明](https://blog.csdn.net/WHQ78164/article/details/132956725)

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
