---
title: 服务端结构
sidebar_position: 3
---

# 服务端结构

我们先来简单看一眼 Purpur 的文件夹结构：

```c
├─assets            // 储存 Minecraft 音效贴图等重要文件，不要乱动
├─cache             // 缓存文件夹，一般放置 Minecraft 原版服务器
├─config            // Paper fork 服务器特有的配置文件，用于放置 Paper 的配置文件
├─crash-reports     // 存放服务器崩溃的完整报告
├─libraries         // 存放服务器及部分插件的依赖库
├─logs              // 存放服务端日志的文件夹
├─plugins           // 存放插件的文件夹
├─versions          // 存放对应版本需要的依赖 jar
├─world             // 主世界文件夹
│  ├─advancements   // 成就文件夹
│  ├─data           // 世界数据文件夹
│  ├─datapacks      // 数据包
│  │  └─bukkit
│  ├─entities       // 实体数据
│  ├─playerdata     // 玩家数据
│  ├─poi            // 兴趣点数据
│  ├─region         // 区块数据
│  └─stats          // 统计信息
├─world_nether      // 地狱世界文件夹
│    └─DIM-1
│       ├─data      // 末地
│       ├─entities
│       ├─poi
│       └─region
└─world_the_end     // 末地世界文件夹
    └─DIM1
        ├─data
        ├─entities
        ├─poi
        └─region
```

对于类似 Catserver 的混合服务器，文件夹结构是类似的，基本就多了 mods 文件夹，少了 Bukkit 的下游服务器特有的配置（如 `purpur.yml` 等）。

:::info

对于世界文件夹的详细说明，请前往 **[世界文件架构](what-is-world.md)**

:::

## 根目录下的一些文件

- `.console_history`

存放了控制台（又叫后台）曾经使用过的指令，方便你使用键盘中的 ↑ 键快捷查找曾使用的指令，也可用于查看后台异常。

- `banned-ips.json`

以 json 格式存放的被 ban IP 玩家的 UUID 及游戏名称等相关信息，一旦玩家被 banip ，此 IP 将无法再进入服务器。

- `banned-players.json`

以 json 格式存放了被 ban 玩家的 UUID 及游戏名称等相关信息，离线服 ban 玩家后换 ID 即可进入服务器，而正版服无法通过改名重新进入服务器。

- `bukkit.yml`

由 Bukkit 派生得到的服务端都有的文件。保存着 Bukkit 所提供的最基本的设置选项。

- `commands.yml`

它提供了一种快速而简单的方法来强制服务器使用 Mojang 提供的命令（而不是 Bukkit 中内置的命令）而不产生冲突。

- `eula.txt`

在首次开服的时候，我们需要同意 EULA 协议。

- `help.yml`

一些插件的帮助信息会出现在这里面，一般不需要进行什么修改。

- `ops.json`

以 json 格式存放了 OP 玩家的 UUID 及游戏名称等相关信息。

- `purpur.jar`

你可以改名叫任何名字（只要以 `.jar` 结尾，且在启动脚本中对应修改）

- `purpur.yml`

Purpur 服务器特有的配置文件，极其详细的配置项，功能非常丰富，几乎可以替代数款插件。

- `permissions.yml`

是默认的权限定义 YAML 文件，在启动时自动生成。它的主要功能是将权限节点组合到一个文件中，以便权限插件（以及使用权限的插件）可以在整个系统中使用它。

- [`server.properties`](https://minecraft-zh.gamepedia.com/Server.properties)

服务端的一些基本设置就在里面，如设置端口，设置游戏难度，设置游戏模式（生存、创造等）等。

- `spigot.yml`

Spigot 服务器都有的配置文件。

- `usercache.json`

储存着用名字及 UUID 信息的缓存文件。

- `version_history`

一些 Minecraft 和服务端核心的版本信息，一般记录着曾经使用过的版本。

- `whitelist.json`

白名单列表。（如果您在[`server.properties`](https://minecraft-zh.gamepedia.com/Server.properties)中开启了白名单，您就可以在该文件中添加和管理谁被允许或不被允许进入服务器。）

至此，大部分的以 Bukkit 为基础的服务器核心服务端的结构已经大致呈现在您眼前。

:::tip

如果你的服务端有更多的文件，大概率是插件（如 Slimefun、FAWE 等插件会释放更多文件夹）创建的文件夹，一般来说无需担心。

:::