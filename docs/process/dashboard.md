---
title: 搭建面板
sidebar_position: 2
---

# 搭建面板

:::warning

本篇不是让你去购买面板服，而是在已有服务器上搭建！

:::

一个好的面板可以让我们管理服务器更加轻松，快捷，还可以让小白更快上手

# MCSManager

MCSManager是一款免费，易用，现代化的游戏服务器管理面板，非常适合小白

## 下载与安装

### Windows

首先，点击[此链接](https://mcsmanager.oss-cn-guangzhou.aliyuncs.com/mcsmanager_windows_release.zip) 一键下载到本地后解压

解压之后，你就可以看到`start.bat`，打开就可以启动(就是这么简单)

关闭面板

只需分别进入两个终端执行 `Ctrl+C` 即可。

### Linux

在控制台输入

```shell
sudo su -c "wget -qO- https://script.mcsmanager.com/setup_cn.sh | bash"
```

然后?就完成~\(≧▽≦)/~啦

启动方式:

```shell
# 先启动面板守护进程。
# 这是用于进程控制，终端管理的服务进程。
systemctl start mcsm-daemon.service
# 再启动面板 Web 服务。
# 这是用来实现支持网页访问和用户管理的服务。
systemctl start mcsm-web.service

# 重启面板命令
systemctl restart mcsm-daemon.service
systemctl restart mcsm-web.service

# 停止面板命令
systemctl stop mcsm-web.service
systemctl stop mcsm-daemon.service
```

:::tip

如果 `systemctl` 命令无法启动面板，或无法获得sudo权限，可以参考下文的 `手动安装` 中的 `启动方式` 来启动 MCSManager。
但这需要你用其他后台运行程序(比如screen)来接管它，否则当你的 `SSH` 终端断开之时，手动启动的 MCSManager 面板也会随之被系统强制结束。

面板 Web 服务是提供用户管理与网页访问功能的服务，守护进程是提供进程管理和容器管理的服务，两者缺一不可。如果某个功能不正常，可以只重启这一部分的服务来热修复问题。

:::

#### 手动安装

```shell
# 切换到安装目录，你也可以换成其他的目录。
cd /opt/

# 下载 NodeJS 运行时环境，如果你已经安装了 NodeJS，请忽略此步骤。
wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz
tar -xvf node-v20.11.0-linux-x64.tar.xz

# 添加 NodeJS 到系统环境变量
ln -s /opt/node-v20.11.0-linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v20.11.0-linux-x64/bin/npm /usr/bin/npm

# 进入你的安装目录
mkdir /opt/mcsmanager/
cd /opt/mcsmanager/

# 下载 MCSManager(如果无法下载可以先科学上网下载再上传到服务器)
wget https://github.com/MCSManager/MCSManager/releases/latest/download/mcsmanager_linux_release.tar.gz

# 解压到安装目录
tar -zxf mcsmanager_linux_release.tar.gz
```

启动方式

:::tip Screen

关于 Screen 的教程，你可以看[这个](https://blog.csdn.net/u012964600/article/details/136968398)

:::

```shell
# 安装依赖库
./install.sh

# 请使用 Screen 程序打开两个终端窗口(或者其他接管程序)

# 先启动节点程序
./start-daemon.sh

# 在第二个终端启动 Web 面板服务
./start-web.sh

# 为网络界面访问 http://localhost:23333/
# 一般来说，网络应用会自动扫描并连接到本地守护进程。
# 默认需要开放的端口：23333 和 24444
```

## 搭建

看[笨蛋文档](https://yizhan.wiki/NitWikit)

[MCSManager文档](https://docs.mcsmanager.com/zh_cn/)

# 翼龙面板

翼龙面板的部署相对较为复杂，对新手不太友好

[这篇](https://www.alongw.cn/archives/837) 是个较为简单的教程
