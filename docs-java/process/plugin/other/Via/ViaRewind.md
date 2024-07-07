---
sidebar_position: 4
---

# ViaRewind

ViaRewind 可以让超低版本（1.7-1.8）客户端进入高版本服务器

需要下载两个插件才能发挥兼容性[ViaRewind](https://ci.viaversion.com/view/ViaRewind/job/ViaRewind)，[ViaRewind Legacy Support](https://ci.viaversion.com/view/ViaRewind/job/ViaRewind%20Legacy%20Support/)

## FAQ

### 进不去，怎么办？

去让你用这老客户端的玩家滚去吃屎

## 进不去，怎么办？

让敢安装ViaRewind腐竹滚去吃屎

## 配置文件

### ViaRewind

#### 指定 1.8.x 客户端如何查看冷却时间指示器

您可以在 "标题"、"动作条"、"BOSS 条 "和 "禁用 "之间进行选择

只有在服务器上禁用了 1.9 版本的冷却时间时才会禁用

1.8 版本的玩家可能会问，为什么 pvp 不能正常运行？

cooldown-indicator: "TITLE

#### 对于 1.7.x 客户端，用生存模式取代冒险模式

如果您的服务器使用 "CanDestroy" # 或 "CanPlaceOn"，请启用此选项。
或 "CanPlaceOn "标志的情况下启用此选项

replace-adventure: false

#### 1.9 版本的粒子是否会被 1.8 及更低版本的类似粒子替换。 1.8 及更低版本的类似粒子replace-particles: false

replace-adventure: false

#### 客户端被踢出前所写书籍的最大页数

max-book-pages： 100


#### 在客户被踢出前，书籍页面 json (!) 字符串的最大字符数

max-book-page-length: 5000

#### 是否为 1.7.x 客户端模拟 1.8+ 版本的世界边界

emulate-world-border: true

####  为 1.7.x 客户端显示 1.8+ 世界边界的粒子

参见 https://wiki.vg/index.php?title=Protocol&oldid=7368#Particle_2

world-border-particle： fireworksSpark

### ViaRewind-Legacy-Support

没啥好改的.jpg
