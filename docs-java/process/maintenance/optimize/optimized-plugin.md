---
title: 优化误区
sidebar_position: 6
---

# 优化误区

## 混合端

由于混合端本身的问题，混合端能进行的优化很少，并且混合端**不可以装大部分优化 MOD**，但是你仍然可以进行除安装优化mod以外的其他优化操作

~~不使用混合端来达到最佳的优化~~

## 优化插件

:::warning[特别说明]

我们在这里列出的不建议使用的插件是一个类型的插件，而不是仅仅只是不推荐某个插件. 对于推荐的"优化插件"，其实大多数也是通过限制红石/漏斗/实体数量和AI等完成的，

在狭义上任何使用插件操作限制任何东西都不能称之为"*优化*"而是"*限制*"，这里只是以"*优化插件*"代指一些"*限制插件*".

所以说，使用这些"优化插件"，不如更换服务端核心，甚至不如优化启动参数和调优服务端配置文件

:::

## 不建议使用的"优化"插件

:::info

有很多优化是核心自带的，使用插件只是利用核心的 API，效率上是比不上核心的。如 AI，村民，爆炸，区块卸载等...

大佬们思考一下吧，让插件删掉核心已经决定刷出来的怪物性能好还是让核心决定不刷怪性能好？

:::

### 控制玩家跑图

由于大量生成区块非常消耗性能，限制玩家生成的区块数，能够起到一定的效果。

