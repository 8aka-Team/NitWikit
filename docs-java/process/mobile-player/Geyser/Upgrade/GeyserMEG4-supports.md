---
title: GeyserMEG4 支持
sidebar_position: 6
---

<!--markdownlint-disable no-duplicate-heading-->

# GeyserMEG4 支持

## GeyserModelEngine

一个能让你 Geyser 服务器支持 MEG4 的奇妙插件，通过给基岩版发送个史蒂夫发送 4d 皮肤给基岩版玩家，支持原版 Geyser

只需要往资源包里塞动画文件即可，可以有效防止那些进服下个资源包就跑白嫖你模型的贼，但同时限制也挺多

### 前置

<!--markdownlint-disable line-length-->

| 前置插件                 | 橡木链接                                                                        | 作用                   |
|:---------------------|:----------------------------------------------------------------------------|:---------------------|
| GeyserUtils          | [GeyserUtils](https://github.com/zimzaza4/GeyserUtils)                      | 让你的 Geyser 支持调用一些 BE 的东西 |
| GeyserModelEngine    | [GitHub](https://github.com/zimzaza4/GeyserModelEngine)                     | 你猜                   |
| LibsDisguises(免费版即可) | [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/) | 伪装成其他生物              |

<!--markdownlint-enable line-length-->

项目地址有简体中文，所以后续步骤我就不写了

[项目地址](https://github.com/zimzaza4/GeyserModelEngine)

## GeyserModelEngineBlockbenchPacker

[GitHub](https://github.com/GeyserExtensionists/GeyserModelEngineBlockbenchPacker)

一个 Blockbench 插件，可以帮助你将 bbmodel 导出为 GeyserModelEngine 的模型格式

## GeyserModelEngine (自定义实体分支)

:::warning

这个是真自定义实体！不支持原版 Geyser，你需要搭配[Geyser 自定义实体分支](https://github.com/zimzaza4/Geyser)和资源包一起使用才能正常工作

你可以使用`GeyserModelEnginePackGenerator`来自动生成资源包，详细教程看项目地址

:::

### 前置

<!--markdownlint-disable line-length-->

| 前置插件                           | 项目链接                                                                       | 作用                   |
|:-------------------------------|:---------------------------------------------------------------------------|:---------------------|
| GeyserUtils                    | [GitHub](https://github.com/zimzaza4/GeyserUtils)                          | 让你的 Geyser 支持调用一些 BE 的东西 |
| GeyserModelEngine 自定义实体分支       | [GitHub](https://github.com/zimzaza4/GeyserModelEngine/tree/custom-entity) | 你猜                   |
| Geyser 自定义实体分支                 | [GitHub](https://github.com/zimzaza4/Geyser)                               | 让 Geyser 支持自定义实体       |
| GeyserModelEnginePackGenerator | [GitHub](https://github.com/zimzaza4/GeyserModelEnginePackGenerator)       | 帮你自动转换模型生成资源包        |

<!--markdownlint-enable line-length-->

后续更多步骤请看项目地址

[项目地址](https://github.com/zimzaza4/GeyserModelEngine/tree/custom-entity)
