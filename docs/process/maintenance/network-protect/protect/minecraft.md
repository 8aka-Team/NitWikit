---
title: 防御 L7
sidebar_position: 6
---

# 防御 L7

## 使用 Velocity / BungeeCord

不要试图单独使用任何后端服务器 (如 Spigot / Paper / Purpur 等) 抵御大规模应用层攻击。

后端服务器处理连接的速度较慢，这将会导致消耗比代理更多的计算机资源，一旦攻击规模过大，这会导致后端服务器卡顿甚至崩溃。

但对于 Velocity / BungeeCord 等代理服务器，它们被设计为允许接受大量连接，且反向代理自带单个 IP 多次重新连接的配置：

```yaml
connection_throttle: 4000
connection_throttle_limit: 3
```

这意味着，单个 IP 地址在 4000ms 内最多能连接服务器 3 次，如果超过该值，服务器将拒绝此 IP 的任何登入请求，即使该 IP 使用了不同的游戏
ID 尝试加入服务器。

## 反假人

:::tip

反假人**不是万能的**,比如下面所有插件都可以被一个假人程序绕过

:::

### 插件

你可以在代理端安装假人过滤插件，同样的，由于代理端相较后端服务器在面对大量连接时更加高效，请务必在**代理端**安装插件。

以下是推荐的反机器人插件列表

<!--markdownlint-disable line-length-->

| 名称                                                           | 介绍                             | 支持平台                                           | 缺点                               |
|--------------------------------------------------------------|--------------------------------|------------------------------------------------|----------------------------------|
| [Sonar](https://github.com/jonesdevelopment/sonar)           | 轻量级反机器人，皆在检测和移除机器人，而不影响任何真正的玩家 | Velocity，BungeeCord                            | 暂时没有？                            |
| [LimboFilter](https://github.com/Elytrium/LimboFilter)       | 强大的过滤机器人方案                     | Velocity                                       | 笨重且配置复杂，且仅在必要的时候提供更新。 (缺少维护)     |
| [nAntiBot](https://en.docs.nickuc.com/v/nantibot)            | 一个高效反机器人插件                     | Spigot，Velocity，BungeeCord                     | 依赖云服务，无法在服务器网络不好的情况下使用该插件。       |
| [EpicGuard](https://github.com/4drian3d/EpicGuard)           | 基于事件的反机器人和反 VPN 插件             | Waterfall (停止维护)，Paper，Velocity                | 容易绕过 (但没那么烦人)，且只支持特定的 Paper 服务端。 |
| [AntiAttackRL](https://github.com/AntiAttackMC/AATRL_Public) | 支持多平台的 AntiBot 插件              | Bukkit，BungeeCord，Folia，Sponge，Velocity 与它们的分支 | 受攻击时新玩家无法直接进入，需要管理员操作; 防御方案过时    |

<!--markdownlint-enable line-length-->

:::warning

该列表目前仅列出了免费的反假人插件，实际情况可能需要使用者自行决定。

使用插件直接对抗超大规模的网络攻击是不太现实的。

如果正在遭受这种攻击，最合理的办法是提升服务器带宽或使用专门针对于此类攻击的代理

:::

### VentiShield

非常强大的反机器人程序,在所有已公开的机器人攻击程序中取得了 100% 防御的好成绩(虽然最后还是被击落了)

[下载地址](https://www.mcbbs.co/thread-3573-1-1.html),目前仅支持 Windows

## 付费防御核心

如果你非常有钱，你可以打开跨服端[核心选择](https://nitwikit.8aka.org/Java/process/cross-server/server-core-choose)
，选择那些付费的跨服端核心，
NullCordX 是一个较好的选择。

但在没有想好的情况下，**不建议为反假人付费**。