但我们一般可以通过 [参数配置](go.md#prevent-moving-into-unloaded-chunks) 降低区块生成速率，不太需要强行拉回玩家或减速玩家等方式干扰跑图。

因此，停止使用类似插件，如:

*[TooManyGen](https://modrinth.com/plugin/toomanygen) - 惩罚玩家跑图，实际上这是非常影响游戏体验的，有更好的选择。*

### 对于 AI 有影响的插件

使用 Pufferfish Fork（如Purpur / Leaf等）降低远处生物的 AI 比插件利用 API 更加有效和符合游戏逻辑，

因此，停止使用类似插件，如:

*LaggRemover （Fork） - 有时候会导致即使插件卸载，实体 AI 也被移除了，比不上 Pufferfish（使用 Purpur Fork即可）根据距离衰减的 AI.*

### 任何对于内存 GC 进行操作的插件

内存 GC 本身是受 JVM 本身控制的. GC 本身是会导致顿卡的，而并不能起到"清理内存"的作用.

因此，停止使用类似插件，如:

*Spartan - 一款性能非常差的付费反作弊，如果你买了那么恭喜你你被骗了（大嘘），如果近期购买请立即申请退款!*

### 村民优化插件

村民非常吃性能，如果只需要保留公用交易性质可以使用 [Shopkeepers](https://www.spigotmc.org/resources/shopkeepers.80756/) 插件创建无 AI 的村民，

如果你想保留村民和 AI 只需要在 `purpur.yml` 中搜索 lobotomize 启用即可，

另外在 `config/paper-world-defaults.yml` 中有一部分可以优化的内容和村民相关，但这可能会导致村民看起来有一点呆。

在 `调服务端配置`自己找

因此，停止使用类似插件，如:

*[Villager Optimiser](https://www.spigotmc.org/resources/villager-optimiser-1-14-2-1-16-5.68517/) - 降低村民寻路操作的插件*

### 地面清理插件

地面上的物品很少会导致性能问题，而且物品往往会自行消失，如果你的服务器掉落物特别多，请调整以下两个参数：

[点这里查看正确方法 #alt-item-despawn-rate](go.md#alt-item-despawn-rate)
[点这里查看正确方法 #merge-radius](go.md#merge-radius)

因此，停止使用类似插件，如:

*[ClearLagg](https://www.spigotmc.org/resources/clearlagg.68271/) - 清理物品插件*

### 生物清理插件

使用插件删除生物是笨蛋中的笨蛋才会做的事，生物如果达到服务器设定的上限则会停止生成. 而被清除后，服务器必须重新生成生物，这个过程也是非常费性能的。

如果你不需要那么多怪物，直接调整参数即可 [点这里查看正确方法](go.md#spawn-limits)

因此，停止使用类似插件，如:

*[Cleaner](https://www.minebbs.com/resources/cleaner-addon.4816/) - 清理生物/物品插件*

### 实体堆叠插件

除非玩家乐意养殖非常非常多生物，否则对生物进行堆叠仍然会使服务器浪费性能在刷新更多的生物上，否则请不要安装堆叠插件。

因此，停止使用类似插件，如:

*[StackMob](https://www.spigotmc.org/resources/stackmob-enhance-your-servers-performance-without-the-sacrifice.29999/) - 实体密集时进行堆叠的插件(若一定要使用仍推荐本插件而不是其他堆叠插件)*

其实叠加后的一小段时间，应该是占用下降的，但是服务器会因为实际的实体变少，重新刷新怪物，这会让占用缓慢恢复。

其次，如果堆叠插件使用的是命名的方式，这会牺牲命名这个操作，主流的是通过发包，告诉玩家这里有多少怪物，但是大量的会刷新的发包也会造成一定的带宽、cpu压力

最后，从心理学的角度（不是），玩家总是倾向将动物养殖到服务器能容忍的最大限度，如果你堆叠到100，他一样会养很多堆叠到100的羊，

综上所述，不要安装堆叠插件。

:::tip
补充一点，我可以推荐给你这个，只在服务器mspt超过阈值才堆叠动物。如果你本身有farmcontrol之类的插件控制总量，那这个插件的使用是安全、无感、且能起到一定的“优化”作用的。<br />
https://github.com/quiquelhappy/StackMob-5
:::

### 爆炸优化插件

Paper 酱为你在 `/config/paper-world-default.yml` 中准备了爆炸优化。

[点这里查看正确方法](go.md#optimize-explosions)

### 区块卸载插件

服务器会自己卸载插件，与其使用插件一遍遍检查区块是否需要卸载不如让服务器自行卸载，

如果你需要更快卸载请 [点这里查看正确方法](go.md#delay-chunk-unloads-by)

## 其他应该避免使用的插件

### 多合一插件

:::warning

大佬们，多合一插件大多数都是把几个开源的功能拼接到一起就说多合一说不定还付费了。这并不划算，且本身很容易臃肿。

:::

#### Lagassist

跑路付费多合一"优化插件"，不要使用。下面是吐槽(包含一定程度的恶意，问就是因为被骗过一百块)

<details>
  <summary>为什么不要用这个插件</summary>

1. ChunkAnalyser - 简单的搜索世界的红石，漏斗，实体之类，有很多平替插件如 [Insights](https://modrinth.com/plugin/insights)/ [Entitydetection](https://www.spigotmc.org/resources/entitydetection-tile-entity-support.20588/)；

2. LagMonitor，LagMap，Benchmark - 很鸡肋的性能检测(不如 [Spark](performance-analysis.md#spark) )；

3. RedstoneCuller - 直接破坏红石机器，平替插件 [AntiRedstoneClock](https://hangar.papermc.io/OneLiteFeather/AntiRedstoneClock-Remastered?fbclid=IwAR0sVVd50oTgHd9UVJJ7C8dTyL3PiVIBaJtpT6NyMy_D2T2Ho0umzrqtaDw)；

4. ChunkHoppers - 有专门的区块漏斗插件如 [UpgradeableHoppers](https://www.spigotmc.org/resources/upgradeable-hoppers-%E2%AD%95-fast-hopper-plugin-link-containers-%E2%9C%85-item-transfer-suction-chunk-1-20-sup.69201/)，体验远好于此插件；

5. ChunkLimiter - 平替插件 [Farmcontrol](https://www.spigotmc.org/resources/farmcontrol-1-15-1-19.86923/) / [Mob-Farm-Manager](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-20-hopper-support.15127/)，甚至更多配置项；

6. Dynamic View Distance - 平替插件 [View-distance-tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/)；

总之每个所谓优化都是槽点，插件占用的性能多于"优化"的性能，请不要继续使用了。

</details>

#### CMI / ESS

所谓基础插件，旨在使用一个插件就可以代替数个甚至数十个插件的功能。

但是这样的插件往往功能多而不专，如 CMI 经济经常出 bug 且不支持跨服。

而 ESS 使用 yml 储存大量的玩家数据，经常被发现有刷钱漏洞等高血压操作。

这些插件往往因为功能多导致有些代码没有被优化好，无法和专精某一方面的插件媲美。

### 过于古老的插件

除了 Vault 等前置插件以外，插件总是需要更新的，如果一个插件长期不更新，

且并非服务器核心玩法插件，请考虑选择搜索类似功能插件。

### 功能过于简单的插件

主要是包括一些甚至不到 10kb 的插件，功能仅仅只是右键西瓜能够收获，或是禁止农田踩踏等。

这些插件功能很可能被一些其他的插件甚至核心自带了（如 purpur 可设置农田是否可踩踏）。

虽然一般来说这些插件不会对性能有影响，但是的确能够降低服务器维护难度等。

### 拥有相似功能的插件

顾名思义，同时安装两个基础插件如 CMI 和 ESS，两个权限插件 GroupManager 和 Luckperms ，两个经济插件，

不但可能由于插件矛盾导致性能问题，更有可能直接出现权限失效、保护功能失效等严重问题。

## 有用的~~优化~~限制插件

### FarmControl

主要是降低超大或超高密度的生物养殖

* 禁止在超大型动物养殖场和村民繁殖。
* 减少生物农场内不必要的随机移动。
* 特别密集时禁用农场中生物的 AI。
* 限制区域中允许的实体数。
* 高度可配置 - 允许您根据需要定制插件。
* 低影响 - 插件处理是异步执行的。

[下载链接](https://hangar.papermc.io/froobynooby/FarmControl)

### OkTreasures

原版 Minecraft 有一个错误，即埋藏的寻宝速度非常慢，有时会冻结您的游戏。这也发生在多人游戏中，如果有人打开埋藏的宝藏搜索，服务器有时会崩溃。并且很难发现真正的错误，从 Minecraft 1.20.1 开始，这还没有修复。

这个插件通过用一个自定义的、更快、更简单的搜索替换原版埋藏的寻宝来修复这些类型的崩溃：它只是在合理的距离内随机选择一个海滩并将宝藏放在那里。由于这主要是异步的，因此不会导致延迟。

详细使用和局限性，请看[官方页面](https://hangar.papermc.io/Kyle/OkTreasures)

### Chunky Border

一个设置世界边界的工具，可设置不同形状，拉回方式（适配地球从东方跨越地图到西方）等，比原版更加友好。

[下载链接](https://modrinth.com/plugin/chunkyborder)

### EntityDetection

这个插件可以用来寻找哪些东西在拖慢服务器，使用此插件，您可以快速找到包含大量怪物、动物和漏斗。

[下载链接](https://www.spigotmc.org/resources/entitydetection-tile-entity-support.20588/)

### AntiRaidFarm

使用这个简单的插件阻止利用无限不祥之兆循环的作弊突袭农场。此插件没有命令，想要绕过冷却时间的玩家可以获得权限。

[下载链接](https://hangar.papermc.io/jmp/AntiRaidFarm)

### Insights

此插件是一个高性能的用来扫描世界红石加以限制的插件，爆杀大部分限制插件

[下载链接](https://modrinth.com/plugin/insights)


