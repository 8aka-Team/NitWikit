---
sidebar_position: 1
title: 插件端
---

# 插件端

从原版特性方面来讲,插件端其实并不适合原版生电,Paper 也在他们的文档中说明了这一点

`Unfortunately, it currently is not possible to get a 100% Vanilla experience in Paper. `

`遗憾的是，目前在 Paper 中无法获得 100% 的原版体验。`

但插件端广阔的插件生态以及较好的优化也是一些人在**轻度生电**的情况下使用插件端的原因。这篇文档会通过调整服务端配置尽可能在插件端还原原版特性
## Paper

以下是推荐的配置，以获得最接近原版的生电体验：

### Paper 世界默认配置 (paper-world-defaults.yml)

```yaml
chunks:
  delay-chunk-unloads-by: 0s  # 延迟卸载区块的时间，格式为持续时间，例如 10h（小时）、25m（分钟），支持 d、h、m 和 s 单位
  max-auto-save-chunks-per-tick: 200  # 每个 Tick 自动保存的最大区块数
collisions:
  allow-player-cramming-damage: true  # 玩家因实体过多而发生拥挤碰撞时是否会受到伤害
  max-entity-collisions: 2147483647  # 达到此数量后服务器将停止处理实体碰撞
entities:
  behavior:
    only-merge-items-horizontally: true  # 仅合并高度相同的物品
    phantoms-do-not-spawn-on-creative-players: false  # 禁止幻翼在创造模式玩家周围生成
    phantoms-only-attack-insomniacs: false  # 禁止幻翼攻击曾经睡眠过的玩家
    cooldown-failed-beehive-releases: false  # 为蜜蜂释放失败时添加冷却时间（例如蜂巢被阻挡或夜晚）
  spawning:
    count-all-mobs-for-spawning: true  # 生成点生物和其他生物是否计入全局生物上限
  duplicate-uuid:
    mode: NOTHING  # 指定重复实体 UUID 的处理方式：SAFE_REGEN（重新生成或删除）、DELETE（删除实体）、NOTHING（不处理）、WARN（记录日志）
  filter-bad-tile-entity-nbt-from-falling-blocks: false  # 从下落方块中移除特定 NBT 数据（注意：有些冒险地图可能需要关闭此项，但公共服务器不建议关闭）
  filtered-entity-tag-nbt-paths: [ ]  # 需要从物品的 EntityTag 中移除的 NBT 标签路径列表（格式与原版命令相同；为空列表时禁用过滤）
  per-player-mob-spawns: false  # 生物上限是否按每位玩家计算（开启后生物分布更均匀，避免单人占用全部生物上限）
hopper:
  cooldown-when-full: false  # 漏斗满时是否应用短暂冷却，避免持续尝试吸取新物品
maps:
  item-frame-cursor-limit: 2147483647  # 每个地图允许的游标（标记）数量，过多游标可能导致客户端卡顿
scoreboards:
  use-vanilla-world-scoreboard-name-coloring: true  # 使用原版记分板的玩家昵称着色（对为原版客户端制作的冒险地图有用）
unsupported-settings:
  disable-world-ticking-when-empty: true  # 当世界中无玩家或无强制加载区块时停止该世界的 Tick 处理
  fix-invulnerable-end-crystal-exploit: false  # 允许创建无敌末地水晶（修复 MC-108513 漏洞）

```

### Paper 全局设置(paper-global.yml)

```yaml
commands:
  suggest-player-names-when-null-tab-completions: false  # 当按 Tab 键 补全且没有其他选项时返回玩家名称列表
  time-command-affects-all-worlds: true  # /time 命令是否作用于所有世界（否则只作用于执行者所在的世界）
item-validation:
  display-name: 2147483647  # 物品显示名称的最大长度（字符数）
  lore-line: 2147483647  # 物品附魔说明每行的最大长度（字符数）
  resolve-selectors-in-books: true  # 是否解析书中命令选择器（开启后给予创造模式物品时可能导致服务器崩溃）
book:
  author: 2147483647  # 书籍作者名的最大长度（字符数）
  page: 2147483647  # 书籍每页内容的最大长度（字符数）
  title: 2147483647  # 书籍标题的最大长度（字符数）
book-size:
  page-max: disabled  # 书籍单页允许的最大字节数；设为“disabled”以禁用额外限制
misc:
  fix-entity-position-desync: false  # 让服务器以与客户端相同的精度处理实体位置以避免同步问题（修复 MC-4 漏洞）
  max-joins-per-tick: 2147483647  # 每个 Tick 允许的最大加入玩家数，超出则延迟加入（与 bukkit.yml 中的连接节流无关）
packet-limiter:
  all-packets:
    interval: 0.000001  # 最大数据包速率生效的时间间隔（单位：秒）
    max-packet-rate: 999999.0  # 每个玩家在上述时间间隔内允许的最大数据包数量
spam-limiter:
  incoming-packet-threshold: 2147483647  # 收到的数据包超过此阈值时视为垃圾流量并忽略
unsupported-settings:
  allow-headless-pistons: true  # 是否允许生成无头活塞（通常用于破坏不可破坏方块）
  allow-permanent-block-break-exploits: true  # 是否允许使用原版漏洞破坏基岩、末地传送门框架等不可破坏方块
  allow-piston-duplication: true  # 是否允许复制 TNT、地毯和铁轨（不包括沙子）
  perform-username-validation: false  # 是否验证用户名（允许特殊字符，但可能导致命令或插件问题）
  allow-unsafe-end-portal-teleportation: true  # 是否允许利用末地传送门漏洞进行传送（例如沙子复制，不建议启用）
  skip-tripwire-hook-placement-validation: true  # 是否跳过绊线钩放置校验以允许相关复制漏洞
  update-equipment-on-player-actions: false  # 是否在玩家执行某些动作时更新装备；为 false 时可利用属性切换漏洞

```

