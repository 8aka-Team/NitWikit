---
title: velocity.toml
sidebar_position: 3
---

# 配置文件

以下配置仅为汉化参考，**请勿直接复制！！**

Velocity-CTD 完全兼容标准 Velocity 配置，并在此基础上增加了许多新的配置选项。

## 基础配置

```toml
# 配置版本。不要更改这个
config-version = "2.7"

# 代理应该绑定到哪个端口？默认情况下，我们将绑定到 25565 端口的所有地址。
bind = "0.0.0.0:25565"

# 应该显示什么 MOTD(服务器消息)？当玩家将你的服务器添加到他们的服务器列表时，会显示这个。只接受 MiniMessage 格式。
motd = "<#09add3>一个 Velocity-CTD 服务器"

# 我们应该显示多少最大玩家数？(Velocity 不支持在线玩家数的限制。)
show-max-players = 500

# 我们应该使用 Mojang 对玩家进行身份验证吗 (译者注：正版验证)？默认情况下，这是开启的。
online-mode = true

# 代理是否应该强制执行新的公钥安全标准？默认情况下，这是开启的。
force-key-authentication = true

# 如果从这个代理发送的客户端的 ISP/AS 与 Mojang 的认证服务器的不同，玩家将被踢出。这禁止了一些 VPN 和代理连接，但这是一种较弱的保护形式。
prevent-client-proxy-connections = false

# 我们应该将 IP 地址和其他数据转发到后端服务器吗？
# 可用选项：
# - "none":        不会进行任何转发。所有玩家看起来都是从代理连接的，并且将拥有离线模式的 UUID。
# - "legacy":      以 BungeeCord 兼容格式转发玩家 IP 和 UUID。如果你运行的是 Minecraft 1.12 或更低版本的服务器，请使用此选项。
# - "bungeeguard": 以 BungeeGuard 插件支持的格式转发玩家 IP 和 UUID。如果你运行的是 Minecraft 1.12 或更低版本的服务器，并且无法实现网络级防火墙 (在共享主机上)，请使用此选项。
# - "modern":      使用 Velocity 的原生转发，在登录过程中转发玩家 IP 和 UUID。仅适用于 Minecraft 1.13 或更高版本。
player-info-forwarding-mode = "NONE"

# 如果你使用 modern 或 BungeeGuard IP 转发，请在此处配置包含唯一密钥的文件。
# 文件应该是 UTF-8 编码的，并且不为空。
forwarding-secret-file = "forwarding.secret"

# 宣布你的服务器是否支持 Forge。如果你运行一个模组服务器，我们建议开启这个。
# 如果你的网络持续运行一个模组包，考虑使用 ping-passthrough = "mods" 代替，以便在服务器列表中更好地显示。
announce-forge = false

# 如果启用 (默认为 false)，并且代理处于在线模式，Velocity 将踢出任何已在线的玩家，如果尝试进行重复连接。
kick-existing-players = false

# Velocity 是否应该将服务器列表 ping 请求传递给后端服务器？
# 可用选项：
# - "disabled":    不会进行任何传递。velocity.toml 和 server-icon.png 将确定初始服务器列表 ping 响应。
# - "mods":        仅将后端服务器的 mod 列表传递到响应中。将使用具有 mod 列表的后端服务器的第一个服务器。如果无法联系后端服务器，则 Velocity 不会显示任何 mod 信息。
# - "description": 使用后端服务器的描述和 mod 列表。将使用响应的第一个服务器列表中的第一个服务器 (或强制主机) 进行描述和 mod 列表。
# - "all":         将后端服务器的响应用作代理响应。如果无法联系服务器，则使用 Velocity 配置。
ping-passthrough = "DISABLED"

# 如果启用 (默认为 false)，那么当悬停在服务器列表中的玩家数量上时，代理上在线玩家的样本将可见。
# 当 ping 传递设置为 "description" 或 "all" 时，这没有任何效果。
sample-players-in-ping = false

# 如果未启用 (默认为 true)，玩家 IP 地址将被替换为 <ip address withheld> 在日志中
enable-player-address-logging = true

[servers]
# 在此处配置你的服务器。每个键代表服务器的名称，值代表要连接到的服务器的 IP 地址。
lobby = "127.0.0.1:30066"
factions = "127.0.0.1:30067"
minigames = "127.0.0.1:30068"

# 当玩家登录或从服务器被踢出时，我们应该尝试让他进入哪个服务器？
try = [
    "lobby"
]

[forced-hosts]
# 在此处配置你的强制主机。
"lobby.example.com" = [
    "lobby"
]
"factions.example.com" = [
    "factions"
]
"minigames.example.com" = [
    "minigames"
]

[advanced]
# Minecraft 数据包必须有多大，我们才会压缩它。将其设置为零将压缩所有数据包，将其设置为 -1 将完全禁用压缩。
compression-threshold = 256

# 应该进行多少压缩 (从 0-9)。默认是 -1，使用默认级别 6。
compression-level = -1

# 客户端在上次连接后允许多快连接 (以毫秒为单位)？默认是三秒。通过将其设置为 0 来禁用此功能。
login-ratelimit = 3000

# 在此处指定连接超时的自定义超时时间。默认是五秒。
connection-timeout = 5000

# 在此处指定连接的读取超时时间。默认是 30 秒。
read-timeout = 30000

# 启用与 HAProxy 的 PROXY 协议的兼容性。如果你不知道这是干什么用的，那么就不要启用它。
haproxy-protocol = false

# 在代理上启用 TCP 快速打开支持。需要代理在 Linux 上运行。
tcp-fast-open = false

# 在 Velocity 上启用 BungeeCord 插件消息通道支持。
bungee-plugin-message-channel = true

# 显示来自客户端的 ping 请求到代理。
show-ping-requests = false

# 默认情况下，Velocity 将尝试优雅地处理用户意外失去与服务器的连接而没有明确的断开消息的情况，通过尝试回退用户，除了读取超时的情况。BungeeCord 将断开用户连接。你可以禁用此设置以使用 BungeeCord 的行为。
failover-on-unexpected-server-disconnect = true

# 向 1.13+ 客户端声明代理命令。
announce-proxy-commands = true

# 启用命令的日志记录
log-command-executions = false

# 启用记录玩家连接到代理，切换服务器以及从代理断开连接的日志。
log-player-connections = true

# 允许通过 Transfer 数据包 (Minecraft 1.20.5) 从其他主机传输的玩家被接收。
accepts-transfers = false

[query]
# 是否启用对 GameSpy 4 查询响应的响应。
enabled = false

# 如果查询已启用，查询协议应该在哪个端口上监听？
port = 25577

# 这是向查询服务报告的名称。
map = "Velocity-CTD"

# 默认情况下是否应该在查询响应中显示插件
show-plugins = false
```

