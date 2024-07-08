---
title: 什么是日志？
sidebar_position: 6
---

# 什么是日志？

**日志**记录了服务器的运行信息，运行时产生的错误和警告，同时也是大佬们用来分析为什么功能不正常或不能用的必要途径。

正常情况下，服务器的最新日志保存在 `服务器根目录/logs/latest.log` ，是**同步控制台输出**的。

每天凌晨 00:00 时服务器将会将最新的日志 **latest.log** 压缩为以时间命名的 gz压缩文件。用压缩软件解压对应时间的压缩文件即可进行阅读。

想要了解日志里写了什么，只需要使用任意文本编辑软件打开即可（不建议使用系统自带的记事本，因为大多数文本编辑软件都会高亮关键词）

## 日志组成

日志一般是由 "[时间] [线程 / 日志级别]: 日志内容" 组成的，如下：

```
[00:01:32] [Server thread/WARN]: [PvPManager] Error loading Vault! No Economy plugin found
[00:02:34] [Craft Scheduler Thread - 5300 - InteractiveChat/INFO]: MangGuo_Pi: www
[00:47:53] [Server thread/ERROR]: Error occurred (in the plugin loader) while disabling ExcellentShop v4.3.12 (Is it up to date?)
[00:47:55] [Server thread/INFO]: Radiation_pi issued server command: /lp user Radiation_pi permission set rtp.use true
[00:47:55] [luckperms-command-executor/INFO]: [LP] LOG > (Radiation_pi) [U] (radiation_pi)
```

### 时间

即服务器输出该条日志的事件（有时候输出量特别大的时候时间可能不完全准确）。

### 线程

一般为 **Server thread** 即主线程，很多插件会调用 Craft Scheduler Thread 线程，或者为了优化主线程开销开启单独线程（如 Luckperm ）。

**Craft Scheduler Thread** 一般为插件使用 Bukkit 计划任务时自动开启的线程。

:::info

1. 某些时候如果后台被大量刷屏，可以先检查线程信息，或许对定位日志来源有帮助；

2. 除了主线程之外，一个线程卡顿一般不影响其他线程的运行（如聊天线程阻塞，服务器可以继续运行，但无法聊天）。

:::

### 日志级别

|级别|程度|具体内容|
|:---:|:---:|:---|
|INFO|信息|聊天内容/玩家状态/玩家指令/插件信息/……|
|WARN|警告|对于一些潜在的风险进行警告，有可能发展为报错|
|ERROR|报错|服务器出现错误后输出的信息|

总的来说，当服务器出现异常时请立刻检查日志中是否出现了 WARN 或 ERROR 级别的报错，建议先搜索查看是否有人遇到类似情况，再结合翻译结果尝试修复。如果搞不定可以请教其他人，但是切记一定要先读一读 [如何提问](/docs/start/ask-for-help.md)

#### INFO

一般来说包括：
1. 玩家行为：如聊天、指令、进出服务器等；
2. 插件信息：插件加载及卸载、插件加载时间、插件行为记录等；
3. 服务器信息：服务端初始化、保存世界、启用插件等。

例：

```
[00:47:55] [Server thread/INFO]: Radiation_pi issued server command: /lp user Radiation_pi permission set rtp.use true
[00:47:55] [luckperms-command-executor/INFO]: [LP] LOG > (Radiation_pi) [U] (radiation_pi)
```

这段日志记录了玩家输入指令，以及 Luckperm 插件记录权限更改情况。

#### WARN

插件版本有不兼容风险、配置文件或数据出现问题，暂时可控，可能导致进一步报错，如：

```
[00:01:32] [Server thread/WARN]: [PvPManager] Error loading Vault! No Economy plugin found
```

这段日志说明了插件 **PvPManager** 警告我们未找到经济插件（ No Economy plugin found ）。

#### ERROR

报错是服务器运行中所遇到的异常情况，它可以来源于服务端本身，也可以来自插件和模组等。

这些情况有可能破坏服务器的正常运行，导致玩家体验恶化，信息损坏，甚至服务器崩溃。