---
title: 命令篇
sidebar_position: 4
---

# 命令篇


## 权限组

### 创建
```
lp creategroup 权限组名
```

### 删除
```
lp deletegroup 权限组名
```

## 权限

### 设置某个玩家/权限组的某权限为 true/false
```
lp user/group 玩家/权限组名 permission set 权限节点 true/false
```

### 移除某个玩家/权限组的某权限的设置
```
lp user/group 玩家/权限组名 permission unset 权限节点
```

### 检查某个玩家/权限组的权限状态
```
lp user/group 玩家/权限组名 permission check 权限节点
```

### 列出某个玩家/权限组的权限
```
lp user/group 玩家/权限组名 permission info
```
