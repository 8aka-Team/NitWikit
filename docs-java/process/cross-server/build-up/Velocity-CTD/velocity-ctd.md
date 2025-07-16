---
title: Velocity-CTD
slug: /velocity-ctd
sidebar_position: 2
---

# Velocity-CTD

![](../_images/Velocity.png)

[点此跳转到 GitHub 仓库](https://github.com/GemstoneGG/Velocity-CTD)

## 关于 Velocity-CTD 的介绍

### 什么是 Velocity-CTD？

Velocity-CTD 是 Velocity 的一个增强分支，由 GemstoneGG 团队开发维护。它在保持 Velocity 原有优秀特性的基础上，添加了大量实用功能和性能优化，旨在提供"一体化"的代理服务器体验。

### 主要特性

- **完全兼容 Velocity**：所有 Velocity 的功能和配置都得到支持
- **Redis 数据库支持**：内置 Redis 支持，可替代 RedisBungee 等插件
- **高效队列系统**：内置动态队列系统，可稳定处理数千名玩家
- **丰富的管理命令**：提供多种实用的管理和玩家命令
- **多转发系统**：支持为不同服务器使用不同的转发方法
- **性能优化**：使用更新的依赖项和各种性能优化
- **MiniMessage 支持**：支持完全可配置的消息格式

### 为什么选择 Velocity-CTD？

如果你需要以下功能，Velocity-CTD 是一个很好的选择：

- 需要 Redis 支持但不想安装额外插件
- 需要内置队列系统来管理服务器负载
- 希望有更多的管理命令来简化服务器管理
- 需要更好的性能和稳定性
- 希望有一个"开箱即用"的解决方案

### 与标准 Velocity 的区别

Velocity-CTD 在标准 Velocity 基础上增加了：

1. **内置功能**：Redis、队列系统、各种命令等
2. **性能优化**：更新的依赖项和各种性能改进
3. **管理便利性**：更多的配置选项和管理工具
4. **稳定性增强**：针对大型服务器的稳定性改进

## 内置命令

### 玩家命令

- `/hub` 或 `/lobby` - 返回大厅服务器
- `/ping [玩家]` - 查看延迟
- `/find <玩家>` - 查找玩家所在服务器
- `/server <服务器>` - 连接到指定服务器（支持队列）
- `/leavequeue` 或 `/dequeue` - 离开队列

### 管理员命令

- `/alert <消息>` - 向全网络发送公告
- `/alertraw <消息>` - 发送无前缀公告
- `/plist` - 查看代理服务器玩家列表
- `/transfer <玩家|current|服务器|all> <目标代理>` - 转移玩家到其他代理
- `/velocity sudo <玩家> <命令>` - 强制玩家执行命令
- `/velocity uptime` - 查看代理服务器运行时间
- `/velocity reload` - 重载配置文件

### 队列管理命令

- `/queueadmin add <玩家> <服务器>` - 添加玩家到队列
- `/queueadmin addall <源服务器> <目标服务器>` - 添加整个服务器的玩家到队列
- `/queueadmin list [服务器]` - 查看队列列表
- `/queueadmin listqueues` - 查看所有队列
- `/queueadmin pause <服务器>` - 暂停服务器队列
- `/queueadmin unpause <服务器>` - 恢复服务器队列
- `/queueadmin remove <玩家> [服务器]` - 从队列中移除玩家
- `/queueadmin removeall <服务器>` - 清空服务器队列

## 权限系统

### 基础权限

- `velocity.command.alert` - 使用 /alert 命令
- `velocity.command.alertraw` - 使用 /alertraw 命令
- `velocity.command.find` - 使用 /find 命令
- `velocity.command.hub` - 使用 /hub 和 /lobby 命令
- `velocity.command.ping` - 使用 /ping 命令
- `velocity.command.plist` - 使用 /plist 命令
- `velocity.command.sudo` - 使用 /velocity sudo 命令
- `velocity.command.transfer` - 使用 /transfer 命令
- `velocity.command.uptime` - 使用 /velocity uptime 命令

### 队列权限

- `velocity.queue.bypass` - 绕过所有服务器的队列
- `velocity.queue.bypass.<服务器>` - 绕过特定服务器的队列
- `velocity.queue.leave` - 离开队列
- `velocity.queue.priority.<ALL|服务器>.<权重>` - 设置队列优先级
- `velocity.queue.timeout.<秒数>` - 设置队列超时时间

### 队列管理权限

- `velocity.queue.admin.add` - 添加玩家到队列
- `velocity.queue.admin.addall` - 批量添加玩家到队列
- `velocity.queue.admin.list` - 查看队列列表
- `velocity.queue.admin.listqueues` - 查看所有队列
- `velocity.queue.admin.pause` - 暂停队列
- `velocity.queue.admin.remove` - 移除玩家从队列
- `velocity.queue.admin.removeall` - 清空队列
- `velocity.queue.admin.unpause` - 恢复队列

## FAQ

<!--markdownlint-disable ol-prefix-->

1. Q：Velocity-CTD 与标准 Velocity 兼容吗？

A：是的，Velocity-CTD 完全兼容标准 Velocity。你可以直接用 Velocity-CTD 替换 Velocity，所有配置和插件都能正常工作。

2. Q：Velocity-CTD 的性能如何？

A：Velocity-CTD 在标准 Velocity 基础上进行了多项性能优化，包括更新的依赖项和各种性能改进，通常比标准 Velocity 性能更好。

3. Q：如何从标准 Velocity 迁移到 Velocity-CTD？

A：直接替换 jar 文件即可，配置文件完全兼容。建议先备份现有配置，然后根据需要添加新功能的配置。

4. Q：多转发系统是什么？

A：这是 Velocity-CTD 的独特功能，允许你为不同的子服务器使用不同的转发模式，比如某些服务器使用 modern 转发，某些使用 legacy 转发。

<!--markdownlint-enable ol-prefix-->
