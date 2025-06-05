---
sidebar_position: 2
title: 资源包框架
---

# 资源包框架

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="ff">
<TabItem value="ia" label="ItemsAdder">

:::info

`SpigotMC` https://www.spigotmc.org/resources/.73355/

`GitHub(主页)` https://github.com/ItemsAdder

`GitHub(可以反馈BUG)` https://github.com/PluginBugs/Issues-ItemsAdder

`文档(英文)` https://itemsadder.devs.beer/

`文档(中文)` https://itemsadder.devs.beer/v/chinese

`文档(非官方中文)` https://docs.superiormc.cn/v/itemsadder-doc

:::

这是一个付费闭源插件，GitHub上并没有上传插件本体。

```text
【IA入门指南.新手必看.简洁版】
-
第一步：IA是基于原版的材质包框架所开发的插件，所以遵守Mojang制定的材质包规范， 如果你会材质包开发甚至不需要用到IA。如果你在使用IA时连CMD，命名空间，着色器，JSON这些最基本的内容都不知道请恶补以下内容：
https://zhangshenxing.github.io/VanillaModTutorial
-
第二步：
使用IA官方WIKI并结合原版材质包开发产出内容，但是请注意IA内有大量无用功能和屎山代码，所以将IA当作一个打包器是最优解的选择
https://itemsadder.devs.beer
-
第三步：如何让你的服务器更加劣质的办法(仅我个人而言，如果你看的很不舒服我很抱歉，如果你要对号入座那就是你是对的)
1. 大量声明空间引用乱的一批，这类服务器要不就是腐竹技术过低，要不就是海鲜缝合包或盗用，连国外9美刀的付费端都不如
2. 材质混素严重，在16px-128px漂浮不定，没有自己的主美体系
3. 乱加插件，看啥加啥，导致服务器变成性能答辩，这种服开不了几个月就跑路
4. 在高版本非特殊需求还在使用单端开发，没有采用最基本的群组框架

                                    ————来自ia群 群公告
```

连基础都没学不要他妈的问问问

</TabItem>
<TabItem value="orx" label="Oraxen">

:::info

`SpigotMC` https://www.spigotmc.org/resources/.72448

`GitHub` https://github.com/oraxen/oraxen

`文档(英文)` https://docs.oraxen.com/

`文档(中文)` https://snowcutieowo.github.io/Oraxen/README.html

:::

和 ItemsAdder 同类型的插件，付费开源，不想花钱可以自己构建。

如果你没有能力手搓出你想要的东西(如对资源包非常了解，能自己写代码补Oraxen没有的功能)那就去花钱用旁边的 ItemsAdder

还找到另一个中文文档 https://3504743864.gitbook.io/oraxen-wiki

</TabItem>

<TabItem value="ce" label="CraftEngine">

:::info

`Modrinth(社区版)` https://modrinth.com/plugin/craftengine

`Polymart` https://polymart.org/product/7624/craftengine

`MineBBS` https://www.minebbs.com/resources/11281

`文档(英文)` https://mo-mi.gitbook.io/xiaomomi-plugins/craftengine

`文档(中文)` https://momi.gtemc.cn/craftengine

`GitHub` https://github.com/Xiao-MoMi/craft-engine

:::

