---
title: 调服务端配置
sidebar_position: 4
---

# 调服务端配置

没有适用于所有服务器的设置。您应该理解每个配置选项，并根据服务器的最佳参数与服务器硬件、玩家数量和服务器性质等调整参数。

所以参数因服而异，随着进入游戏后期，服务器工作量会随着机器或者玩家增加而逐渐增加，

因此服务器优化不是一次性的任务，而是持续的努力。

准备好你的脑子，以下的推荐参数仅作为参考，具体数字请自行尝试:

适用于 Paper 版本 1.20 +

# 更简单的

自动优化脚本，[下载](https://github.com/lilingfengdev/NitWiki-Script/releases/download/windows-latest/auto-optimize.exe)，在服务器根目录执行，目前支持CraftBukkit，Spigot，Paper，PufferFish，Purpur,Gale,Leaf


# 开始!!

## 网络项

### [server.properties]

#### network-compression-threshold

在 `server.properties` 可以设置数据包压缩阈值：

```
network-compression-threshold: 256
```

当一个数据包的大小达到该值，服务器就会压缩它。设置得更高可以节省一些 CPU 资源，但会增加带宽占用，

将其设置为 -1 会禁用它。设置的太高有可能会影响到网速较慢的玩家。以下是不同情况下的推荐值：

| 推荐值     | 服务器情况                  |
|---------|------------------------|
| 256     | 普通服务器                  |
| 0 - 127 | 带宽非常非常紧缺但CPU资源充裕       |
| 128     | 带宽紧缺但 CPU 资源相对充裕       |
| 512 +   | 带宽宽裕但 CPU 资源相对紧缺       |
| -1      | 在同一网络下使用反向代理（交给反向代理压缩） |

### [purpur.yml]

#### use-alternate-keepalive

`推荐值: true`

此项可以启用 Purpur 的心跳检测，这样网络情况较差的玩家就不会经常超时。已知与 TCPShield 不兼容。

> 启用此功能后，每秒向玩家发送一次 keepalive 包，玩家在 30 秒内未响应才会超时。玩家以任何顺序响应都不会超时。
~ https://purpurmc.org/docs/Configuration/#use-alternate-keepalive

---

## 区块生成项

### [server.properties]

#### simulation-distance  模拟距离

:::tip

在此之前，你必须了解的是模拟距离（Simulate distance）和视野距离（View distance）区别（下文用 SDT和 VDT 分别指代）。

模拟距离指的是玩家在这个范围内的游戏行为正常进行，如动物、怪物等 AI 的寻路，生物生成，草地扩散，水流流动等。

视野距离指的是服务器将发送给玩家的区块的数据包的距离，在这个范围内，游戏行为不一定会继续发生（这取决于 SDT）

当玩家移动导致一个区域不在玩家的 SDT 中而又在 VDT 中，那么服务器只会读取这个区域的方块信息并发送给玩家。

而不会对这个区域进行加载。这是各种游戏常见的处理方式，弱化远处的计算能够使得服务器更加流畅。

:::

您可以在末地设置更高的 `view-distance` ，这可以让鞘翅飞的更舒服而不会占用很多资源。


另外，应该鼓励您的玩家安装 Bobby 或 Farsight 等 mod，可以在本地缓存区块，这不会对服务器性能造成任何影响！

##### 手动调整

在 `spigot.yml` 中可以设置服务器的模拟距离：

```yaml
simulate-distance: 8
```

如果你使用的默认 10 chunks 的模拟距离，这会非常影响性能，可以酌情减少，

```
推荐值：3 - 8
```

##### 自动调整

安装 [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/) 实现自动调整视野距离使得玩家增多时自动减少视野，玩家减少时自动增加视野。

#### view-distance  视距

`推荐值: 7`

此项为玩家能看到的距离（以区块为单位），类似于paper里的`no-tick-view-distance`。

实际总距离为`simulation-distance`和`view-distance`的最大值。 比如, 模拟距离是4 ，视距是12，那么玩家能看到的实际区块距离就是12。

### [spigot.yml]

#### view-distance

`推荐值: default`

如果不设置为`default`，此项将覆盖 server.properties。

### [paper-world configuration]

#### delay-chunk-unloads-by

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


#### max-auto-save-chunks-per-tick

在 `paper-world-defaults.yml` 中的参数，用于控制世界保存速度。

```
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
| 8   | 20 人左右（默认） |
| 12  | 30 人左右     |
| >24 | 长期大于 50    |

#### prevent-moving-into-unloaded-chunks

`推荐值: true`

防止玩家进入未加载的区块，以避免同步加载区块造成的主线程卡顿。view-distance视距越小，玩家进入未加载区块的可能性就越大。

#### entity-per-chunk-save-limit

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

### [pufferfish.yml]

#### max-loads-per-projectile

`推荐值: 8`

此项指定弹射物可以加载的最大区块数量。可减少弹射物造成的区块负载，但可能会导致末影珍珠等出现问题。

---

## 生物生成项

### [bukkit.yml]

#### spawn-limits

在 `bukkit.yml` 和 `paper-world-default` 中都有一样的配置，但 paper 如果设置将覆盖 bukkit 的。

所以建议直接在 `paper-world-default` 中设置：

```yaml
spawn-limits:
  monsters: 70
  #怪物包括 远古守卫者、末影人、监守者、蠹虫、猪灵蛮兵、流浪者、幻术师、骷髅、潜影贝、僵尸疣猪兽、守卫者、岩浆怪、僵尸村民、僵尸猪灵、卫道士、幻翼、猪灵、史莱姆、末影龙、溺尸、掠夺者、唤魔者、僵尸、蜘蛛、尸壳、恶魂、劫掠兽、疣猪兽、洞穴蜘蛛、女巫、枯萎、末影螨、凋灵骷髅、烈焰人、巨人、爬行者、恼鬼。
  animals: 10
  #动物包括 猪、北极熊、狐狸、猫、僵尸马、嗅探者、熊猫、兔子、狼、牛、海龟、青蛙、悦灵、行商羊驼、驴、蜜蜂、骆驼、绵羊、蝌蚪、豹猫、鸡、哞菇、马、羊驼、流浪商人、鹦鹉、山羊、骡、骷髅马刷、炽足兽.
  water-animals: 5
  # 包括鱿鱼和海豚
  water-ambient: 20
  # 包括鳕鱼、河豚、鲑鱼、热带鱼
  water-underground-creature: 5
  # 包括发光鱿鱼
  axolotls: 5
  # 美西螈
  ambient: 15
  # 只包括蝙蝠，建议0
```

生物生成最大数量为 `玩家数量 * 生成限制`，该值越小，玩家能遇到的生物就越少，不同生物类型在每个玩家附近生成的概率是平均的。

这是一把双刃剑：较低的值会减轻服务器负担，但在大多数游戏模式中，自然生成的生物是游戏玩法的重要组成部分。

下表推荐了三种不同情况的推荐值，请结合服务器卡顿程度和玩法选择合适的值：

| 生物类型                       | 推荐最小值 | 推荐值 | 推荐最大值 |
|----------------------------|-------|-----|-------|
| monster                    | 18    | 30  | 45    |
| animal                     | 5     | 8   | 10    |
| water-animals              | 2     | 3   | 5     |
| water-ambient              | 2     | 3   | 5     |
| water-underground-creature | 3     | 4   | 5     |
| axolotls                   | 3     | 4   | 5     |
| ambient                    | 0     | 1   | 1     |

#### ticks-per

在 `bukkit.yml` 中有关于生物生成频率的设置：

```yaml
推荐值:
    monster-spawns: 9
    animal-spawns: 399
    water-spawns: 199
    water-ambient-spawns: 399
    water-underground-creature-spawns: 399
    axolotl-spawns: 399
    ambient-spawns: 999
```

这个参数控制了多少 tick 后服务器会进行一次生物的刷新，可以看到默认情况下是每个 tick 都刷新，即每秒 20 次。

这无疑是非常繁重的工作，但调整这个值到太高会导致即使服务器生物没有到达上限，生物刷新频率还是偏低。

:::tip

为什么选择 9 、199 之类的数字作为刷新频率而不是 10、200？

因为选择 10 和 200 时，每 200 tick 就会有多种类型的生物需要刷新，任务量集中在了某一刻度上，这会导致负载不平均。

使用 9、199 时，需要每 1791 tick 才会有多种类型生物需要被刷新，刷新任务被平均在了更多 tick 中。

:::

### [spigot.yml]

#### mob-spawn-range

`推荐值: 3`

```yaml
mob-spawn-range: 8
```

因为我们降低了总生物的刷新频率和数量，生物的总密度会明显下降，考虑到过远处的怪物对于游戏性影响非常小。

我们可以缩小生物刷新范围（以区块为单位，且不会大于[模拟距离](#手动调整)）从而获得和原版接近的密度。

推荐值：

| `spawn-limit` 值 | 对应 `mob-spawn-range`推荐值 |   实际生物量   |
|:---------------:|:-----------------------:|:---------:|
|     70 (默认)     |          8（默认)          | 100% (默认) |
|       56        |           6-7           |    90%    |
|       42        |           5-6           |    78%    |
|       28        |           4-5           |    65%    |
|       14        |           3-4           |    48%    |

#### entity-activation-range

此项可以设置实体的激活AI距离（方块为单位）。降低这些值有助于提高性能，

但可能会导致怪物反应迟钝。将此值降低太多可能会破坏某些生物农场，比如刷铁机。

```yaml
推荐值:
    entity-activation-range:
      animals: 16
      monsters: 24
      raiders: 48
      misc: 8
      water: 8
      villagers: 16
      flying-monsters: 48
```

#### entity-tracking-range

```
推荐值:

      players: 48
      animals: 48
      monsters: 48
      misc: 32
      other: 64
```

此项可以设置实体的可见范围（方块为单位）。 距离外的实体将不会发送给客户端。 如果设置得太低，这可能会导致怪物突然出现在玩家附近。 此项应该大于`entity-activation-range`的值。

#### tick-inactive-villagers

```yaml
tick-inactive-villagers: true
```

非活跃的定义是村民在上述参数 `entity-activation-range` 中 `villagers` 所设定的范围外时。

禁用此功能将有助于提高性能，但在某些情况下会让远处的村民更蠢，此项还会降低刷铁机等的效率。

```
推荐值：false
```

#### nerf-spawner-mobs

```
nerf-spawner-mobs: false
```

打开此项可以卸载刷怪笼生成的生物的 AI，被卸载 AI 的生物将不会做任何事情。

```
推荐值: true
```

这一项打开时候会大幅影响刷怪塔及游戏体验，因此 paper 为此做了[更加人性化的选项](#spawner-nerfed-mobs-should-jump)。

##### spawner-nerfed-mobs-should-jump

```
spawner-nerfed-mobs-should-jump: false
```

这个参数控制了刷怪笼刷出的生物是否能给在水中跳跃，这修复了 `nerf-spawner-mobs` 导致的刷怪塔问题。

```
推荐值: true
```

#### despawn-ranges

```
推荐值:

      ambient:
        hard: 72
        soft: 30
      axolotls:
        hard: 72
        soft: 30
      creature:
        hard: 72
        soft: 30
      misc:
        hard: 72
        soft: 30
      monster:
        hard: 72
        soft: 30
      underground_water_creature:
        hard: 72
        soft: 30
      water_ambient:
        hard: 72
        soft: 30
      water_creature:
        hard: 72
        soft: 30
```

此项可以调整各种生物的消失范围（方块为单位）。降低这些值可以更快地清除远离玩家的生物。 您应该将 soft 软距离设置为约`30`，然后将 hard 硬性距离设置的稍微大于 simulation-distance，这样当玩家刚刚跑出区块时，生物不会立即消失（您可以一并调整 [paper-world configuration] 中的`delay-chunk-unloads-by`）。 当一个生物离开了 hard 距离，该生物会立刻消失。 当一个生物处于 soft 和 hard 距离之间，该生物将有概率消失。 您的 hard 距离应该大于 soft 距离。您应该根据模拟距离调整此项：`(simulation-distance * 16) + 8`。 此项还可能造成玩家经过后，区块不卸载的情况（因为生物还没消失）。

#### per-player-mob-spawns

`推荐值: true`

该项决定生物生成是否应该考虑玩家周围已有的生物数量。此项可以解决一些生物生成不一致问题，如玩家建造的农场占满生物生成上限。这更像单人游戏的生物生成，允许您设置较低的`spawn-limits`。启用此项会对性能产生轻微影响，但它带来的好处大于其影响。

#### max-entity-collisions

`推荐值: 2`

覆盖 [spigot.yml] 中的同名项。它让您决定一个实体可以同时处理多少次碰撞。`0`将导致无法推动其他实体，包括玩家。`2`应该可以处理大部分情况。 值得注意的是，这将会破坏 maxEntityCramming gamerule 也就是生物堆叠窒息。

#### update-pathfinding-on-block-update

`推荐值: false`

禁用此项将减少寻路次数，从而提高性能。在某些情况下，这会导致生物看起来更加迟钝；它们只会每 5 个 tick（0.25 秒）被动更新一次路径。

#### fix-climbing-bypassing-cramming-rule

`推荐值: true`

是否修复实体在攀爬时不受实体挤压影响的问题。这将防止大量生物在攀爬时堆叠在狭小空间内（例如蜘蛛）。

#### armor-stands.tick

`推荐值: false`

在大部分情况下，将该项设置为`false`是安全的。如果您使用盔甲架或任何相关的插件时遇到了问题，请重新启用它。这将防止盔甲架被水推动或受到重力的影响。

#### armor-stands.do-collision-entity-lookups

`推荐值: false`

是否启用盔甲架碰撞。如果您有很多盔甲架，并且不想它们与任何东西发生碰撞，这将有所帮助。

#### tick-rates

```
推荐值:

  behavior:
    villager:
      validatenearbypoi: 60
      acquirepoi: 120
  sensor:
    villager:
      secondarypoisensor: 80
      nearestbedsensor: 80
      villagerbabiessensor: 40
      playersensor: 40
      nearestlivingentitysensor: 40
```

> 当 [Pufferfish或者Leaf DAB](#DAB) 启用时，不建议修改该项任何默认值。

这决定了触发AI行为和传感器的间隔。 `acquirepoi`是村民最频繁的行为, 因此它的间隔已经大大增加了。 如果村民有寻路问题，请减少此项。

### [pufferfish.yml]

#### DAB

:::tip

该选项在Leaf配置文件中同样可用

:::

```yaml
dab:
  enabled: true
  start-distance: 12
  max-tick-freq: 30
  activation-dist-mod: 7
  blacklisted-entities: []
```

`dab` 是什么？这是一个生物 AI 控制算法，以梯度降低远处生物的 AI 运行，因为远处生物相对不重要。

`start-distance` 单位为格，控制了从多少远开始降低生物的 AI；

`activation-dist-mod` 为梯度，增加此值可使较远的实体更频繁地运算。减少此值可使较远的实体运算的更慢，从而更加流畅。但会影响实体与环境互动，可能降低刷怪塔效率。

`max-tick-freq` 单位为 tick，控制了实体最低 tick 的间距，即无论实体有多远，只要被加载，那么至少在 20 tick 内会被运算一次。

`blacklisted-entities` 是可以无视 dab 控制 AI 的实体，如果某种实体 AI 特别重要，那么可以试着加入黑名单。

不同情况下的推荐值：

| 选项                  | 牺牲 AI 换取性能 | 推荐 | 更接近原版 |
|---------------------|------------|----|-------|
| start-distance      | 8 - 10     | 12 | 20    |
| max-tick-freq       | 30 - 40    | 20 | 10    |
| activation-dist-mod | 7 - 8      | 7  | 6 -7  |

#### enable-async-mob-spawning

`推荐值: true`

是否应启用异步怪物生成。要使此功能正常工作，必须启用 Paper 中的`per-player-mob-spawns`。此项实际上不会异步生成生物，但会将生成新生物所涉及的大量计算工作转移到不同的线程。对原版生存体验的影响很小。

#### enable-suffocation-optimization

`推荐值: true`

此项将检查速率限制为伤害超时来优化窒息检查（检查生物是否在方块内以及它们是否应该受到窒息伤害）。除非您是生电玩家，能够使用精确计时窒息杀死实体的时间，否则这种优化应该是不可能注意到的。

#### inactive-goal-selector-throttle

`推荐值: true`

在实体非活动时限制其目标选择器，让非活动实体每`20 tick`更新一次其目标选择器，而不是每 tick 更新一次。可以将性能提高几个百分点，而且对游戏体验的影响很小。

### [purpur.yml]

#### zombie.aggressive-towards-villager-when-lagging

`推荐值: false`

当 TPS 低于`lagging-threshold`值 [purpur.yml] 时，启用此项会阻止僵尸追逐村民。

#### entities-can-use-portals

`推荐值: false`

此项决定是否让除玩家之外的所有实体使用传送门。这可以防止实体在主线程上加载不必要的区块，但会破坏一些生电装置或地狱交通。

#### villager.lobotomize.enabled

`推荐值: true`

> 仅当村民造成服务器卡顿时才应启用此项！否则，村民寻路会出现问题。

村民被卸载了AI后只会按时补货。启用此项会禁用村民自动寻路。

#### villager.search-radius

```
推荐值:

          acquire-poi: 16
          nearest-bed-sensor: 16
```

该项可以调整村民尝试搜索工作方块和床的半径。这大大提高了村民的性能，但会阻止他们探测到比设定值更远的工作方块或床。

---

## 杂项

### [server.properties]

服务端自带一些非常简陋的反作弊，检测玩家是否飞行、过速等，但效果非常差。

特别是服务器出现卡顿的时候，这将在后台进行大量刷屏。如果安装了至少一个反作弊。

那么就可以关闭这些刷屏的无效信息。如果没有安装任何反作弊，还是保留基础反作弊吧。

```yaml
allow-flight=true
```

这样可以防止玩家在骑马或爬上脚手架时因“飞行”而被服务器踢出。

设置为 true 不意味着玩家可以飞行，它只是意味着服务器认为玩家在飞行时不会被踢。

### [spigot.yml]

#### merge-radius

在 `spigot.yml` 中设置同类物品和经验球合并堆叠的距离。

```
推荐值:

      item: 3.5
      exp: 4.0
```

可减少地面未拾取物数量。 设置得太高会导致物品合并时像瞬间传送。也会使得物品穿过方块，可能破坏一些刷怪塔。

此项不会判断物品是否穿过墙壁 （除非开启 Paper 中的`fix-items-merging-through-walls`).

经验球仅会在生成时合并。建议使用`alt-item-despawn-rate`来优化掉落物数量。

#### hopper-transfer 和 hopper-check

`hopper-transfer` 控制了漏斗多少 tick 传输一次物品；

`hopper-check` 控制了漏斗一次运输多少物品。

在漏斗特别多的服务器中，合理搭配`hopper-transfer` 和 `hopper-check` 可以降低漏斗占用。（但可能略微影响一些机器的行为，如分类机）

另外，使用更高的 `hopper-check` 能够增加漏斗在单位时间的物品传输效率，

降低同样数量物品的漏斗使用时间，进一步降低漏斗占用。

| 漏斗速度 | 服务器占用 | hopper-transfer | hopper-check |
|------|-------|-----------------|--------------|
| 50%  | 中低    | 16              | 1            |
| 100% | 中高    | 8               | 1            |
| 100% | 低     | 16              | 2            |
| 200% | 中     | 8               | 2            |

### [paper-world configuration]

#### alt-item-despawn-rate

```
推荐值:

      enabled: true
      items:
        cobblestone: 300
        netherrack: 300
        sand: 300
        red_sand: 300
        gravel: 300
        dirt: 300
        short_grass: 300
        pumpkin: 300
        melon_slice: 300
        kelp: 300
        bamboo: 300
        sugar_cane: 300
        twisting_vines: 300
        weeping_vines: 300
        oak_leaves: 300
        spruce_leaves: 300
        birch_leaves: 300
        jungle_leaves: 300
        acacia_leaves: 300
        dark_oak_leaves: 300
        mangrove_leaves: 300
        cactus: 300
        diorite: 300
        granite: 300
        andesite: 300
        scaffolding: 600
```

此项可以设置指定物品消失的时间（tick 为单位）。 建议用此项替代扫地姬或`merge-radius`来提高性能。

#### redstone-implementation

`推荐值: ALTERNATE_CURRENT`

将红石系统替换为优化版本，减少冗余更新，降低服务器必须计算的逻辑量。可能会对个别的红石机器产生影响，但其提升利大于弊。甚至还可以修复 Bukkit 造成的红石同步问题。

`ALTERNATE_CURRENT`是基于 [Alternate Current](https://modrinth.com/mod/alternate-current)。 更多信息请阅读该页面。

#### hopper.disable-move-event

`推荐值: false`

仅当有插件监听`InventoryMoveItemEvent`时才会触发该事件。 **如果您想使用侦听此事件的插件,请不要设置为 true，比如保护插件！**

#### hopper.ignore-occluding-blocks

`推荐值: true`

确定漏斗是否会忽略完整方块内的容器，例如沙子或沙砾中的漏斗矿车。启用该项可能会破坏一些红石装置。

#### tick-rates.mob-spawner

`推荐值: 2`

此项调整刷怪笼的刷新频率。如果服务器有大量刷怪笼，则值越高意味着卡顿越少，但如果设置得太高，怪物刷怪率就会降低。

#### optimize-explosions

`推荐值: true`

将此项设为`true`可以将原版爆炸算法替换成优化版本，但计算爆炸伤害时会略有不准确。 这通常不影响游戏体验。

#### treasure-maps.enabled

`推荐值: false`

生成藏宝图的性能占用极高，如果要定位的结构位于未生成的区块中，服务器甚至可能会未响应。只有在您预生成世界并设置原版世界边界的情况下，启用此功能才是安全的。

#### treasure-maps.find-already-discovered

```
推荐值:
      loot-tables: true
      villager-trade: true
```

此项的默认值强制新藏宝图寻找未探索过的结构，这些结构通常位于尚未生成的区块中。将其设置为 true 可使地图指向之前发现过的结构。如果不将其更改为 true，在生成新的藏宝图时可能会遇到服务器未响应或崩溃的情况。 `villager-trade`影响村民交易的地图，而`loot-tables`影响任何生成战利品的容器，如宝箱等。

#### tick-rates.grass-spread

`推荐值: 4`

服务器尝试扩散草方块或菌丝的频率（以 tick 为单位）。这会使大面积泥土需要更长的时间才能变成草或菌丝。如果您想在不明显降低扩散率的情况下优化性能，则将其设置为`4`左右应该不错。

#### tick-rates.container-update

`推荐值: 1`

容器更新频率（以 tick 为单位）。如果容器更新带来一些问题（这种情况很少发生），增加此间隔时间可能会有所帮助，但会让玩家在与库存（幽灵物品）交互时更容易遇到不同步的情况。

#### non-player-arrow-despawn-rate

`推荐值: 20`

怪物射出的箭消失的时间（以 tick 为单位）。因为玩家无法捡起这些箭，所以您不妨将其设置为`20`（1 秒）之类的值。

#### creative-arrow-despawn-rate

`推荐值: 20`

创造模式玩家射出的箭消失的时间（以 tick 为单位）。因为玩家无法捡起这些箭，所以您不妨将其设置为`20`（1 秒）之类的值。

### [pufferfish.yml]

#### disable-method-profiler

`推荐值: true`

此选项将禁用游戏进行的一些其他性能分析。这些分析是非必需的，并且可能会导致额外的延迟。

### [purpur.yml]

#### dolphin.disable-treasure-searching

`推荐值: true`

禁止海豚寻宝。

#### teleport-if-outside-border

`推荐值: true`

如果玩家恰好在世界边界之外，该项会将其传送到世界出生点。这很有用，因为原版世界边界是可绕过的。

---

## 辅助项

### [paper-world configuration]

#### nether-ceiling-void-damage-height

`推荐值: 127`

如果此项大于`0`，地狱此高度之上的玩家就会像坠入虚空一样不断受到伤害。 防止玩家在地狱天花板之上建造建筑，原版地狱为128格高，所以您应该考虑将数值设定为`127`。 如果您以任何方式修改了下界的高度，您应该将其设置为`[地狱高度] - 1`。

---

:::warning

前方二次元内容，在公共场合请谨慎观看

:::

<details>

# 可爱的 Paper 酱

![](https://paper-chan.moe/content/images/2022/09/Paper-Chan-Banner-2022-Standard-3.jpg)

![](https://paper-chan.moe/content/images/2022/06/Paper-Chan-Resized-19x32.png)

![](https://paper-chan.moe/content/images/2022/06/PaperServerSquareIcon-1.png)

# 还有Folia!

![](https://paper-chan.moe/content/images/2023/03/foliabannerorignal-1.png)

![](https://paper-chan.moe/content/images/2023/03/paperfoliaAPNG.png)

![](https://paper-chan.moe/content/images/2023/05/Paper-Canvas-with-Folia-v5.png)

</details>