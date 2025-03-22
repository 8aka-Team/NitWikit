---
title: Velocity
sidebar_position: 2
---

# Velocity

[点此跳转到官方英文文档](https://docs.papermc.io/velocity)

## 关于 Velocity 的介绍

### 什么是 Velocity ？

Velocity 可以说是目前最优秀的**Minecraft代理端**之一，由经验丰富的 PaperMC 团队研发，Velocity 拥有先进的转发方式和极高的安全性。与此同时，Velocity 也有优秀的性能表现

使用 Velocity ，能让你的群组服务器锦上添花

如果你开的是mod群组服务器，那么强烈推荐使用 Velocity ，因为他对 forge 和 fabric 服务端做了特别的适配

当然，Mod 服务端原生不支持 Velocity，需要安装让 Mod 端支持 Velocity 的 Mod

- Fabric 端支持 Velocity Mod：[CrossTitch](https://www.curseforge.com/minecraft/mc-mods/crossstitch)

- Fabric 端支持 Velocity Mod：[FabricProxy-Lite](https://modrinth.com/mod/fabricproxy-lite)

- Forge 端支持 Velocity Mod：[Proxy Compatible Forge](https://modrinth.com/mod/proxy-compatible-forge)

## FAQ

<!--markdownlint-disable ol-prefix-->

1. Q： velocity 支持 Bungeecord 和 Waterfall 插件吗？

A： 不支持，因为如果支持 BungeeCord 插件的话，那么很多 Velocity 的功能就无从实现了。

但是有些插件可能同时也支持 Velocity 或者有 Velocity 的版本。并且，有些 BungeeCord 插件仅要求在子服务器安装，那么这些插件理论上也是可以在 Velocity 为基础的代理服务器上使用的

2. Q： 我应当使用哪个版本的 Java 来运行 Velocity

A: 推荐你使用 Java 17 以及以上版本的 Java ，如 Java 21

3. Q： 为什么我的玩家连不进服务器？**

A: *<font color="gray">这里是一些可能的原因</font>*

首先，你需要检查：

- 你有没有把子服务器打开，控制台有没有未响应？
- 代理端打开没？
- 是否将代理端和子服务器链接，也就是有没有在代理端设置子服务器 IP 和端口以及子服务器有没有启用 Velocity 功能

此外，这是一些常见的代理端报错：

```text
Can't connect to server lobby： If you wish to use IP forwarding， please enable it in your Bungeecord config as well!
```

```text
Can't connect to server lobby： Your server did not send a forwarding request to the proxy. Is it set up correctly?
```

这些报错是你不正确配置代理端引起的 [点此前往了解velocity配置](velocity.toml.md)

此外，如果你同时启用了 BungeeCord 模式，也会报出以上错误，如果你使用 Velocity ，那么请务必关闭 BungeeCord 模式

```text
Can't connect to server lobby： This server requires you to connect with Velocity.
```

这条报错出现的原因是你在子服务器上启用了 Velocity ，但是却没有在 Velocity 上添加此子服务器，请检查你的 Velocity 配置

4. Q： 为什么会出现 Invalid payload REGISTER

A: 如果你的服务器会出现这种情况：

```text
[server connection] player1 -> hub has connected
[connected player] player1 (/localhost：58943)： kicked from server hub： Invalid payload REGISTER!
```

这种情况一般发生在插件服群组中。当有些人使用 Mod 客户端进入服务器时，有可能出现这种问题。

如果你使用 Paper (或者其他 Fork 版本) 1.12.2或者以上的服务端，你可以在启动脚本中添加 flag `-Dpaper.disableChannelLimit=true` 来解决这个问题

~~虽然没什么人遇到这个问题就是了~~

5. Q： 在加入到 Froge 服务器时 readTimeout

A: 一句话， Mod 太多太大导致连接时间延长了。
你可以减少服务器的 Mod 数量或者在 Velocity 配置文件中设置 `read-timeout` 的值，同时在你的 Forge 子服的启动参数中添加 `-Dfml.readTimeout` 参数来提高阈值。
比如，你想设置你的 readTimeout 时间到 120 秒
那么你可以设置：

`read-timeout = 120000` (单位：毫秒)

`-Dfml.readTimeout=120` (单位：秒)

这样，将服务器重启后，readTimeout 时间就拉长了，下次就可以正常进入服务器了

6. Q： 我可以每个子服都使用不同的转发模式吗？

A: 不行，至少现在不行，你只能在 `velocity.toml` 中设置一个单一的转发模式

关于各个不同的转发模式，可以看到这里 [搭建](./build-up.md#子服配置)

有大佬提出了关于这个问题的 [PR](https://github.com/PaperMC/Velocity/pull/1357)

可以坐等合并了，合并之后就可以给各个不同的子服配置不同的转发模式啦

<!--markdownlint-enable ol-prefix-->