---
title: 概览
sidebar_position: 1
---

# 概览

:::info

`SpigotMC` https://www.spigotmc.org/resources/.6245/

`GitHub` https://github.com/PlaceholderAPI/PlaceholderAPI

`Wiki` https://wiki.placeholderapi.com/

`插件百科(不推荐，老掉牙了)` https://mineplugin.org/PlaceholderAPI(%E6%97%A7)

:::

PlaceHolderAPI是一个广泛使用的变量插件，它可以做到 Math(数学运算) Checkitem(操作玩家物品) JavaScript(执行js) Progress(制作进度条) 显示变量 等

## 什么是变量?

这里指的变量是形似 `%player_name%`， 即 `%xxx%` 的占位符

它们用来显示一些信息

如 `%player_name%` 是显示玩家名字

`%playerpoints_points%` 是显示 PlayerPoints 插件的玩家点券

## 更改 boolean

在 `plugins\PlaceholderAPI\config.yml` 中找到

```
boolean:
  'true': 'yes'
  'false': 'no'
```

将yes和no改为true false

不改也没事，就是改成true false会更方便判断

## 在哪寻找我要的变量?

:::info

`Wiki` :https://wiki.placeholderapi.com/

`eCloud` :https://api.extendedclip.com/all/

`Placeholder List` :https://wiki.placeholderapi.com/users/placeholder-list/

:::

## 下载变量扩展

```
/papi ecloud download 扩展名
```

然后执行命令 `/papi reload`

### 没法下载?

![](_images/概览/变量下载失败.png)

看起来你连不上ecloud

手动下载吧 https://api.extendedclip.com/all/

把下载的jar文件塞到 `plugins\PlaceholderAPI\expansions` 文件夹

然后执行命令 `/papi reload`
