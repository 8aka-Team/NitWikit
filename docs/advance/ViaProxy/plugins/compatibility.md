---
title: 兼容性插件
sidebar_position: 4
---

# 兼容性插件详解

兼容性插件主要解决 ViaProxy 与特定版本、服务器或网络环境的兼容性问题，确保在各种复杂环境下的稳定运行。

## ViaProxyBeta2Release {#beta2release}

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxyBeta2Release

`下载` https://github.com/ViaVersionAddons/ViaProxyBeta2Release/actions/workflows/build.yml

:::

ViaProxyBeta2Release 实现了 [Beta2Release](https://github.com/DirtPowered/Beta2Release) 代理功能，允许 Beta 1.7.3 客户端连接到现代服务器。

:::warning 重要提醒

此插件需要 **Java 21 或更高版本**

:::


### 安装配置

```toml
# plugins/ViaProxyBeta2Release/config.toml

# 消息设置
skip-title-messages = false      # 是否跳过标题和动作栏消息

# 渲染设置
render-distance = 4              # 渲染距离 (4-15)

# 认证设置
online-mode = false              # 是否启用正版验证

# 版本检查
strict-version-check = false     # 是否严格检查 Beta 1.7.3 版本

# 本地化设置
locale = "en_US"                 # 客户端翻译语言 (en_US, de_DE 等)

# 世界生成
world-seed = "-1849830396072973239"  # Beta 1.7.3 世界生成种子
```


## BungeeViaProxy {#bungeeviaproxy}

:::info

`GitHub` https://github.com/ViaVersionAddons/BungeeViaProxy

`下载` https://github.com/ViaVersionAddons/BungeeViaProxy/releases

:::

BungeeViaProxy 是一个 BungeeCord 插件，解决 ViaProxy 与 BungeeCord 的兼容性问题，允许使用单个 ViaProxy 实例管理运行不同 Minecraft 版本的多个后端服务器。

### 背景说明

**为什么需要这个插件？**
- ViaBungee 在 Minecraft 1.20.2 中停止支持
- 要继续在最新版本中使用 BungeeCord，需要 ViaProxy
- ViaProxy 与 BungeeCord 结合使用时存在主机名转发和重复服务器错误等问题

**解决方案**
BungeeViaProxy 通过确保正确的主机名转发和避免重复服务器错误，实现 ViaProxy 和 BungeeCord 的无缝集成。

### 适用场景

适合以下情况的服务器管理员：
- 使用 BungeeCord 管理多个不同版本的后端服务器
- 需要支持 Minecraft 1.20.2 及更高版本
- 希望避免在每个后端服务器上维护 ViaVersion 插件的复杂性
- 通过 ViaProxy 集中处理版本转换以减少运维开销

### 网络架构

```text
客户端 -> BungeeCord -> ViaProxy -> 后端服务器
```

:::warning 重要配置要求

使用此设置时，ViaProxy 必须放置在 BungeeCord 和后端服务器之间，并且需要以下配置：

- `proxy-online-mode` 必须设置为 `false`
- `auth-method` 必须设置为 `NONE`
- `wildcard-domain-handling` 必须设置为 `PUBLIC`
- `target-address` 被忽略（可以设置任意值）

:::

### 功能特性

1. **正确的主机名转发**
   - 当 ViaProxy 启用 `wildcard-domain-handling: PUBLIC` 时，确保正确转发包含 `.viaproxy.` 的地址
   - 解决服务器路由问题

2. **避免重复服务器错误**
   - 防止 BungeeCord 将不同主机名但相同 IP 的服务器视为相同
   - 使用未解析的 `InetSocketAddress` 对象确保唯一识别

### BungeeViaProxy 安装配置

1. **下载安装**
   ```bash
   # 下载最新版本并放入 BungeeCord plugins 目录
   wget -P plugins/ https://github.com/ViaVersionAddons/BungeeViaProxy/releases/latest/download/BungeeViaProxy.jar
   ```

2. **重启 BungeeCord 服务器**
   ```bash
   # 无需额外配置，插件会自动处理 .f2.viaproxy. 地址
   ```

### 配置示例

假设以下服务器设置：

| 服务器 | IP:端口 | Minecraft 版本 |
|--------|---------|----------------|
| BungeeCord | 127.0.0.1:25565 | N/A |
| ViaProxy | 127.0.0.1:25566 | N/A |
| 后端服务器 1 | 127.0.0.1:3001 | 1.20.4 |
| 后端服务器 2 | 127.0.0.1:3002 | 1.16.5 |
| 后端服务器 3 | 127.0.0.1:3003 | 1.21 |

#### BungeeCord 配置 (config.yml)
```yaml
online_mode: true
servers:
  server1:
    # ViaProxy 地址格式: address.<后端IP>.port.<后端端口>.version.<版本>.f2.viaproxy.<ViaProxy IP>.nip.io:<ViaProxy端口>
    address: address.127.0.0.1.port.3001.version.1.20.4.f2.viaproxy.127.0.0.1.nip.io:25566
    motd: '&1示例服务器 1'
    restricted: false
  server2:
    address: address.127.0.0.1.port.3002.version.1.16.5.f2.viaproxy.127.0.0.1.nip.io:25566
    motd: '&1示例服务器 2'
    restricted: false
  server3:
    # 版本可以省略（ViaProxy 会自动检测）
    address: address.127.0.0.1.port.3003.f2.viaproxy.127.0.0.1.nip.io:25566
    motd: '&1示例服务器 3（版本自动检测）'
    restricted: false
listeners:
- host: 0.0.0.0:25565
prevent_proxy_connections: false
ip_forward: true
```

#### ViaProxy 配置 (config.yml)
```yaml
# ViaProxy 监听地址
bind-address: 0.0.0.0:25566

# 目标服务器地址（使用通配符域名处理时此字段被忽略）
target-address: AnythingIsOK.ThisFieldIsIgnored.example.com

# 代理在线模式
proxy-online-mode: false

# 认证方法
auth-method: NONE

# 通配符域名处理
wildcard-domain-handling: PUBLIC
```

#### 后端服务器配置

- server.properties
```properties
server-port=3001
online-mode=false
```

- spigot.yml
```yaml
settings:
  bungeecord: true
```

:::tip 重要提示

- 后端服务器无需安装 ViaVersion 插件（版本转换由 ViaProxy 处理）
- 不要使用 ViaProxyAuthHook，因为 ViaProxy 位于 BungeeCord 和后端服务器之间

:::

### 工作原理

通常情况下，每个后端服务器需要单独的 ViaProxy 实例，这会导致内存消耗增加和更新工作量增大。

ViaProxy 的 `wildcard-domain-handling` 功能允许单个实例处理多个后端服务器的连接，使用特定的地址格式：

```text
address.<后端IP>.port.<后端端口>.version.<版本>.f2.viaproxy.<ViaProxy IP>.nip.io:<ViaProxy端口>
```

这些地址可以在 BungeeCord 的 `config.yml` 中列出，通过单个 ViaProxy 实例实现无缝连接管理。

## ViaBedrock {#viabedrock}

:::info

`GitHub` https://github.com/ViaVersion/ViaBedrock

`下载` https://build.lenni0451.net/job/ViaProxy/ (ViaProxy dev build)

:::

ViaBedrock 是 ViaVersion 的扩展插件，为 Minecraft 基岩版服务器提供支持，允许 Java 版客户端连接到基岩版服务器。

:::warning 开发状态

ViaBedrock 目前处于早期开发阶段，**不适合正式使用**。许多功能尚未实现

:::

### 可选客户端模组

- **[ViaBedrockUtility](https://github.com/Oryxel/ViaBedrockUtility)** - 自定义玩家皮肤和实体渲染支持
- **[BedrockSkinUtility](https://github.com/Camotoy/BedrockSkinUtility)** - 自定义玩家皮肤支持

## ViaSnapshot

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaSnapshot

`下载` https://github.com/ViaVersionAddons/ViaSnapshot/actions

:::

ViaSnapshot 支持 Minecraft 快照版本的协议转换，目前支持 15w31a 和 15w31b。

支持版本：

- 15w31a
- 15w31b

## ViaProxyEaglerCraft {#viaproxyeaglercraft}

:::info

`GitHub` https://github.com/Oryxel/ViaProxyEaglerCraft

`下载` https://github.com/Oryxel/ViaProxyEaglerCraft/releases

:::

ViaProxyEaglerCraft 为 ViaProxy 添加 EagleCraft 支持，允许 EagleCraft 客户端通过 WebSocket 连接到 Java 版服务器。


### EaglerCraft 安装配置

#### 配置文件

```yaml
# plugins/ViaProxyEaglerCraft/config.yml

# 使用正版皮肤
premium-skins: false

# 同步 Eagler 皮肤
eagler-skins: true

# 启用 Eagler 语音聊天
eagler-voice: true

# Eaglercraft 服务器模式
# 0 - 默认 (非 Eaglercraft)
# 1 - 强制非安全连接 (ws)
# 2 - 强制安全连接 (wss)
eagler-server-mode: 0
```

1. **重启 ViaProxy**

### 使用方法

**1.5.2 支持配置**
   如果需要支持 EagleCraft 1.5.2：
   ```yaml
   # ViaProxy 配置
   legacy-passthrough: true
   ```

:::warning 重要提醒

**皮肤文件限制** - 皮肤文件不包含在插件中，需要单独配置皮肤系统

:::
