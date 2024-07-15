---
title: 内网穿透
sidebar_position: 5
---

# 内网穿透

**适用于？**

没有公网的家里云

**来几个？**

内网穿透一抓一大把，比如[樱花内网穿透](https：//www.natfrp.com/)和[OpenFrp](https：//www.openfrp.net/)

~~因为rz用户比较多，你甚至能用某人用不用樱花来定性判断这人有没有技术~~

## 自建Frp

首先你得确保你有一台有公网IP的机器，最好是**Linux**的。

这里假定你有一台符合条件的Linux服务器，并且你已经可以连上你服务器的**SSH**。


1. 首先确保服务器所有软件包是最新的：

```bash
apt-get update && apt-get upgrade -y
```

2. 安装`screen`软件包：

```bash
apt-get install screen -y
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


## 可能的问题?

内网穿透后相当于玩家的连接传递到了你机器上的软件上，用这个软件访问本地的服务端（类似代理），服务端就会误认为是本地连接访问了服务器，就会出现以下问题：

### 登录插件

#### 玩家注册

支持 IP 限制注册账号的登录插件（如 Authme 、CMI ）会出问题

如果内网穿透的话，他们的 IP 地址都是回环地址，所以他们不能注册账号了

#### 自动登录

此功能依靠 IP 进行识别，如果内网穿透的话，普通玩家和 OP 玩家的 IP 都是回环地址

就出现了玩家登录 OP 账号等 “绕过登录漏洞”

### 显示玩家 IP 归属地

一些可以显示玩家 IP 归属地的插件会失效

因为他们的 IP 都是回环地址

### ban-ip ban掉所有人

因为你们的地址都是回环地址

所以你 ban-ip 会 ban 掉所有人，包括你自己......

### 反假人插件

这会导致反假人插件几乎不能使用，因为无论是封禁 IP 还是 IP 白名单都会因为所有玩家 IP 相同而失效。