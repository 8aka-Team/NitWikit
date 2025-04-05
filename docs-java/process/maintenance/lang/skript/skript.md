---
title: Skript
sidebar_position: 1
---

# Skript

:::warning

本文档大量参考了其他作者的教程，目前属于 **不可读** 状态

引用的内容主要来源于

TUCAOEVER 在 mcbbs 的教程

法棍 在 CSKB 发布的 [sk 教程](https://kb.corona.studio/zhCN/skript/startup.html)

:::

Skript 是一个脚本插件，取名来自 "script"。是一个面向 Bukkit 的编程语言，缩写为 SK。

因为其语法简单而受到很多中小型服主的青睐，很多人多多少少对这块有一些了解，

但是毕竟受众人群小，很多时候也会出现想学却无从下手，有问题却无处可问的尴尬境地。

## 特点

### 简单易上手

举一个简单的例子，为了实现玩家每次进入服务器就给有 "xxx" 权限的玩家 64 钻石的功能。

使用 Java 时的代码:

```java
@EventHandler
public void onPlayerJoin(PlayerJoinEvent evt) {
    Player player = evt.getPlayer(); // 玩家加入
    ItemStack itemstack = new ItemStack(Material.DIAMOND, 64); // 定义钻石
    if (player.hasPermission("xxx")) { // 权限判断
        inventory.addItem(itemstack); // 给予钻石
        player.sendMessage("欢迎你加入服务器!你获得了64枚钻石!");
    }
}
```

使用 Skript 时的代码:

```skript
on join:
    if player has permission "xxx": // 权限判断
        message "欢迎你加入服务器!你获得了64枚钻石!" // 发送消息
        give 64 diamond to player // 给予钻石
```

在大多数情况下， Skript 不会在意大小写、定冠词 "the"，只需要符合英语语法和基本的缩进。

即使使用了错误的语法，报错时也基本会提示具体错误类型。

### 拓展插件多

使用 Skript 时如果遇到 Skript 不包含的语法，可以使用其他拓展插件如
[Skbee](https://github.com/ShaneBeee/SkBee)、[Skript-reflect](https://github.com/SkriptLang/skript-reflect) 等插件拓展。

### 性能较低

相较使用 Java 编写的插件，进行相同的操作时， Skript 的性能会略低于 Java。

但大多数情况下性能和代码本身的质量有巨大的关系。代码质量差对于性能的影响远大于使用 Skript 对性能的影响。

## 下载及安装

下载链接：

1.7.10 2.1.2 https://dev.bukkit.org/projects/skript/files/779542/download

1.8.8-1.12.2 2.2dev37c https://github.com/SkriptLang/Skript/releases/download/dev37c/Skript.jar

最新版 https://github.com/SkriptLang/Skript/releases

将 `Skript.jar` 以及你需要的拓展插件如 `Skbee.jar` 安装到 `/plugins` 文件夹中即可。

## 基础教程

见[“基础教程”](BasicTutorials.md)。

## 进阶教程

见[“高级教程”](AdvancedTutorials.md)。
