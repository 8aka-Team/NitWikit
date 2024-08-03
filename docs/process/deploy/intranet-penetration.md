---
title: 内网穿透
sidebar_position: 5
---

# 内网穿透

**适用于？**

没有公网的家里云

**来几个？**

内网穿透一抓一大把，比如[樱花内网穿透](https://www.natfrp.com/)和[OpenFrp](https://www.openfrp.net/)

~~因为rz用户比较多，你甚至能用某人用不用樱花来定性判断这人有没有技术~~

Linux自建frp参见[此页面](/advance/Linux/frp)


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

### 解决以上无法显示IP地址的办法：proxy protocol

正是因为frp在转发玩家请求时重写了请求头部，导致了以上情况的发生。 frp 虽然不能不重写这个请求头部，但是他可以通过一种方式还原请求头部，让服务器正常显示出连接 IP 。Proxy Protocol 是由 HAProxy 开发者 Willy 提出的一种反向代理协议，可以参考 [HAProxy 文档](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt) 获取更多信息。frp 内置的 proxy protocol 要求被其穿透的服务器也支持 proxy protocol ，否则会造成对应的服务无法使用，所以并不是随便拿一个服务就能用 proxy protocol 。 frp 启用 proxy protocol 的方式参考 [Linux自建frp](/advance/Linux/frp)。

对于mc服务器来说，支持 proxy protocol 的软件有：
- bungeecord 系
- paper 分支（1.18.2）（仅支持v2）
- [Geyser](../../../Java/process/mobile-player/Geyser/introduction/FAQ#frp搭建内网穿透想显示真实ip怎么办)
- Spigot端插件 [HAProxyDetector](https://github.com/andylizi/haproxy-detector)

等。BDS 服务器目前不支持此协议。
