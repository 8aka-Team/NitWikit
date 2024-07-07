---
sidebar_position: 3
---

# ViaBackwards

Via三件套中的向下兼容，前置为ViaVersion

[下载地址](https://ci.viaversion.com/view/ViaBackwards/job/ViaBackwards/)

## FAQ

### 你们支持 1.8 及更低版本吗？

否，如果您希望向后兼容 1.8 及更低版本，请使用 ViaRewind 或 ProtocolSupport。

### 版本低于 1.17 的客户端看不到 y=0 以下的块，这会被修复吗？

不。

### 低版本看不到高版本物品的材质，怎么办

使用ViaBackwards-Plus，后文会讲

## 配置文件

### 始终显示映射生物的原始名称，而不仅仅是当光标悬停在其上方时才显示。

always-show-original-mob-name: true

### 将自定义附魔的名称和等级写入物品的lore。

如果自定义附魔插件已经手动将这些信息写入了lore，则将其设置为 false。

add-custom-enchants-into-lore: true

### 为 1.12 客户端在 1.13+ 服务器上的记分牌团队在前缀后添加颜色。

add-teamcolor-to-prefix: true

### 为 1.12 版玩家转换 1.13 版的皮肤数据包。 需要一些额外的缓存。

fix-1_13-face-player: false

### 通过将物品栏标题转换为传统文本，修复了 1.13 及更低版本客户端看不到物品栏标题颜色或格式的问题。

如果您遇到可翻译文本显示错误的问题，请禁用此功能。

fix-formatted-inventory-titles: true

### 发送物品栏确认数据包，以替代 1.17 以下版本客户端的 ping 数据包。

这仅对短范围内的 id 有效。 这对反作弊的兼容性很有用。

handle-pings-as-inv-acknowledgements: false

