---
title: Config 快速指南
sidebar_position: 5
---

# Config 快速指南

我们为懒人列出了配置文件那些比较重要的选项 (善用 CTRL + F ) ：

## 语言

```yml
Language: EN
```

游戏内提示语言，默认为 EN，修改为 CN 后即可实现汉化，此项不会修改 `config.yml` 等配置文件中的可自定义内容。

## 传送

```yml
Tpa:
  Time: 60
```

玩家接受 tpa 或者 tpahere 请求的默认时间秒，超时则请求传送失效，按喜好修改。

```yml
Tpa:
  Move: false
```

若即将传送，玩家是否可以移动，默认为 false，推荐修改为 true。

## 睡觉加速

```yml
MinBeforeSpeeding: 50%
```

当大于设定值的玩家进入睡眠，就会夜晚加速，设定值可为确切的数量也可为百分数，默认值为 50%，按需调整。

## Boss血条

```yml
HpBarEnabled: true
```

实体生物显示原版 boss 血条，默认为 true，推荐修改为 false 使用 [HoloMobHealth](https://www.spigotmc.org/resources/75975/) 代替。

## 出生点

```yml
ReSpawn:
  Enabled: true
```

世界重生优先顺序，默认为 true，推荐修改为 false 使用原版出生顺序。

## 礼包

```yml
Newbie:
  Kit: Newbie
```


新玩家进服时获得的礼包，默认为 Newbie ，推荐修改为空如下所示。

```yml
Newbie:
  Kit:
  - ''
```

## AFK - 使用命令 /afk 暂时离开

```yml
Afk:
  Enabled: false
```

AFK离开系统，默认为 false，推荐修改为 true 增加游戏娱乐性。

```yml
AutoAfkIn: 300
```

当玩家多少秒没移动以后，进入离开状态，按需调整。

```yml
AutoAfkCmds:
  - cmi broadcast !&6[playerDisplayName] &eis now AFK
```

当玩家自动进入离开状态后执行的控制台指令，可按喜好修改 `is now AFK` 为其他提示文字。

```yml
ManualAfkCmds:
  - cmi broadcast !&6[playerDisplayName] &eis now AFK
```

当玩家手动输入 `/cmi afk` 并进入离开状态时执行的控制台指令，可按喜好修改 `is now AFK` 为其他提示文字。

```yml
AfkLeaveCmds:
  - cmi broadcast !&6[playerDisplayName] &eis no longer AFK
```

当玩家退出离开状态后执行的控制台指令，可按喜好修改 `is no longer AFK` 为其他提示文字。

## TODO...