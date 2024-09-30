---
title: 机器人搭建
sidebar_position: 12
---

# 机器人搭建

## QQ机器人
<!--## 使用已存在的机器人插件方案

:::info

一般而言，已经存在的机器人方案实现起来相对容易且功能多。

如果你不是专业开发者，非常推荐直接使用已存在的机器人插件实现。

:::-->
目前比较推荐的方案：

### [EasyBot](https://www.minebbs.com/resources/easyBot-minecraft.7918/)

<!--[EasyBot MineBBS 链接](https://www.minebbs.com/resources/easyBot-minecraft.7918/)-->

:::warning

EasyBot 的更新程序貌似存在漏洞，如果突然终止或是因为某些意料之外的原因，

在从旧版本更新到新版本后，浏览器编辑器的消息同步有概率无法显示，这种情况请删除 EasyBot *主程序* (不是插件!)的 *所有* 文件后重新安装

(记得保留配置)

:::

<!--[EasyBot 实现账号绑定教程](https://www.yuque.com/miuxue/cgyipv/vng1gtu9wk71xtg6)

EasyBot 可简单地通过自定义命令实现查看服务器TPS，玩家数据等。 [EasyBot 自定义命令教程](https://www.yuque.com/miuxue/cgyipv/vng1gtu9wk71xtg6)-->
1. [账号绑定](https://www.yuque.com/miuxue/cgyipv/vng1gtu9wk71xtg6) - 介绍

2. [自定义命令教程](https://www.yuque.com/miuxue/cgyipv/vng1gtu9wk71xtg6) - 简单地通过自定义命令实现查看服务器 TPS，玩家数据等。

EasyBot 开发者目前没有撰写关于消息同步的教程，但由于网页编辑器而非配置非常容易上手，在此不做赘述。

:::warning

不推荐使用 EasyBot 的群组服务器内消息同步功能，使用 TrChat 等插件可以更好的实现它们。

:::

优点：配置简单，网页编辑器方便新手，轻量。

缺点：功能上不如 XinxinBot 丰富。

### [XinxinBot 系列](https://www.minebbs.com/threads/xinxinBotapi-qq-1-8-x-1-20-x.24540/)

<!--[XinxinBotAPI MineBBS 链接](https://www.minebbs.com/threads/xinxinBotapi-qq-1-8-x-1-20-x.24540/) -->

[账号绑定](http://wiki.mcxin.cn/zh/%E6%96%B0%E9%91%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%99%84%E5%B1%9E%E6%95%99%E7%A8%8B/XinxinBetterBind)

[消息同步](http://wiki.mcxin.cn/zh/%E6%96%B0%E9%91%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%99%84%E5%B1%9E%E6%95%99%E7%A8%8B/XinxinChatSync)

优点：使用附属插件，功能更多。

缺点：配置稍复杂。

<!--### 其他方案的注意事项

如果某个方案基于 MiraiMC，请参见下文。-->

### [MiraiMC](https://github.com/DreamVoid/MiraiMC)

MiraiMC 是一款能够作为服务器插件加载的机器人框架。它非常适合仅有一个服务端，尤其是使用面板开服的 **小型服务器** 使用。
MiraiMC 的大多数排障方法和特性都与 Mirai 相同，遇到问题时你可以参考 [Mirai](../../advance/bot/framework#mirai) 框架的使用文档。

MiraiMC 已添加了 [对 Overflow 的支持附属插件](https://github.com/DreamVoid/MiraiMC/issues/510)，因此你可以使用 Overflow 协助登录。
这也帮助了许多停更的基于 MiraiMC 的老机器人插件。
