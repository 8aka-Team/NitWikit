---
title: 服务端结构
sidebar_position: 1
---

:::warning
本篇文档持续更新中...<br />
支持后续 PR

# Biggest TODO...

作者：梦涵LOVE
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

- `permissions.json`

以 json 格式存放了 OP 玩家的 UUID 及游戏名称等相关信息。

---

- `bedrock_server.exe`

你可以改名叫任何名字（只要以 `.exe` 结尾就行），但不建议您这么做，可能会导致成为后续操作报错的因素。例如：

1. 若您使用 **面板** 开服，需要在对应的 **启动路径** 中修改服务端启动程序的文件名
2. 若您使用 **启用脚本** 开服，需要在脚本对应位置的 **启动命令** 中修改 **启动程序的文件名** 为 **该服务端启动程序的文件名**（bedrock_server.exe）

---

- `server.properties`

服务端的一些基本设置就在里面，如设置端口，设置游戏难度，设置游戏模式（生存、创造等）等。[**如何使用**](#)

---

- `whitelist.json`

白名单列表。（如果您在 `server.properties` 中开启了白名单，您就可以在该文件中添加和管理谁被允许或不被允许进入服务器。）

---

至此，大部分的以 BDS 为基础的服务器核心服务端的结构已经大致呈现在您眼前。

:::warning

如果你的服务端有更多的文件，大概率是 **插件加载器** / **插件**（如针对 BDS 的 Levilamina 插件加载器会释放更多文件夹）创建的文件夹，一般来说无需担心。

:::
