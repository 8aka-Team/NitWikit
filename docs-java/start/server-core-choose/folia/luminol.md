---
title: Luminol
sidebar_position: 1
---

# Luminol

![](../_images/Luminol.png)

Luminol 是一个非常棒的 Folia 分支！

## 安装

我们不推荐直接使用 Folia，因为这需要自己去构建，[Luminol](https://luminolmc.com) 是一个非常棒的选择，如果你需要 1.20.1/2，你可以使用 [Molia](https://github.com/Era4FunMC/Molia)

请选择 Luminol，我们后面会讲 LightLuminol，下载到本地后，替换原来的核心就可以了

## LightLuminol

![](../_images/LightingLuminol.png)

LightingLuminol 是 Luminol 的分支，旨在修复对 BukkitAPI 的破坏，最大程度保证 Bukkit 插件的兼容性。但是，虽然 LightLuminol 对于 Bukkit 插件兼容性较好，但是会有许多问题，包括不定时的 NullPointerError，Thread 不安全，内存泄露，数据丢失（一天崩个几十次，挺正常的）

所以在开始使用 LightingLuminol，请想想 Leaf 是不是更好？

如果你需要 1.20.1/2，你可以使用 [DirtyMolia](https://github.com/Era4FunMC/DirtyMolia)

（Molia 和 Luminol 其实是同一个作者~~）

## 下载

如果官网进不去或者下载慢可以使用这里的镜像！

* [Luminol](https://sync.mcsl.com.cn/core/Luminol)
* [LightingLuminol](https://sync.mcsl.com.cn/core/LightingLuminol)
* [Molia 1.20.2](https://vip.123pan.cn/1821558579/Lingyi/core/molia-1.20.2-mcres.cn.jar)
* [Molia 1.20.1](https://vip.123pan.cn/1821558579/Lingyi/aaa/molia/molia-1.20.1-mcres.cn.jar)
* [Molia 1.19.4](https://vip.123pan.cn/1821558579/Lingyi/aaa/molia/Molia-1.19.4-mcres.cn.jar)
* [DirtyMolia 1.20.2](https://vip.123pan.cn/1821558579/Lingyi/core/dirtymolia-1.20.2-mcres.cn.jar)
* [DirtyMolia 1.20.1](https://vip.123pan.cn/1821558579/8448710)

## 调配置

安装完 Luminol 后你还需要一点小小的配置让你的 Luminol 更好

### 分配线程数

众所周知 Folia 默认的分配线程数非常脑瘫，会出现一核有难，八核围观的场景

打开 Paper 的全局配置，找到 `threaded-regions.threads`，通常情况下，分配给区块 Tick 线程数应该是 80% 乘上你物理 CPU 核数

### 生电配置

Luminol 另一个好处就是可以开启生电配置

打开 Luminol 的配置文件

* fixes.allow_void_trading 虚空交易
* fixes.allow_unsafe_teleportation 刷沙
* fixes.use_vanilla_random_source RNG 操作

其它特性请阅读 Paper 文档

## Lophine

Lophine 是 Luminol 的下游分支，专门为生电玩家设计！

### 简介

Lophine 基于 Luminol，但更专注于生电特性的实现，如果你是生电玩家，Lophine 可能是更好的选择

### 特性

* 支持部分 Bukkit 插件
* 可配置的原版特性
* Tpsbar 支持
* 对单线程区域性能的优化
* 更多生电向功能

### Lophine 下载

* [Lophine GitHub](https://github.com/LuminolMC/Lophine/releases)

### 配置

Lophine 的配置与 Luminol 基本相同，但提供了更多生电相关的配置选项

#### 实验性功能

Lophine 提供了许多实验性功能，可以在配置文件中开启：

```toml
[experiment.command]
    # 允许使用命令方块
    command_block_enabled = false
    # 允许使用 tick 命令
    tick_command_enabled = false
    # 允许使用数据包命令
    datapack_command_enabled = false
```

#### 生电相关配置

```toml
[misc.revert_raid_changes]
    # 启用无限时间的不祥之兆效果
    bad_omen_infinite = false
    # 击杀袭击队长时获得不祥之兆效果
    give_bad_omen_when_kill_raid_captain = false
    # 允许跳过30秒冷却直接触发袭击
    allow_skip_cooldown = false

[misc.container_expansion]
    # 末影箱行数 (1-6)
    enderchest_rows = 3
    # 潜影盒堆叠数量 (1-64)
    shulker_stackable_count = 1
    # 木桶行数 (1-6)
    barrel_rows = 3

[misc.end_crystal]
    # 禁用 Paper 的末影水晶位置检查，恢复原版重生龙逻辑
    disable_end_crystal_check = false

[misc.old-feature]
    # 生成无敌时间
    spawn_invulnerable_time = false
    # 旧版蘑菇可替换逻辑
    old_replaceable_by_mushrooms = false
    # 旧版僵尸增援
    old_zombie_reinforcement = false
```

#### 性能优化配置

```toml
[misc.performance]
    # 禁用实体碰撞检测优化
    disable_entity_collision_check = false
    # 优化漏斗性能
    optimize_hopper = true
    # 优化红石性能
    optimize_redstone = true

[misc.fixes]
    # 允许虚空交易
    allow_void_trading = false
    # 允许不安全传送（刷沙等）
    allow_unsafe_teleportation = false
    # 使用原版随机数生成器
    use_vanilla_random_source = false
    # 修复 MC-4 漏洞（物品复制）
    fix_mc4 = true
```

#### 世界生成配置

```toml
[misc.world]
    # 启用旧版世界生成
    old_world_generation = false
    # 自定义海平面高度
    sea_level = 63
    # 启用自定义生物群系
    custom_biomes = false
```

这些配置让你可以精确控制服务器的生电特性，满足不同生电需求

:::tip 配置建议

对于生电服务器，建议开启以下配置：

- `allow_void_trading = true` - 启用虚空交易
- `allow_unsafe_teleportation = true` - 启用刷沙等特性
- `use_vanilla_random_source = true` - 使用原版随机数
- `disable_end_crystal_check = true` - 恢复原版重生龙逻辑

:::

### 社区

如果你在使用 Lophine 时遇到问题，可以加入 LuminolMC 的社区：

* QQ群: [1015048616](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=QML5kIVsniPi1PlZvnjHQT_02EHsZ5Jc&authKey=%2FTCJsZC7JFQ9sxAroPCKuYnlV57Z5fyqp36ewXZk3Sn4iJ9p4MB1JKdc%2FFcX3HOM&noverify=0&group_code=1015048616)
* QQ频道: [点击加入](https://pd.qq.com/s/eq9krf9j)
* Telegram: [点击加入](https://t.me/LuminolMinecraft)
* Discord: [点击加入](https://discord.gg/Qd7m3V6eDx)
