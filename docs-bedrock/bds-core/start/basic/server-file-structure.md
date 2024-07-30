---
title: 服务端结构
sidebar_position: 1
---

:::tip
本篇文档已完成编写！<br />
支持后续 PR

# Biggest SUCCESS!!!

作者：[梦涵LOVE](https://github.com/MengHanLOVE1027)
:::

# 服务端结构

我们先来简单看一眼 BDS **开服后** 的文件夹结构：

```c
BDS服务端文件夹
├─behavior_packs                  // 安装新行为包的文件夹
├─config                          // 没啥用
├─definitions                     // 貌似是生成群系的内容
├─development_behavior_packs      // 为开发者提供安装新行为包的文件夹
├─development_resource_packs      // 为开发者提供安装新资源包的文件夹
├─development_skin_packs          // 为开发者提供安装新皮肤包的文件夹
├─resource_packs                  // 安装新资源包的文件夹
├─world-templates                 // 世界模板
├─worlds                          // 主世界文件夹
│  └─Bedrock level                // 世界存档
│    ├─db                         // 存档数据文件夹
│    ├─level_dat                  // 存档设定
│    ├─level.dat_old              // 存档设定（旧）
│    └─level_name.txt             // 存档名称
├─allowlist.json                  // 白名单文件
├─bedrock_server.exe              // 服务端启动程序
├─bedrock_server.pdb              // 程序数据库文件
├─bedrock_server_how_to.html      // 如何使用BDS服务器的官方指南（没多大用处，看看就行）
├─permissions.json                // 管理员（OP）玩家相关数据
├─release-notes.txt               // 服务端发行版本详情
├─server.properties               // 配置文件
└─valid_known_packs.json          // 已知的附加包
```

<!-- :::info

对于世界文件夹的详细说明，请前往 **[世界文件架构](what-is-world.md)**

::: -->

## 根目录下的一些文件

:::warning
请不要让您的服务端结构与文档解说结构有任何的 **缺少**，否则可能会出现 **玄学问题**

若您 **一致认为** 有可删之处，那么以下是 **绝对可以删** 的服务端结构（反正每次开服都会检测是否有这些文件夹，如果没有还是会创建的）

<details>
  <summary>点击展开</summary>

- `config`
- development_behavior_packs
- development_resource_packs
- development_skin_packs
- world-templates
- bedrock_server_how_to.html（这个不会自己创建）
- release-notes.txt（这个不会自己创建）
- valid_known_packs.json

</details>
:::


---
- `behavior_packs`
  - 用于安装新的行为包。行为包可以改变游戏中的某些行为，例如，它们可以修改怪物行为、游戏规则或添加新的游戏机制。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `config`
  - 这个文件夹通常用于存储服务器的配置文件。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `definitions`
  - 这个文件夹包含定义文件，这些文件通常用于定义游戏中的群系、结构、生物生成等信息。它们决定了世界中不同区域的特性和外观。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `development_behavior_packs`
  - 为开发者提供安装新行为包的文件夹。这允许开发者测试和开发自定义的行为包，而不会影响到主服务器的行为包。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `development_resource_packs`
  - 为开发者提供安装新资源包的文件夹。开发者可以在这里添加、测试和开发自定义的资源包，如纹理、模型和音效等。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `development_skin_packs`
  - 为开发者提供安装新皮肤包的文件夹。开发者可以在这里添加和测试自定义的玩家皮肤和其他角色的外观。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `resource_packs`
  - 用于安装新的资源包。资源包可以改变游戏中的视觉和声音元素，例如，它们可以提供新的纹理、音效和模型。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `world-templates`
  - 包含世界模板，这些模板可以被用来快速创建具有特定设置和结构的新世界。
  - <font color="green">有点用，但不多。</font>
---
- `worlds`
  - 这是存储主世界文件夹的地方。每个世界都有自己的子文件夹，其中包含该世界的所有数据，如地形、建筑、玩家进度等。
    - `Bedrock level`
      - 包含特定世界的存档数据。
        - `db`
          - 存档数据文件夹，通常包含有关世界的数据库文件。
        - `level_dat`
          - 包含世界的基本设置和属性，如游戏规则、时间、天气等。
        - `level.dat_old`
          - 旧版的存档设定文件，通常在更新或备份时使用。
        - `level_name.txt`
          - 包含世界名称的文件。
---
- `allowlist.json`
  - 白名单文件，列出了允许进入服务器的玩家列表。
  - （如果您在 `server.properties` 中开启了白名单，您就可以在该文件中添加和管理谁被允许或不被允许进入服务器）。
---
- `bedrock_server.exe`
  - 服务端启动程序，用于启动和运行《我的世界》基岩版服务器。

  - 你可以改名叫任何名字（只要以 `.exe` 结尾就行），但不建议您这么做，可能会导致成为后续操作报错的因素。例如：
  1. 若您使用 **面板** 开服，需要在对应的 **启动路径** 中修改服务端启动程序的文件名
  2. 若您使用 **启用脚本** 开服，需要在脚本对应位置的 **启动命令** 中修改 **启动程序的文件名** 为 **该服务端启动程序的文件名**（bedrock_server.exe）
---
- `bedrock_server.pdb`
  - 程序数据库文件，通常用于调试和错误分析。
---
- `bedrock_server_how_to.html`
  - 如何使用BDS服务器的官方指南，虽然您说“没多大用处”，但它可能包含有关配置和运行服务器的有用信息。
  - 有点用，但不多
---
- `permissions.json`
  - 管理员（OP）玩家相关数据（如 UUID 及游戏名称等相关信息），包括权限设置和角色定义。
---
- `release-notes.txt`
  - 服务端发行版本详情，包含了每个版本更新的日志和更改内容。
  - <font color="red">BUT! 没啥用...后续也不会涉及...</font>
---
- `server.properties`
  - 服务器配置文件，用于调整各种服务器设置，如设置端口，设置游戏难度，设置游戏模式（生存、创造等）等。
  - [**如何使用？**](#)
---
- `valid_known_packs.json`
  - 包含已知的附加包列表，这些包可能包括行为包、资源包等，服务器会根据这个列表来验证安装的包。
  - <font color="green">有点用，但不多。</font>
---


至此，大部分的以 BDS 为基础的服务器核心服务端的结构已经大致呈现在您眼前。

:::tip

如果你的服务端有更多的文件，大概率是 [**插件加载器** / **插件**](../../process/plugins/plugins-loader-choose.md)（如针对 BDS 的 Levilamina 插件加载器会释放更多文件夹）创建的文件夹，一般来说无需担心。

:::
