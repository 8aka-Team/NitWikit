---
title: AutoUpdatePlugins
sidebar_position: 5
---

# AutoUpdatePlugins

插件自动更新器，需手动配置插件更新地址。支持 Spigot / Paper / Folia / BungeeCord / Velocity，覆盖从 1.8 到最新版本的 Minecraft 与 Java 8+ 环境。

## 功能

-   自动从多种来源更新插件，包括 GitHub、Hangar、Modrinth、SpigotMC、Jenkins、Curseforge 以及直链等。

## 使用方法

1.  将插件的 `.jar` 文件放入 `plugins/` 文件夹中。
2.  重启服务器。
3.  编辑 `plugins/AutoUpdatePlugins/` 目录下的 `config.yml` 和 `list.yml` 文件，添加你想要自动更新的插件和它们的下载源。
4.  执行 `/update` 指令或等待计划任务自动执行更新。

## 指令

-   `/update` - 更新 `list.yml` 文件中列出的所有插件。
-   `/aup <subcommand>` - 管理插件的设置和列表。

## 权限

-   `autoupdateplugins.update` - 允许玩家执行 `/update` 指令。
-   `autoupdateplugins.manage` - 允许玩家管理插件的列表和设置。

## 支持的源

AutoUpdatePlugins 支持从以下来源自动更新插件：

-   GitHub (Releases & Actions)
-   Jenkins
-   SpigotMC (Spiget)
-   dev.bukkit
-   Modrinth
-   Hangar
-   BusyBiscuit
-   blob.build
-   Guizhanss v2
-   MineBBS
-   CurseForge
-   以及包含直接 `.jar` 链接的通用页面。

## 链接

:::info

`GitHub` https://github.com/NewAmazingPVP/AutoUpdatePlugins

`SpigotMC` https://www.spigotmc.org/resources/autoupdateplugins.109683/

:::

## Bstats

[![](https://bstats.org/signatures/bukkit/AutoUpdatePlugins.svg)](https://bstats.org/plugin/bukkit/AutoUpdatePlugins/)