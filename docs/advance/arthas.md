---
title: Arthas
sidebar_position: 7
---

<!--markdownlint-disable line-length-->

# Arthas

Arthas(中文名:阿尔萨斯) 是一个 Java 诊断工具，在 Minecraft 中可以用来分析报错或追踪调用

:::warning

此部分的内容非常难，需要有较高的知识水平!!!

:::

[官网](https://arthas.aliyun.com/)

## 下载

自行参考[官方文档 - 下载](https://arthas.aliyun.com/doc/install-detail.html)

### Arthas IDEA

[下载](https://plugins.jetbrains.com/plugin/13581-arthas-idea)

Arthas 的 idea 插件，可以帮助你生成 Arthas 命令

## 启动

自行参考[官方文档 - 快速开始](https://arthas.aliyun.com/doc/quick-start.html)

## 开始!

:::tip

这一部分的文档认为你初步掌握了 Arthas 的使用

:::

### 哪个插件发送了聊天信息？

```shell
watch -x 2 net.minecraft.server.network.PlayerConnection * '{params[0],@java.lang.Thread@currentThread().getStackTrace()}' 'params.length==2 && (params[0].class.name == "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket" || params[0].class.name == "net.minecraft.network.protocol.game.ClientboundSystemChatPacket")'
```

解释:

* `-x 2` 表示遍历深度，可以调整来打印具体的参数和结果内容
* `net.minecraft.server.network.PlayerConnection` 是 1.17+ 玩家连接的主类
* 单引号括起来的是[OGNL 表达式](https://commons.apache.org/dormant/commons-ognl/language-guide.html)，是 Arthas 的核心
* `params[0]` 会让 Arthas 输出调用的第一个参数
* `@java.lang.Thread@currentThread().getStackTrace()` 输出调用堆栈
* 后面那一大坨是输出过滤，只关注参数长度为 2，并且发包为`net.minecraft.network.protocol.game.ClientboundSystemChatPacket`或
  `net.minecraft.network.protocol.game.ClientboundPlayerChatPacket`

:::warning

由于混淆映射表的问题，该命令不一定在你的服务端核心上适用

:::

### 查看类是哪个插件添加的

```shell
sc -d com.google.gson.Gson
```

过于基础，不做解释

### 日志是哪个插件打印的

```shell
watch -x 2 org.apache.logging.log4j.core.config.LoggerConfig processLogEvent '{params[0].message.message,@java.lang.Thread@currentThread().getStackTrace()}' 'params[0].message.message.contains("日志中的一部分内容")'
```

* `org.apache.logging.log4j.core.config.LoggerConfig` 是 Minecraft 的日志核心库
* `processLogEvent` 是日志记录事件方法
* `params[0].message.message，@java.lang.Thread@currentThread().getStackTrace()` 打印出输出的日志和调用堆栈
* `params[0].message.message.contains("日志中的一部分内容")` 检查输出消息中是否有想要的
