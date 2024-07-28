---
sidebar_position: 2
title: 通用优化参数
slug: /optimize/jvm/common
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
UseLargePages disabled， no large pages configured and available on the system.
```

那么就说明当前系统并不支持大页，不过不要急，可以试一下这一行命令：

```shell
java -Xlog:gc+init -XX:+UseTransparentHugePages -Xmx1g -version
```

如果看到 `Large Page Support: Enabled (Transparent)` ，表示你的系统支持透明大页

但是如果你依然不支持或者想要追求极致性能，可以去百度搜索当前的系统如何开启大页，

这里就不再过多的赘述了。(LargePages 对服务器提升相当巨大,在我的电脑上，它提升了 50%的性能)

如果支持 LargePages ，加上此参数

```shell
-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m
```

如果支持 TransparentHugePages (不要把两个都加上，优先 LargePages)，加上此参数

```shell
-XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2m
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

默认的 SpigotLibraryLoader 下载源在国内访问很慢，如果你使用的是 Leaf，你可以添加参数使用国内下载源：

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

## 更快的安全随机数发生

```shell
-Djava.security.egd=file:/dev/urandom
```

## 异步日志

```shell
 -Xlog:async
```

异步日志记录可能会导致日志记录的顺序不确定

### 更长的 KeepAlive 时间

```shell
-Dpaper.playerconnection.keepalive=60
```

如果你的网络不好,可以适当延长 keepalive 时间,打开[alternate-keepalive](/docs-java/process/maintenance/optimize/go.md#心跳连接)