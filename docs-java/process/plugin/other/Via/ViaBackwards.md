---
title: ViaBackwards
sidebar_position: 3
---

# ViaBackwards

:::info

`SpigotMC` https://www.spigotmc.org/resources/.27448

`Hangar` https://hangar.papermc.io/ViaVersion/ViaBackwards

`Modrinth` https://modrinth.com/plugin/viabackwards

`GitHub` https://github.com/ViaVersion/ViaBackwards

:::

Via三件套中的向下兼容，需要安装 [ViaVersion](ViaVersion.md) 作为前置

[ViaBackwards 构建站](https://ci.viaversion.com/view/ViaBackwards/job/ViaBackwards/)

## FAQ

### 你们支持 1.8 及更低版本吗？

否，如果你希望向后兼容 1.8 及更低版本，请使用 ViaRewind 或 ProtocolSupport。

### 版本低于 1.17 的客户端看不到 y=0 以下的块，这会被修复吗？

不。

### 低版本看不到高版本物品的材质，怎么办

使用ViaBackwards-Plus，后文会讲

## 配置文件

* 为 1.12 版玩家转换 1.13 版的皮肤数据包。 需要一些额外的缓存

打开 `fix-1_13-face-player`

* 发送物品栏确认数据包，以替代 1.17 以下版本客户端的 ping 数据包

这仅对短范围内的 id 有效。 这对反作弊的兼容性很有用。

打开 `handle-pings-as-inv-acknowledgements`
