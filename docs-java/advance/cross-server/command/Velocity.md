---
title: Velocity 端
sidebar_position: 2
---

# 命令

Velocity 默认在代理的核心中包含了一些命令，这些命令是基于它们对大多数用户所需的。如果您需要更多命令，您可以安装插件来添加。

| 命令                                      | 权限                                 | 描述                                                         |
|-------------------------------------------|--------------------------------------|--------------------------------------------------------------|
| `/velocity`                               | N/A                                  | 包含许多子命令，用于管理代理。                           |
| `/velocity plugins`                      | `velocity.command.plugins`        | 可以使用此命令查看代理上当前激活的所有插件，包括名称、作者和版本。 |
| `/velocity version`                      | `velocity.command.info`            | （默认所有用户拥有），可以查看代理上运行的 Velocity 版本。 |
| `/velocity reload`                       | `velocity.command.reload`         | 代理将从磁盘上的 `velocity.toml` 读取并重新配置自己。 |
| `/velocity dump`                         | `velocity.command.plugins`        | 可以使用此命令获取代理的匿名详细信息转储。 |
| `/velocity heap`                         | `velocity.command.heap`           | **警告**：此命令生成的堆转储包含有关您的 Velocity 实例的详细信息，可能相当敏感。 |
| `/server`                                | `velocity.command.server`         | （默认所有用户拥有），玩家可以使用此命令查看并切换到另一个服务器。 |
| `/shutdown`                              | 无（从控制台执行）                | 此命令将优雅地关闭 Velocity 代理，所有玩家将从代理断开连接。 |
| `/glist`                                 | `velocity.command.glist`           | 如果用户具有此权限（默认无人具有），玩家可以使用此命令查看当前在代理上的玩家数量。 |
| `/send`                                  | `velocity.command.send`            | 他们可以将其他玩家（或代理上的所有玩家）发送到另一个服务器。 |