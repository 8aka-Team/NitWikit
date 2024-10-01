---
title: 命令篇
sidebar_position: 4
---

# 命令篇

## 权限组

### 创建

```text
lp creategroup 权限组名
```

### 删除

```text
lp deletegroup 权限组名
```

## 权限

### 设置某个玩家/权限组的某权限为 true/false

```text
lp user/group 玩家/权限组名 permission set 权限节点 true/false
```

### 移除某个玩家/权限组的某权限的设置

```text
lp user/group 玩家/权限组名 permission unset 权限节点
```

### 检查某个玩家/权限组的权限状态

```text
lp user/group 玩家/权限组名 permission check 权限节点
```

### 列出某个玩家/权限组的权限

```text
lp user/group 玩家/权限组名 permission info
```
