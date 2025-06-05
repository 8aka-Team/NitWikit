---
title: 只安装在跨服端
sidebar_position: 1
---

# 只安装在跨服端

此类插件仅需要安装在跨服端即可使用。

## Sonar

:::info

`SpigotMC` https://www.spigotmc.org/resources/.115239

`Modrinth` https://modrinth.com/plugin/sonar

`MineBBS` https://www.minebbs.com/resources/.8533

`GitHub` https://github.com/jonesdevelopment/sonar

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

一款轻量级的反假人插件，能够有效的防止大部分假人进入你的服务器。

由于 Sonar 的程序设计，玩家通常不需要进行额外操作即可实现流量清洗，相对来讲较为“玩家友好”，且内置多种**反假人策略**和**验证方式**，可以任你选择。

若使用了 Sonar 提供的 CAPTCHA 机制，在玩家进入服务器时，会进入 Sonar 创建的虚拟服务器中，玩家需要在聊天栏中输入随机生成的验证码才能进入服务器，这样可以防御 **99.9%** 的假人，以此实现极具优势的安全性保证，非常推荐安装。

## AuthMeBungee

:::info

`SpigotMC` https://www.spigotmc.org/resources/.50219

`GitHub` https://github.com/AuthMe/AuthMeBungee

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>

这是 BungeeCord 版本的 AuthMe 。如果你的登录服使用 AuthMe 登录，请务必在 BungeeCord 上安装此插件，以增加登录系统的安全性和完整性，这可以为你避免一些不必要的麻烦

如果你不安装此插件，在玩家登录时很可能乘此跳到其他子服务器来跳过登录，以此获取管理员账号来炸服

## AuthMeVelocity

:::info

`Modrinth` https://modrinth.com/plugin/authmevelocity

`GitHub` https://github.com/4drian3d/AuthMeVelocity

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

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
推荐使用来自 HaHaWTH 佬的 [AuthMeReReloaded](https://github.com/HaHaWTH/AuthMeReReloaded) 引入了完整的 Velocity 支持。

如果你已经使用了这个分支的插件，只需要在配置文件中找到并开启：
```yaml
Hooks:
    # Do we need to hook with BungeeCord?
    bungeecord: true
    # Do we need to hook with Velocity?
    velocity: true
```
根据实际情况选择开启 Bungeecord 或 Velocity 配置项即可。
:::

如果未修改 AuthMeVelocity 的配置，可能导致所有玩家无法进入服务器，提示连接超时
 - **不要移除 Folia/Paper/Purpur 端的 AuthMe 插件**，保证其和 AuthMeVelocity 插件都被加载，因为 AuthMeVelocity 需要和 AuthMe 配合工作。
若 AuthMe 未被加载则会导致 AuthMeVelocity 要求玩家登录但玩家却无法登录，导致所有人无法正常在服务器中游玩。
 - 如果在 AuthMeVelocity 被加载时出现形如以下报错：
```shell
java.lang.RuntimeException: Failed to download library
```
是由于 AuthMeVelocity 在下载资源时网络不稳定导致的，一般重启几次服务器即可解决

## VLobby

:::info

`Hangar` https://hangar.papermc.io/4drian3d/VLobby

`GitHub` https://github.com/4drian3d/VLobby

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

一个简单的 `/lobby` `/hub` 插件

## LimboAuth

:::info

见 [插件 | LimboAuth](/docs-java/process/plugin/other/Login/LimboAuth.md)

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

一个不错的登录插件。
