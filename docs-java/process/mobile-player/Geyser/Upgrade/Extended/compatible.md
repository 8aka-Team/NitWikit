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