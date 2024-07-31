---
title: 插件
slug: /plugin
sidebar_position: 1
---

# 插件

**本文档中提到的插件都有较多用户基础和完善的 Wiki，具体插件请查看插件的 Wiki。**

![](_images/wiki背诵.jpg)

![](_images/概览/餐叉.jpg)

**建议阅读**

- [YAML 语法](/docs-java/advance/YAML/YAML.md) - 了解大部分插件配置文件的语法。
- [插件特征文件](/docs-java/process/plugin/plugin-signature-file.md) - 了解插件的一些信息。
- [格式化代码](/docs-java/advance/format-code.md) - 了解彩色字体，下划线，删除线等。
- [MiniMessage](/docs-java/advance/MiniMessage.md) - 了解 RGB 颜色，文本悬浮和点击文字执行等。
- [什么是乱码](https://yizhan.wiki/NitWikit/start/basic/what-is-messy-code) - 了解文本文件中的字符有时为什么会变得奇奇怪怪。

:::danger

服务器在**开发阶段**可以使用 PlugmanX，ServerUtils 等插件热重载插件。

过了开发阶段后切记，多数插件自带了重载 (如 Placeholder 的重载指令为：papi reload)。

尽量少使用热重载插件，因为如果插件本身并不支持热重载，即使热重载了也容易出问题。

请阅读[此文章](https://madelinemiller.dev/blog/problem-with-reload/)来了解为何。

:::

## 如何安装插件？

将插件的 jar 文件放入服务端的 `plugins` 文件夹。

### 笨蛋脚本

下载此[脚本](https://github.com/lilingfengdev/NitWiki-Script/releases/download/windows-latest/auto-install-depend.exe)，我们会为你安装常用插件(自动)。

<details>
  <summary>安装的插件列表</summary>

- ProtocolLib 必备前置
- Luckperms 权限管理插件
- PlaceholderAPI 必备前置
- PlugManx 插件管理
- WorldEdit 创世神
- EssentialsX 基础插件
- Multiverse-Core 多世界管理
- ~~ViaVersion，ViaBackwards 跨版本~~
- AuthMe 登陆插件
- SkinRestorer 皮肤管理/皮肤修复
- TrChat 聊天插件
- MiniMotd MOTD 插件

Via 自动安装已经移动到[此处](./other/Via/Via.md#笨蛋脚本)

</details>

### PluginSearchEngine

（目前仍在测试中）

下载此[软件](https://github.com/lilingfengdev/PluginSearchEngine/releases/download/windows-latest/main.exe)

<details>
<summary>打开方式</summary>
1. 双击打开软件。
2. 在搜索框中输入关键字，点击搜索按钮。
3. 双击链接将其复制到剪贴板。
4. 在浏览器地址栏中粘贴链接，可以看见插件的详情。
</details>

## 如何重载插件

当你改动一个插件的配置后，需要重载才能令其生效。

多数插件会提供重载命令，一般是 `/插件名或插件缩写 reload`

如 `/tab reload`

## 检查插件安装

使用 `/plugins`或者`/pl` 列出插件列表。

![](_images/概览/插件列表.png)

绿色为已加载（不是代表你日后使用不报错，只是这里加载上了）。

红色为加载失败（服务端检测到了这个插件，但是没加载上，去控制台看看报错）。

如果这里没有你的插件...服务端甚至没识别这是个插件，去看看你的文件有啥问题。

## xxx 权限咋给？xxx 命令是啥？为啥不能 xxx 啊？为什么插件报错？

遇到不懂的地方，你要做的第一步就是看 wiki ！！！

插件 wiki 通常会涵盖插件全部的可用权限和命令，还有需要安装的前置插件，以及常见的问题。

你在群里问一天的问题，或许看 wiki 五分钟就全部解决了！！！

**_翻遍 wiki 也解决不了啊！_**

你可以选择在各大 QQ 群里提问，但还是建议直接联系作者。

一般用户稍多的插件就会设有 discord 群，进群开 ticket，直接问作者。

## miao 系列插件

因为配置简单（没啥功能当然配置简单）而广受小白服主青睐

之前被爆插件有远程执行代码后门来着

详情请见：https://yizhan.wiki/lezi-wiki/article/%E5%9C%9F%E7%9A%87%E5%B8%9D%E5%96%B5

## 米饭系列插件

跟 miao 系列插件走差不多的道路

> 只要我的插件有 GUI 界面，不管设计的多傻逼，功能少的有多可怜，那也有人夸好用！

作者剽窃国外作者开源的插件，声称是自己的作品并公开售卖

详情请见：https://yizhan.wiki/lezi-wiki/article/%E7%89%88%E4%B8%BB%E7%B1%B3%E9%A5%AD%E4%BC%A0
