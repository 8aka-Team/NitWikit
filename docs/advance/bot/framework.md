---
title: 机器人框架
sidebar_position: 1
---

# 机器人框架

## QQ机器人

:::danger

请一定要使用小号来搭建 QQ 机器人，否则如果登录不成功或是成功后被检测，将有大概率导致封号。

使用如 go-cqhttp 的 [签名服务](https://mirai.mamoe.net/topic/2373/%E5%85%B3%E4%BA%8E%E7%AD%BE%E5%90%8D%E6%9C%8D%E5%8A%A1) 不稳定并且非常容易导致封号，推荐使用 LLOneBot 这类通过 hook 官方客户端而跳过使用签名服务登录的方案。

:::

控制 QQ 号的部分叫就是框架，可分为三种原理：

1. **接入 QQ 官方的机器人框架**，这需要每个使用这样框架的用户都必须在QQ官方申请机器人并进行审核，而且功能存在限制
2. **破解 QQ 客户端** 来实现操作 QQ 号，这种方式目前最为稳定，也是最推荐的，唯一的缺点就是占用的系统资源较多
3. 直接编写软件伪装成 QQ 客户端直接连接 QQ 官方服务器，又叫 **协议库**。这样的软件占用资源很低，但是目前由于被腾讯官方针对处理，导致非常不稳定。

### LiteLoaderQQNT + LLOneBot

|原理|破解 QQ 客户端|
|---|:---|

LiteLoaderQQNT 是 [利用 NTQQ 特性](https://github.com/Mrs4s/go-cqhttp/issues/2471) 实现的 QQ **插件加载器**。它本身并不具备QQ机器人功能，你需要**为其安装 LLOneBot 插件**才能开始使用 QQ 机器人功能。

:::warning

根据先前其他该领域开发者的经历，该软件开发者不建议任何人公开宣传此软件。如果你使用了 LLOneBot，请勿在任何群聊发送可以看出你使用了非官方 QQ 的截图。

:::

前往 [LiteLoaderQQNT官网](https://liteloaderqqnt.github.io/) ，根据其教程下载安装该框架。

安装完成后，根据 [LiteLoaderQQNT 文档安装插件方法](https://liteloaderqqnt.github.io/guide/plugins.html) 为框架安装插件：[LLOneBot](https://github.com/LLOneBot/LLOneBot/tree/main)。如果你已经在使用该框架并且已安装了 [插件列表查看](https://github.com/ltxhhz/LL-plugin-list-viewer/tree/main) 插件，也可以直接使用该插件进行安装。

安装完成后，进入 QQ 设置，在侧边栏中找到 LLOneBot 点击切换到其设置页，然后 **根据机器人给出的文档** 进行配置。

### Lagrange(拉格朗日)

|原理|协议库|
|---|:---|

[参见此处](https://docs.qq.com/doc/DQ2N2b0JqeUhmWUVa)

### [Gensokyo](https://github.com/Hoshinonyaruko/Gensokyo)

|原理|官方 API|
|---|:---|

此框架由于是接入 QQ 官方频道机器人 API，使用稳定且有腾讯官方的支持。

:::warning

由于官方限制，频道机器人无法主动发送消息，在被 **不是机器人的普通用户** @后可自由发送消息，持续 5 分钟。当超过 5 分钟时，机器人会提示"回复时间结束"。
<!--https://gitee.com/dlcn/dlscq/wikis/%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6/%E5%AE%98%E6%96%B9%E9%A2%91%E9%81%93%E6%9C%BA%E5%99%A8%E4%BA%BA-->
:::

### [OpenShamrock](https://github.com/whitechi73/OpenShamrock)

|原理|破解 QQ 客户端|
|---|:---|

OpenShamrock 是运行在安卓手机 QQ 上的 OneBot 框架，相当于安卓版的 LiteLoaderQQNT + LLOneBot。

也就是说，你必须已经拥有一台 **和服务器连接到同一局域网下** 的安卓手机。有两种方式来部署一台这样的安卓手机：
1. 使用闲置的旧手机
2. 服务器内存足够的情况下部署安卓模拟器

OpenShamrock的搭建教程待补充

### [Mirai](https://mirai.mamoe.net/)

|原理|协议库|
|---|:---|

<!--[Mirai 论坛](https://mirai.mamoe.net/)-->

:::danger

Mirai 原生由于本身为协议库原理，近期因不可抗力导致难以登录并且99%封号冻结。推荐配合下文的 Overflow 使用。

:::

如果发现 Mirai 的 **帐号登录** 对于你的服务器来说难以使用和维护，可以使用 [Overflow(OneBot)](https://github.com/MrXiaoM/Overflow) 将 Mirai 接入其他 OneBot 框架，而不是直接通过 Mirai 登录。

**[Overflow 使用方法](https://github.com/MrXiaoM/Overflow/blob/main/docs/UserManual.md)**

配置 Websocket 链接时，在正向 ws 和反向 ws 之间选择一种即可。

:::info

推荐使用 [官网一键打包整合包](https://mirai.mrxiaom.top/#get-started) + [LLOneBot](#liteloaderqqnt--llonebot) 的方式部署。

:::

<!--[Overflow 主页](https://github.com/MrXiaoM/Overflow)-->

<!--## Kook机器人-->

<!--## Telegram机器人-->
