---
title: 进阶
sidebar_position: 1
---

# 进阶

这里是进阶教程， 你可以通过进阶教程获得更好的基岩版兼容
让基岩版玩家拥有更加接近原生基岩版服务器的体验

## 进阶配置
通过 [此处](https://docs.superiormc.cn/v/geyser-wiki/user-guide/li-jie-pei-zhi) 教程对Geyser配置文件进行更精细的配置

## 资源包安装
你可以像Java版玩家一样给基岩版玩家发送服务器资源包
但与Java版玩家不同的是， 基岩版玩家可以接受并加载多个资源包

:::warning

基岩版资源包与Java版格式完全不同， 需要手动进行转换
基岩版的资源包扩展名均为.mcpack(其实.zip也行)
资源包转换在后续教程会提及

:::

此外基岩版不需要额外创建直链下载的链接， 直接通过服务器即可传输资源包

来到`服务端/plugins/geyser-spigot/packs/`目录

将资源包放入Packs文件夹后, 重载/Geyser reload或重启服务器即可

注意!重载Geyser来加载资源包可能会导致一些奇怪的问题发生，没事还是建议重启服务器来加载资源包

## 优化兼容性
目前， 你服务器的基岩版玩家可能会遇到一些问题
像是卡在竹子中间，缺少一些Java版独有的粒子，物品材质之类的
我们可以通过安装额外插件来对客户端和服务端进行额外的修改来完成兼容

# Geyser扩展

### Hurricane插件
此插件可以修复:
* 卡在竹子和滴水石锥中无法移动
* 骑乘实体时无法正确控制方向， 在需要使用钓竿的实体上影响尤为明显

:::warning

支持版本: 1.14-1.19/1.20.5

:::

### 皮肤

在安装Floodgate后， Java版玩家可以看到基岩版玩家的皮肤
但是在离线服务器， 为了让皮肤可以正确显示， 一般会安装额外的皮肤插件
这时， 基岩版玩家的皮肤显示又会变的不正常
我们可以通过安装GeyserSkinManager插件来解决这个问题

你可以在 [此处](https://github.com/Camotoy/GeyserSkinManager/releases) 下载

:::warning

GeyserSkinManager有不同版本
你若正在使用群组端， 请在群组端安装对应版本而不是其子服

:::

此外， Java版玩家可以通过安装BedrockSkinUtility模组来看见基岩版玩家的披风
你可以在 [此处](https://github.com/Camotoy/BedrockSkinUtility) 下载模组

:::warning

BedrockSkinUtility仅支持 Fabric 1.20.2 以下的版本

:::

### GeyserOptionalPack

GeyserOptionalPack是一个可选资源包
它通过资源包来实现一些Java版中独有的功能或特性


你可以在 [此处](https://download.geysermc.org/v2/projects/geyseroptionalpack/versions/latest/builds/latest/downloads/geyseroptionalpack) 下载

此资源包实现了:
- 盔甲架底座武器/底板可见性
- 盔甲架姿势
- 幻术师
- 部分缺失的粒子
- 副手动画
- 潜影贝隐形平等性
- 发光箭实体纹理 (没有实体描边渲染(基岩版本身就没有)，只有箭矢纹理)
- 提供超过记分板字符限制的绕过方式
- 隐藏在Java版中没有的UI元素，例如：
  - 制图台中的文本输入字段
  - 创造模式下的2x2工作台
  - 命令方块菜单中的时钟延迟和重命名字段
  - Java版中不存在的结构方块选项

### 箱子优化

BedrockChestUI是一个用于实现自定义基岩版箱子UI行数的插件 ，由于基岩版原生不支持1，2，4，5行的箱子，所以本插件基于 ProtocolLib + 基岩版资源包实现 ，此插件需要Floodgate和ProtocolLib作为前置，支持Minecraft版本 1.17.1-1.19.4

[下载](https://gitee.com/xi-bohan/BedrockChestUI/releases/tag/BedrockChestUI)

将```ChstomChest0.2.mcpack```安装到```packs```，```BedrockChestUI-1.0.5.jar```是插件，都需要安装


**后续部分还未完工， 咕咕咕！**

## GeyserUtils

GeyserUtils是zimzaza4开发的Geyser扩展工具

### 安装

[下载GeyserUtils](https://github.com/zimzaza4/GeyserUtils)

把`geyserutils-spigot`放入插件文件夹

将`geyserutils-geyser`放入geyser的`extensions`文件夹

![](_image/Geyser5.png)

这样就安装好了

## BetterBedrockThirdPerson

可以让基岩版玩家获得更好的第三人称视角!

[下载地址](https://github.com/lilingfengdev/GeyserBetterBedrockThirdPerson/releases/tag/latest)

## floodgate-skript

一个Skript扩展插件，可以在Skript中使用FloodgateAPI检测基岩版玩家

示例:

```
#玩家加入服务器后执行事件
on join:
    trigger:
        #如果玩家是通过floodgate加入服务器就让控制台执行此指令
        if player is from floodgate:
            make console execute command "say 欢迎基岩版玩家 %player% 加入服务器!"
        #如不是就让控制台执行此指令
        else:
            make console execute command "say 欢迎JAVA版玩家 %player% 加入服务器!"
```

## LuckBedrock

此插件为Luckperms权限管理插件提供了一个额外的情境判断，

使您可以设置仅基岩版玩家的权限或仅Java版玩家的权限，让您不再因为权限管理而急眼！

[下载](https://www.minebbs.com/threads/luck-bedrock.24169/)

## GeyserClickableMessageGUI

当玩家发送可在游戏中点击的链接时，此插件会弹出一个窗口以点击（基岩版原生不支持）

[下载](https://github.com/zimzaza4/GeyserClickableMessageGUI/releases/tag/1.0.0)

这是一个Geyser扩展，你应该安装到```Geyser-Spigot/extensions```

## ForcePlayerLink

强制基岩版玩家使用**JE OfflinePlayer UUID**（实现数据互通）

[注意事项]
- 不要使用允许基岩版绕过的登录插件
- 一定要启动 own-linking 关闭 global-linking

## BedrockPocketUIWarn

[下载地址](https://github.com/lilingfengdev/BedrockPocketUIWarnBuild/releases/tag/latest)

用于警告基岩版玩家不要使用`携带版UI`进服

## GeyserUpdater

[下载地址](https://www.spigotmc.org/resources/geyserupdater.88555/)

自动下载并应用 Spigot/CraftBukkit、BungeeCord 和 Velocity 上的新版本 Geyser。

## GeyserBlockJavaPlayers

让你的Java服务器仅基岩版玩家才能加入

[下载](https://ci.kejonamc.dev/job/GeyserBlockJavaPlayers/job/master/)

## BedrockParity

解决了很多Geyser问题，推荐下载

[下载](https://github.com/tbyt/BedrockParity/releases/tag/release)

## GeyserVoice

GeyserVoice 是一个 Java 服务端插件，旨在通过集成 VoiceCraft Proximity Chat 应用程序来增强 Minecraft 服务器上的多人游戏体验。该插件促进了跨平台通信，允许 Java 和 Bedrock 版本的玩家无缝地参与基于邻近的语音对话。

[下载](https://github.com/SineVector241/VoiceCraft-MCBE_Proximity_Chat/releases/)，[wiki](https://github.com/mineserv-top/GeyserVoice/wiki/)

## PickPack

PickPack 允许您为每个间歇泉玩家提供打开或关闭基岩资源包的选项。不幸的是，由于 Bedrock 的工作方式，重新连接是必要的 - 但要无缝完成。 这对于无法轻松安装资源包（例如控制台）的主机玩家非常有用，或者只允许每个玩家自定义要使用的包。

[下载](https://github.com/onebeastchris/PickPack/releases/tag/latest)

## GeyserExtras

此插件为Geyser提供了JE攻击冷却指示器样式

![](_image/GeyserExtras.gif)

还有类似Java版TAB查看在线玩家、游戏内切换资源包等功能，可以自己去项目地址看

[项目地址](https://github.com/GeyserExtras/GeyserExtras)
