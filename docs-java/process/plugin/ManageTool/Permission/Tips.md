---
title: 小妙招
sidebar_position: 5
---

# 小妙招

## 网页版可视化编辑器
```
lp editor
```

![](_images/editor.png)

## 日志

可以实时打印权限检查情况，方便排查问题。

```
lp verbose <on|record|off|upload> [filter]
```

### 解释

- `on` - 开启权限检查。
- `off` - 关闭权限检查。
- `record` - 记录日志。
- `paste` - 停止记录，显示日志。

#### on

![](_images/on.png)

#### 例子

```
lp verbose on !Luck & !anticheat
```

- `Luck & (essentials | worldedit)` - 匹配 'essentials'和'worldedit' 开头的权限检查。
- `!Luck & !anticheat` - 匹配除了 'Luck' 和 'anticheat' 开头以外的权限检查。
- `anticheat & !anticheat.check` - 匹配以'anticheat' 开头 但不匹配 'anticheat.check' 开头的权限检查。

#### paste
![](_images/paste-1.png)

![](_images/paste-2.png)

## 执行命令

让玩家执行命令，并打印此命令的权限检查。

```
/lp verbose command <me|player> <command>
```

![](_images/command.png)
