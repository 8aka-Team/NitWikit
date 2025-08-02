---
title: 文本编辑器
sidebar_position: 2
---

# 文本编辑器

一个好用的文本编辑器是**相当**重要的，本文将介绍几个开服常用的文本编辑器。

:::warning

请不要再使用 Windows 自带的记事本和写字板了。这些文本编辑器通常有以下问题：

1. 可能造成文件编码发生改变。小白操作时尤其容易出现，部分情况下用记事本和写字板保存文件后文件因编码改变等问题而无法服务器读取。
2. 无法察觉到格式错误。有时编辑文件时会因为不小心删除或添加了些符号，导致配置文件语法错误，服务器无法识别。本文介绍的文本编辑器均能识别出这些格式错误并做出提示和警告，然而记事本和写字板却不具备这些功能。
3. 无法准确地辨认缩进等格式。这些文本编辑器由于默认不使用 [等宽字体](https://baike.baidu.com/item/%E7%AD%89%E5%AE%BD%E5%AD%97%E4%BD%93/8434037) 显示文字，导致其显示效果与原格式存在差异。
4. 没有语法高亮功能。在编辑配置文件时，语法高亮功能可以让你高效快速地找到指定配置项和值。它让配置文件更易于阅读，整体上提高了在服务器上进行操作的效率。本文介绍的文本编辑器均能识别出这些格式错误并做出提示和警告，然而记事本和写字板却不具备这些功能。

:::

## Visual Studio Code

<details>
  <summary>点击展开</summary>

![官网图片](https://code.visualstudio.com/assets/home/home-screenshot-win-lg.png)

全能型文本编辑器，**非常非常推荐**，支持简体中文 / 繁体中文 / 英文，仅支持 `Windows 10 +`。

缺点是启动速度可能不是很快，不过非常适合新手使用。(已经算是比较快的了。)

官网链接：https://code.visualstudio.com/

你要 **记得保存文件**

发现有人第一次用文本编辑器不知道编辑完后保存。

![](_images/白点.png)

VSCode 会在未保存的文件后标记一个白点，提示你这个文件编辑了但是没有保存 (其他文本编辑器类似)。

![](_images/vscode保存和自动保存.png)

保存按钮 (红色箭头)，也可以用快捷键来保存 Ctrl + S。

开启自动保存 (绿色箭头)。

~~当年 TrMenu 的自动重载治好了我的 autosave~~

[Windows 下载镜像](https://dl.8aka.org/plugins/VSCodeUserSetup-x64-1.94.0.exe)

[下载龟速怎么办](https://cn.bing.com/search?q=vscode%E4%B8%8B%E8%BD%BD%E9%BE%9F%E9%80%9F%E6%80%8E%E4%B9%88%E5%8A%9E)

[VSCode 视频安装教程](https://www.bilibili.com/video/BV1nM4m117Fv/?share_source=copy_web)

</details>

## Sublime Text

<details>
  <summary>点击展开</summary>

![Sublime Text](_images/sublime展示.png)

我不太喜欢的一点是保存文件时，对非激活的用户有一定概率弹出个窗口，提示你去付费支持 (可以选择不支持)。但这依旧是一个非常优秀的文本编辑器。

官网链接：https://www.sublimetext.com/

[如何汉化](https://cn.bing.com/search?q=sublime+text%e6%b1%89%e5%8c%96&qs=SC&pq=sublimetext&sk=HS1SC5&sc=10-11&cvid=19623440FA3646E0BEBECEED995CFCAF&FORM=QBRE&sp=7&lq=0)

</details>

## Kate

<details>
  <summary>点击展开</summary>

![Kate](https://kate-editor.org/images/konsole.png)

官网链接：https://kate-editor.org/zh-cn/

开源，跨平台，也可以秒开文件。

</details>

## Notepad3

<details>
  <summary>点击展开</summary>

![Notepad3](https://www.rizonesoft.com/wp-content/uploads/2023/09/notepad3-screenshot-1.jpg)

也是一个比较不错的文本编辑器。要求：**Windows 8 +**。

官网链接：https://rizonesoft.com/downloads/notepad3/

GitHub: https://github.com/rizonesoft/Notepad3

</details>

## Notepad++

<details>
  <summary>点击展开</summary>

![NPPesu](_images/Npp展示.png)

可用，相关功能也较为完善。

:::warning

作者政治立场可能引起众怒，但请理性看待：

[notepad++](http://www.notepadplus.com.cn/) 台独 + 多次辱 H [这里](https://cn.bing.com/search?q=notepad%252B%252B%E8%BE%B1%E5%8D%8E)。

dizhi 08 年奥运会 声称 (仅声明，但还是挺过分的) 不同意它的政治观点就在你的源码中添加随机字符 [这里](https://zhuanlan.zhihu.com/p/609192758)。

可替代为 **Notepad--** 等。

:::

</details>

## Notepad--

<details>
  <summary>点击展开</summary>

![Notepad--](_images/N减减展示.png)

国内作者维护的 Notepad++ 的替代品。

[`Gitee`](https://gitee.com/cxasm/notepad--)
[`GitHub`](https://github.com/cxasm/notepad--)

</details>

## HbuilderX

<details>
  <summary>点击展开</summary>

![HbuilderX](_images/HbuilderX展示.png)

官网链接：https://dcloud.io/hbuilderx.html

一个国产的文本编辑器。

:::warning

该软件存在一些问题，例如编译需要登录、命令行中夹带广告等（[来源](https://www.zhihu.com/question/47889106/answer/3189683653)）。

:::

### 关联右键菜单？

可以在工具→设置 (Ctrl+Alt+，) 打开设置，找到“常用配置”手动选中【关联右键菜单】。

</details>

## Geany

<details>
  <summary>点击展开</summary>

![](https://www.geany.org/media/uploads/screenshots/homepage/.thumbnails/geany_dark_2019-05-20.png/geany_dark_2019-05-20-500x0.png)

官网链接：https://www.geany.org/

</details>

## Vim

<details>
  <summary>点击展开</summary>

![](https://www.vim.org/images/vim_header.gif)

官网链接：https://www.vim.org/

这是一个纯命令行的编辑器，适用于在 SSH 或 Web Shell 中编辑，甚至是服务器上没有安装图形界面的场景，也具有图形化版本（GVim）和其他分支（例如 NeoVim）。

使用 `vim 文件名` 打开一个文件或者创建一个文件，然后按下 `I` 键开始编辑，编辑好后按下 `ESC` 退出，输入 `:wq` 命令即可保存，若不能保存，使用 `:wq!` 命令。

Vim 是可自由分发的开放源代码软件。

</details>

另外出于多方面原因，不推荐使用 GitHub 官方出品的 Atom，它已在 2022 年 12 月由于安全原因宣布停止维护。
