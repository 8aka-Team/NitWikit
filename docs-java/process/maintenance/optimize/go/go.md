---
title: 调服务端配置
sidebar_position: 4
---

<!--markdownlint-disable no-duplicate-heading-->

## 调服务端配置

没有适用于所有服务器的设置。你应该理解每个配置选项，并根据服务器的最佳参数与服务器硬件、玩家数量和服务器性质等调整参数。

所以参数因服而异，随着进入游戏后期，服务器工作量会随着机器或者玩家增加而逐渐增加，

因此服务器优化不是一次性的任务，而是持续的努力。

准备好你的脑子，以下的推荐参数仅作为参考，具体数字请自行尝试:

:::tip

没有一种单一的设置适用于每个服务器。您应该阅读并理解每个可用的配置选项，并根据您自己的独特情况进行调整

:::

## 更简单的

自动优化脚本，[下载](https://dl.yizhan.wiki/windows-latest/auto-optimize.exe)
，在服务器根目录执行，目前支持CraftBukkit，Spigot，Paper，PufferFish，Purpur，Gale，Leaf

:::tip

你可以看看**笨蛋脚本的源代码**或**服务器核心的文档**

:::

## 网络优化


## 控制实体数量

Minecraft 服务端会将每个实体的行为实时发送给附近的玩家客户端，这个包通常来说占用是很少的，但是大量玩家处于实体密集型区域时将出现大量带宽占用。

bukkit.yml 以及 config/paper-world-default.yml 中对于 spawn-limits 做了限制(若二者均有值时取 Paper 的，若 Paper 中为 -1
时取 Bukkit)

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

高版本的 config/paper-world-default.yml 中将 `animals` 改为了 `creature`，将 `water-animals` 改为了 `water-creature`
，可参考这份配置文件：

```yaml
spawn-limits:
  monsters: 70
  #怪物包括 远古守卫者、末影人、监守者、蠹虫、猪灵蛮兵、流浪者、幻术师、骷髅、潜影贝、僵尸疣猪兽、守卫者、岩浆怪、僵尸村民、僵尸猪灵、卫道士、幻翼、猪灵、史莱姆、末影龙、溺尸、掠夺者、唤魔者、僵尸、蜘蛛、尸壳、恶魂、劫掠兽、疣猪兽、洞穴蜘蛛、女巫、枯萎、末影螨、凋灵骷髅、烈焰人、巨人、爬行者、恼鬼。

  creature: 10
  #动物包括 猪、北极熊、狐狸、猫、僵尸马、嗅探者、熊猫、兔子、狼、牛、海龟、青蛙、悦灵、行商羊驼、驴、蜜蜂、骆驼、绵羊、蝌蚪、豹猫、鸡、哞菇、马、羊驼、流浪商人、鹦鹉、山羊、骡、骷髅马刷、炽足兽.

  water-creature: 5
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

大多数情况下，直接将所有限制降低到原来的 50% 是合理的，由于限制和实际实体数量不成线性，实际存在的实体数量大约是原来的 72%。

## 更低的实体显示距离(不推荐)

降低实体显示距离可以让服务器少发送实体的刷新数据包，但是代价是玩家看不到远处的实体，即使在服务器上这些实体是存在的。

```yaml
entity-tracking-range:
  players: 48
  animals: 48
  monsters: 48
  misc: 32
  other: 64
```

## 选择更加合理的反矿物透视方式

停止使用 [Orebfuscator](https://modrinth.com/plugin/orebfuscator) 等矿物混淆插件，使用 Paper 自带的矿物混淆。

使用 Paper 矿物混淆时候，尽量不要在 **非主世界** 开启 `mode 2` 或 `mode 3`



---

# 性能优化

性能优化主要是针对低 TPS 和高 MPST 导致的服务器顿卡或长期不流畅。



### 藏宝图

#### treasure-maps.enabled

生成藏宝图的性能占用极高，如果要定位的结构位于未生成的区块中，服务器甚至可能会未响应。

只有在你预生成世界并设置原版世界边界的情况下，启用此功能才是安全的。

在 `paper-world-default.yml` 中的参数，决定服务器是否生成藏宝图。

:::tip

推荐值: false

:::

#### treasure-maps.find-already-discovered

在 `paper-world-default.yml` 中的参数，控制服务器是否强制藏宝图在未探索的地方。

```yaml
推荐值:
  loot-tables: true
  villager-trade: true
```

由于这些未探索的结构通常位于尚未生成的区块中，这可能会滞后服务器。

`villager-trade` 影响村民交易的地图。

`loot-tables` 影响任何生成战利品的容器，如宝箱等。

#### dolphin.disable-treasure-searching

在 `purpur.yml` 中的参数，控制海豚是否能够寻找藏宝图。

设置为 true 禁用搜索。

:::tip

推荐值: true

:::

## 实体

默认情况下，实体的占用一般占服务器的 40% 左右，如果不控制实体，即使是市面上最好的 CPU ，服务器也会卡顿。

### 控制实体数量

用 spark 等性能分析插件查看，应该希望将全部实体 tick 保持在 30% 以下(有一定数量的玩家在线的情况)。

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

#### mob-spawn-range

另外，在 `spigot.yml` 中有关于生物生成范围的设置：

```yaml
mob-spawn-range: 8
```

因为我们降低了总生物的刷新频率和数量，生物的总密度会明显下降，考虑到过远处的怪物对于游戏性影响非常小。

我们可以缩小生物刷新范围(以区块为单位，且不会大于[模拟距离](#手动调整))从而获得和原版接近的密度。

推荐值：

| `spawn-limit` 值 | 对应 `mob-spawn-range`推荐值 |   实际生物量   |
|:---------------:|:-----------------------:|:---------:|
|     70 (默认)     |          8(默认)          | 100% (默认) |
|       56        |           6-7           |    90%    |
|       42        |           5-6           |    78%    |
|       28        |           4-5           |    65%    |
|       14        |           3-4           |    48%    |

:::tip

如果你只调`mob-spawn-range`，不更改 `spawn-limit`，会导致玩家周围刷很多怪，影响游玩

:::

### 实体刷新及消失

#### ticks-per

在 `bukkit.yml` 中有关于生物生成频率的设置：

```yaml
ticks-per:
  animal-spawns: 400
  monster-spawns: 1
  water-spawns: 1
  water-ambient-spawns: 1
  water-underground-creature-spawns: 1
  axolotl-spawns: 1
  ambient-spawns: 1
```

这个参数控制了多少 tick 后服务器会进行一次生物的刷新，可以看到默认情况下是每个 tick 都刷新，即每秒 20 次。

这无疑是非常繁重的工作，但调整这个值到太高会导致即使服务器生物没有到达上限，生物刷新频率还是偏低。

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

:::tip

为什么选择 9 、199 之类的数字作为刷新频率而不是 10、200？

因为选择 10 和 200 时，每 200 tick 就会有多种类型的生物需要刷新，任务量集中在了某一刻度上，这会导致负载不平均。

使用 9、199 时，需要每 1791 tick 才会有多种类型生物需要被刷新，刷新任务被平均在了更多 tick 中。

:::

#### despawn-ranges

在 paper

推荐值：

```yaml
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

此项可以调整各种生物的消失范围(方块为单位)。降低这些值可以更快地清除远离玩家的生物。
你应该将 soft 软距离设置为约`30`，然后将 hard 硬性距离设置的稍微大于 simulation-distance，这样当玩家刚刚跑出区块时，生物不会立即消失
(你可以一并调整 [paper-world configuration] 中的`delay-chunk-unloads-by`)。当一个生物离开了 hard 距离，该生物会立刻消失。
当一个生物处于 soft 和 hard 距离之间，该生物将有概率消失。 你的 hard 距离应该大于 soft
距离。你应该根据模拟距离调整此项：`(simulation-distance * 16) + 8`。 此项还可能造成玩家经过后，区块不卸载的情况(
因为生物还没消失)。

### 碰撞箱

#### max-entity-collisions

在 `paper-world-default.yml`

:::tip

推荐值: 2

:::

覆盖 [spigot.yml] 中的同名项。它让你决定一个实体可以同时处理多少次碰撞。`0`将导致无法推动其他实体，包括玩家。`2`应该可以处理大部分情况。
值得注意的是，这将会破坏 maxEntityCramming gamerule 也就是生物堆叠窒息。

#### fix-climbing-bypassing-cramming-rule

在 `paper-world-default.yml`

:::tip

推荐值: true

:::

是否修复实体在攀爬时不受实体挤压影响的问题。这将防止大量生物在攀爬时堆叠在狭小空间内(例如蜘蛛)。

#### enable-suffocation-optimization

`推荐值: true`

此项将检查速率限制为伤害超时来优化窒息检查(检查生物是否在方块内以及它们是否应该受到窒息伤害)
。除非你是生电玩家，能够使用精确计时窒息杀死实体的时间，否则这种优化应该是不可能注意到的。

### 实体 AI

#### 生物激活范围

##### entity-activation-range

在 `spigot.yml` 中有一个控制生物激活范围的参数 `entity-activation-range`:

此项可以设置实体的激活AI距离(方块为单位)。降低这些值有助于提高性能，

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

##### inactive-goal-selector-throttle

在 `pufferfish.yml` 中的关于生物目标选择的配置

:::tip

推荐值: true

:::

在实体非活动时限制其目标选择器，让非活动实体每 `20 tick` 更新一次其目标选择器，

而不是每 tick 更新一次。可以将性能提高几个百分点，而且对游戏体验的影响很小。

##### dab

在 `pufferfish.yml` 中的关于生物 AI 的配置

```yaml
dab:
  enabled: true
  start-distance: 12
  max-tick-freq: 30
  activation-dist-mod: 7
  blacklisted-entities: [ ]
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

#### 刷怪笼相关

##### nerf-spawner-mobs

在 `spigot.yml` 中关于刷怪笼 AI 的参数。

```yaml
nerf-spawner-mobs: false
```

打开此项可以卸载刷怪笼生成的生物的 AI，被卸载 AI 的生物将不会做任何事情。

:::tip

推荐值: true

:::

这一项打开时候会大幅影响刷怪塔及游戏体验，因此 paper 为此做了[更加人性化的选项](#spawner-nerfed-mobs-should-jump)。

##### spawner-nerfed-mobs-should-jump

在 `paper-world-defaults.yml` 中控制刷怪笼 AI 的参数。

```yaml
spawner-nerfed-mobs-should-jump: false
```

这个参数控制了刷怪笼刷出的生物是否能给在水中跳跃，这修复了 `nerf-spawner-mobs` 导致的刷怪塔问题。

:::tip

推荐值: true

:::

##### tick-rates.mob-spawner

在 `paper-world-defaults.yml` 中控制刷怪笼刷新速度的参数。

:::tip

推荐值: 2 - 3

:::

此项调整刷怪笼的刷新频率，如果服务器有大量刷怪笼，调高刷新间隙这会很有助。

#### 村民相关

##### tick-inactive-villagers

在 `spigot.yml` 中有一个参数可以降低村民非活跃情况的占用：

```yaml
tick-inactive-villagers: true
```

非活跃的定义是村民在上述参数 `entity-activation-range` 中 `villagers` 所设定的范围外时。

禁用此功能将有助于提高性能，但在某些情况下会让远处的村民更蠢，此项还会降低刷铁机等的效率。

:::tip

推荐值: false

:::

##### zombie.aggressive-towards-villager-when-lagging

在 `purpur.yml` 中控制僵尸是否在服务器卡顿时对村民的仇恨。

由于村民被僵尸跟踪时会触发非常复杂的寻路、铁傀儡召唤等行为。

大量村民被僵尸恐吓时会造成卡顿，当 TPS 低于`purpur.yml` 中设置的 `lagging-threshold` 值时，启用此项会阻止僵尸追赶村民。

:::tip

推荐值: false

:::

##### villager.lobotomize.enabled

在 `purpur.yml` 中控制村民 AI 的配置。

:::tip

推荐值: true

:::

> 仅当村民造成服务器卡顿时才应启用此项！否则，村民寻路会出现问题。

村民被卸载了AI后只会按时补货。启用此项会禁用村民自动寻路。

##### villager.search-radius

在 `purpur.yml` 中控制村民寻路范围的配置。该项可以调整村民尝试搜索工作方块和床的半径。

推荐值:

```yaml
acquire-poi: 16
nearest-bed-sensor: 16
```

降低这个值会大大提高了村民的性能，但会阻止他们探测到比设定值更远的工作方块或床。

##### tick-rates

在 `paper-world-default.yml` 中决定了触发 AI 行为间隔

推荐值:

```yaml
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

> 当 [Pufferfish's DAB](#dab) 启用时，不建议修改该项任何默认值。

`acquirepoi`是村民最频繁的行为， 因此它的间隔已经大大增加了。 如果村民有寻路问题，请减少此项。

#### 寻路

##### update-pathfinding-on-block-update

在 `paper-world-default.yml` 控制生物寻路。

:::tip

推荐值: false

:::

禁用此项将减少寻路次数，从而提高性能。在某些情况下，这会导致生物看起来更加迟钝；

它们只会每 5 个 tick(0.25 秒)被动更新一次路径。

### 掉落物及经验

#### alt-item-despawn-rate

在 `paper-world-default.yml` 中可以为每个单独的掉落物控制消失时间。

推荐值：

```yaml
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

此项可以设置指定物品消失的时间(tick 为单位)， 建议用此项替代扫地姬或 `merge-radius` 来提高性能。

##### merge-radius

在 `spigot.yml` 中设置同类物品和经验球合并堆叠的距离。

推荐值：

```yaml
      item: 3.5
      exp: 4.0
```

可减少地面未拾取物数量。 设置得太高会导致物品合并时像瞬间传送。也会使得物品穿过方块，可能破坏一些刷怪塔。

此项不会判断物品是否穿过墙壁 (除非开启 Paper 中的`fix-items-merging-through-walls)。`

`经验球仅会在生成时合并。建议使用`alt-item-despawn-rate`来优化掉落物数量。

### 弓箭

#### non-player-arrow-despawn-rate

怪物射出的箭消失的时间(以 tick 为单位)。因为玩家无法捡起这些箭，所以你不妨将其设置为`20`(1 秒)之类的值。

#### creative-arrow-despawn-rate

:::tip

推荐值: 20

:::

创造模式玩家射出的箭消失的时间(以 tick 为单位)。因为玩家无法捡起这些箭，所以你不妨将其设置为`20`(1 秒)之类的值。

### 盔甲架

在 `paper-world-default.yml` 中控制是否将盔甲架加入 tick。

#### armor-stands.tick

:::tip

推荐值: false

:::

在大部分情况下，将该项设置为 `false` 是安全的。如果你使用盔甲架或任何相关的插件时遇到了问题，请重新启用它。

这将防止盔甲架被水推动或受到重力的影响。

#### armor-stands.do-collision-entity-lookups

:::tip

推荐值: false

:::

是否启用盔甲架碰撞。如果你有很多盔甲架，并且不想它们与任何东西发生碰撞，这将有所帮助。

## 红石

### 红石引擎

#### redstone-implementation

在 `paper-world-default.yml` 中控制红石系统使用的引擎。

推荐值：ALTERNATE_CURRENT

将红石系统替换为优化版本，减少冗余更新，降低服务器必须计算的逻辑量。可能会对个别的红石机器产生影响，

但其提升非常大，性能提升可能有 70%，利大于弊。甚至还可以修复 Bukkit 造成的红石同步问题。

`ALTERNATE_CURRENT`是基于 [Alternate Current](https://modrinth.com/mod/alternate-current)。 更多信息请阅读该页面。

### 漏斗

#### hopper.disable-move-event

在 `paper-world-default.yml` 中控制漏斗的一个繁重的事件。

:::tip

推荐值: false

:::

仅当有插件监听 `InventoryMoveItemEvent` 时才会触发该事件。

**如果你想使用侦听此事件的插件，请不要设置为 true，比如保护插件！**

#### hopper.ignore-occluding-blocks

在 `paper-world-default.yml` 中控制漏斗是否会忽略完整方块内的容器。

:::tip

推荐值: true

:::

降低沙子或沙砾中的漏斗矿车之类的情况，启用该项可能会破坏一些红石装置。

### tick-per

```yaml
ticks-per:
  hopper-transfer: 8
  hopper-check: 1
```

`hopper-transfer` 控制了漏斗多少 tick 传输一次物品；

`hopper-check` 控制了漏斗一次运输多少物品。

在漏斗特别多的服务器中，合理搭配`hopper-transfer` 和 `hopper-check` 可以降低漏斗占用。(
但可能略微影响一些机器的行为，如分类机)

另外，使用更高的 `hopper-check` 能够增加漏斗在单位时间的物品传输效率，

降低同样数量物品的漏斗使用时间，进一步降低漏斗占用。

| 漏斗速度 | 服务器占用 | hopper-transfer | hopper-check |
|------|-------|-----------------|--------------|
| 50%  | 中低    | 16              | 1            |
| 100% | 中高    | 8               | 1            |
| 100% | 低     | 16              | 2            |
| 200% | 中     | 8               | 2            |

---

### 爆炸

#### optimize-explosions

在 `paper-world-default.yml` 中控制是否启用爆炸优化。

将此项设为`true`可以将原版爆炸算法替换成优化版本，略微牺牲非常小的爆炸伤害换取爆炸时的大量性能提升。

:::tip

推荐值: true

:::

# 杂项优化

## 减少后台垃圾内容

服务端自带一些非常简陋的反作弊，检测玩家是否飞行、过速等，但效果非常差。

特别是服务器出现卡顿的时候，这将在后台进行大量刷屏。如果安装了至少一个反作弊。

那么就可以关闭这些刷屏的无效信息。如果没有安装任何反作弊，还是保留基础反作弊吧。

在 `server.properties` 中按以下设置：

```yaml
allow-flight=true
```

这样可以防止玩家在骑马或爬上脚手架时因“飞行”而被服务器踢出。

设置为 true 不意味着玩家可以飞行，它只是意味着服务器认为玩家在飞行时不会被踢。

在 `spigot.yml` 中按以下设置：

```yaml
settings:
  moved-wrongly-threshold: 1
  # 忽略玩家移动错误
  moved-too-quickly-multiplier: 99999
  # 忽略玩家移动过快
```

---

:::warning

前方二次元内容，在公共场合请谨慎观看

:::

<details>

---

# 可爱的 Paper 酱

![](https://paper-chan.moe/content/images/2022/09/Paper-Chan-Banner-2022-Standard-3.jpg)

![](https://paper-chan.moe/content/images/2022/06/Paper-Chan-Resized-19x32.png)

![](https://paper-chan.moe/content/images/2022/06/PaperServerSquareIcon-1.png)

# 还有Folia

![](https://paper-chan.moe/content/images/2023/03/foliabannerorignal-1.png)

![](https://paper-chan.moe/content/images/2023/03/paperfoliaAPNG.png)

![](https://paper-chan.moe/content/images/2023/05/Paper-Canvas-with-Folia-v5.png)

</details>
