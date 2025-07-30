---
title: 认证插件
sidebar_position: 1
---

# 认证插件详解

认证插件主要处理玩家身份验证、权限管理和账户相关功能。这些插件对于连接正版服务器或使用特殊认证系统至关重要。

## ViaProxyAuthHook

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxyAuthHook

`下载` https://github.com/ViaVersionAddons/ViaProxyAuthHook/releases

:::

ViaProxyAuthHook 允许 ViaProxy 客户端加入需要正版验证的服务器，通过重定向认证请求实现无缝连接。

### 工作原理

该插件通过重定向服务器的认证请求到 ViaProxy 实例来工作：
1. ViaProxy 检查客户端是否已通过 ViaProxy 认证
2. 已认证的客户端直接通过验证
3. 未认证的客户端将使用官方 Mojang 认证服务器

### 安装配置

#### 1. ViaProxy 端配置

1. **下载插件**
   ```bash
   # 下载到 ViaProxy 的 plugins 文件夹
   wget -P plugins/ https://github.com/ViaVersionAddons/ViaProxyAuthHook/releases/latest/download/ViaProxyAuthHook.jar
   ```

2. **启动 ViaProxy 生成配置**
   ```bash
   java -jar ViaProxy.jar
   ```

3. **启用代理在线模式**
   - GUI 模式：在界面中启用 "Proxy Online Mode"
   - CLI 模式：使用 `--proxy-online-mode` 参数
   - 配置文件：设置 `proxy-online-mode: true`

4. **复制密钥**
   从 `plugins/ViaProxyAuthHook/config.yml` 中复制 `secret-key`

#### 2. 服务器端配置

1. **下载 Agent**
   ```bash
   # 下载 AuthHook Agent 到服务器目录
   wget https://github.com/ViaVersionAddons/ViaProxyAuthHook/releases/latest/download/ViaProxyAuthHook-Agent.jar
   ```

2. **添加 JVM 参数**
   ```bash
   # 在服务器启动命令中添加
   java -javaagent:ViaProxyAuthHook-Agent.jar -jar server.jar
   ```

3. **配置密钥**
   启动服务器后，编辑生成的配置文件：
   ```yaml
   secret-key: "从ViaProxy配置中复制的密钥"
   viaproxy-url: "http://localhost:25568"  # ViaProxy地址
   ```

### 使用方法

#### GUI 模式
1. 在 ViaProxy 中添加 Minecraft 账户
2. 启用 "Proxy Online Mode"
3. 设置认证模式为 "AUTH_HOOK"
4. 连接到目标服务器

#### CLI 模式
```bash
java -jar ViaProxy.jar cli \
  --proxy-online-mode \
  --auth-method AUTH_HOOK \
  --target-ip "mc.hypixel.net" \
  --target-port 25565
```

#### 配置文件模式
```yaml
# viaproxy.yml
proxy-online-mode: true
auth-method: "AUTH_HOOK"
target-address: "mc.hypixel.net"
target-port: 25565
```


## ViaProxyOpenAuthMod

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxyOpenAuthMod

`下载` https://github.com/ViaVersionAddons/ViaProxyOpenAuthMod/releases

:::

ViaProxyOpenAuthMod 实现了 OpenAuthMod 协议，允许客户端通过 OpenAuthMod 模组连接正版服务器。

### OpenAuthMod 安装配置

1. **下载插件**
   ```bash
   # 下载到 ViaProxy 的 plugins 文件夹
   wget -P plugins/ https://github.com/ViaVersionAddons/ViaProxyOpenAuthMod/releases/latest/download/ViaProxyOpenAuthMod.jar
   ```

2. **客户端安装 OpenAuthMod**
   - 从 [Modrinth](https://modrinth.com/mod/openauthmod) 下载并安装 OpenAuthMod 模组

3. **启动 ViaProxy**
   - 重启 ViaProxy 以加载插件
   - 认证模式将自动添加 `OPENAUTHMOD` 选项

### OpenAuthMod 使用方法

#### OpenAuthMod GUI 模式
1. 在 ViaProxy 界面中选择认证模式为 "OPENAUTHMOD"
2. 连接到目标服务器

#### OpenAuthMod CLI 模式
```bash
java -jar ViaProxy.jar cli \
  --auth-method OPENAUTHMOD \
  --target-ip "mc.hypixel.net" \
  --target-port 25565
```

#### OpenAuthMod 配置文件模式
```yaml
# viaproxy.yml
auth-method: "OPENAUTHMOD"
target-address: "mc.hypixel.net"
target-port: 25565
```
