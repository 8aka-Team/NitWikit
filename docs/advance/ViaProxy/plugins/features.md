---
title: 功能扩展插件
sidebar_position: 3
---

# 功能扩展插件详解

功能扩展插件为 ViaProxy 添加额外的功能和工具，包括访问控制、性能分析、多程序管理等实用功能。

## ViaProxyWhitelist {#whitelist}

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxyWhitelist

`下载` https://github.com/ViaVersionAddons/ViaProxyWhitelist/releases

:::

ViaProxyWhitelist 只允许指定的玩家加入 ViaProxy 服务器，提供基础的访问控制功能。


### 安装要求

- ViaProxy 最低版本：3.3.4
- 必须启用 `proxy-online-mode` 选项

### 安装配置


   启动服务器后，会在服务器文件夹中创建 `whitelist.yml` 文件：
   ```yaml
   # whitelist.yml
   # 非白名单玩家被踢出时显示的消息
   KickMessage: You are not whitelisted on this server!

   # 允许加入服务器的玩家列表
   Whitelist:
   - Player1
   - Player2
   ```




## ViaProxySpark {#spark}

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxySpark

`下载` https://github.com/ViaVersionAddons/ViaProxySpark/releases

:::

ViaProxySpark 将 Spark 性能分析器集成到 ViaProxy 中，提供详细的性能分析和监控功能。


## ViaProxyMultiLaunch {#multilaunch}

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxyMultiLaunch

`下载` https://github.com/ViaVersionAddons/ViaProxyMultiLaunch/releases

:::

ViaProxyMultiLaunch 允许 ViaProxy 同时启动和管理多个外部程序，适用于复杂的服务器环境。

## ViaLimbo

:::info

`GitHub` https://github.com/LOOHP/ViaLimbo

`Jenkins` https://ci.loohpjames.com/job/ViaLimbo/

:::

ViaLimbo 为 ViaProxy 提供 Limbo 服务器功能，可以在连接失败时显示等待界面。

### 功能特性

- **Limbo 服务器集成** - 集成 Limbo 服务器功能
- **等待界面** - 连接失败时显示等待界面
- **版本兼容** - 支持更多 Minecraft 版本加入

### ViaProxyLimbo 安装要求

- 需要 Limbo 版本 0.7.12-ALPHA 或更高版本
- 需要先安装 [Limbo 服务器](https://github.com/LOOHP/Limbo/)

### ViaProxyLimbo 安装配置

1. **安装 Limbo 服务器**
   ```bash
   # 下载并安装 Limbo 服务器
   wget https://github.com/LOOHP/Limbo/releases/latest/download/Limbo.jar
   ```

2. **安装 ViaLimbo 插件**
   ```bash
   # 下载 ViaLimbo 插件到 Limbo 服务器的 plugins 目录
   wget -P plugins/ https://ci.loohpjames.com/job/ViaLimbo/lastSuccessfulBuild/artifact/target/ViaLimbo.jar
   ```

3. **重启 Limbo 服务器**
   ```bash
   java -jar Limbo.jar
   ```

## ayunViaProxyLegacyIcon

:::info

`GitHub` https://github.com/ayunami2000/ayunViaProxyLegacyIcon

:::

ayunViaProxyLegacyIcon 为旧版服务器添加服务器图标支持，当后端服务器版本过旧无法提供图标时，为新版客户端显示服务器图标。

### 支持版本

#### 服务器版本
- Classic (c0.0.15 - c0.30)
- Alpha (a1.0.15 - a1.2.6)
- Beta (b1.0 - b1.8.1)
- Release (1.0.0 - 1.6.4) - 部分版本不支持图标

#### 客户端版本
- Release (1.7.2+) - 支持服务器图标的所有版本

### ViaProxyServerIcon 安装配置

在根目录中放置 `server-icon.png` 文件：
