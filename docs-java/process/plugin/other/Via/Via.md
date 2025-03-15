---
title: 跨版本
sidebar_position: 4
---

# 什么是跨版本

跨版本就是可以让不同于服务器版本的客户端版本进入服务器，比如服务器版本为 1.20.1，安装跨版本之后可以让 1.19.4 的客户端进入服务器

:::danger

跨版本不适合模组服，代理端，Leaves！会出很多问题！

:::

:::danger

跨版本不宜太大，除非你有能力使低版本玩家获得更好的游戏体验

最简单的例子：

1.17 以下的玩家一进入 1.17+服务器的 y 小于 0，就会疯狂回弹，严重影响游戏体验

:::

## 支持的范围

插件版本的 via 支持以下版本进入服务器

![](_images/版本兼容图.png)

- ViaVersion - 向上兼容

如图中服务器版本为 1.9.x 时，允许使用 1.9.x - 1.21.x 的客户端进服

- ViaBackwards - 向下兼容

如图中服务器版本为 1.21.x 时，允许 1.9.x -1.20.x 的客户端进服

- ViaRewind - 向下兼容更老版本

让你的服务器支持 1.7.x 以及 1.8.x 客户端进服

## 支持的服务器

### 插件版

ViaVersion + ViaBackwards + ViaRewind

这 3 个插件支持的服务端版本为 1.7 ~ 1.21

:::tip

Via* 插件剔除了 Java8 支持，这导致你不能在更低的服务端版本使用他

如果你想要支持服务端版本 1.8～1.21 的插件

在 [这里](https://ci.viaversion.com/job/ViaVersion-Java8) 获取 Java8 版本

:::

## 独立版(ViaProxy)

- Release (所有版本)
- Beta (b1.0 - b1.8.1)
- Alpha (a1.0.15 - a1.2.6)
- Classic (c0.0.15 - c0.30 包含 [CPE](https://wiki.vg/Classic_Protocol_Extension))
- 愚人节快照 (3D Shareware， 20w14infinite)
- 战斗测试快照 (Combat Test 8c)
- 基岩版服务器 1.20.70 ([某些功能缺失](https://github.com/RaphiMC/ViaBedrock#features))

### 支持的客户端

- Release (1.7.2 - 1.21)
- Beta 1.7.3 (需要 [ViaProxyBeta2Release](https://github.com/ViaVersionAddons/ViaProxyBeta2Release))
- 基岩版 (需要 [Geyser](/docs-java/process/mobile-player/Geyser/geyser.md) 插件)

你没看错，ViaProxy 可以让 1.20.4 客户端进入 Classic 版本的服务器(后者大概发布于十年前)

也可以让一个 JAVA 版玩家进入基岩版服务器，或者基岩版玩家进入 JAVA 版服务器！

### 下载

官方发布页面:[GitHub Release](https://github.com/ViaVersion/ViaProxy/releases)

你也可以在[Jenkins](https://build.lenni0451.net/job/ViaProxy/) 下载最新版本

## 笨蛋脚本

[下载](https://script.8aka.org/via-setup)，为你自动配置 Via

## FAQ

### 如何选择 Via 套件

[Via 套件选择](https://jo0001.github.io/ViaSetup/?lang=en)

### 用高版本进入低版本服务器，可用高版本的物品吗？

会用材质差不多的低版本物品替换显示，但享受不到大部分高版本物品功能

### 低版本显示不了高版本的材质怎么办？

原版插件不支持，但是可以通过手段绕过后面会讲(仅支持 1.16+)

### 如果我拥有代理端，我应该将 Via 安装到哪里？

Bungeecord、Velocity 和各种 Minecraft 服务端均可以安装 Via。但如果你有反作弊、反假人等，

对数据包进行大量操作的插件，后端服务器获取的玩家版本为代理端的版本，并非玩家客户端版本，

容易引起兼容性问题，请谨慎将 Via 套件安装在代理端。

### Via 的版本选择

如果选择同时安装 ViaVersion 和 ViaBackward ，他们的版本尽量选择相同的。

### 为什么我在服务器安装 Via 后，仍然显示版本不支持？

下载更新版本的代理端后，需要更新 Via 套件到最新版。

即使不使用代理端，我们仍然建议你至少每个月更新一次 Via

### 我无法使用新版本的方块、功能

Via 的目的是允许兼容，但不打算添加新的项目、方块和功能。

### 我的玩家因为发送太多数据包而被踢？

如果你没有使用 paper fork 可以在配置中增加 max-pps，如果使用paper fork，

如果使用 paper fork，请直接将其调整为 -1，并调整 paper 的 pps 限制。

(尝试增加到玩家没有问题，不要全部禁用，这会导致服务器被玩家恶意使用数据包卡顿)
