---
title: 可安装在跨服端或子服
sidebar_position: 2
---

# 可安装在跨服端或子服

这一分类中的插件有单端版和跨服端版，你可以删除单端版使用跨服端版，在此页会对比此举的优缺点。

在 “好处” 与 “坏处” 对比中，如果一方被 “*” 标记，表示我们认为此方要远大于另一方。

## MiniMOTD

:::info

`SpigotMC` https://www.spigotmc.org/resources/.81254

`Hangar` https://hangar.papermc.io/jmp/MiniMOTD

`Modrinth` https://modrinth.com/plugin/minimotd

`MineBBS` https://www.minebbs.com/resources/.7238

`GitHub` https://github.com/jpenilla/MiniMOTD

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="MiniMOTD">
  <TabItem value="good" label="好处*">

在群组服中安装在子服占用资源而没有任何用处。所以请安装在跨服端。

  </TabItem>

  <TabItem value="bad" label="坏处">

暂未发现。

  </TabItem>
</Tabs>

## ViaVersion

:::info

见 [插件 | ViaVersion](/docs-java/process/plugin/other/Via/Via.md)

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

<Tabs queryString="ViaVersion">
  <TabItem value="good" label="好处">

不需要再花费精力维护子服的 ViaVersion。

  </TabItem>

  <TabItem value="bad" label="坏处*">

    由于 Velocity/BungeeCord 本身即设计为可以沟通多个不同版本服务器的代理端解决方案，因此虽然 ViaVersion 系列能够安装在代理端上，但是**强烈不建议直接在代理上使用 ViaVersion**。如果你执意这么做，请做好以下心理准备：

    * 反作弊插件误判。
    * 核心数据包处理出现大量异常。
    * 代理端性能下降。
    * 你不会获得因使用 ViaVersion 导致问题的任何技术支持。

  </TabItem>
</Tabs>

## Geyser

:::info

见 [插件 | Geyser](/docs-java/process/mobile-player/Geyser/introduction/overview.md)

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

<Tabs queryString="Geyser">
  <TabItem value="good" label="好处">

不需要再花费精力维护子服的 Geyser。

  </TabItem>

  <TabItem value="bad" label="坏处*">

    - 大部分反作弊可能并未兼容。
    - 基岩版 UI 可能无法使用
    - 不方便单端判断 BE 玩家
    - 其他的潜在问题……

  </TabItem>
</Tabs>

## ServerUtils

:::info

见 [插件 | ServerUtils](/docs-java/process/plugin/ManageTool/PluginManagement/ServerUtils.md)

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

<Tabs queryString="ServerUtils">
  <TabItem value="good" label="好处">

当安装在跨服端时，可以管理跨服端插件。

  </TabItem>

  <TabItem value="bad" label="坏处">

当安装在子服时，可以管理子服插件。

  </TabItem>
</Tabs>

当然，你可以同时安装在跨服端和子服。

## PlayerBalancer

:::info

`SpigotMC` https://www.spigotmc.org/resources/.55011

`GitHub` https://github.com/BGHDDevelopment/PlayerBalancer

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

可以用来设置多个子大厅，设置主大厅，并按照你配置的方式发送玩家到子服。

<Tabs queryString="PlayerBalancer">
  <TabItem value="good" label="好处">

TODO

  </TabItem>

  <TabItem value="bad" label="坏处">

TODO

  </TabItem>
</Tabs>

## TAB

:::info

见 [插件 | TAB](/docs-java/process/plugin/other/TAB&Scoreboard/TAB.md)

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

一款好用的 tab 栏插件，此外，还可以制作计分板，Bossbar

支持制作文字动画，支持 RGB 颜色

想让他显示 PlaceholderAPI 的变量?请在所有子服务器上安装 [Tab-Bridge](https://www.spigotmc.org/resources/.83966/)

此外，如果你使用了 Layout 功能，如果你不安装此插件，会导致一些显示 Bug

因此强烈建议将 Tab-Bridge 一起安装

建议将 TAB 安装在代理端上，如果仅在子服安装 TAB，某些特定情况下可能会出现“网络协议错误”等未知问题。

<Tabs queryString="TAB">
  <TabItem value="good" label="好处">

TODO

  </TabItem>

  <TabItem value="bad" label="坏处">

TODO

  </TabItem>
</Tabs>

## SkinsRestorer

:::info

[插件 | 皮肤 - skinsRestorer](/docs-java/process/plugin/other/SkinsRestorer.md)

:::

核心支持：
<a href="">
  <img src="https://img.shields.io/badge/BungeeCord-orange?&style=for-the-badge" class="stylish-image" alt="BungeeCord" />
</a>
<a href="">
  <img src="https://img.shields.io/badge/Velocity-blue?&style=for-the-badge" class="stylish-image" alt="Velocity" />
</a>

SkinRestorer 拥有完善的 Proxy Mode 以支持在代理服与字符同时部署，其本身作为老牌皮肤插件并无其他明显缺点。

<Tabs queryString="SkinsRestorer">
  <TabItem value="good" label="好处">

不需要再花费精力维护子服的 SkinRestorer。

  </TabItem>

  <TabItem value="bad" label="坏处">

不能使用插件提供的箱子 GUI 进行换肤等操作。

  </TabItem>
</Tabs>
