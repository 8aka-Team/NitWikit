---
title: 什么是服务端？
sidebar_position: 0
---

# 什么是服务端？

根据[百度百科](https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E7%AB%AF/6492316)的描述：

> 服务端是一种有针对性的服务程序。服务端是为客户端服务的，服务的内容诸如向客户端提供资源，保存客户端数据。

简单来说，我们通常通过*Minecraft启动器*玩的游戏属于**客户端**。

当我们进行*多人游戏*联机时，我们需要连接到一个服务器，当玩家们在同一个服务器环境下，我们才能实现联机。

而这个允许我们进行联机的*程序*可以简单称为**服务端**。

再举个例子，玩家身为*用户*(或者将*客户*)，**服务端**就相当于餐厅的服务员，为我们提供服务，比如*允许我们与其他玩家交互*等。

## Minecraft 服务端

**Minecraft**提供了让玩家可以进行*多人游戏*的服务端，称为**Minecraft Server**。

但是由于其功能不足，社区衍生出了多种提供*多人游戏*的**服务端**，这些提供*多人游戏*服务的*程序*常被人称为**核心**。

### Bukkit 服务端

> Bukkit是一个免费的开源软件，它提供了扩展流行的Minecraft多人游戏服务器的方法。

**Bukkit**是**Minecraft Server**的一个衍生服务端。

其还有很多基于**Bukkit**的衍生服务端，如**Spigot**、**Paper**等等。

此文不过多叙述，若想了解其历史可看视频[「编年史」Bukkit陨落 MC史上影响力最大的服务端Spigot的诞生！](https://www.bilibili.com/video/BV134411p7w5/)

<details>

  <summary>CraftBukkit是什么？</summary>

  准确来说，**Bukkit**不仅仅只是指一种**衍生服务端**(或者说**Bukkit Server**)，

  **Bukkit** 还可以指 **BukkitAPI**，面向开发者开发**Bukkit插件**的一套API。

  而**CraftBukkit**是对于**BukkitAPI**的具体实现，基于**Minecraft Server**，通过修改其代码封装成**BukkitAPI**供给开发者使用，同时可以是运行**Bukkit Server**的入口。

</details>