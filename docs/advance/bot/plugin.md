---
title: 接入式机器人
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 接入式机器人

指一个运行的 QQ 机器人的插件或者模组，这些插件或者模组负责进行 QQ 消息的处理，并且有一定的拓展性

有的 QQ 机器人插件需要外部独立程序的辅助进行处理，但 QQ 连接仍然需要依赖 QQ 机器人框架

部分插件模组或者外部独立程序会内置 QQ 机器人框架

关于机器人框架详情请见 [通用 | 机器人框架](https://nitwikit.8aka.org/advance/bot/framework/)

<Tabs queryString="jrqqbot">
<TabItem value="MiraiMC" label="MiraiMC">

| MiraiMC | ![](https://img.shields.io/badge/状态-积极维护-green?style=for-the-badge) |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/DreamVoid/MiraiMC) \| [文档站](https://docs.miraimc.dreamvoid.me/) |
| 作者 | [DreamVoid](https://github.com/DreamVoid) |
| 支持 **Java 版** | Bukkit 及其分支 \| BungeeCord \| Waterfall \| Sponge \| Velocity |
| 支持 **基岩版** | NukkitX |
| 介绍 | 一个基于 Mirai 的 Minecraft 服务端插件，能够让你在 Minecraft 服务器上使用 Mirai QQ 机器人程序，同时提供一些 API 帮助开发者简单的调用机器人接口为自己的插件实现多样的功能 |
| 下载 | [Github](https://github.com/DreamVoid/MiraiMC/releases) \| [Modrinth](https://modrinth.com/plugin/miraimc) |
| **注意事项** | 由于 Mirai 原生登陆平台已停止更新，并且 MiraiMC 插件自身不支持 Onebot 协议，您需要使用 [这个拓展](https://github.com/DreamVoid/MiraiMCAddon-Overflow) 来给 MiraiMC 添加 Onebot 协议支持 |

</TabItem>
<TabItem value="SparkBridge" label="SparkBridge">

| SparkBridge | ![](https://img.shields.io/badge/状态-积极维护-green?style=for-the-badge) |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/sparkbridge/sparkbridge2) \| [文档站](https://sparkbridge.cn/) |
| 作者 | [sparkbridge](https://github.com/sparkbridge) |
| 支持 **基岩版** | LeviLaminaBDS |
| 介绍 | 轻量级、模块化和多功能的 Minecraft Bedrock Server BDS 服务器 QQ 机器人适配器，内置群服互通功能，支持插件接入，支持内核分离级别的二次开发 |
| 下载 | [Github](https://github.com/sparkbridge/sparkbridge2/releases) |

</TabItem>
<TabItem value="McBot" label="McBot">

| McBot | ![](https://img.shields.io/badge/状态-积极维护-green?style=for-the-badge) |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/Nova-Committee/McBot) \| [Mcmod 文档](https://www.mcmod.cn/class/4903.html) |
| 作者 | [Nova-Committee](https://github.com/Nova-Committee) |
| 支持 **Java 版** | Forge \| Fabric \| Quite \| Rift |
| 介绍 | 基于 Forge、Fabric 等模组平台开发的 QQ 机器人模组，能让你在 Minecraft 模组服务器上使用 QQ 机器人程序，同时提供一些 API 帮助开发者拓展功能 |
| 下载 | [Modrinth](https://modrinth.com/mod/mcbot) \| [Mcmod](https://www.mcmod.cn/download/4903.html) \| [CruseForge](https://www.curseforge.com/minecraft/mc-mods/mcbot) |

</TabItem>
<TabItem value="PlumBot" label="PlumBot">

| McBot | ![](https://img.shields.io/badge/状态-积极维护-green?style=for-the-badge) |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/RegadPoleCN/PlumBot) \| [Modrinth 页面](https://modrinth.com/plugin/plumbot) |
| 作者 | [RegadPoleCN](https://github.com/RegadPoleCN) |
| 支持 **Java 版** | Bukkit 及其分支 |
| 介绍 | 一个可以安装在 Bukkit 等服务端上的 QQ 机器人插件，它能将你的 mc 服务器与 QQ 群或 kook 频道联通，支持消息转发，死亡转发等功能 |
| 下载 | [Github](https://github.com/RegadPoleCN/PlumBot/releases) \| [Modrinth](https://modrinth.com/plugin/plumbot) |

</TabItem>
<TabItem value="AQQBot" label="AQQBot">

| AQQBot | ![](https://img.shields.io/badge/状态-积极维护-green?style=for-the-badge) |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/alazeprt/AQQBot) |
| 作者 | [alazeprt](https://github.com/alazeprt) |
| 支持 **Java 版** | Bukkit 及其分支 |
| 介绍 | 一个轻量级、模块化和多功能的 Bukkit 服务器 QQ 机器人插件，内置群服互通功能，允许用户通过 QQ 群实行更多操作 |
| 下载 | [Github](https://github.com/alazeprt/AQQBot/releases) |

</TabItem>
<TabItem value="XinxinBot" label="XinxinBot">

| XinxinBot | ![](https://img.shields.io/badge/状态-积极维护-green?style=for-the-badge) |
| --- | --- |
| 相关链接 | [Github 仓库](https://github.com/Xinxin-ent/XinxinBotApi) \| [文档站](https://wiki.mcxin.cn/zh/%E6%96%B0%E9%91%AB%E6%8F%92%E4%BB%B6%E6%95%99%E7%A8%8B/XinxinBotApi) [官网](https://bbs.mcxin.cn/archives/216) |
| 作者 | [Xinxin-ent](https://github.com/Xinxin-ent) |
| 支持 **Java 版** | Bukkit 及其分支 |
| 介绍 | 一个可以安装在 Bukkit 等服务端上的 QQ 机器人插件，并且提供一些 API 帮助开发者拓展功能，配置复杂但效果较好 |
| 下载 | [官网下载](https://bbs.mcxin.cn/archives/216) |

</TabItem>
</Tabs>
