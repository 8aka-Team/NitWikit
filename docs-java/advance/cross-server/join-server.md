---
title: 加入服务器
sidebar_position: 3
---

# 加入服务器

在客户端点击加入服务器，输入你的跨服端的地址，连接即可。

# 连接到子服

## `/server` 命令

```
/server [配置中设置的子服名字]
```

不过不建议用 `/server` 详见 [此处](/docs-java/advance/cross-server/precautions.md#不要给玩家-server-权限)

:::warning

此命令只能由玩家自己在聊天框里敲命令执行，插件不能让玩家执行此命令！

**因为这条命令压根没有被注册到子服**

:::

## npc

### Citizens2

https://wiki.citizensnpcs.co/NPC_Commands#Bungee

```
/npc command add -p server MyServerName
```

### Adyeshach

ady 没有跨服动作，你可以导入其他插件的跨服动作来使用

如安装 Invero 插件后：

```
kether: import invero connect 子服名
```

或者使用 command...

### ZNPCs

https://github.com/gonalez/znpcs/wiki/Commands#server

```
/znpcs action [id] add SERVER [server]
```

- [id] 是 NPC 的 id.
- [server] 是子服名字.

## 菜单

### ChestCommands

https://filoghost.me/docs/chest-commands/actions

```
ACTIONS:
  - 'server: hub'
```

### DeluxeMenus

https://wiki.helpch.at/helpchat-plugins/deluxemenus/files

```
- '[connect] <serverName>'
```

### TrMenu

#### v3

https://hhhhhy.gitbook.io/trmenu-v3/menu/action/types#kua-fu-chuan-song

```
- 'server: Lobby'
```

#### v4 Invero

文档没写

```
- 'connect 子服名'
```
