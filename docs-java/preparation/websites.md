---
title: 可能用到的网站
sidebar_position: 3
---

# 可能用到的网站

开服不能只是从某一网站或者简单百度、谷歌获取资源，这样获取的资源种类非常贫乏。

因此，如果你是失去了 MCBBS 就不知道去哪里搜索 Minecraft 相关资源，

以下是一些可供参考的推荐网站：

## GitHub

  <div style={{textAlign: 'center'}}>
    <a href="https://github.com">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
        style={{width: '200px'}}
        alt="GitHub"
      /><br /><b>GitHub</b>
    </a>
  </div>

> https://github.com

全球最大的社交编程及代码托管网站。许多开发者会把自己编写的插件发到 GitHub。

虽然不登录账号不影响你浏览仓库和下载 Release 等。

但是登录后可以给作者发 Issues 来报告问题，提交新需求/建议，还可以下载 Actions 中的文件。

因此，建议注册并登陆账号。

GitHub 界面是全英文，可以尝试安装油猴汉化插件：https://github.com/maboloshi/github-chinese

<details>
  <summary>注册问题</summary>

[在 GitHub 上创建帐户](https://docs.github.com/zh/get-started/start-your-journey/creating-an-account-on-github)

</details>

<details>
  <summary>连不上怎么办</summary>

这是由于 GitHub 是开放的外国网站，网站上时不时会有一些不能在此讨论的内容，所以运营商会刻意地屏蔽这个网站，在很多时候都不能正常访问。具体的表现如下：[只要 Github 域名指向任意 IP，该 IP 的 443 端口就会超时 3 分钟](https://blog.csdn.net/weixin_43659597/article/details/118882176)。

有以下几种解决办法：

1. 魔法
2. [改 hosts](https://www.cnblogs.com/eudaimonia/p/16001981.html#1034247326)
3. [Watt Toolkit](https://steampp.net/)：下载安装完成后，在左侧侧边栏切换到**网络加速**，点击**平台加速 (免费)**，往下翻勾上 GitHub，然后点击**一键加速**，随后就可以正常访问 GitHub 了
<!--[点击此处](https://cn.bing.com/search?q=%E8%BF%9E%E4%B8%8D%E4%B8%8AGitHub%E6%80%8E%E4%B9%88%E5%8A%9E)-->

</details>

<details>
  <summary>下载太慢怎么办</summary>

使用魔法或者用加速地址：

- https://gitmirror.com/files.html
- https://moeyy.cn/gh-proxy
- https://ghps.cc

</details>

## Discord

  <div style={{textAlign: 'center'}}>
    <a href="https://discord.com">
      <img
        src="https://img.fastmirror.net/s/2025/01/24/67936fb558f81.png"
        style={{width: '200px'}}
        alt="Discord"
      /><br /><b>Discord</b>
    </a>
  </div>

> https://discord.com

国外开发者经常使用的聊天软件。你通常可以在 README 或 文档中找到开发者的 Discord 频道的邀请链接。

得益于有中国特色的互联网环境，你需要成为哈利波特才能成功访问。

## 资源站

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="website">
  <TabItem value="spigotmc" label="SpigotMC">

  <div style={{textAlign: 'center'}}>
    <a href="https://www.spigotmc.org/">
      <img
        src="https://static.spigotmc.org/img/spigot.png"
        style={{width: '200px'}}
        alt="SpigotMC"
      /><br /><b>SpigotMC</b>
    </a>
  </div>

> https://www.spigotmc.org

SpigotMC 是目前 Minecraft 开服圈最大的插件网站，最大的问题是搜索引擎十分狗屎。

建议注册账号并安装 **[Spigot Search Engine](https://www.spigotmc.org/resources/spigotsearchengine.54108/)**

<details>
  <summary>注册问题</summary>

![](_images/spigotmc.png)

使用魔法就可以看到验证了，而不是傻呵呵的跟人说。

*SpigotMC 不开放注册* *老外的网站真反人类*

</details>

  </TabItem>

  <TabItem value="bukkit" label="Bukkit">

  <div style={{textAlign: 'center'}}>
    <a href="https://dev.bukkit.org/">
      <img
        src="https://minecraft.fr/wp-content/uploads/2013/05/bukkit.jpg"
        style={{width: '200px'}}
        alt="Bukkit"
      /><br /><b>Bukkit</b>
    </a>
  </div>

> https://dev.bukkit.org/bukkit-plugins

一个相对 SpigotMC 更加古老的插件发布网站，一般用于寻找远古插件。

开一些低版本服务器可能用得到。

  </TabItem>

  <TabItem value="hangar" label="Hangar">

  <div style={{textAlign: 'center'}}>
    <a href="https://hangar.papermc.io/">
      <img
        src="https://docs.papermc.io/assets/images/papermc-logomark-512-f125384f3367cd4d9291ca983fcb7334.png"
        style={{width: '200px'}}
        alt="Hangar"
      /><br /><b>Hangar</b>
    </a>
  </div>

> https://hangar.papermc.io

PaperMC 的现代化的插件平台，目前正在 Beta 阶段，插件相对较新较少，但是都经过 PaperMC 官方验证，并且可以找到支持 Folia 和 Velocity 的插件。

插件搜索引擎比 SpigotMC 强了好几倍。

  </TabItem>

  <TabItem value="modrinth" label="Modrinth">

  <div style={{textAlign: 'center'}}>
    <a href="https://modrinth.com">
      <img
        src="https://avatars.githubusercontent.com/u/67560307?s=280&v=4"
        style={{width: '200px'}}
        alt="Modrinth"
      /><br /><b>Modrinth</b>
    </a>
  </div>

> https://modrinth.com

现代化的 Minecraft 新兴资源站，插件相对较新较少，但大部分都开源好评

插件搜索引擎比 SpigotMC 强了好几倍。

因为是新兴资源站，某些资源并未在此发布，但是足够你用了。

  </TabItem>

  <TabItem value="builtbybit" label="Builtbybit">

  <div style={{textAlign: 'center'}}>
    <a href="https://builtbybit.com/resources/categories/minecraft-plugins.1">
      <img
        src="https://raw.githubusercontent.com/swanis/builtbybit-java-api-wrapper/main/assets/icon-blue.png"
        style={{width: '200px'}}
        alt="Builtbybit"
      /><br /><b>Builtbybit</b>
    </a>
  </div>

> https://builtbybit.com/resources/categories/minecraft-plugins.1
>
> 链接已重定向到 Minecraft 相关资源区

一个综合交易平台，其中的 Minecraft 插件大多数都是付费的。

有一些圈钱的垃圾插件，请仔细辨别后购买。

如果你的钱包空空就别考虑了。

此外，此网站和 CurseForge 一样并不只有 Minecraft 相关资源，请注意识别别看错了。

  </TabItem>

  <TabItem value="polymart" label="Polymart">

  <div style={{textAlign: 'center'}}>
    <a href="https://polymart.org">
      <img
        src="https://img.fastmirror.net/s/2024/11/16/673815d815a3c.png"
        style={{width: '200px'}}
        alt="Polymart"
      /><br /><b>Polymart</b>
    </a>
  </div>

> https://polymart.org

一个 Minecraft 服务器付费插件资源平台。

  </TabItem>
</Tabs>

## 论坛

<Tabs queryString="discuss">
  <TabItem value="minebbs" label="MineBBS">

  <div style={{textAlign: 'center'}}>
    <a href="https://www.minebbs.com/">
      <img
        src="https://www.minebbs.com/data/assets/logo/mb-logo-blue-1x.png"
        style={{width: '200px'}}
        alt="MineBBS"
      /><br /><b>MineBBS</b>
    </a>
  </div>

> 插件板块：https://www.minebbs.com/forums/mcjeplugin

国内较为知名的综合性 Minecraft 论坛。曾以基岩版开服内容为主，MCBBS 关闭后其 Java 版相关内容丰富了许多。

同时，本教程在 MineBBS 也有搬运贴：https://www.minebbs.com/threads/nitwikit-geyser.26356/

  </TabItem>

  <TabItem value="mcbbs" label="MCBBS">

  <div style={{textAlign: 'center'}}>
    <a href="https://www.mcbbs.co">
      <img
        src="https://img.fastmirror.net/s/2024/11/15/67373333d67e6.png"
        style={{width: '200px'}}
        alt="MCBBS"
      /><br /><b>MCBBS</b>
    </a>
  </div>

曾经最大的综合性我的世界中文论坛，已经关站

这有个纪念版 https://www.mcbbs.co 不过只是看起来像，没有 MCBBS 的资源的

你可以在下方网站中找到部分 MCBBS 的帖子

> https://archives.mcbbs.co
>
> https://archive.mcbbs.run

  </TabItem>

  <TabItem value="pixelbbs" label="PixelBBS">

  <div style={{textAlign: 'center'}}>
    <a href="https://www.pixelbbs.cn">
      <img
        src="https://www.pixelbbs.cn/template/quater_2023_dji/src/Pixelbbs.gif"
        style={{width: '200px'}}
        alt="PixelBBS"
      /><br /><b>PixelBBS</b>
    </a>
  </div>

像素论坛还在搞云黑

即 像素论坛的 [失信人员名单页面](https://www.pixelbbs.cn/f-50-1.html)。

交易前查询下这人有没有被记录过，被记录过就别交易了。如果你被骗了，搜集证据去发个帖，给大家避个雷。

能为你避开 90% 诈骗坑的 [防骗小技巧](https://www.pixelbbs.cn/t-1377-1-1.html)。

  </TabItem>

</Tabs>

## 工具网站

<Tabs queryString="tool">

  <TabItem value="mcmod" label="MCmod">

  <div style={{textAlign: 'center'}}>
    <a href="https://www.mcmod.cn">
      <img
        src="https://img.fastmirror.net/s/2024/10/01/66fbe12c6bb07.png"
        style={{width: '200px'}}
        alt="MCmod"
      /><br /><b>MCmod</b>
    </a>
  </div>

> https://www.mcmod.cn

国人的 MC mod 收录网站，资源很丰富，并且详细列出 mod 之间的关系（如前置，联动，附属等）

  </TabItem>

  <TabItem value="bstats" label="bStats">

常用的统计数据网站，不少开发者会在自己的插件中写统计数据功能

例如：

Paper 核心的使用情况：https://bstats.org/plugin/server-implementation/Paper/580

PlaceHolderAPI 插件使用情况：https://bstats.org/plugin/bukkit/PlaceholderAPI/438

DecentHolograms 插件统计：

![](https://bstats.org/signatures/bukkit/DecentHolograms.svg)

  </TabItem>

  <TabItem value="minecraft-tools" label="Minecraft 工具箱">

  <div style={{textAlign: 'center'}}>
    <a href="https://minecraft.tools">
      <img
        src="https://minecraft.tools/en/css/img/logo.png"
        style={{width: '200px'}}
        alt="Minecraft tools"
      /><br /><b>Minecraft tools</b>
    </a>
  </div>

> https://minecraft.tools

有时候你项要加三两个数据包形式的自定义合成，自定义超平坦地图，烟花，文本生成等，但苦恼不会使用？

请选择 [Minecraft 工具箱](https://minecraft.tools/)，自动生成各种 Minecraft 指令、数据包等。

  </TabItem>

  <TabItem value="motd" label="MOTD">

![](_images/motd.png)

MOTD 就是 Minecraft 客户端在尝试连接服务器之前，服务器对客户端发送的一条短消息，这通常包含 1-3 行文字和一张图片。

MOTD 是玩家进入服务器之前最先看到的东西，决定了玩家对一个服务器的第一印象，所以，请任选一个 MOTD 生成器生成个性化 MOTD：

> [MOTD.gg](https://motd.gg)(非常非常推荐)(~~还可以偷别的服务器的 motd~~)
>
> [MOTD creator](https://mctools.org/motd-creator)
>
> [Minecraft MOTD tool](https://minecraft.tools/en/motd.php)

  </TabItem>
  <TabItem value="misode" label="数据包生成器">
    <div style={{textAlign: 'center'}}>
      <a href="https://misode.github.io/">
        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="26" height="6" rx="3" fill="#7CB45C"></rect><rect x="8" width="18" height="6" rx="3" fill="#4BA041"></rect><rect y="11" width="32" height="6" rx="3" fill="#AAA8A8"></rect><rect x="11" y="11" width="21" height="6" rx="3" fill="#91908F"></rect><rect x="11" y="22" width="21" height="6" rx="3" fill="#70B5C3"></rect><rect x="17" y="22" width="15" height="6" rx="3" fill="#4D989B"></rect></svg>
      </a>
    </div>
      
    https://misode.github.io/
      
    如果你喜欢编写数据包甚至资源包那么这个网站会很有用，他拥有大量的可视化编辑器，方便进行快速编辑，但是上手需要一定相关知识基础。
  </TabItem>
</Tabs>

## 启动器

<Tabs queryString="launcher">

  <TabItem value="hmcl" label="HMCL">

![](https://hmcl.huangyuhui.net/assets/img/main_page.png)

> https://hmcl.huangyuhui.net

知名老牌开源启动器

  </TabItem>

  <TabItem value="pcl" label="PCL2">

![](https://pic1.afdiancdn.com/user/df2dfad2960911e89c5252540025c377/common/0b2e5b9a6596eaee20f00f56da30f502_w1500_h300_s457.jpg)

> https://afdian.com/a/LTCat

知名老牌启动器，现已开源大部分代码，由此衍生出社区版（一旁的 CE 版）

  </TabItem>

  <TabItem value="pcl-ce" label="PCL2-CE">

![](https://pic1.afdiancdn.com/user/df2dfad2960911e89c5252540025c377/common/0b2e5b9a6596eaee20f00f56da30f502_w1500_h300_s457.jpg)

> https://github.com/PCL-Community/PCL2-CE

基于 PCL2 开源代码二次开发的社区版本，包括了主线暂未制作的功能和改进

  </TabItem>

  <TabItem value="bakaxl" label="bakaXL">

![](https://contents.baka.zone/web-cdn/neo//assets/video/bakaxl-v3-welcome-hero.mp4)

> https://www.bakaxl.com

御三家启动器之一

  </TabItem>

  <TabItem value="launcherx" label="LauncherX">

![](https://www.minebbs.com/attachments/1739290352524-png.90678)

> https://corona.studio/lx

美观、强大、优雅的 Java 版启动器

  </TabItem>
</Tabs>
