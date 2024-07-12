---
title: 搭建
sidebar_position: 2
---

# 搭建

## 下载

在 [核心选择](/docs-java/advance/cross-server/server-core-choose.md) 找到 Velocity 然后下载

## 启动

创建一个新的文件夹将核心放进去

并且使用参数启动以生成初始文件

如果想进一步优化可以使用 JVM 参数 [Velocity 官方](https://docs.papermc.io/velocity/getting-started#launching-velocity-under-windows)有推荐的 Flags

```bash
java -Xms1024M -Xmx1024M -jar 核心名字.jar
```

## 配置

打开 `velocity.toml`

找到并修改以下内容:

> 在 **[servers]** 那里该填什么?
>
> > 答:
> > `子服名 = "子服地址"`
> >
> > 如 `login = "0.0.0.0:25501"`

:::danger

中文需要用引号括起来。如`"登录服" = "0.0.0.0:25501"`

:::

[详细配置文件讲解](velocity.toml.md)

```toml
# velocity端的端口号，数字1000~65536随意
bind = "0.0.0.0:25577"
# 正版验证，有1.19.1+的子服不建议开启此项
online-mode = false
# 1.13+这里填modern 1.12-填bungeeguard
player-info-forwarding-mode = "modern"
# 是否应将服务器列表ping请求传递给后端服务器？
# 可用选项：
# - "disabled"：不会进行任何传递。velocity.toml和server-icon.png将确定初始服务器列表ping响应。
# - "mods"：仅将后端服务器的mod列表传递到响应中。将使用具有mod列表的后端服务器的第一个服务器。如果无法联系后端服务器，则Velocity不会显示任何mod信息。
# - "description"：使用后端服务器的描述和mod列表。将使用响应的第一个服务器列表中的第一个服务器（或强制主机）进行描述和mod列表。
# - "all"：将后端服务器的响应用作代理响应。如果无法联系服务器，则使用Velocity配置。
# 人话，motd插件在代理端用"disabled"，否则用"all"
ping-passthrough = "all"
# 子服名称和地址，名称不可包含”.”
[servers]
## 登录服
login = "0.0.0.0:25501"
## 生存服
survival = "0.0.0.0.:25502"
## 资源服
resource = "0.0.0.0:25503"
# 尝试连接子服的先后顺序
try = [
    "login","survival"
]
# 建议删除此项所有值
[forced-hosts]
"lobby.example.com" = [
    "lobby"
]
```

## 子服配置

Velocity 支持将玩家信息（如 IP 地址、UUID 和皮肤）转发到您的服务器。Velocity 支持三种转发格式：

- **Velocity Modern 转发** （现代转发）是一种自定义的转发格式（modern 转发），它更安全。
- **BungeeCord 转发**（也称为*传统转发*），它有更好的兼容性但安全性较低。
- **BungeeGuard**，与传统 BungeeCord 转发相同，但包含了一个密钥。它比单独的 BungeeCord 转发更好，但不如 Velocitymodern 转发理想。

您只能选择这些转发格式中的一种。目前不可能“混合匹配”转发模式或同时使用所有转发格式。一般来说，如果您只支持使用 Minecraft 1.13 及更新版本的客户端，请使用 Velocity Modern 转发；否则，您必须使用 BungeeCord 转发。

### 配置现代转发（Modern Forwarding）

<details>
  <summary>点击展开</summary>

**`modern` 转发** 是 Velocity 的原生格式，以高效的二进制格式转发所有玩家信息，并采用 MAC 代码增加安全性，使非法服务器难以绕过您的 Velocity 代理。但它**仅支持 Minecraft 1.13 或更高版本**。

#### 警告

- `modern` 转发与 **Minecraft 1.13 以下版本** 和 **ProtocolSupport 插件** 不兼容。如果使用这些，您需要使用传统的 BungeeCord 兼容转发。

#### 配置步骤

1. 在 `velocity.toml` 文件中将 `player-info-forwarding` 设置为 `modern`。
2. 确保您的服务器已正确配置以使用 Velocity 转发。

#### 为 Paper 配置现代转发

- Paper **1.14 及以上版本** 以及 **1.13.1/1.13.2 版本 377 及以上版本** 原生支持 Velocity 现代转发。

1. 在 `server.properties` 文件中禁用 `online-mode` 设置，以防止服务器自行验证玩家身份。
2. 如果之前已启用 BungeeCord 转发，需在 `spigot.yml` 中将 `settings.bungeecord` 设置为 `false`。
3. 在 `config/paper-global.yml` 中：
   - 设置 `proxies.velocity.enabled` 为 true。
   - 设置 `proxies.velocity.secret` 以匹配您的 `forwarding.secret` 文件中的密钥。
   - 设置 `proxies.velocity.online-mode` 与您的 `velocity.toml` 中的 `online-mode` 一致。
4. 编辑完成后，重新启动服务器。

**注意**：如果您使用的是 Paper **1.18.2 或更低版本**，请在 `paper.yml` 文件中查找相关设置。

<details>
  <summary>点击展开-为Fabric/Forge配置现代转发</summary>

#### 为 Fabric 配置现代转发

- 使用名为 **FabricProxy-Lite** 的 mod，可以在 Fabric 上使用修改过的服务器与 Velocity 现代转发。

#### 为 Forge 配置现代转发

- 使用名为 **ProxyCompatibleForge** 的 mod，可以在 Forge **1.16.5 或更高版本** 的修改过的服务器上使用 Velocity 现代转发。

</details>

</details>

### 配置传统 BungeeCord 兼容转发 (Legacy Forwarding)

<details>
  <summary>点击展开</summary>

#### 警告

- 传统转发 **本质上是不安全的**。如果必须使用，应了解如何正确保护您的服务器。

1. `legacy` 转发是 BungeeCord 启用 IP 转发时使用的玩家信息转发协议。
2. 它广泛支持且兼容性强，但 **不安全**。
3. 在 `velocity.toml` 中将 `player-info-forwarding` 设置为 `legacy`。
4. 确保服务器能接受 Velocity 发送的转发玩家数据。

#### 增加安全性

- 对于托管在共享主机上的代理，Velocity 可选地支持 **BungeeGuard**。
  - 将 `velocity.toml` 中的 `player-info-forwarding` 设置为 `bungeeguard`。
  - 在 BungeeGuard 配置的令牌部分添加 `forwarding.secret` 文件中的值。

#### 为 Spigot / Paper 配置传统转发

1. 在 `spigot.yml` 中将 `settings.bungeecord` 设置为 `true`。
2. 重新启动服务器。

<details>
  <summary>点击展开-为Sponge/Fabric配置传送转发</summary>

#### 为 Sponge 配置传统转发

1. 停止服务器。
2. 在 `config/sponge/global.conf` 文件中将 `modules.bungeecord` 和 `bungeecord.ip-forwarding` 设置为 true。
3. 重新启动 Sponge 服务器。

#### 为 Fabric 配置传统转发

**警告**：不再有任何积极支持传统转发的 mod。**请改用 Velocity 现代转发**。

</details>

</details>

## 加入

见 [加入服务器](/docs-java/advance/cross-server/join-server.md)
