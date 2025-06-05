---
sidebar_position: 2
title: MCHPRS
---

# MCHPRS

一个为红石而构建的 Minecraft 服务器。每个 512x512 的区域运行在单独的线程上,基于 Rust ,拥有非常高的性能

MCHPRS 与传统服务器非常不同。因为这个服务器是为计算红石的使用而量身定制的,所以许多原版的东西在这里不存在

:::tip

MCHPRS 破坏了很多基于生物/传送装置的红石机器,因此 MCHPRS 最好的用途是纯粹的超大规模红石电路,比如红石计算机

:::

## 构建

MCHPRS 的构建需要 Rust 和 Cargo,具体安装教程请自行上网搜索

```shell
git clone https://github.com/MCHPR/MCHPRS.git
cd MCHPRS
cargo build --release
```

完成后，编译的可执行文件为 `./target/release/mchprs` 或 `./target/release/mchprs.exe` ，具体取决于操作系统。

如果你希望基于你的 CPU 进一步优化(但兼容性会下降),你可以使用这个指令构建:

```shell
RUSTFLAGS="-C target-cpu=native" cargo build --release
```

如果你不想构建,你也可以直接在 [GitHub Action](https://github.com/MCHPR/MCHPRS/actions/workflows/build.yml) 下载构建好的

## 配置

配置文件在 `Config.toml`:

| 字段                | 描述                                                                                                | 默认值                      |
|-------------------|---------------------------------------------------------------------------------------------------|--------------------------|
| `bind_address`    | 绑定地址与端口                                                                                           | `0.0.0.0:25565`          |
| `motd`            | MOTD                                                                                              | `"Minecraft 高性能红石服务器"`   |
| `chat_format`     | 聊天消息格式化方式（使用花括号插入`username`和`message`变量）                                                          | `<{username}> {message}` |
| `max_players`     | 最大同时在线玩家数                                                                                         | `99999`                  |
| `view_distance`   | 视距                                                                                                | `8`                      |
| `whitelist`       | 是否启用白名单（读取`whitelist.json`文件）                                                                     | `false`                  |
| `schemati`        | 模拟Open Redstone Engineers的[Schemati插件](https://github.com/OpenRedstoneEngineers/Schemati)的验证与目录结构 | `false`                  |
| `block_in_hitbox` | 允许在玩家碰撞箱内放置方块（简化碰撞检测逻辑）                                                                           | `true`                   |
| `auto_redpiler`   | 自动使用红石编译器                                                                                         | `false`                  |

## Velocity

MCHPRS 本身不支持玩家身份验证，但支持 Velocity 转发

要使用 Velocity IP 转发，您必须设置并配置 Velocity 代理。确保您的 Velocity 配置中 `player-info-forwarding-mode` 设置为
`modern`.然后，将其追加到 `Config.toml`:

```toml
[velocity]
enabled = true
# 这是来自你velocity配置中`forwarding-secret-file`文件里的密钥内容，
# 而不是该文件的路径。
secret = "<密钥>"
```

## 普通命令

| 命令                       | 缩写              | 说明                                                                                     |
|--------------------------|-----------------|----------------------------------------------------------------------------------------|
| `/rtps [rtps\|无限]`       | 无               | 将区域的红石刻每秒设置为`[rtps]`（1个红石刻=2个游戏刻）                                                      |
| `/radvance [刻数]`         | `/radv`         | 使区域推进`[刻数]`个红石刻                                                                        |
| `/teleport [玩家名]`        | `/tp`           | 传送至目标玩家所在位置                                                                            |
| `/teleport [x] [y] [z]`  | `/tp`           | 传送至指定坐标（支持相对坐标，浮点数格式参见[此文档](https://doc.rust-lang.org/std/primitive.f64.html#grammar)） |
| `/speed [速度值]`           | 无               | 设置飞行速度                                                                                 |
| `/gamemode [模式]`         | `/gmc`, `/gmsp` | 切换游戏模式                                                                                 |
| `/container [类型] [信号强度]` | 无               | 获取特定容器（如木桶），该容器被比较器检测时会输出指定信号强度                                                        |
| `/toggleautorp`          | 无               | 切换红石编译器的自动编译功能                                                                         |
| `/stop`                  | 无               | 关闭服务器                                                                                  |

## Redpiler

Redpiler 是 MCHPRS 的核心，这允许红石模拟比其他方式快得多。当 redpiler 运行时，所有红石连接都会预先计算，因此在此状态下与世界的交互受到限制。当
redpiler 运行时放置或破坏方块将导致重置并禁用 redpiler.

| 命令                  | 别名      | 说明                         |
|---------------------|---------|----------------------------|
| `/redpiler compile` | `/rp c` | 手动启动红石编译器。可使用下列多个参数（详见下文）。 |
| `/redpiler reset`   | `/rp r` | 停止红石编译器。                   |

| 参数               | 简写   | 说明                                                         |
|------------------|------|------------------------------------------------------------|
| `--optimize`     | `-o` | 启用红石编译优化。警告：此操作可能导致当前建造状态损坏。使用时请备份存档。                      |
| `--io-only`      | `-i` | 仅更新输入/输出相关方块状态（包括活板门、红石灯、音符盒、按钮、拉杆和压力板）。此参数可显著降低延迟并提升模拟速度。 |
| `--wire-dot-out` | `-d` | 将点状红石线视为`-i`参数中的输出方块（适用于彩色显示器等场景）。                         |
| `--update`       | `-u` | 红石编译器重置后更新全部方块状态。                                          |
| `--export`       | `-e` | 以二进制格式导出编译图谱。适用于红石编译图谱的第三方开发场景。                            |
| `--export-dot`   | 无    | 生成后端图谱的graphviz点文件。用于调试/开发用途。                              |

## 优点

- 启动速度极快,在配置文件已生成后启动仅需 2 ms
- 内存占用特别低,启动后内存占用仅有 1 MB
- 针对红石进行专门优化,达到了无与伦比的最强性能

## 其他

自行查看 [README](https://github.com/MCHPR/MCHPRS/)