:::warning `book` 配置

该选项可能会在你的服务器上启用禁人书,开启时请认真考虑

:::

### spigot.yml 配置

```yaml
world-settings:
  default:
    # 启用TNT爆炸，对于一些基于TNT的机器很重要
    enable-tnt-explosions: true
    # 保持原版的红石机制
    redstone-implementation: vanilla
    # 禁用红石随机更新顺序
    randomize-redstone-updates: false
    # 禁用实体激活范围限制
    entity-activation-range:
      animals: 0
      monsters: 0
      raiders: 0
      misc: 0
      water: 0
      villagers: 0
      flying-monsters: 0
    # 禁用实体追踪范围限制
    entity-tracking-range:
      players: 128
      animals: 128
      monsters: 128
      misc: 128
      other: 128
```

### bukkit.yml 配置

```yaml
settings:
  # 允许使用命令方块
  allow-command-block: true
  # 禁用生物生成限制
  spawn-limits:
    monsters: -1
    animals: -1
    water-animals: -1
    water-ambient: -1
    water-underground-creature: -1
    ambient: -1
```

### 红石优化

请查看 [红石优化](https://nitwikit.8aka.org/Java/process/maintenance/optimize/go#redstone-implementation)

同时 Mojang 在 24w33a 更新了红石的链接机制(虽然是实验性内容),从代码来看,Mojang 的优化方式与 Alternate Current 非常像

可以考虑在服务器中开启

## Purpur

Purpur 可以还原比 Paper 多的特性(虽然也就多了两个),但可以获得来自 Pufferfish 的生物优化

```yaml
allow-void-trading: true # 允许虚空交易

shared-random: true # 允许RNG 预测
```

## Leaves(推荐)

Leaves是一个专注于生电玩家的Minecraft服务端,也是还原原版特性最完全的插件端

Leaves会覆盖Paper的一些配置，所以不必再去手动更改paper的配置文件,只需要关注`leaves.yml`

```yaml
# leaves.yml
settings:
  modify:
    fakeplayer:
      spawn-phantom: true  # 是否允许虚拟玩家（假人）在夜晚未睡时生成幻翼
  minecraft-old:
    block-updater:
      instant-block-updater-reintroduced: true  # 重新启用即时方块更新机制，减少红石延迟
      cce-update-suppression: true  # 启用 CCE 更新抑制 ,具体请看  https://www.bilibili.com/read/cv24323749/
      redstone-wire-dont-connect-if-on-trapdoor: true  # 当红石线位于活板门上方时不进行连接
    armor-stand-cant-kill-by-mob-projectile: true  # 阻止怪物投掷物击杀盔甲架
    zero-tick-plants: true  # 允许零刻农作物（无延迟农田刷新）
    old-hopper-suck-in-behavior: true  # 恢复旧版漏斗吸物行为
    fix-fortress-mob-spawn: true  # 修复下界堡垒刷怪生成机制
    skip-height-check: true  # 跳过怪物生成高度限制检查
    string-tripwire-hook-duplicate: true  # 修复绊线钩重复连接的BUG
    budding-amethyst-can-push-by-piston: true  # 允许活塞推动紫水晶母岩
    stackable-shulker-boxes: true  # 允许潜影盒堆叠
    no-block-update-command: true  # 禁用 /blockupdate 命令
    no-tnt-place-update: true  # 放置TNT时不触发方块更新
    container-passthrough: true  # 允许容器方块传递红石信号
    bow-infinity-fix: true  # 无限无箭矢射击
    hopper-counter: true  # 启用漏斗内物品计数器
  region:
    fix:
      vanilla-hopper: true  # 修复原版漏斗的已知问题
```

:::warning 漏斗问题

`vanilla-hopper` 选项开启后会严重降低漏斗性能,非必要最好别开

:::

## Leaf

Leaf 是一个 Paper 的分支,拥有非常高的性能(基本是 Paper 系里面性能最强的,Folia 除外),同时对原版的破坏不大

如果你想尽可能的承载较多的人，那么可以考虑使用 Leaf

配置文件方面的更改按照上方其他核心的配置文件进行修改即可

## Luminol

Luminol 是 Folia 的一个分支,相比于 Folia 有这更好的性能,同时可以还原更多的特性

:::tip Folia 生电

Folia 是 Paper 的分支,也就是说 Paper 玩不了的机器 Folia 照样玩不了

唯一使用 Folia 的理由是 Folia 可以调用多个核心是实现更好的性能,因此在选择 Folia 开服前应该认真的思考

同时机器性能不够(没有 8h16g) 建议考虑 Leaf 而不是 Folia

:::

```toml
[fixes]

# 允许虚空交易
[fixes.allow_void_trading]
enabled = true

[fixes.allow_unsafe_teleportation]
#如果你想使用刷沙特性，请打开此项
enabled = true


# 使用原版随机源
[fixes.use_vanilla_random_source]
enable_for_player_entity = true

```

同时需要调整分配线程数,因为众所周知 Folia 默认的分配线程数非常脑瘫，会出现一核有难，八核围观的场景

打开 Paper 的全局配置，找到 `threaded-regions.threads`，通常情况下，分配给区块 Tick 线程数应该是 80% 乘上你的物理 CPU 核数

