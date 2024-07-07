---
title: 搭建内网穿透（Frp）
sidebar_position: 7
---

# 搭建内网穿透（Frp）

## 使用现成的内网穿透提供商

[Sakura Frp](https://www.natfrp.com/?page=panel&module=download) - 注册登录后前往 [下载页面](https://www.natfrp.com/tunnel/download) 下载 Frp 启动器。安装过程参考官方 [安装教程](https://doc.natfrp.com/launcher/usage.html) 即可。

## 搭建 Frp

## 自建Frp

首先你得确保你有一台有公网IP的机器，最好是**Linux**的。

这里假定你有一台符合条件的Linux服务器，并且你已经可以连上你服务器的**SSH**。


1. 首先确保服务器所有软件包是最新的：

```bash
# 不同的linux发行版更新方法大同小异
apt-get update && apt-get upgrade -y # Debian/Ubuntu
yum -y update # RedHat/CentOS

```

2. 安装`screen`软件包：

:::info

这里使用`screen`而非`systemd`来保持`frp`在后台运行，因为`screen`方便轻量对小白较友好，如果需要使用`systemd`可以参考[这篇教程](https://wiki.archlinuxcn.org/wiki/Systemd#编写单元文件)

:::

```bash
apt-get install screen -y # Debian/Ubuntu
yum install screen # RedHat/CentOS
```

3. 下载`frp.go`软件：

```bash
cd ~
wget https：//github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz
```

4. 解压

```bash
tar -xzvf frp_0.58.1_linux_amd64.tar.gz
```

### 配置服务端

1. 编写配置文件：
```bash
vim ~/frp_0.58.1_linux_amd64/frps.toml
```
写入如下内容：
```toml
bindPort = 7000 # frps监听的端口

log.to = "/var/log/frps.log" # 日志存放路径，一般不用改
log.level = "info" # 日志等级，不用改
log.maxDays = 3

auth.token = "example" # 身份验证令牌，frpc要与frps一致
```

2. 开启frps服务端：

```bash
cd ~/frp_0.58.1_linux_amd64
screen -dR frps ./frps
# 键盘上按Ctrl+A+D退出
```

### 配置客户端：

1. 编辑配置文件
```bash
vim ~/frp_0.58.1_linux_amd64/frpc.toml
```
输入以下内容：
```toml
serverAddr = "x.x.x.x" # 你frps服务器的ip地址
serverPort = 7000 # 你frps服务开在的端口

log.to = "/var/log/frps.log" # 日志存放路径，一般不用改
log.level = "info" # 日志等级，不用改
log.maxDays = 3

auth.token = "example" # 令牌，与公网服务端保持一致

[[proxies]]
name = "mc je"
type = "tcp" # java版使用tcp协议通信，不可更改
localIP = "127.0.0.1" # 默认不用改
localPort = 25565 # mc服务端开在哪个端口？
remotePort = 25565 # 暴露服务的公网入口

# 如果你开了互通，要基岩支持
[[proxies]]
name = "mc be"
type = "udp" # 基岩版使用udp协议通信，不可更改
localIP = "127.0.0.1"
localPort = 19132
remotePort = 19132
```

2. 开启frps服务端：

```bash
cd ~/frp_0.58.1_linux_amd64
screen -dR frpc ./frpc
# 键盘上按Ctrl+A+D退出
```

:::warn

不推荐直接将二进制文件和配置复制到`/usr/bin/`等地，这里面的程序文件如果脱离了包管理器的管理会很麻烦。

:::


:::info

如果你使用Arch Linux那么不需要手动下载frp，可以直接从AUR安装，其配置文件默认放在`/etc/frp/`。

:::