---
sidebar_position: 1
title: 区块优化
slug: /optimize/go/chunk
---

# 区块优化

## 降低区块加载速度

在 `/config/paper-global.yml` 中有关于区块生成的一些参数

```yaml
chunk-loading-basic:
  #注：以下的单位均为 chunks / seconds
  player-max-chunk-generate-rate: -1.0
  #为每个玩家生成区块的最大速率，设置为-1 则禁用。
  player-max-chunk-load-rate: 100
  #任何单个玩家加载区块的最大速率，设置为-1 则禁用。
  player-max-chunk-send-rate: 75
  #服务器发送给单个玩家的最大速率。设置为-1 则禁用。
```

其中 player-max-chunk-send-rate 对应服务器每秒钟最多向玩家发送多少区块包，设置得越低玩家收到完整的地图信息越慢，

服务器虽然总是会发送几乎同样多的区块信息，但由于发送速度降低，这会降低上行带宽的最大占用率，从而避免大量跑图导致的顿卡。

## 模拟距离

### simulate-distance

:::tip

在此之前，你必须了解的是模拟距离(Simulate distance)和视野距离(View distance)区别(下文用 SDT和 VDT 分别指代)。

模拟距离指的是玩家在这个范围内的游戏行为正常进行，如动物、怪物等 AI 的寻路，生物生成，草地扩散，水流流动等。

视野距离指的是服务器将发送给玩家的区块的数据包的距离，在这个范围内，游戏行为不一定会继续发生(这取决于 SDT)

当玩家移动导致一个区域不在玩家的 SDT 中而又在 VDT 中，那么服务器只会读取这个区域的方块信息并发送给玩家。

而不会对这个区域进行加载。这是各种游戏常见的处理方式，弱化远处的计算能够使得服务器更加流畅。

:::

你可以在末地设置更高的 `view-distance` ，这可以让鞘翅飞的更舒服而不会占用很多资源。

:::tip

鼓励你的玩家安装 Bobby 或 Farsight 等 mod，可以在本地缓存区块，这不会对服务器性能造成任何影响！

:::

#### 手动调整

在 `spigot.yml` 中可以设置服务器的模拟距离：

```yaml
simulate-distance: 8
```

如果你使用的默认 10 chunks 的模拟距离，这会非常影响性能，可以酌情减少，

:::tip

推荐值： 3 ~ 8

:::

#### 自动调整

安装 [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/)
实现自动调整视野距离使得玩家增多时自动减少视野，玩家减少时自动增加视野。

## chunk-loading-basic

