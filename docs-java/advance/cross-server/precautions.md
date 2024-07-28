---
title: 注意事项
sidebar_position: 8
---

# 注意事项

:::danger[非常危险]

不要不要不要给子服开公网!!!你的玩家只要靠跨服端就可以去到子服，如果你脑子有问题非要给子服开公网......这将会导致很多问题，比如绕过登录服随便登录别人账号，窃取 OP 账号权限等严重时可能会直接导致服务器被提权或后门等。

:::

## 不要给玩家 `/server` 权限

用 `菜单/npc` 或其他东西跨服，但是不要给玩家这个权限（玩家默认有），会被玩家发现服主的小 ♂ 秘 ♂ 密 ♂

这个权限默认是高于 Bukkit 插件权限的，也就是说玩家可以在未登录之前使用此命令跳转到另外一个服务器，如果另外的服务器没登陆插件，那么通过此方法就可以使用到 OP 账号

:::tip

如果你使用的是 AutheMe 登录插件，请务必在代理端安装对应的 AuthMe 插件，如 AuthMe-Velocity、AuthMeBungee 等插件

这样就可以避免一些此类问题了

:::

**关闭权限**

在跨服端安装 [Luckperms](/docs-java/process/plugin/ManageTool/Permission/Permission.md) 的跨服端对应版本然后执行命令：

- BungeeCord

```
/lpb group default permission set bungeecord.command.server false
```

- Velocity

```
/lpv group default permission set velocity.* false
```

自己搭了个 vc 然后权限节点没有补全，你把权限全 `false` 了算了，反正玩家也用不到

## bc 的语义扩大

bc 这个缩写应只指 BungeeCord 核心

但是很多人用 bc 指 BungeeCord 和它的分支，甚至指所有的跨服端（把 Velocity 和包括进去了）

希望在看的你用 bc 这个缩写时只用来指 BungeeCord 核心，避免产生不必要的误会

:::note

服务端有个命令是 `/bc` ，用来发公告的，这和此处的 BungeeCord 没有关系

:::
