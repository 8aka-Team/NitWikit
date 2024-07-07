---
sidebar_position: 4
---


**有关 CheckItem 的相关链接**

:::info

`eCloud` : https://api.extendedclip.com/expansions/checkitem/

`Placeholder List` : https://wiki.placeholderapi.com/users/placeholder-list/#checkitem

`GitHub` : https://github.com/PlaceholderAPI/CheckItem-Expansion

:::

## 什么是 CheckItem ?
**CheckItem 是一个能够检测玩家背包中是否持有特定物品的拓展变量.**
**当玩家满足条件时便返回 True(yes) 否则为 False(no).**

## 为何需要 CheckItem ?
**在服务器的日常开发中，腐竹经常需要去判断一位玩家的背包中是否持有某些特定物品从而进行相关操作.**
**但在众多主流插件中，开发者会主动对其进行兼容，因此腐竹不需要额外设置或插件便能轻易识别到对方插件的相关物品.**
**不过大多数情况下，腐竹使用的插件不能确保其互相之间全部兼容.所以 CheckItem 能够帮你解决这个问题.**

## 如何安装和更新 CheckItem ?
**在游戏或管理员后台中输入以下指令**
```
/papi ecloud download CheckItem     -->//下载 CheckItem （请确保你正处于联网状态下）.
/papi ecloud update all     -->//更新你现有的所有拓展(包括CheckItem).
/papi reload     -->//重新加载插件以确保 CheckItem 下载或更新完成并开始使用.
```
在游戏中输入指令时请确保你拥有管理员（OP）权限或者 Papi 的相关权限.

在管理员后台中输入指令时请记得删除斜杆--> '/'.
