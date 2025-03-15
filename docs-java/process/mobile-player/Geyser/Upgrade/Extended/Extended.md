---
title: 进阶
sidebar_position: 1
---

# 插件

这里是进阶教程， 你可以通过进阶教程获得更好的基岩版兼容
让基岩版玩家拥有更加接近原生基岩版服务器的体验

## 进阶配置

通过 [此处](https://docs.superiormc.cn/v/geyser-wiki/user-guide/li-jie-pei-zhi) 教程对Geyser配置文件进行更精细的配置

## 资源包安装

你可以像Java版玩家一样给基岩版玩家发送服务器资源包
但与Java版玩家不同的是， 基岩版玩家可以接受并加载多个资源包

:::warning

基岩版资源包与Java版格式完全不同， 需要手动进行转换
基岩版的资源包扩展名均为.mcpack(其实.zip也行)
资源包转换在后续教程会提及

:::

此外基岩版不需要额外创建直链下载的链接， 直接通过服务器即可传输资源包

来到`服务端/plugins/geyser-spigot/packs/`目录

将资源包放入Packs文件夹后， 重载/Geyser reload或重启服务器即可

注意!重载Geyser来加载资源包可能会导致一些奇怪的问题发生，没事还是建议重启服务器来加载资源包

## GeyserUtils

GeyserUtils是zimzaza4开发的Geyser扩展工具

### 安装

[下载GeyserUtils](https://github.com/zimzaza4/GeyserUtils)

把`geyserutils-spigot`放入插件文件夹

将`geyserutils-geyser`放入geyser的`extensions`文件夹

![](_image/Geyser5.png)

这样就安装好了
