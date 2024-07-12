---
title: 插件兼容
sidebar_position: 3
---

# 插件兼容

让你服务器上的插件兼容Geyser

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

## BedrockPlayerSupport

一个优化基岩版玩家体验的插件，给部分命令添加了更适合基岩版玩家的表单，例如基础插件(CMI/EssentialsX/HuskHomes/AdvancedTeleport)的 /tpa /tpahere /home 命令，原版 /msg 命令
  
给部分主流登录插件添加了基岩版玩家自动注册、登录功能，其他登录插件也可以在配置文件中设置强制登录命令实现自动登录

[下载](https://github.com/DongShaoNB/BedrockPlayerSupport/releases) | [文档](https://docs.bps.dsnb.cc/#/zh-cn/start/introduce)