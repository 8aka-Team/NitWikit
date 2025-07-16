---
title: 杂谈
sidebar_position: 9
---

# 杂谈

## 付费>免费/开源？

并非如此！

事实上，大多数付费插件都能找到很好的免费替代，比如开源的 BetterHud 比付费的 HappyHUD(MythicHUD) 好很多。

## 插件不能做的事

例如（无客户端 mod 的情况）：

- 插件不能做自定义新的按键 (原版仅能监听 Shift,F,Q 共四种组合)
- 获取玩家视角（第一人称，第二人称，第三人称）
- 不靠资源包或 mod 什么的不能修改计分板的背景
- 不大可能检测和拦截灵魂出窍
- 修复客户端卡输入法问题

总之，一些纯客户端的行为，插件是不能控制的。

## 报错屏蔽

不建议使用任何报错屏蔽插件，哪怕那个报错/警告在你看来不影响使用

当然，有些连接超时等报错屏蔽了也无所谓

可以使用 [Console Spam Fix Reborn](https://www.spigotmc.org/resources/.121703)

## update 文件夹

Paper 服务器有一个鲜为人知的功能，那就是 update 文件夹。以下是它的使用方法。

1. 在 plugins 文件夹内创建一个名为 update 的文件夹。
2. 逐个下载你想要更新的插件，并将它们放入 update 文件夹中。
3. 重启服务器，不要删除或修改 update 文件夹之外的任何插件。

通过这种方式，你可以在服务器运行时同时更新所有插件， 而无需关闭服务器或替换正在运行的服务器中的插件 JAR 文件。 你无需在更新 Paper 本身之前重启服务器。 这个功能允许你同时更新 Paper 和插件，而无需任何额外的停机时间。

## Spigot Library Booster

Spigot在1.17之后新增了一个名为LibraryLoader的玩意，可以让插件在运行时下载所需依赖，无需将其包括在插件本体中，这显然是一个好消息，但是对于国内用户来说就显得不那么友好，spigot默认没有提供对下载源的自定义功能，导致只能从maven中心源缓慢地下载依赖文件甚至超时，本工具就是针对这种情况进行解决。

:::info

`MineBBS` https://www.minebbs.com/resources/.7469

:::

如果你使用 Leaf 核心，可以直接 [这样做](/docs-java/process/maintenance/optimize/jvm/common.md#下载源加速)，不需要使用此工具。

## 圈内破事

### miao 系列插件

因为配置简单 (没啥功能当然配置简单) 而广受小白服主青睐

之前被爆插件有远程执行代码后门来着

详情请见：https://lezi.8aka.org/article/%E5%9C%9F%E7%9A%87%E5%B8%9D%E5%96%B5

### 米饭系列插件

跟 miao 系列插件走差不多的道路

> 只要我的插件有 GUI 界面，不管设计的多傻逼，功能少的有多可怜，那也有人夸好用！

作者剽窃国外作者开源的插件，声称是自己的作品并公开售卖

2025/3/30 米饭插件被发现存在后门：https://www.minebbs.com/threads/.35422

详情请见：https://lezi.8aka.org/article/%E7%89%88%E4%B8%BB%E7%B1%B3%E9%A5%AD%E4%BC%A0
