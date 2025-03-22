---
title: 核心选择
sidebar_position: 2
---

# 核心选择

:::danger

大部分付费所谓的高性能核心大概率是假的，如果你真的需要购买，你可以向大佬咨询

:::

> 此处仅为部分开服核心

目前有三类主流的选择：

## 插件端

点此跳转到 [插件端](plugin.md)

:::tip

只能安装插件的服务端

:::

性能较好，是初学者最适合开的服务器，拓展性较强，配置性强，但坏处就是有的插件需自行配置后使用，客户端无需安装 Mod 。

个人推荐插件服使用 Purpur ，是截止到 2024 年的稳定性和优化最好的选择

:::info

此类核心的存档结构有些不同

如果你是从非 Bukkit 系核心或单人存档迁移，请查看[Leaves 的迁移文档](https://docs.leavesmc.org/zh_Hans/leaves/guides/migration)(通用所有Bukkit插件端)

:::

## 混合端

点此跳转到 [混合端](hybrid.md)

:::tip

可以安装插件和 Mod 的服务端

:::

:::danger

部分性能不如 Mod 端，游戏性丰富，稳定性和报错非常玄学，建议新手不要尝试

:::

混合端常见的有 Catserver；高版本推荐使用 Mohist 或 Arclight，就目前来看，它们的本身稳定性良好，也比纯 Forge 有所优化(但 Mod /插件数量多了之后兼容性问题可能会莫名让人头疼)

## Mod 端

点此跳转到 [Mod 端](mod.md)

:::tip

只能安装 Mod 的服务端

:::

性能较差，某些 Mod 就不是想给多人游戏设计的；拓展性强，内存需求较大，游戏性可以做的很丰富，但客户端需要安装相同的 Mod 。纯 Mod 服主流只有 Forge 和 Fabric 两种，

高版本一般推荐使用 Fabric ，因为 Fabric 优化 Mod 多效果比较好，但是最重要的还是：如果有什么 Mod 只有 Fabric / Forge 版本而你又非玩不可，只能选择相应的核心。

## 更换核心

- **[插件端](plugin.md)**

这类操作几乎无感

> 核心只要是同版本的分支基本可以考虑后期再替换
>
> 如使用 Spigot 替换 Paper 或 Purpur 等

- **[混合端](hybrid.md)**

这有待商榷，因为各个端兼容性差异较大

- **[Mod 端](mod.md)**

这几乎不可能，你基本没有可选择的核心

Mod 服最开始就必须选好核心，也就是 Forge 还是 Fabric 的问题。

## 笨蛋脚本

帮你选择服务端，并自动下载!

[下载](https://script.8aka.org/select-server)

![](_images/那些服务端有后门吗.png)
