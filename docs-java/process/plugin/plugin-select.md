---
title: 插件选择
sidebar_position: 1
---

# 插件选择

很好，相信你已经在[可能用到的网站](/docs-java/preparation/websites.md)看到了很多链接，面对成千上万的插件我们应该如何进行选择呢？

我们在此以 spigot.org 为例(假设你已经注册成功)，讲解如何选择插件。

1. (_可选，推荐_)安装一个 spigot 专用的[搜索引擎](https://fof1092.de/Plugins/SSE/Redirect/)，作为浏览器插件安装即可。

   使用 spigot search engine(spigot 搜索引擎)后， 你能得到比 spigot 自带的搜索相关性强得多的搜索结果。

2. (_可选_)如果你觉得大量的英语很头大，请打开你的浏览器自带的翻译器，如 edge/chrome。

![](_images/概览/浏览器翻译.png)

4. 就像逛淘宝一样，根据你的需求将你认为有用的插件收藏起来。
   最好是分门别类放在一起，我们以随机 TP 插件为例，我们在此搜索 RTP ：

<details>
    <summary>安装搜索引擎后应该长啥样？</summary>

![](_images/概览/Spigot搜索.png)

</details>

4. 查看这些插件的下载次数、最后更新时间、评价分数、插件特性、语言支持、是否开源、是否付费等。

   如果符合以下的标准，可以尝试下载几个并收藏这些插件 (建议同类型插件选择大概 3 ~ 5 个，最后选出一个综合最好的)。

:::info

对于大多数插件，选择人数较多(同类型插件前 50%)，更新维护更频繁，用户评价多且平均分高，插件特性满足需要(注意不是越多越好)。

支持语言切换甚至直接支持全中文翻译，开源，免费的插件对于大多数服主来说是合理的。

:::

5. 将选好的同类型插件安装到服务器测试一下，是否有 bug ，是否能满足你的需求。

6. 如果你不嫌麻烦，可以在 Excel 中分析插件的优劣并打分，下图比较了当前下载量前 5 的随机 TP 插件。

   每个服务器可根据自己的需求自行评价，下图只是一个抛砖引玉的作用，根据自己的需求选择其中一个即可：

![](_images/概览/同类插件评分选择.png)

**_不要装多个同类型插件，不要把 CMI 和 EssentialX 装在一起，也不要一个服务器装 3 ~ 4 个菜单插件！！！_**

## 如何下载插件历史版本？

**建议**你用**最新版本**的插件，但如果你因为一些原因必须要用旧版的话...

<details>
    <summary>Bukkit</summary>

![](_images/概览/历史版本-bukkit-1.png)

点击左侧文字可以查看详细内容：

![](_images/概览/历史版本-bukkit-2.png)

这里是更新日志：

![](_images/概览/历史版本-bukkit-3.png)

</details>

<details>
    <summary>SpigotMC</summary>

![](_images/概览/历史版本-spigotmc.png)

</details>

<details>
    <summary>GitHub</summary>

在 Releases 中往下翻：

![](_images/概览/历史版本-GitHub-1.png)

或者这样子：

![](_images/概览/历史版本-GitHub-2.png)

![](_images/概览/历史版本-GitHub-3.png)

</details>

<details>
    <summary>Modrinth</summary>

![](_images/概览/历史版本-modrinth.png)

</details>

## 如何查看插件支持的语言？

<details>
    <summary>SpigotMC</summary>

![](_images/概览/查看语言-spigotmc.png)

</details>

<details>
    <summary>插件文件夹</summary>

插件文件夹中有类似 Language、 lang、 locale 之类的文件夹(或其他东西？)：

![](_images/概览/查看语言-1.png)

请寻找 zhcn、 zh-cn、 zh-CN、 chinese 等字眼：

![](_images/概览/查看语言-2.png)

然后一般要去插件配置文件（多数为 config.yml) 把语言改成这里的文件名 (此处为 zh_cn)。

</details>

<details>
    <summary>Crowdin</summary>

比如 https://www.spigotmc.org/resources/simpleclans.71242/，我们可以看到，语言那里给了个[链接](https://crowdin.com/project/simpleclans)：

![](_images/概览/查看语言-crowdin.png)

看到有 Chinese Simplified、 chinese、 zh_cn、 zh_CN 之类的字眼就行。

</details>

<details>
    <summary>直接拆开插件 jar 文件</summary>

比如 SkinsRestorer。

如果我们在插件文件夹找不到语言文件夹，可以直接用解压缩软件打开 jar 包：

![](_images/概览/查看语言-拆开jar.png)

</details>

还有可能写在插件文档里，在项目 README 里，甚至在配置文件的注释里。

还是找不到？ 你可能需要自己翻译了：

[如何把插件语言改成中文？/如何汉化插件？](/docs-java/process/plugin/config.md#如何汉化插件)
