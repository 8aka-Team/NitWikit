---
title: Config 快速指南
sidebar_position: 2
---

# Config 快速指南

我们为懒人列出了配置文件那些比较重要的选项 (善用 CTRL + F ) ：

## 传送

```yaml
teleport-cooldown: 0
```

传送功能的冷却时间(以秒为单位)，如/home， /tp， etc 等命令。

```yaml
teleport-delay: 0
```

传送延迟时间(以秒为单位)，在玩家被确实传送之前的时间.如果玩家在该时间内移动了或者受到攻击，传送将取消。

## 礼包/工具包

```yaml
skip-used-one-time-kits-from-kit-list: false
```

当该选项开启后 (例如. delay < 0) 则玩家使用过一次该项工具包以后，将从玩家的kit列表中删去该项可用工具包。

```yaml
kit-auto-equip: false
```

启用后，只要玩家的盔甲槽是空的，就会自动装备领取的kit包中的盔甲。

```yaml
use-nbt-serialization-in-createkit: false
```

默认为false。

应该是说，开启后 kit 可以存 nbt 的东西了。

## AFK - 使用命令 /afk 暂时离开

```yaml
auto-afk: 300
```

在超时(以秒为单位)后，用户将被设置为 AFK。
此功能需要玩家拥有 essentials.afk.auto 权限。
设置为 -1 表示不会超时。

```yaml
auto-afk-kick: -1
```

在超时(以秒为单位)后，用户将被踢出服务器。
拥有 essentials.afk.kickexempt 权限可以避免被踢出。
设置为 -1 表示不会超时。

```yaml
afk-list-name: "挂机中"
```

设置玩家AFK时的列表名称。 默认情况下为 none 。

## 杂项

```yaml
death-messages: true
```

你可以在此处禁用原版的死亡消息。

```yaml
custom-join-message: "&e[&a+&e]&6比驿站丑的 {USERNAME} 加入了游戏"
custom-quit-message: "&e[&c-&e]&6比驿站丑的 {USERNAME} 退出了游戏"
custom-new-username-message: "&e[&a+&e]&6比驿站丑的新玩家 {USERNAME} 加入了游戏"
```

你可以在此处设置自定义加入和退出消息。

将此设置为 none 以使用默认的原版消息。

## 家

```yaml
spawn-if-no-home: true
```

玩家执行了/home ，但他没有设置家。

如果此项设置为 true ，玩家将会传送回出生点。

如果此项设置为 false ，玩家不会被传送。

## 经济

```yaml
starting-balance: 0
```

设置新玩家进服的启动资金。

## EssentialsX Spawn + New Players

注意：你需要安装 EssentialsX Spawn 才可以使用。

```yaml
announce-format: '&7[&b驿站&7]&a欢迎大傻蛋来服务器！'
```

设置玩家进服的欢迎语。

```yaml
kit: tools
```

是否想要玩家第一次进入服务器时赠送新手礼物？

设置为 '' 可禁用此功能。

## EssentialsX Chat

注意：你需要安装 EssentialsX Chat 才可以使用，推荐用别的聊天插件...

```yaml
format: '<{DISPLAYNAME}> {MESSAGE}'
```

设置玩家聊天的公屏显示格式

## EssentialsX Protect

注意：你需要安装 EssentialsX Protect 才可以使用，同样推荐用别的插件...

太多东西了，自己看着调。

## EssentialsX AntiBuild

注意：你需要安装 EssentialsX AntiBuild 才可以使用，同样推荐用别的插件...

太多东西了，自己看着调。
