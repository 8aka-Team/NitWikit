---
title: 地图转换
sidebar_position: 2
---

# 地图转换

在某些时候我们需要更改服务端版本(比如 1.20 -> 1.21)，然后就会

<!--markdownlint-disable line-length-->

```text
[Configurations] Loading a newer configuration than is supported (31 > 30)! You may have to backup & delete the world config file to start the server.
```

<!--markdownlint-enable line-length-->

或者需要将 Java 版地图转换到基岩版

## Paper 内置转换工具

:::tip

该工具适合超小版本跨度转换，比如 1.21 -> 1.21.1，并且不适合降级

:::

你只需要在启动参数最后加上`--forceUpgrade`就行了，像这样

```shell
java -Xms2G -Xmx2G -jar server.jar --nogui
```

改成这样

```shell
java -Xms2G -Xmx2G -jar server.jar --nogui --forceUpgrade
```

然后启动服务端，等待转换完成，**不要进入服务器或操作服务器**，这是非常危险的，可能会**直接废档**

转换完后，删掉 `--forceUpgrade` 再启动就可以了

## Chunker.app

:::info

`官网` https://www.chunker.app

`GitHub` https://github.com/HiveGamesOSS/Chunker

`文档` https://learn.microsoft.com/en-us/minecraft/creator/documents/chunkeroverview?view=minecraft-bedrock-stable

:::

Chunker.app 是一个多功能的转换工具，支持基岩版和 Java 之间的转换，在转换大版本的时候也推荐使用

他还有一个网页版本：https://web.chunker.app

目前不支持实体和玩家背包

## Amulet

:::info

`官网` https://www.amuletmc.com

`GitHub` https://github.com/Amulet-Team/Amulet-Map-Editor

`文档` https://learn.microsoft.com/en-us/minecraft/creator/documents/chunkeroverview?view=minecraft-bedrock-stable

:::

一个非常高级的地图编辑工具，支持 Java 1.12+ 和基岩版 1.7+ 所有地图格式

:::tip

Amulet 可用于高版本地图转低版本，但在地图转换后可能出现光源问题

使用 [FastAsyncWorldEdit](https://nitwikit.8aka.org/Java/process/plugin/WorldManagement/FastAsyncWorldEdit)

选择光源异常区域，先 //removelight 再 //fixlighting

:::

## MCA Selector

:::info

`GitHub` https://github.com/Querz/mcaselector

`文档` https://github.com/Querz/mcaselector/wiki

:::

一个简单直观的 Minecraft Java 版存档的编辑器，支持导出或删除选定区块和区域，并且支持不同版本不同存档地图之间的区块迁移。

![](_images/mcaselector.png)

:::tip

使用 MCA 选择器迁移区块到新存档时，通过以下方式让区块边界可以平滑过渡，避免方块断层。

`教程` https://www.mcmod.cn/post/3136.html

:::

## 将地图转移到基岩版

:::warning

此处属于危险操作，请备份服务端存档，此处教学如有错误请在提出问题

:::

### BDS

#### BDS 局部导入

在 JAVA 版做完建筑，使用 [Chunker](https://chunker.app/) 转换存档

将建筑存档与服务端存档导入本地基岩版客户端

使用 [WorldEdit-Addon](https://mcpedl.com/worldedit-be-addon/) 在建筑存档内选择区域导出结构文件，并用其将结构文件粘贴到服务端存档

导出修改过的服务端存档，去除其中的 WorldEdit-Addon，再将修改过的存档覆盖服务端存档

具体使用方法请看官方文档，这里不过多赘述

[WE-Addon 结构的使用](https://worldedit-be-docs.readthedocs.io/en/stable/usage/structures/)

:::info

若你有电脑，则不需要上述繁琐的步骤，可以直接使用 [Amulet](https://www.amuletmc.com/) 进行建筑存档存档转换，选区粘贴到服务端存档

:::

#### BDS 存档导入

在 Java 版做完建筑，使用 [Chunker](https://chunker.app/) 转换存档

将转换好的存档导入服务器

这种方法应用于导入无数据的新世界，例如小游戏大厅

### NukkitX

#### NKX 局部导入

在 JAVA 版做完建筑，使用 [WE](https://modrinth.com/plugin/worldedit) / [FAWE](https://modrinth.com/plugin/fastasyncworldedit) 选区导出 .schematic 文件

于 NKX 服务端内使用 [FastAsyncWorldEdit-Nukkit](https://cloudburstmc.org/resources/fastasyncworldedit.30/) 导入 .schematic 文件粘贴到指定位置

:::warning

NukkitX 不支持超过 1.12.2 的方块，建造地图时需注意

schematic 导入粘贴可能会出现方块状态不正确的情况，例如楼梯统一朝向

:::

#### NKX 存档导入

NukkitX 通用 JAVA 版 1.12.2 的世界，可直接替换进去
