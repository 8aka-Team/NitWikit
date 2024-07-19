---
title: 什么是卡顿？
sidebar_position: 2
---

# 什么是卡顿？

服务器中玩家可感知到的卡顿是多种多样的，其中主要包括服务器处理速度不足导致的 **MSPT** 偏高， **TPS** 偏低，

服务器网络波动导致的 **Ping** （即为服务器和玩家之间的网络延迟）

总的说来 **MSPT** 和 **TPS** 是用于评价服务器流畅程度的，而 **Ping** 是用于评价服务器和玩家之间的网络稳定性。

:::tip

玩家往往分不清到底是服务器卡顿还是网络延迟，请服主自行区分。不用因为玩家在社区说一句 `"服务器卡了"` 然后就默认是服务器问题。

:::

## 服务器卡顿

Minecraft 服务器卡顿的底层逻辑是什么？

**理想情况下**，Minecraft 无论什么版本都是每秒钟刷新 20 次，也就是说每次刷新之间间隔 50 ms ( 1000 ms / 20 ) 刷新一次，即为一个 **Tick**；

![](https://spark.lucko.me/docs/assets/images/ticks-lagging-0bec1e4f565281af7a643f94222df521.png)

**正常情况下**，每个 Tick 都小于 50ms ，为了保证 Minecraft 以 20 Tick 每秒的速度运行，服务器将选择等待下一个 Tick；

![](https://spark.lucko.me/docs/assets/images/ticks-with-sleeping-3b944bf10f5a21b16d1454f2d7fee434.png)

**服务器滞后时**，当服务器某个 Tick 无法在 50ms 内完成时，服务器将产生滞后，一旦滞后，每个 Tick 将会顺延，每秒钟发生的 Tick 将会减少。

![](https://spark.lucko.me/docs/assets/images/ticks-lagging-0bec1e4f565281af7a643f94222df521.png)

:::warning

此处只是最简单的理解，要对卡顿有更深层的理解请查看 TODO:多线程

:::

### TPS

TPS（Ticks Per Second）(每秒 Tick 数) 正常应为 20 ，即服务器每秒钟进行 20 次更新，确保红石、生物 AI 等按照正常工作。

:::warning

TPS 只是最基础的量化卡顿程度。并不是 TPS 高，玩家就感受不到卡顿，也不是 TPS 低就一定会感受到非常卡顿。这是因为，TPS 只是计算一个平均值，如果某一个 Tick 花费了 800 ms ，而剩下的 18 Tick 只花费了 200 ms，即使计算出的 TPS 为 19 但玩家会感受到的 800 ms 的滞后。下文提到的 MSPT 能够更加精准量化卡顿程度。

:::

### MSPT

MSPT（Milliseconds Per Tick）(就是每进行一次 Tick 所花费的毫秒数)

如果 MSPT 数值较低，说明服务器可以迅速快速进行每次 Tick ，游戏运行更为流畅。

反之，如果 MSPT 过高，意味着每次 Tick 所需的时间变长，游戏的运行速度就会变慢，进而影响到整体的 TPS。

影响 MSPT 的东西很多，如区块生成，AI 计算，插件计划任务等都会影响 MSPT。

### 查看 TPS 和 MSPT

1. 如果为 purpur fork 服务器可以输入 /tpsbar 查看 MSPT 和 TPS；

2. 如果为 paper 服务器可输入 /mspt 查看 MSPT，输入 /tps 查看 TPS；

3. 安装 [TpsBar](https://hangar.papermc.io/jmp/TabTPS) ，显示更好看。

## 网络延迟

在 Minecraft 中，网络延迟（通常表示为 Ping）是玩家连接到服务器时数据传输所花费的时间。

Ping 值的高低直接影响了玩家在游戏中的体验，特别是在需要快速反应和精确操作的场合。

### 如何计算 Ping

当玩家在 Minecraft 中尝试与服务器通信时，玩家的计算机会向服务器发送一个数据包，然后等待服务器的响应。

从数据包发送出去到收到服务器的响应，所花费的时间就是 Ping 值。Ping 通常以 ms 为单位来表示。

Ping 值的高低对游戏体验有着显著的影响。

:::tip

Ping 的具体要求大概和服务器本身的性质有关系

一般说来服务器 Ping 要求为：

1. PVP 服务器：< 50 ms
2. 生存服务器：< 200 ms
3. 建筑服务器：< 500 ms

此处的延迟为玩家在该类型服务器游戏体验明显变差的阈值，并非高于本数值就完全不可玩。总而言之，为玩家提供可靠的链接是每个服务器应尽的义务。

:::

### 显示 Ping

1. 在多人游戏列表中，当玩家在多人游戏列表中浏览服务器时，每个服务器旁边通常会显示一个 Ping 值。

2. 进入服务器后，按下 TAB 即可查看每个人的 Ping 大概状态（根据信号格数）。

3. 安装了 PlaceholderAPI 和 任意 TAB 类插件，将 `%player_ping%` 作为变量可在目标位置显示具体延迟。
