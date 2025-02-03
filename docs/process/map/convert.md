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

该工具适合超小版本跨度转换,比如 1.21 -> 1.21.1，并且不适合降级

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

Chunker.app 是一个多功能的转换工具,支持基岩版和 Java 之间的转换,在转换大版本的时候也推荐使用

目前不支持实体和玩家背包

[下载地址](https://www.chunker.app/) [文档](https://learn.microsoft.com/en-us/minecraft/creator/documents/chunkeroverview?view=minecraft-bedrock-stable)

## Amulet

一个非常高级的地图编辑工具,支持 Java 1.12+ 和基岩版 1.7+ 所有地图格式

[下载地址](https://www.amuletmc.com/)

:::warning

Amulet 可用于高版本地图转低版本，但在地图转换后可能出现光源问题

使用 **[FastAsyncWorldEdit](https://modrinth.com/plugin/fastasyncworldedit/)** 选择光源异常区域，先 //removelight 再 //fixlighting

:::