---
title: 服务器核心选择
sidebar_position: 2
---

# 服务端核心选择

> 目前有三类主流的选择： Mod ，插件，Mod 和插件混合。但其实，插件核心只要是同版本的分支基本可以后期再替换（如使用purpur替换paper或spigot等），

Mod 服最开始就必须选好核心，也就是 Forge 还是 Fabric 的问题。

> 此处仅为部分开服核心

:::info

你可以点击名称栏中的字体跳转并找到下载

下载镜像只是备选选项

:::

## 笨蛋脚本

帮你选择服务端,并自动下载!

[下载](https://github.com/lilingfengdev/NitWiki-Script/releases/download/windows-latest/select-server.exe)

## Mod 服

性能较差，某些 Mod 就不是想给多人游戏设计的；拓展性强，内存需求较大，游戏性可以做的很丰富，但客户端需要安装相同的 Mod 。纯 Mod 服主流只有 Forge 和 Fabric 两种，

高版本一般推荐使用 Fabric ，因为 Fabric 优化 Mod 多效果比较好，但是最重要的还是：如果有什么 Mod 只有 Fabric / Forge 版本而你又非玩不可，只能选择相应的核心。


## 插件服

性能较好，是初学者最适合开的服务器，拓展性较强，配置性强，但坏处就是有的插件需自行配置后使用，客户端无需安装 Mod 。我个人推荐插件服使用 Purpur，

是截止到2024年的稳定性和优化最好的选择

<details>
  <summary>为什么选择Purpur？</summary>

# 性能

Purpur的性能相比于Paper提升巨大,在高版本表现尤为明显

# 稳定

Purpur兼容Paper的全部插件,只要paper能跑,purpur就可以跑

# 特性

Purpur还原了MC的部分特性，用来开生存服务器更加适合(当然生电还是得Leaves)

</details>

### 插件服核心推荐

| 名称 | 介绍 | 推荐与否 | 下载镜像 | 支持的MC版本   |
| --- | ----------- | --- | --- |-----------|
| [Paper](https://papermc.io/) | 稳定性最好的核心，但是性能在高版本不太好 | 推荐 | [McRes](https://mcres.cn/downloads/paper.html) [FastMirror](https://www.fastmirror.net/#/download/Paper) [原子云](https://res.nullatom.com/Minecraft/Server/Paper/) | 1.8.8-最新  |
| [Purpur](https://purpurmc.org) | 高版本最推荐的插件端核心，拥有较好的性能和稳定性，是开服务器的不二之选 | 推荐 | [McRes](https://mcres.cn/downloads/purpur.html) [FastMirror](https://www.fastmirror.net/#/download/Purpur) | 1.16.5-最新 |
| [Leaves](https://leavesmc.org/) | Leaves就是生电版的paper，他完全支持paper能使用的全部插件，相比paper拥有更强的优化和生电向特性支持。leaves基本完全支持客户端生电 Mod ，包括但不限于carpet，pca，投影，共享原理图，minihud，bbor，ommc，xaero小地图，jade，appleskin等| 非常推荐 | [官方网站](https://leavesmc.org/downloads/leaves)  [McRes](https://mcres.cn/downloads/leaves.html) | 1.17.1-最新(1.19以前不推荐用，那个时候没啥功能)   |
| [Leaf](https://github.com/Winds-Studio/Leaf) | 基于Gale,拥有非常棒的性能（叶子），支持中文名进服，拥有较好的稳定性，国人开发 | 非常推荐 | [McRes](https://mcres.cn/downloads/leaf.html) | 1.19.3-最新 |
| [PandaSpigot](https://github.com/hpfxd/PandaSpigot) | paper1.8.8的fork，此核心只有1.8版本，可用于开PVP服务器，含大量konckback配置选项 | 推荐 | [McRes](https://vip.123pan.cn/1821558579/Lingyi/core/pandaspigot-116-mcres.cn.jar) | 1.8       |
| [SportPaper](https://github.com/Electroid/SportPaper) | paper1.8.8的fork，此核心只有1.8版本，拥有较好的性能和很多生存配置选项，如果你不需要开PVP，你可以选择这个核心 | 推荐 | [青草云MC](https://qcymc.cloud/f/ERGcp/sportpaper-1.8.8-R0.1-SNAPSHOT.jar) | 1.8       |
| [Beast](https://github.com/HomoMC/Beast) | Paper 1.12.2 分支，旨在提供极致性能、错误修复和改进。推荐使用Java 21以上 | 推荐 | [青草云MC](https://qcymc.cloud/f/G6ziA/beast-1.12.2.jar) | 1.12.2    |

:::info

如果您是从非Bukkit系核心或单人存档迁移，请查看[ Leaves 的迁移文档](https://docs.leavesmc.org/zh_Hans/leaves/guides/migration)(通用所有Bukkit插件端)

:::

<details>
  <summary>高版本不同服务端核心的比较</summary>

# 性能

Leaf > Purpur > Paper

Leaves 参与比较是很愚蠢的，它的性能介于 Purpur Paper之间

# 兼容

Paper = Purpur > Leaf /Leaves

Leaves 由于假人的存在会不兼容部分老的插件，比如Authme官方版本,

# 生电

Leaves > Leaf > Purpur > Paper

Leaf 相比于 Purpur 多了生电模组兼容，没多什么特性

</details>

:::danger

以下核心真的不推荐，除非你真的疯了，否则不要用

:::

| 名称 | 介绍 |
| --- | ----------- |
| [CraftBukkit](https://getbukkit.org/download/craftbukkit) | 插件端鼻祖核心，无优化 |
| [Spigot](https://getbukkit.org/download/spigot/) | CraftBukkit的分支，有一点优化，仍不推荐 |

:::danger

大部分付费所谓的高性能核心大概率是假的，如果你真的需要购买，你可以向大佬咨询

:::

## 混合端

:::danger

部分性能不如 Mod 端，游戏性丰富，稳定性和报错非常玄学，建议开服到大神级别再接触这个领域

:::

混合端常见的有Catserver；高版本推荐使用Mohist和Arclight，就目前来看，它们的本身稳定性良好，也比纯forge有所优化（但 Mod /插件数量多了之后兼容性问题可能会莫名让人头疼）

支持的MC版本自行官网查看

### 混合端核心推荐

#### Forge混合端

| 名称                                                      | 介绍                                                                                                                     | 推荐与否     | 下载镜像                                                                                                                                                                                                                                                                   | 支持版本                  |
|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| [Crucible](https://github.com/CrucibleMC/Crucible)      | Thermos的分支,目前还在积极维护,完全兼容Thermos                                                                                             | 推荐 | [McRes](https://www.123pan.com/s/HRhfjv-3ey8v.html),[青草云MC(推荐)](https://qcymc.cloud/f/gJRFG/Crucible-1.7.10-staging-0c25d250-server.jar)([library文件](https://github.moeyy.xyz/https://github.com/CrucibleMC/Crucible/releases/download/staging-0c25d25/libraries.zip)) | 1.7.10                   |
| [CatServer](https://catmc.org/)                         | （推荐，但我真不喜欢核心内置广告）。既可以加入 Mod s又可以加入插件缺点：部分插件不支持，部分 Mod s不支持； Mod s和插件在一起运行难免出现一些七七八八的bug。                               | 推荐1.12.2 | [McRes](https://mcres.cn/downloads/catserver.html) [FastMirror](https://www.fastmirror.net/#/download/CatServer)                                                                                                                                                       | 1.12.2/1.16.5/1.18.2/ |
| [Mohist](https://mohistmc.com/software/mohist)          | 兼容paper的一些插件支持，兼容 Mod 和插件；缺点：比较多插件不支持，部分 Mod s不支持； Mod s和插件在一起运行难免出现一些七七八八的bug。                                        | 推荐高版本    | [McRes](https://mcres.cn/downloads/mohist.html) [FastMirror](https://www.fastmirror.net/#/download/Mohist) [原子云](https://res.nullatom.com/Minecraft/Server/Mohist/)                                                                                                    | 1.12.2/1.16.5/1.18+   |
| [Arclight-Forge](https://github.com/IzzelAliz/Arclight) | -                                                                                                                      | 推荐高版本    | [FastMirror](https://www.fastmirror.net/#/download/Arclight) [McRes](https://mcres.cn/downloads/arclight.html)                                                                                                                                                                                                          | 1.16.5+               |
| [Magma](https://magmafoundation.org/)                   | -                                                                                                                      | -        | [McRes](https://mcres.cn/downloads/magma.html)                                                                                                                                                                                                                         | 没用过，不知道               |
| [Sponge](https://spongepowered.org/]Sponge)             | 可加入sponge插件，支持 Mod，优化极强，而且服务器兼容性更高，对于线程优化能力更强，负载更好。缺点：即使你用了很多办法也很难让bukkit插件稳定运行；sponge插件特别少；启动速度特别慢。操作特别难，与前面的完全不相同。 | 不推荐新手使用  | [McRes](https://mcres.cn/downloads/spongeforge.html) [FastMirror](https://www.fastmirror.net/#/download/SpongeForge)                                                                                                                                                   | 没用过，不知道               |

#### Fabric 混合端

| 名称                                                       | 介绍                                      | 推荐与否 | 下载镜像                                                         |
|----------------------------------------------------------|-----------------------------------------|------|--------------------------------------------------------------|
| [Banner](https://new.mohistmc.com/software/banner)       | 并不是一款端，而是一个 Mod 需要安装在Fabric，安装后重启即可加载插件 | -    | [McRes](https://mcres.cn/downloads/banner.html)              |
| [Arclight-Fabric](https://github.com/IzzelAliz/Arclight) | 出现时间比banner晚，目前不太稳定                     | -    | [FastMirror](https://www.fastmirror.net/#/download/Arclight) [McRes](https://mcres.cn/downloads/arclight.html) |
| [Cardboard](https://cardboardpowered.org/)               | 支持的版本较多，支持1.16.5-1.20.4                 | -    | [McRes](https://mcres.cn/downloads/carboard.html)            |

![](_images/那些服务端有后门吗.png)

