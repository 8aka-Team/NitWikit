---
title: 配置详解
sidebar_position: 3
---

# 配置详解

本文档详细介绍 ViaProxy 的各种配置选项和参数设置。

## 配置文件结构

ViaProxy 使用 YAML 格式的配置文件，主要包含以下几个部分：

```text
viaproxy/
├── viaproxy.yml          # 主配置文件
├── ViaLoader/            # 协议转换配置
│   ├── viaversion.yml
│   ├── viabackwards.yml
│   ├── viarewind.yml
│   ├── vialegacy.yml
│   ├── viabedrock.yml
│   └── viaaprilfools.yml
├── plugins/              # 插件目录
├── logs/                 # 日志目录
└── saves.json            # 服务器保存数据
```

## 主配置文件 (viaproxy.yml)

### 基础网络配置

```yaml
# 网络绑定设置（格式：地址:端口）
bind-address: 0.0.0.0:25568

# 目标服务器设置
target-address: /miniconnect/lobby  # 目标服务器地址
target-version: Auto Detect (1.7+ servers)  # 目标版本

# 连接设置
connect-timeout: 8000      # 连接超时时间（毫秒）
compression-threshold: 256 # 数据压缩阈值（-1 禁用）
```

### 认证配置

```yaml
# 正版认证设置
proxy-online-mode: false   # 代理在线模式（查看皮肤和签名聊天）

# 认证方法：NONE（离线）或 account（使用账户）
auth-method: NONE
minecraft-account-index: 0  # GUI 账户列表索引

# BetaCraft 认证（经典服务器）
betacraft-auth: false
```

### 代理和高级功能

```yaml
# 后端代理设置（SOCKS/HTTP代理）
backend-proxy-url: ''      # 格式：type://address:port

# HAProxy 协议支持
backend-haproxy: false     # 发送 HAProxy 协议到目标服务器
frontend-haproxy: false    # 从客户端读取 HAProxy 协议

# 聊天签名（1.19+ 服务器）
chat-signing: true

# 通配符域名处理：NONE, PUBLIC, INTERNAL
wildcard-domain-handling: NONE
```

### 兼容性和特殊功能

```yaml
# 旧版客户端支持
allow-legacy-client-passthrough: false  # 允许 1.6.4 及以下客户端直连
allow-beta-pinging: false               # 允许 Beta 版本 ping

# 资源包设置
resource-pack-url: ''      # 资源包 URL
fake-accept-resource-packs: false  # 自动接受资源包

# 错误处理
ignore-protocol-translation-errors: false  # 忽略协议转换错误
suppress-client-protocol-errors: false     # 抑制客户端协议错误

# 其他功能
simple-voice-chat-support: false  # Simple Voice Chat 模组支持
send-connection-details: false     # 发送连接详情到服务器
log-ips: true                     # 在日志中显示 IP 地址
```

## 协议转换配置

### ViaVersion 配置 (ViaLoader/viaversion.yml)

```yaml
# 版本阻止设置
send-supported-versions: false  # 发送支持的版本列表
block-versions: []             # 阻止特定版本（如 ["<1.16", ">1.17.1"]）
block-protocols: []            # 阻止特定协议版本号

# 数据包限制器（1.17.1+ Paper 服务器已禁用）
max-pps: 1400                  # 最大每秒数据包数
max-pps-kick-msg: You are sending too many packets!

# 服务器端方块连接（推荐启用）
serverside-blockconnections: true
reduce-blockstorage-memory: false  # 减少方块存储内存使用

# 1.9+ 客户端在 1.8 服务器的设置
prevent-collision: true        # 防止碰撞
shield-blocking: true          # 盾牌格挡
simulate-pt: true             # 玩家刻模拟（修复吃喝、传送门）
use-new-effect-indicator: true # 新效果指示器
```

### ViaBackwards 配置 (ViaLoader/viabackwards.yml)

```yaml
# 显示设置
always-show-original-mob-name: true    # 始终显示原始生物名称
add-custom-enchants-into-lore: true    # 自定义附魔写入物品描述

# 兼容性修复
fix-formatted-inventory-titles: true   # 修复格式化的物品栏标题
handle-pings-as-inv-acknowledgements: true  # 处理 ping 作为物品栏确认
add-teamcolor-to-prefix: true          # 为 1.12 客户端添加队伍颜色

# 方块映射
sculk-shriekers-to-crying-obsidian: true  # 幽匿尖啸体映射为哭泣黑曜石
map-display-entities: true                # 显示实体映射为盔甲架
```

### ViaRewind 配置 (ViaLoader/viarewind.yml)

```yaml
# 冷却指示器：TITLE（标题）、ACTION_BAR（动作栏）、BOSS_BAR（Boss栏）、DISABLED
cooldown-indicator: TITLE

# 兼容性设置
replace-adventure: true        # 将冒险模式替换为生存模式
replace-particles: true        # 替换粒子效果
emulate-world-border: true     # 模拟世界边界

# 书籍限制
max-book-pages: 100           # 最大书页数
max-book-page-length: 5000    # 最大页面字符数

# 副手支持（1.8 客户端）
enable-offhand: true          # 启用副手功能
offhand-command: /offhand     # 副手切换命令
```

### ViaLegacy 配置 (ViaLoader/vialegacy.yml)

```yaml
# 动态计算设置
dynamic-onground: true        # 动态计算 OnGround 字段

# 旧版功能
sound-emulation: true         # 声音模拟（1.2.5 及以下）
legacy-skin-loading: false    # 旧版皮肤加载（1.6.4 及以下）
old-biomes: true             # 计算旧版生物群系（1.1 及以下）

# Classic 服务器设置
classic-chunk-range: 10      # Classic 区块加载范围
enable-classic-fly: false    # 启用 Classic 飞行

# Beta 1.7.3 设置
b1_7_3-motd: |              # Beta 1.7.3 服务器 MOTD
  The server seems to be running!
  Wait 5 seconds between each connection
```

### ViaBedrock 配置 (ViaLoader/viabedrock.yml)

```yaml
# 缓存设置（减少网络使用和加载时间）
blob-cache: disk             # Blob 缓存：disabled, memory, disk
pack-cache: disk             # 资源包缓存：disabled, memory, disk

# 资源包转换
translate-resource-packs: true  # 启用资源包转换
resource-pack-host: 127.0.0.1   # 资源包 HTTP 服务器地址
resource-pack-port: 0           # 资源包服务器端口（0=随机）

# 其他设置
disable-server-blacklist: false  # 禁用服务器黑名单
```

### ViaAprilFools 配置 (ViaLoader/viaaprilfools.yml)

```yaml
# 愚人节版本支持（当前无特殊配置）
there-is-no-config-yet: true
```
