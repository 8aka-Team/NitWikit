---
title: Velocity 端
sidebar_position: 2
---

# Velocity 端

支持 _Velocity_ 的插件

## 只安装在跨服端

### VLobby

:::info

`PaperMC` https://hangar.papermc.io/4drian3d/VLobby

`GitHub` https://github.com/4drian3d/VLobby

:::

一个简单的 `/lobby` `/hub` 插件

### LimboAuth

:::info

见 [插件 | LimboAuth](/docs-java/process/plugin/other/Login/LimboAuth.md)

:::

一个不错的登录插件。

### AuthMeVelocity

:::info

`modrinth` https://modrinth.com/plugin/authmevelocity

`GitHub` https://github.com/4drian3d/AuthMeVelocity

:::

这是 Velocity 版本的 AuthMe 。如果你的登录服使用 AuthMe 登录，请务必在 Velocity 上安装此插件，以增加登录系统的安全性和完整性，这可以为你避免一些不必要的麻烦

如果你不安装此插件，在玩家登录时很可能乘此跳到其他子服务器来跳过登录，以此获取管理员账号来炸服。

**注意事项：**

 - 自 4.0.0 版本开始，AuthMeVelocity 需要在 Velocity 和服务端分别部署两个不同的文件，而不是像旧版本那样在 Velocity 和服务端部署相同的文件。
在 Modrinth 下载这些文件时，最好点击页面右上角的 Download （下载），或前往插件的 [Versions](https://modrinth.com/plugin/authmevelocity/versions) 页面，
分别下载适用于 Velocity 和 Folia/Paper/Purpur 的文件。
 - 下载适用于 Folia/Paper/Purpur 的文件时，需注意自 4.1.2 版本开始不再支持 1.19.x 及以下版本
 - 在 Velocity 端安装好 AuthMeVelocity 后，需编辑 `plugins\authmevelocity` 中的config.conf文件，将其中的 `auth-servers` 配置项修改为登录服的服务器
```conf
# 比如你的登录服在velocity中配置的名称是login
auth-servers=[
    login
]
```
至于 Folia/Paper/Purpur 端则不需要修改任何配置，保证插件正常工作即可。

:::info
推荐使用来自 HaHaWTH 佬的 [AuthMeReReloaded](https://github.com/HaHaWTH/AuthMeReReloaded) 分支作为上文提到的 AuthMe 插件的平替，在完全兼容上游的同时引入了完整的 Velocity 支持。

如果你已经使用了这个分支的插件，只需要在配置文件中找到并开启（请根据实际情况选择开启 Bungeecord 或 Velocity 配置项）：
```yaml
Hooks:
    # Do we need to hook with BungeeCord?
    bungeecord: true
    # Do we need to hook with Velocity?
    velocity: true
```
即可。
:::

如果未修改 AuthMeVelocity 的配置，可能导致所有玩家无法进入服务器，提示连接超时
 - **不要移除 Folia/Paper/Purpur 端的 AuthMe 插件**，保证其和 AuthMeVelocity 插件都被加载，因为 AuthMeVelocity 需要和 AuthMe 配合工作。
若 AuthMe 未被加载则会导致 AuthMeVelocity 要求玩家登录但玩家却无法登录，导致所有人无法正常在服务器中游玩。
 - 如果在 AuthMeVelocity 被加载时出现形如以下报错：
```shell
java.lang.RuntimeException: Failed to download library
```
是由于 AuthMeVelocity 在下载资源时网络不稳定导致的，一般重启几次服务器即可解决

### HuskChat

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

### Sonar

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

## 可安装在跨服端或子服

### MiniMOTD

同 [BungeeCord 一侧的讲解](BC&WF.md#minimotd)

### ViaVersion

同 [BungeeCord 一侧的讲解](BC&WF.md#viaversion)

### SkinsRestorer

同 [BungeeCord 一侧的讲解](BC&WF.md#skinsrestorer)

### Geyser

同 [BungeeCord 一侧的讲解](BC&WF.md#geyser)

## 装在跨服端或+子服端

这类插件可以只装在跨服端，但同时在子服安装可以有更多的功能。

### ServerUtils

:::info

见 [插件 | ServerUtils](/docs-java/process/plugin/ManageTool/PluginManagement/ServerUtils.md)

:::

### PlayerBalancer

:::info

同 [BungeeCord 一侧的讲解](BC&WF.md#playerbalancer)

:::

### TAB

:::info

`SpigotMC` https://www.spigotmc.org/resources/.57806/

`GitHub` https://github.com/NEZNAMY/TAB

`modrinth` https://modrinth.com/plugin/tab-was-taken

:::

一款好用的 tab 栏插件，此外，还可以制作计分板，Bossbar

支持制作文字动画，支持 RGB 颜色

想让他显示 PlaceholderAPI 的变量?请在所有子服务器上安装 [Tab-Bridge](https://www.spigotmc.org/resources/.83966/)

此外，如果你使用了 Layout 功能，如果你不安装此插件，会导致一些显示 Bug

因此强烈建议将 Tab-Bridge 一起安装

_插件需要安装在代理端上，如果你在子服安装了TAB，可能会导致在高版本上出现“网络协议错误”等位置问题。_

## 装在跨服端+子服端

这类插件必须要同时安装在跨服端和子服。

### PAPIProxyBridge

:::info

同 [BungeeCord 一侧的讲解](BC&WF.md#papiproxybridge)

:::

### SignedVelocity

:::info

`modrinth` https://modrinth.com/plugin/signedvelocity

:::

<!--markdownlint-disable line-length-->

> 从 Minecraft 1.19.1 开始，Mojang 实现了一个[新的聊天系统](https://zh.minecraft.wiki/w/Java%E7%89%881.19.1#%E5%B8%B8%E8%A7%84)，该系统使用每个玩家拥有的签名密钥。Velocity 尚不完全支持取消或修改这种类型的消息和命令，因此你可以安装 SignedVelocity 插件， 这将允许将消息或命令传输到你的服务器，在服务器上收到消息或命令后， 将应用在 Velocity 中计算的结果。 —— Velocity 官方文档

<!--markdownlint-enable line-length-->

此外由于其功能实现，它也能修复因缺少个人信钥而导致无法加入服务器等问题。
