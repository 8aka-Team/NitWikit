---
sidebar_position: 2
title: 通用优化参数
---

# 通用参数

## 大页支持

注意在 WINDOWS 上使用大页，必须要以管理员启动

当然，在动手前，让我们先试一试是不是系统已经支持了这项功能 ，在控制台执行此命令

```shell
java -Xlog:gc+init -XX:+UseLargePages -Xmx1g -version
```

如果出现了以下字样，那么说明不完全兼容：

```shell
UseLargePages disabled, no large pages configured and available on the system.
```

那么就说明当前系统并不支持大页，不过不要急，可以试一下这一行命令：

```shell
java -Xlog:gc+init -XX:+UseTransparentHugePages -Xmx1g -version
```

如果看到 `Large Page Support: Enabled (Transparent)` ，表示你的系统支持透明大页

但是如果你依然不支持或者想要追求极致性能，可以查看 [内核优化](../kernel.md)

如果支持 LargePages ，加上此参数

```shell
-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m
```

如果支持 TransparentHugePages，加上此参数

```shell
-XX:+UseTransparentHugePages
```

:::tip

在某些服务器上，开启大页后，会延长 JVM 的启动时间，时间从十秒到十分钟不等

:::

## SIMD

如果你使用的是 Pufferfish 的分支(Purpur，Leaf，Leaves，Gale)，你可以添加此参数

```shell
--add-modules=jdk.incubator.vector
```

## 下载源加速

默认的 SpigotLibraryLoader 下载源或插件使用 PaperLibraryLoader 添加的 Maven 中心仓库下载源在国内访问很慢，

如果你使用的是 Leaf，你可以添加参数使用国内下载源：

```shell
-DLeaf.library-download-repo=https://maven.aliyun.com/repository/public
```

## 中文编码

防止乱码

```shell
-Dfile.encoding=UTF-8
```

## 删除垃圾信息

(仅适合 Leaf 或者 Gale)

```shell
-Dgale.log.warning.root=false -Dgale.log.warning.offline.mode=false
```

## 更快的安全随机数生成器

(仅适合 Linux 和 MacOS 系统, 在 Windows 上无效)
(原版 Minecraft 仅在个人信息公钥签名中使用到 SecureRandom)

```shell
-Djava.security.egd=file:/dev/urandom
```

## 异步输出 JVM 调试日志

(仅适合 Java17 及以上)

```shell
 -Xlog:async
```

异步输出 Java 统一日志系统(Unified Logging)打印的 JVM 调试信息

仅在使用 -Xlog:gc 等 flag 开启 JVM 调试信息打印的时候发挥作用

## 更长的 KeepAlive 时间

(仅适合 Paper 和 Paper Fork)

```shell
-Dpaper.playerconnection.keepalive=60
```

如果你的网络不好，可以适当延长 keepalive 时间，打开[alternate-keepalive](/docs-java/process/maintenance/optimize/go.md#心跳连接)

## 禁用文件夹遍历和符号链接验证

(仅适合 Paper 和 Paper Fork)

```shell
-Dpaper.disableWorldSymlinkValidation=true 
```

在加载世界时禁用文件夹遍历和符号链接验证.显著提高大型世界的加载速度
