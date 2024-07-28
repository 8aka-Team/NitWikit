---
sidebar_position: 1
sidebar_label: 领地 - Residence
---

# Residence

:::info

`SpigotMC` https://www.spigotmc.org/resources/.11480/

`GitHub` https://github.com/Zrips/Residence

`文档`https://www.zrips.net/residence/

`插件百科` https://mineplugin.org/Residence

`Bukkit（已过时，只能下载旧版）` https://dev.bukkit.org/projects/residence

`CurseForge（已过时，只能下载旧版）` https://www.curseforge.com/minecraft/bukkit-plugins/residence

:::

一个具有13年以上悠久开发历史的老牌领地插件

最初由 bekvon 维护，后由 Zrips 团队接手维护，并将其变更为“开源付费”的插件

## 免费下载

你仍可以从SpigotMC或Zrips官网中找到Residence最新版本免费下载的链接

## 前置

Residence 需要 CMIlib 作为前置插件

下载:
* [SpigotMC](https://www.spigotmc.org/resources/cmilib.87610/)
* [Zrips 官网](https://www.zrips.net/cmilib/)

## 优点与缺点

首先，在说明优缺点前，提前说明一件事: 这个插件的缺点远大于优点，若无必要建议考虑其他插件

### 缺点

先说缺点

作为一个老牌的领地插件，其拥有悠久的历史，当然，其代码也是，但这对于代码质量来说并不是一件好事，这导致了**参差不齐的代码格式、凌乱的逻辑、十几年来从未重构过的代码**等

这使得该插件所隐藏的潜在问题或漏洞相当多，例如在后续会提到的负数刷钱漏洞

Residence在开发之初使用Ant作为其构建系统，而不是现在常见的Maven和Gradle，Ant构建系统的相关构建信息存储在build.xml之中，在Zrips团队接手后也并似乎在明面上未改变其构建系统，**但是他们删除了build.xml**，这使得直接构建Residence变得困难，尤其是一个软依赖了不知道多少冷门插件的屎山

这也是为什么 Residence 会被人称作“**假开源**”

我们并不清楚 Zrips 团队删除构建信息的动机在哪里，但是可以从相关 issues 了解到的是在他们删除 build.xml 前，

build.xml就已不能正常完成构建 Residence 的任务了，不过，也有人试图为 Residence 添加 Maven 构建文件使其能更轻松的被构建和维护

你可以在 [此处](https://github.com/RenYuan-MC/Residence-Maven) 找到带有 Maven 构建文件 `pom.xml` 的仓库

### 优点

作为一个老牌插件，其知名度较高，由于大量服务器的使用，使得很多玩家对Resience的了解较多

在他们看来，Residence 相较其他插件的逻辑是更简单更易于上手的

且作为一个老牌插件，其插件的支持较多，出现插件之间互相不兼容的可能性更少

## 漏洞

作为一个老插件，其被发现的漏洞数不胜数

当然，你可以禁用所有不常用的功能来避免潜在漏洞发生

这里只介绍一个最近的、影响较大的漏洞

### 负数刷钱漏洞

负数刷钱漏洞，也被称作银行刷钱漏洞，但实际上其不止存在于领地银行

对于修复方式，我只建议你更新到最新版本，其在5.1.4.2前几乎所有版本都有此漏洞

若你由于一些原因无法使用新版本，可以考虑禁用相关功能的权限

此处有两个权限需要禁用:
* residence.command.bank
* residence.command.market

以下是各个权限插件禁用相关权限的命令示例:

#### [LuckPerm]
```
lp group default permission set residence.command.bank false
```