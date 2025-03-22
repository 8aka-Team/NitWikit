---
title: 跨服端命令
sidebar_position: 4
---

# 跨服端命令

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="bungeeCord" label="BungeeCord" default>

<!--markdownlint-disable line-length-->

| 命令 | 权限 | 描述 |
| --- | --- |--- |
| `/alert` | `bungeecord.command.alert` | 发送一条整个群组的公告，会显示在所有的子服务器内。颜色符是&，使用&h 可以清除所有默认的格式 |
| `/alertraw <json格式的信息>` | `bungeecord.command.alert` | 和上一个命令一样，但是仅允许使用json格式的内容 |
| `/bungee` | N/A | 显示 BungeeCord 的版本信息 |
| `/end` | `bungeecord.command.end` | 关闭 BungeeCord 跨服端，类似于Bukkit服务器下的/stop |
| `/find` | `bungeecord.command.find` | 确认指定玩家是否在线和他现在在哪个子服务器内 |
| `/glist` | `bungeecord.command.list` | 显示所有的子服务器和每个服务器当前在线人数 |
| `/greload` | `bungeecord.command.reload` | 重载 BungeeCord 跨服端的配置文件，将重新载入子服务器列表、监听选项和一些配置项目，但是不会重载BC端插件和权限 |
| `/ip` | `bungeecord.command.ip` | 查看指定玩家的真实连接IP |
| `/perms` | `N/A` | 显示你拥有的权限和所在权限组 |
| `/send` | `bungeecord.command.send` | 将指定玩家移动到目标子服务器，使用 “current” 将会把你所在服务器的所有玩家移动到目标服务器，使用“all”将会把整个群组下的玩家移动到目标服务器。子服务器名就是你在“config.yml”的“servers”下面设置的服务器名 |
| `/server` | `bungeecord.command.server` | 送到指定子服务器，这个权限默认是高于 Bukkit 插件权限的，也就是说玩家可以在未登录之前使用此命令跳转到另外一个服务器，如果另外的服务器没登陆插件，那么通过此方法就可以使用到OP账号 |

  </TabItem>

  <TabItem value="velocity" label="Velocity" default>

| 命令                      | 权限                           | 描述                                                                             |
|---------------------------|--------------------------------|----------------------------------------------------------------------------------|
| `/velocity`               | N/A                            | 包含许多子命令，用于管理跨服端。                                                 |
| `/velocity plugins`       | `velocity.command.plugins`     | 可以使用此命令查看跨服端上当前运行的所有插件，包括名称、作者和版本。             |
| `/velocity version`       | `velocity.command.info`        | （默认所有用户拥有），查看 Velocity 版本。                                       |
| `/velocity reload`        | `velocity.command.reload`      | 跨服端重载 `velocity.toml` 文件。                                                |
| `/velocity dump`          | `velocity.command.plugins`     | 可以使用此命令获取跨服的匿名详细信息转储。                                       |
| `/velocity heap`          | `velocity.command.heap`        | **警告**：此命令生成的堆转储包含有关你的 Velocity 实例的详细信息，可能相当敏感。 |
| `/server`                 | `velocity.command.server`      | （默认所有用户拥有），查看或传送到指定子服务器。                                 |
| `/shutdown`               | 无(从控制台执行)               | 此命令将优雅地关闭 Velocity 跨服，所有玩家将从跨服端断开连接。                   |
| `/glist`                  | `velocity.command.glist`       | （默认无人具有此权限），查看当前在跨服端上的玩家数量。                           |
| `/send`                   | `velocity.command.send`        | 将其他玩家（或跨服端上的所有玩家）发送到指定子服。                               |

  </TabItem>
</Tabs>
