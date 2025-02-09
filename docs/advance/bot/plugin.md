---
title: Bot后端插件
sidebar_position: 7
---
# 机器人后端插件
要让服务器达成处理服务器信息的效果，只有框架是不够的，因为框架只提供了与QQ的交互。

因此，你需要后端的机器人插件，与框架对接，达成机器人反馈服务器信息的效果。
## Java
### AQQBot
AQQBot是一个基于Onebot v11协议开发的QQ群与服务器互联的插件，可以让用户通过QQ群进行许多操作（例如绑定游戏账号、查询服务器状态）

该插件不采用模块化设计，不需要安装附属插件。

https://github.com/alazeprt/AQQBot

### EasyBot
重量级QQ机器人。功能过于繁杂不予介绍。

https://wiki.bioc.fun/home.html

### XinxinBot
xinxin的插件，官方没给介绍，那就不写介绍了

本插件采用模块化设计，请前往其Wiki查看具体附属插件。

https://github.com/Xinxin-ent/XinxinBotApi

### MiraiMC
MiraiMC 是一个基于 Mirai 的 Minecraft 服务端插件，能够让你在 Minecraft 服务器上使用 Mirai QQ 机器人程序，同时提供一些 API 帮助开发者简单的调用机器人接口为自己的插件实现多样的功能。

:::tip

MiraiMC 插件**自身不支持 Onebot 协议**。

你应该使用 [Mirai](framework.md#Mirai) 框架与其对接

或者使用[这个扩展](https://github.com/DreamVoid/MiraiMCAddon-Overflow)来给 MiraiMC 添加 Onebot 协议支持。

:::

该插件仅提供API，需要附属插件实现具体功能。

https://github.com/DreamVoid/MiraiMC

MiraiMC 的附属插件众多，请自行在各大论坛搜索。

## Bedrock
### SparkBridge
轻量级、模块化和多功能的 Minecraft Bedrock Server BDS 服务器QQ机器人适配器，内置群服互通功能，支持插件接入，支持内核分离级别的二次开发。
https://sparkbridge.cn/