## Velocity-CTD 特有配置

### Redis 配置

Velocity-CTD 内置了 Redis 支持，可以替代 RedisBungee 等插件。主要用于多代理服务器之间的数据同步：

```toml
[redis]
# 是否启用 Redis 支持
# 注意：只有在多代理服务器环境下才需要启用
enabled = false

# Redis 服务器地址
host = "localhost"

# Redis 服务器端口
port = 6379

# Redis 密码（如果 Redis 设置了密码）
password = ""

# Redis 数据库编号（0-15）
database = 0

# 连接超时时间（毫秒）
timeout = 2000

# 连接池最大连接数
max-connections = 8

# 连接池最小空闲连接数
min-idle = 0

# 连接池最大空闲连接数
max-idle = 8

# Redis 键前缀，用于避免与其他应用冲突
key-prefix = "velocity-ctd:"

# 是否启用 Redis 发布/订阅功能
# 用于代理服务器之间的实时通信
pubsub-enabled = true

# 发布/订阅频道前缀
pubsub-prefix = "velocity-ctd:pubsub:"
```

:::warning Redis 使用注意事项

1. **单代理服务器不需要 Redis**：如果你只有一个 Velocity-CTD 代理，无需启用 Redis
2. **多代理环境必须启用**：如果你有多个代理服务器，必须启用 Redis 来同步数据
3. **安全性**：确保 Redis 服务器的安全性，设置密码并限制访问

:::

### 队列系统配置

Velocity-CTD 内置了高效的队列系统，当服务器满员时自动将玩家加入队列：

