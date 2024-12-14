---
sidebar_position: 1
title: 网络优化
slug: /optimize/go/network
---

# 网络优化

网络优化主要目的是解决服务器上行带宽占用导致的玩家 **Ping**(即网络延迟)过高导致的糟糕游戏体验。

## 降低服务器视野距离

:::warning

请注意视野距离和玩家体验相关性也较大，除非特殊情况否则不建议大幅压缩视野换取带宽占用。

:::

### 手动调整

在 `spigot.yml` 或 `server.properties` 中可以设置服务器的视野距离，其中 `spigot.yml` 会覆盖 `server.properties` 的值。

```yaml
view-distance: 8  #视野距离为 8 chunks
```

如果你使用的默认 10 chunks 的视野距离，可能对于带宽来说有一定的压力，可以酌情减少，

### 自动调整

安装 [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/) 实现自动调整视野距离使得玩家增多时自动减少视野，玩家减少时自动增加视野。


## 心跳连接

在`purpur.yml`中打开选项`use-alternate-keepalive`

:::tip

启用此功能会每秒向玩家发送一个心跳包,如果 30 秒内没有收到任何响应,才会因超时而踢出玩家.以任何顺序响应其中任何一个都会保持玩家连接。也就是说，不会因为途中某个地方丢失了一个数据包而踢出你的玩家

与 TCPShield 不兼容 !!!

:::

## 压缩阈值

在`server.properties` 中的 `network-compression-threshold`

通常来说,如果你的服务器位于后端并且和前端服务器(比如 Velocity)位于**同一个局域网**,你可以将该项值设为`-1`,可以减少 CPU 占用

其他情况没必要去调整这个值

## 减少实体移动发包

在`leaf-global.yml` 中打开选项 `reduce-entity-move-packets`,但可能会影响一些疑似作弊的mod