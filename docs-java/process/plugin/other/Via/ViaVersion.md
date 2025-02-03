---
title: ViaVersion
sidebar_position: 2
---

# ViaVersion

:::info

`SpigotMC` https://www.spigotmc.org/resources/.19254

`Hangar` https://hangar.papermc.io/ViaVersion/ViaVersion

`Modrinth` https://modrinth.com/plugin/viaversion

`GitHub` https://github.com/ViaVersion/ViaVersion

`文档` https://viaversion.atlassian.net/wiki/spaces/VIAVERSION/overview

`插件百科` https://mineplugin.org/ViaVersion

:::

ViaVersion 是 Via 三件套的核心，提供了向上兼容，如果你想要向下兼容，可以再安装 [ViaBackwards](ViaBackwards.md) 和 [ViaRewind](ViaRewind.md)

[ViaVersion 构建站](https://ci.viaversion.com/job/ViaVersion)

## FAQ

方块材质纹理看起来不对时尝试将配置文件 `serverside-blockconnections` 改为`true`。

新版本的物品特性无法在旧版本游戏内使用是因为 ViaVersion 致力于兼容性而不是添加新的特性。

玩家被踢出时提示 `sending too many packets` 请修改配置文件 `max-pps`(推荐修改为原来的两倍以防恶意攻击)