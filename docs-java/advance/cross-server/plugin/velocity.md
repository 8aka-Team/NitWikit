---
title: Velocity 端
sidebar_position: 2
---

# Velocity 端

支持 _Velocity_ 的插件

# 只安装在跨服端

## VLobby

:::info

`PaperMC` :https://hangar.papermc.io/4drian3d/VLobby

`GitHub` :https://github.com/4drian3d/VLobby

:::

一个简单的 `/lobby` `/hub` 插件

## LimboAuth

:::info

见 [插件 | LimboAuth](/docs-java/process/plugin/other/Login/LimboAuth.md)

:::

一个不错的登录插件。

# 可安装在跨服端或子服

## MiniMOTD

同 [BungeeCord 一侧的讲解](BC&WF.md#minimotd)

## ViaVersion

同 [BungeeCord 一侧的讲解](BC&WF.md#viaversion)

## SkinsRestorer

同 [BungeeCord 一侧的讲解](BC&WF.md#skinsrestorer)

## Geyser

同 [BungeeCord 一侧的讲解](BC&WF.md#geyser)

# 装在跨服端或+子服端

这类插件可以只装在跨服端，但同时在子服安装可以有更多的功能。

## ServerUtils

:::info

见 [插件 | ServerUtils](/docs-java/process/plugin/ManageTool/PluginManagement/ServerUtils.md)

:::

## PlayerBalancer

:::info

同 [BungeeCord 一侧的讲解](BC&WF.md#playerbalancer)

:::

# 装在跨服端+子服端

这类插件必须要同时安装在跨服端和子服。

## PAPIProxyBridge

:::info

同 [BungeeCord 一侧的讲解](BC&WF.md#papiproxybridge)

:::

## SignedVelocity

:::info

`modrinth`: https://modrinth.com/plugin/signedvelocity

:::

从 Minecraft 1.19.1 开始，Mojang 实现了一个[新的聊天系统](https://zh.minecraft.wiki/w/Java%E7%89%881.19.1#%E5%B8%B8%E8%A7%84)，该系统使用每个玩家拥有的签名密钥。Velocity 尚不完全支持取消或修改这种类型的消息和命令，因此您可以安装 SignedVelocity 插件， 这将允许将消息或命令传输到您的服务器，在服务器上收到消息或命令后， 将应用在 Velocity 中计算的结果。 —— Velocity 官方文档

_此外由于其功能实现，它也能修复因缺少个人信钥而导致无法加入服务器等问题_
