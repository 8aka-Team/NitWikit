---
title: 服务端之间的关系
sidebar_position: 2
---

# 服务端之间的关系

由于在本文档中大量出现了服务端之间的对比、选择、配置等，因此必须梳理一下各服务端之间的区别。

> 此处以 GitHub 为例，与 GitHub 同类的网站还有很多，如 GitLab，Gitee

## 什么是 Fork

Fork 在 GitHub 中是对一个仓库的克隆。克隆一个仓库允许你自由试验各种改变，而不影响原始的项目。

一般来说，Forks 是被用于去更改别人的项目或者使用别人的项目作为你自己想法的初始开发点。

对于 Minecraft 服务端而言，A 为 B 的 Fork 则意味着，A 会保留 B 的很多性质（如兼容性），但会在一定程度上在某方面（如性能、功能）有更好的表现。

## 插件端

Bukkit -> Spigot -> Paper 这基本是服务端发展的现状，**Paper 支持绝大多数为 Bukkit 和 Spigot 设计的插件。**

几乎所有的新版本核心都基于 Paper，由于其侧重点不同，不同的核心可能选择不同的方向，如功能性、性能、拓展性等。

:::info

如果一个核心 A 是基于另一个核心 B ，那么核心 A 基本能兼容为核心 B 写的插件，这样是为什么使用 Paper 服务器时可以去 Bukkit 或 Spigot 资源站找插件的原因。

:::

Purfferfish - 是基于 Paper 的一个专注实体性能优化的 Fork；

Gale - 是基于 Paper 的一个专注各种性能优化的 Fork；

Leaves - 是基于 Paper 的一个致力于修复原版服务端被破坏特性的 Fork；

Purpur - 是基于 Purfferfish 的一个专注功能性和性能的 Fork；

Leaf - 是基于 Purfferfish，Purpur，Gale 等的专注于性能的 Fork。

## MOD 端

Fabric 和 Forge 作为 Minecraft 中最常用的两个模组加载器，即使有些 Mod 声明他们可用于 Fabric 和 Forge 服务器，

一般来说这些 Mod 也会被发布为多个 `.jar` 文件，他们之间通常来说是互不兼容的。

所以不要傻傻的把标明给 Forge 的 Mod 加入 Fabric 的服务端，以免出现无法加载。

## Forge / NeoForge

Forge 是较早版本出现的模组加载器，设计上有一些历史包袱导致，有大量的知名 Mod 基于 Forge 开。

NeoForge 是 Forge 的 Fork。这个分支是因为原 Forge 团队由于常年不合重新组建了新的团队，

原 Forge 团队除了 LexManos 都参与了维护，这导致了 Forge 和 NeoForge 不能完全相同。

但可以预见的是，NeoForge 可以让 Forge 开发者以很小的代价迁移到 NeoForge 上。

## Fabric

Fabric 是相对新的，在设计上 Fabric 相对更轻量、高效。性能一般会更好，玩法 Mod 目前相对 Forge 更少。

Fabric 拥有大量的优化效果较好的 Mod ，较为出名的有元素周期表钠等。

## 混合端

这部分对新手来说很难，用大白话说：

Bukkit + Forge = Catserver

Paper(部分) + Forge = Mohist

_WIP_
