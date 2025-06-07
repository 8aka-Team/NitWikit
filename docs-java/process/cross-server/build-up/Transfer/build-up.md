---
title: 搭建
sidebar_position: 1
---
# Transfer 跨服搭建
## 准备
- 至少两个1.20.5或更高版本的《我的世界》服务端
- 确认要统一用正版验证还是离线模式

## 开始！

1. 把你的两个服务端放在不同的目录，同意 eula 后启动你的两个服务端。
2. 输入`stop`关停两个服务端
3. 用文本编辑器打开你两个服务端的server.properties文件，找到`accepts-transfers=false`，将 false 改 true。
4. 保存文件并重新启动两个服务端。
5. 如果你要把服务器公开给玩家，**所有子服必须暴露在在公网环境下**。

## 跨服指令测试与使用

进入两个服务端中的任何一个，使用`/transfer <地址> (端口) (玩家)`连接另一个服务器即可。

## 安全性提升

Transfer 方法**并不像 BungeeCord 与 Velocity**，其下游服务端不会禁止外来玩家进入，也没有登录插件适配。

这导致在离线模式的原版情况下，你要么麻烦玩家让玩家每跨服一次就过一遍验证，要么就得时时有人盯着服务器防止出事。

下面我将介绍两种有效的提升安全性的方法。

### 正版验证

众所周知，很多时候，正版验证都是很有用的验证手段。

但开了之后所有服务器都得开。

### OnlyTransfer插件

[OnlyTransfer](https://bilibili.com/opus/1062419036109799429) 是个由国人写的安全类插件，旨在**解决原版 Transfer 的几大痛点**。

~~（我更喜欢叫它Security Enhanced Transfer）~~

<details>
<summary>点击查看该插件更多内容</summary>
<p>
  
#### 插件版本要求及配置方法

需要 Spigot/Paper 1.21.4

可能是 Spigot/Paper 没有提供 Transfer 有关的 API，使得这个插件使用 NMS 实现导致目前只有1.21.4版本。

从[这里](https://enanetdisk.pages.dev/?file=%2Fdisk%2FMinecraftPlugins%2FOnlyTransfer.jar)下载插件，扔进所有子服的插件文件夹。

下面这是该插件的配置文件：

```text
# 是否允许通过服务器列表直接进入服务器
# 如果为 true，则该服务器被允许直接通过客户端进入，否则将仅允许 transfer
# 如果不是主城或者登录服，不建议打开该选项，否则安全性降低
allow-server-list: false

# 跨服传送的令牌，两台服务器必须配置相同的令牌
# 类似于 Velocity 的`forward.secret`
# 但貌似只有被传送的对象服务器才会检查这个
transfer-token: "114514191981"

# 允许的服务器IP和端口
# 不在该列表里的服务器不被允许跳转
# 如果是公共服务器，请确保所有子服均暴露在公网下
allowed-servers:
  - "127.0.0.1:25565"
```

#### 该插件与 Velocity 的 Transfer 支持兼容问题

经过测试，并不完全兼容：

单端在添加了 Velocity 为允许的服务器后，虽然 Velocity 没有密钥，但可以进入 Velocity 并来到 Velocity 下的子服。

但是，Velocity 下的子服安装了这个插件后，没法使用指令跳转到其他同样有这个插件的单端。而在两端均不使用这个插件的时候正常。

这意味着一些边缘应用场景下这个插件会失效，该问题已有人反馈给作者。
</p>
</details>