```toml
[queue]
# 是否启用队列系统
# 建议在有高负载服务器时启用
enabled = true

# 队列更新间隔（毫秒）
# 值越小更新越频繁，但会增加性能开销
update-interval = 1000

# 是否允许玩家同时在多个队列中
# 通常建议设为 false 避免混乱
allow-multiple-queues = false

# 队列超时时间（秒）
# 玩家离线后保留队列位置的时间
timeout = 300

# 队列满时的行为
# "kick" - 踢出玩家（不推荐）
# "wait" - 让玩家等待（推荐）
full-queue-behavior = "wait"

# 最大队列长度（0 为无限制）
# 设置合理的上限避免队列过长
max-queue-length = 0

# 队列位置更新消息间隔（秒）
# 避免过于频繁的消息刷屏
position-update-interval = 10

# 是否在玩家加入队列时发送消息
send-join-message = true

# 是否在玩家离开队列时发送消息
send-leave-message = true

# 是否在队列位置更新时发送消息
send-position-updates = true

# 队列优先级系统
# 启用后可通过权限设置玩家优先级
priority-enabled = true

# 默认队列优先级
# 数值越高优先级越高
default-priority = 0
```

:::tip 队列系统使用建议

1. **小型服务器**：通常不需要启用队列系统
2. **中大型服务器**：建议启用队列系统来管理负载
3. **优先级设置**：通过权限 `velocity.queue.priority.<服务器>.<优先级>` 设置玩家优先级
4. **绕过队列**：通过权限 `velocity.queue.bypass` 或 `velocity.queue.bypass.<服务器>` 让玩家绕过队列

:::

### 命令配置

Velocity-CTD 提供了丰富的内置命令：

```toml
[commands]
# 启用/禁用各种 Velocity-CTD 命令
alert = true
alertraw = true
find = true
hub = true
ping = true
plist = true
transfer = true
sudo = true
uptime = true

# 是否启用服务器命令的 Tab 补全
server-tab-completion = true

# 是否允许通过命令重载配置
reload-enabled = true

# 命令别名配置
[commands.aliases]
hub = ["lobby", "l", "spawn"]
ping = ["latency", "ms"]
find = ["locate", "where", "search"]
plist = ["list", "players", "who"]

# 命令权限配置
[commands.permissions]
# 是否启用权限检查
enabled = true

# 默认权限前缀
prefix = "velocity.command."
```

### 多转发系统配置

Velocity-CTD 的独特功能：支持为不同服务器使用不同的转发模式。这在混合版本环境中非常有用：

```toml
[multi-forwarding]
# 是否启用多转发系统
# 注意：这是实验性功能，请谨慎使用
enabled = false

# 为特定服务器配置不同的转发模式
# 格式：服务器名 = "转发模式"
# 可用的转发模式：none, legacy, bungeeguard, modern
server-specific-forwarding = {
    "legacy-server" = "legacy",      # 1.12 及以下版本服务器
    "modern-server" = "modern",      # 1.13+ 版本服务器
    "bungeeguard-server" = "bungeeguard"  # 使用 BungeeGuard 的服务器
}

# 默认转发模式（当服务器未在上面列表中时使用）
# 建议设置为你最常用的转发模式
default-forwarding-mode = "modern"

# 是否在日志中记录转发模式切换
# 用于调试和监控
log-forwarding-changes = true
```

:::warning 多转发系统注意事项

1. **实验性功能**：多转发系统是实验性功能，可能存在兼容性问题
2. **配置复杂性**：需要为每个服务器正确配置对应的转发模式
3. **测试环境**：建议先在测试环境中验证配置
4. **性能影响**：可能会对性能产生轻微影响

**使用场景**：
- 同时运行 1.12 和 1.13+ 版本的服务器
- 部分服务器需要特殊的安全配置
- 逐步迁移转发模式时的过渡期

:::

### Velocity-CTD 性能优化配置

这些是 Velocity-CTD 特有的性能优化选项，需要添加到 `[advanced]` 部分：

