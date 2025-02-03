---
title: 服务端结构
sidebar_position: 1
---

# 服务端结构

我们先来简单看一眼 Nukkit **开服后** 的文件夹结构（大致结构是这样，部分分支会因为加了不同的功能结构会不一样）：

```c
Nukkit Server/
├── nukkit-1.0-SNAPSHOT.jar //服务器核心
├── start.bat               // Windows 运行脚本
├── start.sh                // linux 运行脚本
├── start.command           // macOS 运行脚本
├── server.properties       // 服务端配置文件
├── permissions.yml         // 用于设置玩家权限的
├── banned-players.txt      // 存储被封禁的玩家名单的
├── banned-ips.txt          // 存储被封禁的IP地址
├── ops.txt                 // 用于设置管理员（OP）的
├── worlds/                 // 主世界文件夹
│   ├── world/              // 世界存档
│   │   ├── level.dat       // 存档设定
│   │   ├── region/         // 存储世界区块数据
│   │   └── entities/       // 存储世界中的实体数据
├── plugins/                // 插件存放文件夹
├── logs/                   // 服务器日志存放
├── whitelist.txt           // 存储允许加入服务器的玩家名单
└── rcon_password.txt       // 存储 RCON（远程控制）功能的密码
```

<!-- :::info

对于世界文件夹的详细说明，请前往 **[世界文件架构](what-is-world.md)**

::: -->

## 根目录下的一些文件

---

- `nukkit-1.0-SNAPSHOT.jar`
  - 这是 Nukkit 的核心程序文件，用于启动和运行服务端。

---

- `start.bat / start.sh / start.command`
  - 启动服务器的脚本文件，分别对应 Windows、Linux 和 macOS 系统，用于启动和运行《我的世界》基岩版服务器。

  - 你可以改名叫任何名字(只要以 `.bat / .sh / .command` 结尾就行)，但不建议你这么做，可能会导致成为后续操作报错的因素。例如：
  1. 若你使用 **面板** 开服，需要在对应的 **启动路径** 中修改服务端启动程序的文件名
  2. 若你使用 **启用脚本** 开服，需要在脚本对应位置的 **启动命令** 中修改 **启动程序的文件名** 为 **该服务端启动程序的文件名**

---

- `server.properties`
  - 这是服务器的主要配置文件，用于设置服务器的各种参数，如服务器名称、端口号、最大玩家数、游戏模式等。

---

- `permissions.yml`
  - 用于设置玩家权限的文件，可以定义不同用户组的权限。

---

- `banned-players.txt 和 banned-ips.txt`
  - 分别用于存储被封禁的玩家名单和 IP 地址。

---

- `worlds`
  - 这是存储主世界文件夹的地方。每个世界都有自己的子文件夹，其中包含该世界的所有数据，如地形、建筑、玩家进度等。
    - `world`
      - 包含特定世界的存档数据。
        - `level_dat`
          - 世界的基本信息文件。
        - `region 文件夹`
          - 存储世界区块数据。
        - `entities 文件夹`
          - 存储世界中的实体数据。

---

- `plugins 文件夹`
  - 用于存放所有插件的 .jar 文件。插件可以扩展服务器的功能，例如添加新的命令、游戏规则或事件处理。

---

- `whitelist.txt`
  - 白名单文件，列出了允许进入服务器的玩家列表。
  - (如果你在 `server.properties` 中开启了白名单，你就可以在该文件中添加和管理谁被允许或不被允许进入服务器)。

---

- `logs 文件夹`
  - 存储服务器运行时生成的日志文件，用于记录服务器的运行状态和玩家行为。

---

- `rcon_password.txt`
  - 用于存储 RCON（远程控制）功能的密码。

---

至此，大部分的以 Nukkit 为基础的服务器核心服务端的结构已经大致呈现在你眼前。
