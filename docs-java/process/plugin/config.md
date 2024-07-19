---
title: 配置插件
sidebar_position: 2
---

# 配置插件

插件的配置文件一般在 `/plugins/插件名字/` 文件夹中，常见的配置文件一般是 `config.yml` 。

> 插件一般会使用 **Yaml** 作为配置文件格式，建议先学习 [Yaml](/docs-java/advance/YAML/YAML.md) 语法。

我们在开始前所做的准备工作中，推荐你安装任意一款推荐的文档编辑软件：请查看[文本编辑器](https://yizhan.wiki/NitWikit/preparation/text-editor)

如果你是 Windows ，现在让我们双击 .yml 文件就可以开始修改配置文件了！

如果你是 Linux ，并且认为这很难操作，可以通过 SFTP 下载到自己的电脑上编辑。

## 如何汉化插件？

以下是你可能遇到的情况

<details>
    <summary>插件自己动♂</summary>

像 Luckperms、 EssentialX 等，只要你的服务器和客户端的语言为简体中文，它们会自动设置为中文。

</details>

<details>
    <summary>配置文件改语言</summary>

像 HoloMobHealth、 Gsit 等，你可以在插件配置文件中(一般在 config.yml 中)找到 Language ， lang 等字眼。

然后把语言项改成 zhcn、 chinese 等，具体应该写什么这地方。插件配置的注释可能提到，没提到那得靠你自己寻找了。

**有时**可以用压缩软件打开插件 jar 文件找找：

![](_images/概览/拆开jar.png)

</details>

<details>
    <summary>自行汉化</summary>

有些插件不提供别的语言，只提供一个语言文件 如 lang.yml、 message.yml 。

就需要你自行汉化里面的内容了，去一些论坛翻翻也许能找到别人分享的汉化。

### GPT汉化？

口令参考

```
请将我给出的以 yml 格式存储的 Minecraft 插件的配置文件汉化，且不改变本身的可执行性，其中被两个 % 包裹的为变量请不要翻译，请翻译时不要带翻译腔，而是要翻译得自然、流畅和地道，使用优美和高雅的表达方式并代入 Minecraft 游戏内进行翻译，翻译后请以 markdown 代码块的格式发送
```

备注：本教程并非推荐服主通过 GPT 等 AI 进行机翻，我们不对服主利用 AI 产生文本的行为及其内容负责。

使用 GPT 可能会被视作一种经济但欠缺考虑的行为，若有能力或财力充足，请尽力贡献人工翻译或自行翻译，万不可直接使用机翻，轻则翻译错误，重则使插件读取不了 config 。

</details>

<details>
    <summary>内核汉化</summary>

如果你要用的这个插件没有以上所提到的所有情况...

他**可能**把你要改的语言直接写死在代码里了，你要自己去改代码...

</details>