```toml
[advanced]
# ... 其他标准 Velocity 配置 ...

# === Velocity-CTD 特有的性能优化配置 ===

# 是否应该在 Velocity 中禁用 Forge 的入站握手处理？
# 这对于不运行 Forge 或 NeoForge 的服务器很有用，可以提高性能。
disable-forge-inbound-handshake = false

# 是否应该禁用无符号消息踢出/断开连接事件？
# 这对于与某些插件的兼容性很有用。
disable-unsigned-message-kick = false

# 是否应该禁用头部和页脚的翻译？
# 这可以提高性能，特别是在使用 TAB 等插件时。
disable-header-footer-translation = false

# 最小版本要求。阻止使用旧版本客户端的用户连接。
# 格式：主版本.次版本.修订版本 (例如 "1.16.5")
# 留空表示不限制版本
minimum-version = ""

# 服务器品牌名称，将显示在 F3 调试屏幕中
server-brand = "Velocity-CTD"

# 当客户端版本过旧时显示的 ping 消息
outdated-ping-message = "请使用更新的客户端版本"

# 当回退服务器不可用时显示的 ping 消息
fallback-ping-message = "服务器正在维护中"
```

### 回退服务器配置

Velocity-CTD 提供智能回退服务器选择：

```toml
[fallback]
# 回退服务器选择模式
# "least" - 选择人数最少的服务器
# "most" - 选择人数最多的服务器
# "random" - 随机选择
# "cycle" - 循环选择
selection-mode = "least"

# 动态回退服务器列表
dynamic-fallbacks = ["lobby", "hub"]

# 是否启用负载均衡
load-balancing = true

# 负载均衡检查间隔（秒）
balance-check-interval = 30

# 服务器健康检查间隔（秒）
health-check-interval = 10

# 服务器被认为不健康的超时时间（秒）
unhealthy-timeout = 30
```

### 消息配置

Velocity-CTD 支持完全可配置的 MiniMessage 格式消息：

```toml
[messages]
# 是否启用 MiniMessage 格式
enable-minimessage = true

# 消息前缀
prefix = "<gradient:blue:cyan>[Velocity-CTD]</gradient> "

# 队列相关消息
queue-position = "<yellow>你在队列中的位置：<green>{position}</green>/<green>{total}</green>"
queue-joined = "<green>已加入 <yellow>{server}</yellow> 的队列"
queue-left = "<red>已离开队列"
queue-timeout = "<red>队列超时，已被移除"
server-full = "<red>服务器已满，已将你加入队列"

# 传送相关消息
transfer-success = "<green>成功转移到 <yellow>{server}</yellow>"
transfer-failed = "<red>转移失败：<yellow>{reason}</yellow>"
hub-teleport = "<green>正在传送到大厅服务器..."
hub-unavailable = "<red>大厅服务器暂时不可用"

# 查找相关消息
player-found = "<green>玩家 <yellow>{player}</yellow> 在服务器 <yellow>{server}</yellow>"
player-not-found = "<red>未找到玩家 <yellow>{player}</yellow>"

# 公告相关消息
alert-format = "<red>[公告]</red> <white>{message}</white>"
alert-sent = "<green>公告已发送到 <yellow>{count}</yellow> 个玩家"

# 权限相关消息
no-permission = "<red>你没有权限执行此命令"
command-disabled = "<red>此命令已被禁用"

# 错误消息
server-not-found = "<red>服务器 <yellow>{server}</yellow> 不存在"
player-offline = "<red>玩家 <yellow>{player}</yellow> 不在线"
command-error = "<red>命令执行出错：<yellow>{error}</yellow>"
```

## 配置建议

### 小型服务器（< 100 玩家）

适合个人服务器或小型社区：

```toml
# 基础配置，保持简单
bind = "0.0.0.0:25565"
online-mode = false  # 通常使用离线模式
player-info-forwarding-mode = "modern"  # 如果子服支持 1.13+

[queue]
enabled = false  # 小型服务器通常不需要队列

[redis]
enabled = false  # 单代理服务器不需要 Redis

[commands]
# 启用常用命令
hub = true
ping = true
find = true
alert = true

[advanced]
# 基础性能优化
compression-threshold = 256
login-ratelimit = 1000
```

### 中型服务器（100-500 玩家）

适合中等规模的服务器网络：

```toml
# 启用队列系统管理负载
[queue]
enabled = true
timeout = 300
position-update-interval = 15
priority-enabled = true

# 智能回退服务器
[fallback]
selection-mode = "least"
load-balancing = true
dynamic-fallbacks = ["lobby1", "lobby2"]

[commands]
# 启用更多管理命令
hub = true
ping = true
find = true
alert = true
plist = true
transfer = true

[advanced]
# 性能优化
disable-header-footer-translation = true
compression-level = 6
```

