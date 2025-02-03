---
title: 如何向大佬求助
sidebar_position: 7
---

## 如何向大佬求助

首先明确，你是求助者不是少爷，第二，大多数人还是愿意互帮互助的。

:::warning

在问问题之前一定确保你已经看完这一章，因为有时候你的傲慢、无休止的问题会激怒同行们，导致他们入侵你的服务器，查你户口，给你服务器召唤 200 个假人，或者全服主交流群通报等。

:::

### 错误问问题的方式

一般来说，入门任何的领域会遇到问题，都需要问问题，但大家基本都不欢迎以下的问题：

**`怎么开基岩版互通`**

- 太直白了，请别人帮忙之前最好稍微带一些**态度**。

**`什么是 pojav？插件的 wiki 在哪里？`**

- **不要把群和人当做搜索引擎**(除非打钱了)。

**`我玩家进不来服务器怎么办`**

- **描述模糊**，可能性太多以至于没有人猜出。

**`不正确提供 log 或不提供 log`**

- **自己造词**，只有你自己能理解，以为别人明白。

**`我玩家怎么假登陆了？天权系统怎么做？`**

- 以下这些情况，应该去天桥的老大爷找你算算命，因为没有有效的 log 没人能知道你遇到的问题。
- 在 **服务器** 问题中提供 **客户端** log。
- **不完整** 的 log，甚至 **不提供** log。
- 错误的将**客户端**收到的报错当做**服务端**报错。
- **直接将成百上千行的 log 发到交流群**

:::warning

![](_images/不要截图这个啊.png)

这段话是告诉你去控制台看报错，你把这段话截图给群发干什么？群友是控制台？

:::

## 我应该怎么做？

为避免无效问题，问问题最好需要符合以下几个基础原则：