服务器生成区块非常消耗资源，希望你服务器进行了预生成，如果没有进行的话请阅读 [预生成](/docs-java/process/maintenance/optimize/optimize.md#第二步---预生成)

在 `/config/paper-global.yml` 中有关于区块生成的一些参数

```yaml
chunk-loading-basic:
  #注：以下的单位均为 chunks / seconds
  player-max-chunk-generate-rate: -1.0
  #为每个玩家生成分块的最大速率，设置为-1 则禁用。
  player-max-chunk-load-rate: 100
  #任何单个玩家加载块的最大速率，设置为-1 则禁用。
  player-max-chunk-send-rate: 75
  #服务器发送给单个玩家的最大速率。设置为-1 则禁用。
```

其中 `player-max-chunk-generate-rate` 对应服务器每秒钟最多为玩家生成多少区块，设置得越低区块生成越慢。

此时大量跑图的玩家可能会觉得服务器有一些滞后，但是能够保证大多数玩家的游戏体验，这是值得的。

:::tip

推荐值：20 - 40

:::

## prevent-moving-into-unloaded-chunks

:::tip

推荐值：true

:::

防止玩家进入未加载的区块，以避免同步加载区块造成的主线程卡顿。view-distance视距越小，玩家进入未加载区块的可能性就越大。

## max-loads-per-projectile

在 Minecraft 中，射出的箭、扔出的末影珍珠等可以加载一定距离的区块。

在 `pufferfish.yml` 中可以调整弹射物最多加载的区块数量。在 `gale-world-defaults.yml` 也有类似的配置

* `per-projectile` 对应 `max-loads-per-projectile`
* `remove-from-world-after-reach-limit` 表示当投掷物超过区块范围后是否移除
* `reset-movement-after-reach-limit` 表示当投掷物超过区块范围后是否停止移动
* `per-tick` 一个世界中所有投掷物可以同步加载的最大块数(推荐设置为 2)

降低该值可减少大量弹射物造成的区块负载，但可能会导致末影珍珠等出现问题。

:::tip

`max-loads-per-projectile` 推荐值：8

:::

## 调整区块卸载速度

### delay-chunk-unloads-by

区块的反复大量加载和卸载区块是很消耗性能的，而长期加载无效的区块也是浪费性能。

在 `paper-world-defaults.yml` 中可以调整玩家离开后多久开始卸载区块。

```yaml
chunks:
  delay-chunk-unloads-by: 10s
```

这有助于避免玩家来回移动时，服务器不断加载和卸载相同的区块。过高的值可能会导致一次加载太多区块。

在玩家频繁传送或加载的区域，可以考虑让该区域永久加载。这可以减轻服务器不小的负担。

| 推荐值  | 服务器类型             |
|------|-------------------|
| 5s   | 开荒期、玩家会大范围跑图时     |
| 10s  | 普通服务器             |
| >15s | 服务器玩法决定玩家不会大范围移动时 |

## 世界保存

### max-auto-save-chunks-per-tick

在 `paper-world-defaults.yml` 中的参数，用于控制世界保存速度。

```yaml
max-auto-save-chunks-per-tick: 24
```

这个值是每个 tick 最多可以保存的区块数量，通过降低世界区块保存速度可以提高平均性能。

如果一个 tick 加载区块超过本设定值，将在下一个 tick 继续保存剩余的待保存区块。

这个值应该与需要保存的区块及玩家人数相匹配，当人数更多有更多区块需要保存时应该适当增加。

保存区块的速度快意味着保存时负载高，但保存时间更短。如果遭遇断电、突然死机等情况时，

使用更高的保存速度是有利于降低丢失区块数据的可能性的。

| 推荐值 | 服务器人数      |
|-----|------------|
| 4   | 长期不到 10 人  |
| 8   | 20 人左右(默认) |
| 12  | 30 人左右     |
| >24 | 长期大于 50    |

### entity-per-chunk-save-limit

在保存区块时，服务器会一并保存区块对应位置的实体。

在 `paper-world-defaults.yml` 中的参数，用于控制世界保存时最大保存的某种实体数量。

推荐值：

```yaml
chunks:
  entity-per-chunk-save-limit:
    area_effect_cloud: 8
    arrow: 16
    dragon_fireball: 3
    egg: 8
    ender_pearl: 8
    experience_bottle: 3
    experience_orb: 16
    eye_of_ender: 8
    fireball: 8
    firework_rocket: 8
    llama_spit: 3
    potion: 8
    shulker_bullet: 8
    small_fireball: 8
    snowball: 8
    spectral_arrow: 16
    trident: 16
    wither_skull: 4
```

此项可以设置区块卸载后从内存保存到硬盘时每个区块最大的实体数量，可为每种实体规定一个限制，

以避免服务器尝试保存大量弹射物时崩溃，你还可以根据名称将其他实体添加到该列表中。

从而缓解某些玩家使用大量实体卡服。**并不适用于阻止玩家建造大型生物农场。**

### dont-save-entity

保存区块的时候少保存一些不重要的实体

`leaf-global.yml` 中

* `dont-save-primed-tnt` 开启后不保存即将爆炸的 TNT
* `dont-save-falling-block` 开启后不保存下落方块

`gale-world-defaults.yml` 中

* `save-fireworks` 关闭后不保存烟花

## 更快的区块生成

调整生成区块用的随机数发生器,可以加快区块生成,以下配置项目都在`leaf-global.yml`中

### faster-random-generator

打开`enabled` 就可以使用了

:::warning

一些 JRE 不支持此功能.

:::

### enable-for-worldgen

为世界生成启用更快的随机生成器

:::tip

启用此项后,世界地形生成将不再与原版一致!!!

:::

### use-legacy-random-for-slime-chunk

使用原版随机生成器来生成史莱姆区块,可以让你服务器的红石玩家好受一点


