---
title: Legacy Script Engine（LSE）
sidebar_position: 2
---

# Legacy Script Engine（LSE）

## 什么是 Legacy Script Engine

Legacy Script Engine 简称 LSE，是 LeviLamina 上的一系列插件，被用作 LiteLoader Scipt Engine（LLSE）到 LeviScript（LS）的过渡。LSE 的一些特性与 LLSE 相同，你可以阅读 LLSE 来了解该插件的特点。以下是这两个插件的不同之处：
1. LSE 只能在 LeviLamina 上运行，LLSE 只能在 LiteLoader 上运行
2. LSE 的插件格式与 LLSE 不同。要想让 LSE 运行 LLSE 插件，需要 LSE 自动或服主手动进行格式转换。
3. LSE 虽然是 LeviLamina 开发计划的一部分，但是它被设计作为可选模块，需要服主额外安装。而 LLSE 则是集成在 LiteLoaderBDS 中，安装 LiteLoaderBDS 的过程中即安装完毕，不需要额外安装。
4. LSE 的 python 脚本引擎 legacy-script-engine-python 与系统中的 python 解释器冲突。
5. LSE 的更新仅提供版本适配和错误修复，不会更新新的 API 等功能，也不受理任何相关建议。

## 插件内容

目前对 LSE 提供支持的插件如下：
- **LegacyMoney** ：用于为 LSE 插件提供经济 API 相关功能
- **LegacyParticleAPI** ：用于为 LSE 插件提供 ParticleAPI 相关功能
- **LegacyRemoteCall** ： 用于为 LSE 插件提供插件间相互调用功能
- **legacy-script-engine-lua** ：用于加载和运行 lua 插件
- **legacy-script-engine-quickjs** ：用于加载和运行单文件 js 插件（quickjs 插件）
- **legacy-script-engine-nodejs** ：用于加载和运行 nodejs 插件
- **legacy-script-engine-python** ：用于加载和运行 python 插件，**和系统中的 python 解释器冲突**

这其中 LegacyMoney、LegacyParticleAPI、LegacyRemoteCall 几乎是必须安装的，因为很多插件都依赖这些插件运行。其他四个用于加载不同种类 LSE 插件的可以根据服务器所用到的插件的类型进行安装。

## [安装方法](https://lse.liteldev.com/zh/)

### 使用 Lip 安装

**非常推荐使用 Lip 安装。手动安装 LSE 的过程极其复杂繁琐**

一次性安装 QuickJS 和 Lua 引擎
```shell
lip install github.com/LiteLDev/LegacyScriptEngine
```

安装 nodejs 引擎
```shell
lip install gitea.litebds.com/LiteLDev/legacy-script-engine-nodejs
```

安装 python 引擎
```shell
lip install gitea.litebds.com/LiteLDev/legacy-script-engine-python
```
:::warning

由于 legacy-script-engine-python 与系统中的 python 解释器冲突，安装时你需要确保系统中没有 python 解释器。如果系统中已安装 python 解释器，你需要将其**彻底卸载** 。如果你必须使用系统中的 python 解释器，你只能放弃所有的 python 插件。

:::

### 手动安装

手动安装要装一大堆插件，我还没试过，教程求大佬补充qaq
