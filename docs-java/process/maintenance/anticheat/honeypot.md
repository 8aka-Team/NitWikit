---
title: Honeypot
sidebar_position: 5
---

# Honeypot

## 概述

Honeypot 是一款采用"蜜罐陷阱"机制的反作弊插件，通过诱导恶意玩家触发陷阱来检测和处理破坏行为。

通常被用来检测 x-ray 玩家

### 工作原理

将任意方块设置为蜜罐，当玩家破坏或交互时触发预设动作（通知、封禁、执行命令等）。

## 安装

下载插件：[Modrinth](https://modrinth.com/plugin/honeypot) | [GitHub](https://github.com/TerrorByteTW/Honeypot/releases)

## 核心配置

### config.yml 关键设置

```yaml
plugin:
  # 触发动作前允许破坏的蜜罐数量
  blocks-broken-before-action-taken: 1

  # 是否允许玩家实际破坏蜜罐方块
  allow-player-destruction: false

  # 是否允许爆炸破坏蜜罐
  allow-explode: false

# 容器交互设置
container-actions:
  enable-container-actions: true
  use-inventory-click: false
  only-trigger-on-withdrawal: true

# Discord 通知
discord:
  enable: false
  url: "https://discord.com/api/webhooks/..."
  send-when: action  # action 或 onbreak

# 过滤器（可选）
filters:
  blocks: false
  inventories: false

# 允许的方块类型（启用过滤时）
allowed-blocks:
  - DIAMOND_ORE
  - EMERALD_ORE
  - ANCIENT_DEBRIS
```

## 基础命令

```bash
# 创建蜜罐
/honeypot create <action> [block]

# 移除蜜罐
/honeypot remove

# 查看附近蜜罐
/honeypot locate [range]

# 移除附近蜜罐
/honeypot remove near [range]

# 查看玩家历史
/honeypot history <player>

# 重载配置
/honeypot reload
```

## 权限

```yaml
honeypot.create     # 创建蜜罐
honeypot.remove     # 移除蜜罐
honeypot.locate     # 定位蜜罐
honeypot.history    # 查看历史
honeypot.admin      # 所有管理权限
honeypot.bypass     # 绕过蜜罐触发
honeypot.notify     # 接收蜜罐通知
```

## 自定义动作

### honeypots.yml 配置

```yaml
honeypots:
  # 警告动作
  warn:
    action-type: "command"
    commands:
      - "msg {player} &c警告：你触发了蜜罐陷阱！"
      - "broadcast &e{player} 触发了蜜罐陷阱"

  # 监狱动作
  jail:
    action-type: "command"
    commands:
      - "jail {player} griefing 1h"
      - "msg {player} &c你因破坏行为被监禁1小时"

  # 临时封禁
  tempban:
    action-type: "command"
    commands:
      - "tempban {player} 24h 蜜罐陷阱触发"
```

### 可用变量

| 变量                | 说明     |
|-------------------|--------|
| `{player}`        | 触发玩家名称 |
| `{world}`         | 世界名称   |
| `{x}` `{y}` `{z}` | 坐标位置   |
| `{block}`         | 方块类型   |
| `{action}`        | 动作类型   |

## 使用策略

### X-Ray 检测

1. **钻石层布置**
    - 在 Y=11-16 层放置假钻石矿
    - 使用自然分布模式
    - 设置严厉惩罚（封禁）

```bash
# 对准钻石矿方块执行
/honeypot create ban
```

### 建筑保护

1. **重要建筑**
    - 在建筑材料中混入蜜罐
    - 使用匹配的方块类型
    - 设置警告或踢出动作

2. **仓库保护**
   ```bash
   # 将箱子设为蜜罐
   /honeypot create theft_warn
   ```

### 分层防护

```yaml
# 第一次：警告
first-offense: warn
# 第二次：临时封禁
second-offense: tempban
# 第三次：永久封禁
third-offense: ban
```

其他内容请在 [官方 Wiki](https://terrorbytetw.github.io/Honeypot-Docs/) 查看