:::warning
本项目处于开发状态，如遇到错误请到 [GitHub](https://github.com/Xiao-MoMi/craft-engine/issues) 提交问题
:::

## 插件特点

CraftEngine 重新定义了 Minecraft 插件架构，作为下一代自定义内容实现的解决方案。通过 JVM 级别的注入，它提供了前所未有的性能、稳定性和可扩展性。

该框架提供了一个代码优先的 API，用于注册原生集成的方块行为和物品交互逻辑。

### 方块

CraftEngine 使用运行时字节码生成技术，在服务器原生级别注册自定义方块，并结合客户端数据包修改以实现视觉同步。此架构提供了以下功能：

- 动态注册方块，完全可控。
- 物理属性：硬度、引燃几率、亮度等所有标准属性。
- 自定义行为：通过 API 实现树苗、作物、下落的方块等。
- 原版兼容性：完全保留原版方块机制（例如音符盒、绊线）。
- 数据包兼容：可直接在数据包使用CraftEngine注册的方块。
- 更好的性能：直接捕获服务端对方块的一些原生事件比监听bukkit事件更快更稳定。

### 配方

CraftEngine 直接接管了原版的合成系统，相比于传统的合成插件有更强的稳定性，不会出现物品改个名字等修改了 NBT 的操作就导致配方失效的问题。

~~这样又节省了一个插件嘻嘻~~

### 家具

CraftEngine 使用一个服务端的真实体存储家具的数据，然后将客户端侧碰撞实体直接发送给客户端实现和服务端侧的碰撞实体同步。
这样有一个好处就是你的家具可以顺便摆放不会和传统的家具插件一样限制放置的位置。并且可以通过叠加多个碰撞箱实体实现效果更好的家具。

### 模板

鉴于插件配置的广泛性和复杂性，CraftEngine 实现了模块化模板系统以分隔关键设置。
这使得用户可以自定义配置格式，同时显著减少冗余的 YAML 定义。

### 资源包托管

<details>
<summary>前言</summary>

编者在使用 IA 的时候被他那**草台班子**的资源包托管折磨的不行，市面上又没有什么好的资源包托管插件。
于是编者在参与开发 CE 的时候就下定决心一定要把资源包托管这部分搞得省心省事。
</details>

#### 特性介绍
- 自托管：每个玩家进服的时候会申请到一个令牌可以下载一次可以非常有效地防止被刷流量
- S3托管：每次玩家进服会申请到一个极短有效时间（可配置过期时间）的下载链接以免被盗刷流量
- 可配置代理：大部分需要对外请求的托管方法都可以配置 http 代理服务器，以解决特殊网络环境下的痛点
- 可环境变量：为了避免你的机密信息被泄漏，插件可以从环境变量获取机密信息
- 可拓展性：CraftEngine 允许注册更多的托管方式，可以参考[此仓库](https://github.com/jhqwqmc/craft-engine-hosts)

### 资源包保护

:::info[说明]
CraftEngine 提供了比 [PackSquash](/Java/process/maintenance/resourcepack/compress) 更强大的内置资源包保护。

因为 CraftEngine 侧重于保护性所以使用保护功能时会导致资源包大小增加，如果侧重于压缩率更推荐使用 [PackSquash](/Java/process/maintenance/resourcepack/compress)。
:::

:::danger
不要尝试解压开启了 crash-tools 的的资源包！
:::

:::warning
这个保护并不是100%的防御，
你可能需要[《中华人民共和国著作权法》](https://www.gov.cn/guoqing/2021-10/29/content_5647633.htm) 的保护！

如果发现有可以破解资源包的工具可以前往本插件的 [Discord](https://discord.gg/WVKdaUPR3S) 打开工单反馈！
:::

```yaml title="推荐配置"
protection:
  crash-tools:
    method-1: true
    method-2: true
    method-3: true
  obfuscation:
    enable: true
    seed: 0
    fake-directory: true
    escape-unicode: true
    break-json: true
    resource-location:
      enable: true
      random-namespace:
        amount: 64
        length: 9
      random-path:
        source: "obf"
        depth: 32
        anti-unzip: true
      random-atlas:
        amount: 5
        use-double: true
      bypass-textures:
        - "@legacy_unicode"
        - "@vanilla_font_textures"
        - "@vanilla_item_textures"
        - "@vanilla_block_textures"
      bypass-models: []
      bypass-sounds: []
      bypass-equipments: []
```

</TabItem>

<TabItem value="nexo" label="Nexo">

:::info

`Polymart` https://polymart.org/resource/nexo.6901

:::

Oraxen 翻版,目前不推荐使用,英文文档都被删除了

</TabItem>
<TabItem value="Crucible" label="Crucible">

:::info

`MythicCraft` https://mythiccraft.io/index.php?resources/2

`文档(英文)` https://git.mythiccraft.io/mythiccraft/mythiccrucible

`文档(中文)` https://gitlab.com/TranslatedByShark/MythicCrucible-Manual-CN/-/wikis/home

:::

较为小众的资源包框架，不推荐使用

</TabItem>
</Tabs>