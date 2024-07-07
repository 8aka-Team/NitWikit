---
sidebar_position: 3
---

以下配置仅为汉化参考  **请勿直接复制！！**

```toml
# 配置版本。不要更改这个
config-version = "2.7"

# 代理应该绑定到哪个端口？默认情况下，我们将绑定到25577端口的所有地址。
bind = "0.0.0.0:25577"

# 应该显示什么MOTD（服务器消息）？当玩家将您的服务器添加到他们的服务器列表时，会显示这个。只接受MiniMessage格式。
motd = "<#09add3>一个Velocity服务器"

# 我们应该显示多少最大玩家数？（Velocity不支持在线玩家数的限制。）
show-max-players = 500

# 我们应该使用Mojang对玩家进行身份验证吗 （译者注: 正版验证）？  默认情况下，这是开启的。
online-mode = true

# 代理是否应该强制执行新的公钥安全标准？默认情况下，这是开启的。
force-key-authentication = true

# 如果从这个代理发送的客户端的ISP/AS与Mojang的认证服务器的不同，玩家将被踢出。这禁止了一些VPN和代理连接，但这是一种较弱的保护形式。
prevent-client-proxy-connections = false

# 我们应该将IP地址和其他数据转发到后端服务器吗？
# 可用选项：
# - "none":        不会进行任何转发。所有玩家看起来都是从代理连接的，并且将拥有离线模式的UUID。
# - "legacy":      以BungeeCord兼容格式转发玩家IP和UUID。如果您运行的是Minecraft 1.12或更低版本的服务器，请使用此选项。
# - "bungeeguard": 以BungeeGuard插件支持的格式转发玩家IP和UUID。如果您运行的是Minecraft 1.12或更低版本的服务器，并且无法实现网络级防火墙（在共享主机上），请使用此选项。
# - "modern":      使用Velocity的原生转发，在登录过程中转发玩家IP和UUID。仅适用于Minecraft 1.13或更高版本。
player-info-forwarding-mode = "NONE"

# 如果您使用modern 或BungeeGuard IP转发，请在此处配置包含唯一密钥的文件。
# 文件应该是UTF-8编码的，并且不为空。
forwarding-secret-file = "forwarding.secret"

# 宣布您的服务器是否支持Forge。如果您运行一个模组服务器，我们建议开启这个。
#
# 如果您的网络持续运行一个模组包，考虑使用ping-passthrough = "mods"代替，以便在服务器列表中更好地显示。
announce-forge = false

# 如果启用（默认为false），并且代理处于在线模式，Velocity将踢出任何已在线的玩家，如果尝试进行重复连接。
kick-existing-players = false

# Velocity是否应该将服务器列表ping请求传递给后端服务器？
# 可用选项：
# - "disabled":    不会进行任何传递。velocity.toml和server-icon.png将决定初始服务器列表ping响应。
# - "mods":        只将后端服务器的模组列表传递到响应中。
#                  使用您尝试列表中的第一个服务器（或强制主机）的模组列表。如果无法联系到后端服务器，Velocity将不会显示任何模组信息。
# - "description": 使用来自后端服务器的描述和模组列表。尝试列表中（或强制主机）响应的第一个服务器将被用于描述和模组列表。
# - "all":         使用后端服务器的响应作为代理响应。如果没有服务器可以联系，将使用Velocity配置。
ping-passthrough = "DISABLED"

# 如果未启用（默认为true），玩家IP地址将被替换为<ip address withheld>在日志中
enable-player-address-logging = true

[servers]
# 在此处配置您的服务器。每个键代表服务器的名称，值代表要连接到的服务器的IP地址。
lobby = "127.0.0.1:30066"
factions = "127.0.0.1:30067"
minigames = "127.0.0.1:30068"

# 当玩家登录或从服务器被踢出时，我们应该尝试让他进入哪个服务器？
try = [
    "lobby"
]

[forced-hosts]
# 在此处配置您的强制主机。
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
# Minecraft数据包必须有多大，我们才会压缩它。将其设置为零将压缩所有数据包，将其设置为-1将完全禁用压缩。
compression-threshold = 256

# 应该进行多少压缩（从0-9）。默认是-1，使用默认级别6。
compression-level = -1

# 客户端在上次连接后允许多快连接（以毫秒为单位）？默认是三秒。通过将其设置为0来禁用此功能。
login-ratelimit = 3000

# 在此处指定连接超时的自定义超时时间。默认是五秒。
connection-timeout = 5000

# 在此处指定连接的读取超时时间。默认是30秒。
read-timeout = 30000

# 启用与HAProxy的PROXY协议的兼容性。如果您不知道这是干什么用的，那么就不要启用它。
haproxy-protocol = false

# 在代理上启用TCP快速打开支持。需要代理在Linux上运行。
tcp-fast-open = false

# 在Velocity上启用BungeeCord插件消息通道支持。
bungee-plugin-message-channel = true

# 显示来自客户端的ping请求到代理。
show-ping-requests = false

# 默认情况下，Velocity将尝试优雅地处理用户意外失去与服务器的连接而没有明确的断开消息的情况，通过尝试回退用户，除了读取超时的情况。BungeeCord将断开用户连接。您可以禁用此设置以使用BungeeCord的行为。
failover-on-unexpected-server-disconnect = true

# 向1.13+客户端声明代理命令。
announce-proxy-commands = true

# 启用命令的日志记录
log-command-executions = false

# 启用记录玩家连接到代理，切换服务器以及从代理断开连接的日志。
log-player-connections = true

# 允许通过Transfer数据包（Minecraft 1.20.5）从其他主机传输的玩家被接收。
accepts-transfers = false

[query]
# 是否启用对GameSpy 4查询响应的响应。
enabled = false

# 如果查询已启用，查询协议应该在哪个端口上监听？
port = 25577

# 这是向查询服务报告的名称。
map = "Velocity"

# 默认情况下是否应该在查询响应中显示插件
show-plugins = false
```