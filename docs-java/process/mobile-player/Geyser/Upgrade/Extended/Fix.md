---
title: 游戏机制
sidebar_position: 2
---

# 游戏机制

目前， 你服务器的基岩版玩家可能会遇到一些问题
像是卡在竹子中间，缺少一些Java版独有的粒子，物品材质之类的
我们可以通过安装额外插件来对客户端和服务端进行额外的修改来完成兼容

## Hurricane插件

此插件可以修复:
* 卡在竹子和滴水石锥中无法移动
* 骑乘实体时无法正确控制方向， 在需要使用钓竿的实体上影响尤为明显

:::warning

支持版本: 1.14-1.19/1.20.5

:::

## 皮肤

在安装Floodgate后， Java版玩家可以看到基岩版玩家的皮肤
但是在离线服务器， 为了让皮肤可以正确显示,一般会安装额外的皮肤插件
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

## GeyserOptionalPack

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

## 箱子优化

BedrockChestUI是一个用于实现自定义基岩版箱子UI行数的插件 ，由于基岩版原生不支持1，2，4，5行的箱子，所以本插件基于 ProtocolLib + 基岩版资源包实现 ，此插件需要Floodgate和ProtocolLib作为前置，支持Minecraft版本 1.17.1-1.19.4

[下载](https://gitee.com/xi-bohan/BedrockChestUI/releases/tag/BedrockChestUI)

将```ChstomChest0.2.mcpack```安装到```packs```，```BedrockChestUI-1.0.5.jar```是插件，都需要安装

## 更好的第三人称

可以让基岩版玩家获得更好的第三人称视角!

[下载地址](https://github.com/lilingfengdev/GeyserBetterBedrockThirdPerson/releases/tag/latest)

## BedrockParity

修复了以下问题

* 基岩玩家现在可以看到末影龙头嘴动画和猪灵头耳动画(当使用红石时)
* 横扫之刃现在可以在铁砧中使用

[下载](https://github.com/tbyt/BedrockParity/releases/tag/release)

## GeyserExtras

:::tip

此插件仅支持 1.20.6+

:::

此插件为Geyser提供了JE攻击冷却指示器样式

![](_image/GeyserExtras.gif)

还有!:

* Java 冷却指示器
* Java 战斗声音(横扫攻击、暴击、击退)
* 地狱顶部雾颜色修复
* 自动重新连接
* 基岩表情聊天
* 资源包加载
* 快捷菜单
* 块重影修复
* 玩家名单(类似于TAB，但是BE Form)

[项目地址](https://github.com/GeyserExtras/GeyserExtras)

[汉化地址](https://github.com/lilingfengdev/GeyserExtrasCN)
