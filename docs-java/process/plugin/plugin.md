---
title: 插件
sidebar_position: 1
---

# 插件

本文档中提到的插件都有较多用户基础和完善的 Wiki，**具体插件请查看插件的 Wiki。**

建议阅读：

- [YAML 语法](/docs-java/advance/YAML/YAML.md) - 了解大部分插件配置文件的语法。
- [特征文件](/docs-java/process/plugin/more/plugin-signature-file.md) - 了解插件的一些信息。
- [颜色代码](./more/color-message.md) - 改变服务器中文本的颜色
- [什么是乱码](https://nitwikit.8aka.org/start/basic/what-is-messy-code) - 了解文本文件中的字符有时为什么会变得奇奇怪怪。

## 基本操作

### 重载插件

当你改动一个插件的配置后，需要重载才能令其生效。

多数插件会提供重载命令，一般是 `/插件名或插件缩写 reload`

如 `/tab reload`

:::danger

服务器在**开发阶段**可以使用 PlugmanX，ServerUtils 等插件热重载插件。

过了开发阶段后切记，多数插件自带了重载（上方就是）。

尽量少使用热重载插件，因为如果插件本身并不支持热重载，即使热重载了也容易出问题。

请阅读 [此文章](https://madelinemiller.dev/blog/problem-with-reload/) 来了解为何。

:::

### 列出插件

使用 `/plugins` 或者 `/pl` 列出插件列表。

![](_images/插件列表.png)

绿色为已加载(不是代表你日后使用不报错，只是这里加载上了)。

红色为加载失败(服务端检测到了这个插件，但是没加载上，去控制台看看报错)。

如果这里没有你的插件...服务端甚至没识别这是个插件，去看看你的文件有啥问题。

## NitWikit 衍生

### 笨蛋脚本

下载此 [脚本](https://script.8aka.org/auto-install-depend)，我们会为你安装常用插件(自动)。

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

(目前仍在测试中) 用于搜索插件的软件

下载此 [软件](https://github.com/lilingfengdev/PluginSearchEngine/releases/download/windows-latest/main.exe)

1. 双击打开软件。
2. 在搜索框中输入关键字，点击搜索按钮。
3. 双击链接将其复制到剪贴板。
4. 在浏览器地址栏中粘贴链接，可以看见插件的详情。

## 我有疑问

如果你想问问题，查看 [如何向大佬求助](https://nitwikit.8aka.org/start/ask-for-help)
