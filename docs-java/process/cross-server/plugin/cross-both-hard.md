---
title: 安装在跨服端和子服
sidebar_position: 3
---

# 安装在跨服端和子服

此类插件必须同时在跨服端和子服安装才能发挥效果，或者是相对于只安装到一侧，两方都安装会有功能增强。

## SignedVelocity

:::info

`Hangar` https://hangar.papermc.io/4drian3d/SignedVelocity

`Modrinth` https://modrinth.com/plugin/signedvelocity

`GitHub` https://github.com/4drian3d/SignedVelocity

:::

<!--markdownlint-disable line-length-->

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

> 从 Minecraft 1.19.1 开始，Mojang 实现了一个[新的聊天系统](https://zh.minecraft.wiki/w/Java%E7%89%881.19.1#%E5%B8%B8%E8%A7%84)，该系统使用每个玩家拥有的签名密钥。Velocity 尚不完全支持取消或修改这种类型的消息和命令，因此你可以安装 SignedVelocity 插件， 这将允许将消息或命令传输到你的服务器，在服务器上收到消息或命令后， 将应用在 Velocity 中计算的结果。 —— Velocity 官方文档

此外由于其功能实现，它也能修复因缺少个人信钥而导致无法加入服务器等问题。

## PAPIProxyBridge

:::info

`Spigotmc` https://www.spigotmc.org/resources/papiproxybridge.108415/

`Modrinth` https://modrinth.com/plugin/papiproxybridge

`GitHub` https://github.com/WiIIiam278/PAPIProxyBridge

`文档` https://william278.net/project/papiproxybridge

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

PAPIProxyBridge 是安装在后端和代理服务器上的库桥插件，它允许代理端插件使用 PlaceholderAPI 占位符设置文本格式

在 Spigot (1.16.5+) 上安装最新版本的插件以及 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 插件，
或在 Fabric (1.19.3+) 服务器上安装 [PlaceholderAPI mod](https://placeholders.pb4.eu/)，然后在 BungeeCord 或 Velocity 代理服务器上安装该插件

请注意，此插件不能替代 PlaceholderAPI。你仍然需要在 Spigot/Fabric 服务器上安装 PlaceholderAPI
