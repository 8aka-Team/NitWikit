---
title: Luminol
sidebar_position: 1
---

# Luminol

![](../_images/Luminol.png)

Luminol 是一个非常棒的 Folia 分支！

## 安装

我们不推荐直接使用 Folia，因为这需要自己去构建，[Luminol](https://luminolmc.com) 是一个非常棒的选择，如果你需要1.20.1/2，你可以使用 [Molia](https://github.com/Era4FunMC/Molia)

请选择 Luminol，我们后面会讲 LightLuminol，下载到本地后，替换原来的核心就可以了

## LightLuminol

![](../_images/LightingLuminol.png)

LightingLuminol 是 Luminol 的分支，旨在修复对 BukkitAPI 的破坏，最大程度保证 Bukkit 插件的兼容性。但是，虽然 LightLuminol 对于 Bukkit 插件兼容性较好，但是会有许多问题，包括不定时的NullPointerError，Thread 不安全，内存泄露，数据丢失（一天崩个几十次，挺正常的）

所以在开始使用 LightingLuminol，请想想 Leaf 是不是更好？

如果你需要 1.20.1/2，你可以使用 [DirtyMolia](https://github.com/Era4FunMC/DirtyMolia)

（Molia 和 Luminol 其实是同一个作者~~）

## 下载

如果官网进不去或者下载慢可以使用这里的镜像!

* [Luminol](https://sync.mcsl.com.cn/core/Luminol)
* [LightingLuminol](https://sync.mcsl.com.cn/core/LightingLuminol)
* [Molia 1.20.2](https://vip.123pan.cn/1821558579/Lingyi/core/molia-1.20.2-mcres.cn.jar)
* [Molia 1.20.1](https://vip.123pan.cn/1821558579/Lingyi/aaa/molia/molia-1.20.1-mcres.cn.jar)
* [Molia 1.19.4](https://vip.123pan.cn/1821558579/Lingyi/aaa/molia/Molia-1.19.4-mcres.cn.jar)
* [DirtyMolia 1.20.2](https://vip.123pan.cn/1821558579/Lingyi/core/dirtymolia-1.20.2-mcres.cn.jar)
* [DirtyMolia 1.20.1](https://vip.123pan.cn/1821558579/8448710)

## 调配置

安装完 Luminol 后你还需要一点小小的配置让你的 Luminol 更好

### 分配线程数

众所周知 Folia 默认的分配线程数非常脑瘫，会出现一核有难，八核围观的场景

打开 Paper 的全局配置，找到 `threaded-regions.threads`，通常情况下，分配给区块 Tick 线程数应该是 80% 乘上你物理 CPU 核数

### 生电配置

Luminol 另一个好处就是可以开启生电配置

打开 Luminol 的配置文件

* fixes.allow_void_trading 虚空交易
* fixes.allow_unsafe_teleportation 刷沙
* fixes.use_vanilla_random_source RNG操作

其它特性请阅读 Paper 文档
