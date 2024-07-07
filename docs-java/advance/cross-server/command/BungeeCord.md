---
title: BungeeCord 端
sidebar_position: 1
---

# 命令

| 命令 | 权限 | 描述 |
| --- | --- |--- |
| `/alert` | `bungeecord.command.alert` | 发送一条整个群组的公告，会显示在所有的子服务器内。颜色符是&，使用&h 可以清除所有默认的格式 |
| `/alertraw <json格式的信息>` | `bungeecord.command.alert` | 和上一个命令一样，但是仅允许使用json格式的内容 |
| `/bungee` | N/A | 显示BungeeCord的版本信息 |
| `/end` | `bungeecord.command.end` | 关闭BungeeCord代理端，类似于Bukkit服务器下的/stop |
| `/find` | `bungeecord.command.find` | 确认指定玩家是否在线和他现在在哪个子服务器内 |
| `/glist` | `bungeecord.command.list` | 显示所有的子服务器和每个服务器当前在线人数 |
| `/greload` | `bungeecord.command.reload` | 重载BungeeCord代理端的配置文件，将重新载入子服务器列表、监听选项和一些配置项目，但是不会重载BC端插件和权限 |
| `/ip` | `bungeecord.command.ip` | 查看指定玩家的真实连接IP |
| `/perms` | `N/A` | 显示你拥有的权限和所在权限组 |
| `/send` | `bungeecord.command.send` | 将指定玩家移动到目标子服务器，使用“current”将会把你所在服务器的所有玩家移动到目标服务器，使用“all”将会把整个群组下的玩家移动到目标服务器。子服务器名就是你在“config.yml”的“servers”下面设置的服务器名 |
| `/server` | `bungeecord.command.server` | 送到指定子服务器，这个权限默认是高于Bukkit插件权限的，也就是说玩家可以在未登录之前使用此命令跳转到另外一个服务器，如果另外的服务器没登陆插件，那么通过此方法就可以使用到OP账号 |