1. 先查 wiki 或搜索 - [详细说明](#看完-wiki-再问)

2. 礼貌用语

例如，你应该：

- 使用一定的称呼：`请问大佬们我的 xxx 插件报错 NullPointerException 该怎么办呢？`
- 使用敬语：`打扰一下，我最近服务器总是报错 The server has not responded for 35 seconds! 请问有人知道怎么回事吗？`

而不能：

- 开门见山：`服务器报错是这个 C++ Exception: std::optional<class std::system_error> 是啥情况`
- 发言不友好：`你不知道可以不说话，别在这浪费我时间`
- 斥责他人：`你是不是不会写插件啊，这插件怎么能开服就报错呢`

<!--markdownlint-disable ol-prefix-->

3. 明确遇到的问题，到**对应群**里问

例如，你应该：

- 某插件出现不适配问题后在名为“我的世界服主交流群”的开服综合交流群里提问 `请问在升级 paper1.20.4 之后遇到 xxx 插件不适配应该怎么办？`
- 某小众插件与 Leaves 核心出现兼容性问题后在该插件官方交流群里提问 `作者大大，你的 xxx 插件和 leaves 核心是不是有兼容性问题呢？`

而不能：

- PowerNukkitX 核心相关问题到 LeviLemina 交流群里提问
- 路由器配置相关问题到某插件官方交流群里提问
- 卡服问题到其他游戏交流群里提问

4. 提到服务器环境

例如，你应该：

- `大佬们我是 1.16.5 catserver 服务器，遇到了 xxx 问题`
- `最近我升级到了 1.21 paper 核心，玩家反应 xxx 有人有类似的问题吗？`

而不能：

- 仅给出插件名和报错却不给出服务端版本等信息：`大佬们有没有人知道我这个 xxx 插件怎么加载不了，报错 NoClassDefFoundError？`
- 仅附上报错信息却没有给出任何服务端版本、加载器版本、插件列表等信息：`有没有大佬能帮我看看这个崩服是为什么，什么也不干跑一跑图就崩，ll加载器`

5. 给出合理的日志 - [详细说明](#给出日志)

<!--markdownlint-enablke ol-prefix-->

### 看完 Wiki 再问

Wiki 就是让你解决常见问题的，不看这玩意儿就在那瞎问只会获得 `滚过去看 wiki` 回复。

几乎所有的软件都会附上 Wiki，它们一般位于：

- 插件的 README 文件(GitHub 主页往下翻一般就是)
- 插件作者在社交媒体发布的视频文章等或自行搭建的网站(入口一般可以在插件的论坛介绍页、官网、 README 中找到)
- 插件作者在即时通讯软件上发布的视频文章等(比如有的插件作者会让你加他的 QQ 群，之后把使用文档放在群文件或群公告里)

**请先耐心寻找这些文档**，实在找不到说明作者可能确实没有写，这种情况下再提问

此外，Wiki 中一般会有搜索功能。如果 Wiki 中的内容非常多，对于你来说是很难找到自己想要的信息的。好在多数 Wiki 网站中都有搜索功能。你可以在页面中找到搜索框，然后在其中输入关键词即可。

**在搜索时，一定要使用尽可能简短的关键词。Wiki 中的搜索工具不像搜索引擎，无法通过近义词来查找内容。一旦你描述中的词汇与 Wiki 的用词不一致，就可能造成无法找到想要的结果。**

如果 Wiki 中没有搜索功能，你可以使用浏览器的搜索功能。在所有主流浏览器中，Windows 下按下 `Ctrl + F`、macOS 下按下 `Command + F` 即可启用搜索功能。

对于不是网站形式的 Wiki 来说，也有许多种办法来搜索：

#### docx(Word 文档)

按下 `Ctrl + F` (Windows)或 `Command + F` (macOS)即可启动 Microsoft Word 或 WPS 的搜索功能，搜索当前文档。

#### txt

按下 `Ctrl + F` 即可启动 Windows 记事本的搜索功能；按下 `Command + F` 即可启动 macOS 文本编辑 app 的搜索功能。

**只有最后你尝试各种办法都没能在 Wiki 中找到你想要的内容时，证明 Wiki 中确实没有写入相关内容，这时才能进行提问。**

### 给出日志

#### 笨蛋脚本

使用此[脚本](https://script.8aka.org/update-log)，
会将日志自动上传到 `https://mclo.gs` (默认上传的日志是 `logs/latest.log`)

#### 如何上传

当你询问问题的时候，发出你的报错日志

:::tip

推荐一个网站 [Mclogs](https://mclo.gs/)，它允许你很方便地上传日志。

:::

你需要明白你面对的是群友而不是道友，没有人可以在没有日志的情况下帮你解决问题，

如果你遇到的是大佬还可以给你算一卦。

<details>
  <summary>如何使用 Mclogs </summary>

![](_images/问问题的技巧/如何使用Mclogs-1.png)

服务器 log 文件在服务端根目录的 logs 文件夹，一般上传 latest.log (服务端最新的日志)即可

![](_images/问问题的技巧/如何使用Mclogs-2.png)

把这个链接复制粘贴发给大佬

:::tip

![](_images/qnmd_raw.png)

不要点右上角的Raw进行分享，那是API接口链接，给开发人员提供的，不是分享链接的，不能用于分享日志使用

:::

</details>

其他的贴 log 的网站

<details>
  <summary>其他可用的网站</summary>

- https://pastes.dev/
- https://paste.fastmirror.net/
- https://n0paste.tk/
- https://www.paste.lv/
- https://nekobin.com/
- https://note.ms/dwlg
- https://paste.gg/
- https://bytebin.lucko.me/
- https://netcut.cn/
- https://cl1p.cn/
- https://jiantieban.cn/
- https://www.verybin.com/
- https://ykjtb.com/
- https://airportal.cn/
- https://toolight.cn/text/paste
- https://nick-running.github.io/easy-tools/clipboard.html

</details>

:::warning

不遵守以上规则，可能会导致你写入**乐子文档**

:::

**经典如何提问: https://settingdust.gitbook.io/stop-ask-questions-the-stupid-ways/**

<a href="https://www.8aka.org/qq">
  <img src="https://raw.githubusercontent.com/8aka-Team/NitWikit/refs/heads/main/docs/_images/qqgroupshield.svg" alt="QQ群"></img>
</a>

### 经典老图

![](_images/问问题的技巧/经典老图-1.jpg)

![](_images/问问题的技巧/经典老图-2.jpg)

![](_images/问问题的技巧/经典老图-3.jpg)

![](_images/问问题的技巧/没事不要免费帮人.jpg)

### 真正的傻逼

![](_images/问问题的技巧/林然-1.png)

![](_images/问问题的技巧/林然-2.png)

对不起大佬，是我疏忽了，没说明服务器没停也是会输出日志到 `latest.log` 的
