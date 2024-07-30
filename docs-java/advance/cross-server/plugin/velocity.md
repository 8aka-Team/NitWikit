---
title: Velocity 端
sidebar_position: 2
---

# Velocity 端

支持 _Velocity_ 的插件

# 只安装在跨服端

## VLobby

:::info

`PaperMC` https://hangar.papermc.io/4drian3d/VLobby

`GitHub` https://github.com/4drian3d/VLobby

:::

一个简单的 `/lobby` `/hub` 插件

## LimboAuth

:::info

见 [插件 | LimboAuth](/docs-java/process/plugin/other/Login/LimboAuth.md)

:::

一个不错的登录插件。

## AuthMeVelocity

:::info

`modrinth` https://modrinth.com/plugin/authmevelocity

`GitHub` https://github.com/4drian3d/AuthMeVelocity

:::

这是 Velocity 版本的 AuthMe 。如果你的登录服使用 AuthMe 登录，请务必在 Velocity 上安装此插件，以增加登录系统的安全性和完整性，这可以为你避免一些不必要的麻烦

如果你不安装此插件，在玩家登录时很可能乘此跳到其他子服务器来跳过登录，以此获取管理员账号来炸服

## HuskChat

:::info

`SpigotMC` https://www.spigotmc.org/resources/.94496

`modrinth` https://modrinth.com/plugin/huskchat

`GitHub` https://github.com/WiIIiam278/HuskChat

:::

很轻量、简单的跨服聊天插件

基本上该有的功能都有，但是无法做到与聊天信息互动等 Trchat 能够做到的功能。他只需要在 Velocity 端安装就能生效，适合追求精简清爽 ~~(其实就是懒)~~ 的服主使用

:::warning

**已知 Bug** :

[Issue 聊天消息无法被其他插件读取](https://github.com/WiIIiam278/HuskChat/issues/248)

如果你的服务器安装了 QuickShop 等需要输入聊天消息来录入参数的插件

那么你安装 HuskChat 会让这些插件失效，这是因为子服务器的聊天事件已经被取消了，这会导致这些插件无法获取玩家的聊天消息

可以根据作者的方案解决这个问题，介意的建议不要使用 HuskChat ，转而用 [TrChat](https://www.spigotmc.org/resources/.111858/)
:::

## Sonar

:::info

`SpigotMC` https://www.spigotmc.org/resources/.115239/

`GitHub` https://github.com/jonesdevelopment/sonar/

`modrinth` https://modrinth.com/plugin/sonar

:::

一款轻量级的反假人插件，能够有效的防止大部分假人进入你的服务器

它内置多种**反假人策略**和**验证方式**，可以任你选择

**特色反假人机制**:

CAPTCHA 在玩家进入服务器时，会进入 Sonar 创建的虚拟服务器中，玩家需要在聊天栏中输入随机生成的验证码才能进入服务器，这样可以防御 **100%** 的假人。非常的安全

非常推荐安装

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

## Tab

:::info

`SpigotMC` https://www.spigotmc.org/resources/.57806/

`GitHub` https://github.com/NEZNAMY/TAB

`modrinth` https://modrinth.com/plugin/tab-was-taken

:::

一款好用的 tab 栏插件，此外，还可以制作计分板，Bossbar

支持制作文字动画，支持 RGB 颜色

想让他显示 PlaceholderAPI 的变量?请在代理端和所有子服务器上安装 [Tab-Bridge](https://www.spigotmc.org/resources/.83966/)

此外，如果你使用了 Layout 功能，如果你不安装此插件，会导致一些显示 Bug

因此强烈建议将 Tab-Bridge 一起安装

_其实只安装在跨服端就行了，子服没必要装，你实在要装也没关系_

# 装在跨服端+子服端

这类插件必须要同时安装在跨服端和子服。

## PAPIProxyBridge

:::info

同 [BungeeCord 一侧的讲解](BC&WF.md#papiproxybridge)

:::

## SignedVelocity

:::info

`modrinth` https://modrinth.com/plugin/signedvelocity

:::

从 Minecraft 1.19.1 开始，Mojang 实现了一个[新的聊天系统](https://zh.minecraft.wiki/w/Java%E7%89%881.19.1#%E5%B8%B8%E8%A7%84)，该系统使用每个玩家拥有的签名密钥。Velocity 尚不完全支持取消或修改这种类型的消息和命令，因此您可以安装 SignedVelocity 插件， 这将允许将消息或命令传输到您的服务器，在服务器上收到消息或命令后， 将应用在 Velocity 中计算的结果。 —— Velocity 官方文档

_此外由于其功能实现，它也能修复因缺少个人信钥而导致无法加入服务器等问题_

