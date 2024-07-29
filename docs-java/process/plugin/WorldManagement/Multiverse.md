---
sidebar_position: 3
sidebar_label: 多世界 - Multiverse
---

# Multiverse

:::info

`GitHub` https://github.com/Multiverse/Multiverse-Core

`SpigotMC` https://www.spigotmc.org/resources/.390/

`Bukkit` https://dev.bukkit.org/projects/multiverse-core

`modrinth` https://modrinth.com/plugin/multiverse-core

`插件百科` https://mineplugin.org/Multiverse-Core

:::

老牌多世界管理插件，可以新建，删除，导入世界（维度）等

值得一提的是，在 [GitHub releases](https://github.com/Multiverse/Multiverse-Core/releases) 上的版本比在 SpigotMC 上能下载到的版本要新

# 附属

## Multiverse-Core

[Multiverse-Core](https://github.com/Multiverse/Multiverse-Core/wiki) 是基础插件。下面的其它插件都必须需要 Core 。

本插件能够让你：

- 创建/修改/删除世界
- 传送到世界中
- 通过权限限制在世界间切换
- 查看某人在哪个世界中

## Multiverse-Portals

[Multiverse-Portals](https://github.com/Multiverse/Multiverse-Portals/wiki) 是类似于 Multiverse 1 类型的传送门。

如果你使用过它的话，你可能很想要本插件。

它们的大部分是一样的，只是有一些新特性。

本插件能够让你：

- 创建/修改/删除 Multiverse 类型的传送门
- 通过权限限制传送门的使用
- 可以步行或骑着载具在 Multiverse 世界间切换

## Multiverse-NetherPortals

[Multiverse-NetherPortals](https://github.com/Multiverse/Multiverse-NetherPortals/wiki) 起到了 Multiverse 1 插件中 splike 的作用，但改善了许多。

本插件是为了能够让你们有更加真实的体验而设计，允许玩家创建能够带他们去指定世界的地狱传送门。

所有在 X 世界的传送门都会去 Y 世界，但是这可以在游戏中配置。

本插件能够让你：

- 自定义某个世界中的地狱传送门指向哪个世界
- 自动连接有特殊命名模型的世界（如 WORLD 和 WORLD_nether）

取自 [插件百科 | Multiverse-Core#附属插件](https://mineplugin.org/Multiverse-Core#%E9%99%84%E5%B1%9E%E6%8F%92%E4%BB%B6)

# 崩服漏洞

> Fix issue where special chars cause PatternSyntaxException leading to a server crash.

Multiverse-Core [4.3.1](https://www.spigotmc.org/resources/multiverse-core.390/update?update=424085) 版本已经修复此问题，请更新到最新版

如果你因为某些原因不能更新到最新版，可以使用修复补丁

补丁（只需安装其中一个）：

- [Multiverse-Patches](https://www.spigotmc.org/resources/.96390)
- [Multiverse-Core Fix](https://www.spigotmc.org/resources/.70218)
