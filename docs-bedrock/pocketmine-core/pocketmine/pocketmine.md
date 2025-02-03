---
title: PocketMine 核心介绍
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip
作为最早出现的 Minecraft Bedrock Edition 服务端之一，PocketMine-MP 与 Nukkit 一样，为基岩版社区贡献了重要力量。它凭借强大的功能和灵活的插件系统，成为众多玩家和开发者的选择。随着 PocketMine-MP 的知名度不断提升，我们相信后继开发者将继续在此基础上创新，为基岩版社区注入新活力，提供更优质的服务。
:::

![PMMPLogo](https://www.minebbs.com/attachments/pocketmine-light-rgb-gif.47206/)

## 什么是 PocketMine

PocketMine-MP是一个由Shoghicp使用PHP开发的基岩版服务端，于2012年10月19日首次提交，现已停止维护。

PMMP是PocketMine-MP的分支，由PMMP团队负责更新维护，目前已取代PocketMine-MP继续更新。它与PocketMine-MP都被简称为PM。

## 特色

- 使用最常见的 PHP 语言进行开发。
- 功能强大的插件API，可以实现更轻松、广泛地扩展和自定义服务器。
- 多世界支持，使您无需跨服传送就可以为玩家提供更加多样化的游戏体验。
- 性能适合容纳100名以上玩家（取决于硬件配置）。
- 不断更新以支持最新的Minecraft Bedrock版本。PocketMine-MP具有任何自定义服务器中最长和最好的跟踪记录。

### 主流服务端
<!--markdownlint-disable line-length-->

<Tabs queryString="pmmp-history">
<TabItem value="PocketMine-MP" label="PocketMine-MP">

| PocketMine-MP | 别名：PMMP |
| --- | --- |
| 相关链接 | [PMMP官网](https://pmmp.io/)、[Github 仓库](https://github.com/pmmp/PocketMine-MP) |
| 作者 | [pmmp](https://github.com/pmmp/) |
| 介绍 | PocketMine-MP 是一款高度可定制的 Minecraft: Bedrock Edition 服务器软件，支持多版本，具备强大的插件API和丰富的生态系统，适合需要自定义功能的服务器 |
| 下载 | [Github Releases](https://github.com/pmmp/PocketMine-MP/releases) |
| 支持的 MC 版本 | 携带版0.7.2-1.21.50(目前保持更新) |

</TabItem>
</Tabs>

### 不稳定更新的服务端

:::warning
此类服务端一般为个人或者团队非开源更新，不能保证长期更新

NitWiki仅提供关于PocketMine-MP分支的信息和教程，但不对其项目的开发、维护或任何相关争议负责

所有关于PocketMine-MP分支的开发、更新和维护均由PetteriM1及其团队独立完成，与NitWiki站点和文档维护者无关
:::

<Tabs queryString="pmmp-history">
<TabItem value="NetherGames" label="NetherGames">

| NetherGames | 别名：NG |
| --- | --- |
| 相关链接 | [MineBBS投稿贴](https://www.minebbs.com/resources/pmmp5-ng-nethergames-1-20-1-21-50.8967/) |
| 作者 | [QYE](https://www.minebbs.com/members/qye.35358/) |
| 介绍 | 多版本的pmmp5核心-NG(NetherGames)官方核心-支持1.20-1.21.50 |
| 下载 | [MineBBS](https://www.minebbs.com/resources/pmmp5-ng-nethergames-1-20-1-21-50.8967/) |
| 支持的 MC 版本 | 1.20-1.21.50 |

</TabItem>
<TabItem value=" QF-QosGames" label=" QF-QosGames">

| QF-QosGames | 别名：QFMC |
| --- | --- |
| 相关链接 | [MineBBS投稿贴](https://www.minebbs.com/resources/qf-qosgames-qfmc-pm4-1-20-1-20-50.7249/) |
| 作者 | [QYE](https://www.minebbs.com/members/qye.35358/) |
| 介绍 | QF-QosGames(QFMC)核心PM4多版本-现已支持1.20-1.20.50基岩版 |
| 下载 | [MineBBS](https://www.minebbs.com/resources/qf-qosgames-qfmc-pm4-1-20-1-20-50.7249/) |
| 支持的 MC 版本 | 1.20-1.20.50 |

</TabItem>
</Tabs>

### 寿终正寝的服务端

<Tabs queryString="pmmp-history">
<TabItem value="Turanic" label="Turanic">

| Turanic | --- |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/unresolved3169/Turanic) |
| 作者 | [unresolved3169](https://github.com/unresolved3169) |
| 介绍 | 基于GenisysPro的一个分支，添加了虚空维度、天气变化、下界门户等生存特性，现已停更并转移到Altay |
| 下载 | 无 |
| 支持的 MC 版本 | 1.2.x-1.11.0 |

</TabItem>
<TabItem value="Altay" label="Altay">

| Altay | --- |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/unresolved3169/Altay) |
| 作者 | [unresolved3169](https://github.com/unresolved3169) |
| 介绍 | 基于Turanic的优化版本，新增大量生存特性与优化，现已停更 |
| 下载 | [Github Releases](https://github.com/PowerNukkit/PowerNukkit/releases) |
| 支持的 MC 版本 | 1.11.x |

</TabItem>
<TabItem value="GenisysPro" label="GenisysPro">

| GenisysPro | --- |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/GenisysPro/GenisysPro/) |
| 作者 | [GenisysPro](https://github.com/GenisysPro/) |
| 介绍 | GenisysPro是一款基于Genisys开发的多功能Minecraft服务器软件，支持Minecraft PE和Windows 10 Edition v1.1.x版本，具备丰富的功能和性能优化，但目前已停更 |
| 下载 | [Github Releases](https://github.com/GenisysPro/GenisysPro/releases) |
| 支持的 MC 版本 | 1.1.x |

</TabItem>
<TabItem value="BlueLight-oldAPI" label="BlueLight-oldAPI">

| BlueLight-oldAPI | --- |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/BlueLightJapan/BlueLight) |
| 作者 | [BlueLightJapan](https://github.com/BlueLightJapan/) |
| 介绍 | BlueLight-oldAPI 是一款基于 PocketMine-MP 开发的 Minecraft: Pocket Edition 服务器软件，主要特点是支持旧API（1.2核心），能够在无需修改的情况下使用1.0的插件 |
| 下载 | 无 |
| 支持的 MC 版本 | 1.2.x |

</TabItem>
<TabItem value="Steadfast2" label="Steadfast2">

| Steadfast2 | --- |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/Hydreon/Steadfast2) |
| 作者 | [Hydreon Corporation](https://github.com/Hydreon) |
| 介绍 | 基于PMMP进行多版本协议优化，使不同版本能连接到一个服务器上，现已与PMMP合并 |
| 下载 | 无 |
| 支持的 MC 版本 | 1.2.x-1.19.70 |

</TabItem>
</Tabs>

<!--markdownlint-enable line-length-->