### 大型服务器（500+ 玩家）

适合大型服务器网络或多代理环境：

```toml
# 启用 Redis 进行数据同步
[redis]
enabled = true
host = "your-redis-server"
max-connections = 16
timeout = 3000

# 完整的队列系统
[queue]
enabled = true
allow-multiple-queues = false  # 避免复杂性
priority-enabled = true
timeout = 600  # 更长的超时时间
max-queue-length = 1000

# 高级回退配置
[fallback]
selection-mode = "least"
load-balancing = true
balance-check-interval = 15
health-check-interval = 5

# 启用所有命令
[commands]
hub = true
ping = true
find = true
alert = true
alertraw = true
plist = true
transfer = true
sudo = true
uptime = true

[advanced]
# 高性能配置
disable-header-footer-translation = true
disable-forge-inbound-handshake = true  # 如果不使用 Forge
compression-level = 6
connection-timeout = 3000
read-timeout = 45000
```

### 安全性配置

1. **使用 modern 转发**：为 1.13+ 服务器提供最高安全性
2. **配置防火墙**：限制子服务器的直接访问
3. **定期更新**：保持 Velocity-CTD 版本最新
4. **监控日志**：及时发现异常行为

### 性能优化建议

1. **禁用不必要的功能**：
   ```toml
   disable-forge-inbound-handshake = true  # 如果不使用 Forge
   disable-unsigned-message-kick = true    # 提高兼容性
   ```

2. **调整连接参数**：
   ```toml
   connection-timeout = 3000
   read-timeout = 30000
   login-ratelimit = 1000
   ```

3. **优化压缩设置**：
   ```toml
   compression-threshold = 256
   compression-level = 6
   ```

## 重要配置注意事项

### 转发模式配置

:::danger 重要提醒

**转发模式必须与子服务器配置匹配**：

- 如果代理使用 `modern` 转发，子服务器必须配置 Velocity 现代转发
- 如果代理使用 `legacy` 转发，子服务器必须启用 BungeeCord 模式
- 配置不匹配会导致玩家无法连接

:::

### 端口配置

```toml
# 确保端口不冲突
bind = "0.0.0.0:25565"  # 代理端口
# 子服务器使用不同端口，如 25566, 25567 等
```

### 安全配置

```toml
# 生产环境建议配置
online-mode = true  # 正版验证
force-key-authentication = true  # 强制密钥验证
player-info-forwarding-mode = "modern"  # 最安全的转发模式
```

## 常见配置错误

### 1. 转发配置错误

**错误现象**：玩家无法连接到子服务器，出现转发相关错误

**解决方案**：
- 检查代理的 `player-info-forwarding-mode` 设置
- 确保子服务器正确配置了对应的转发模式
- 检查 `forwarding.secret` 文件是否存在且内容正确

### 2. Redis 连接问题

**错误现象**：代理启动时 Redis 连接失败

**解决方案**：
```toml
[redis]
enabled = false  # 如果不需要 Redis，直接禁用
# 或者检查 Redis 服务器配置
host = "正确的Redis地址"
port = 6379
password = "正确的密码"
```

### 3. 队列系统问题

**错误现象**：队列不工作或玩家卡在队列中

**解决方案**：
```toml
[queue]
enabled = true
timeout = 300  # 适当的超时时间
update-interval = 1000  # 不要设置太小
```

### 4. 性能问题

**错误现象**：代理服务器延迟高或卡顿

**解决方案**：
```toml
[advanced]
# 禁用不必要的功能
disable-header-footer-translation = true
disable-forge-inbound-handshake = true  # 如果不使用 Forge

# 优化连接参数
compression-threshold = 512  # 增加压缩阈值
compression-level = 4  # 降低压缩级别
```

## 配置文件模板

### 基础模板（推荐新手使用）

```toml
config-version = "2.7"
bind = "0.0.0.0:25565"
motd = "<blue>我的 Velocity-CTD 服务器</blue>"
show-max-players = 100
online-mode = false
player-info-forwarding-mode = "modern"

[servers]
lobby = "127.0.0.1:25566"
survival = "127.0.0.1:25567"

try = ["lobby"]

[advanced]
compression-threshold = 256
login-ratelimit = 1000

[commands]
hub = true
ping = true
find = true
```
