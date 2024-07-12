---
title: JVM 优化
sidebar_position: 7
---

# JVM 优化

## 参数

:::danger

所有的启动参数都必须被放在 `-jar` 前面否则会导致服务器无法启动

:::

以下是推荐的 JVM 优化参数(至少 Java 17 以上)

**以下启动参数需要自己补全内存分配(-Xms 和 -Xmx) 和 服务端核心名(-jar 服务端名字.jar)**

<details>
  <summary>Mukul1127 Flag (ZGC) Plus - 4 核 8G 以上推荐</summary>

Mukul1127 Flag Plus 是现代的启动参数，使用 ZGC 作为垃圾回收，**注意:Mukul1127 Flag Plus至少需要 4c8g 以上环境才可以发挥出优势，更低配置请使用 Aikar flag plus**，Mukul1127 Flag Plus 需要 Java 17 以上!

```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive
```

如果你使用Java 21 以上，你可以将`-XX:-ZProactive`换`-XX:+ZGenerational`，Java 22以上必须切换

</details>

<details>
  <summary>Mukul1127 (ZGC) Flag - 使用 GraalVM 时推荐</summary>

GraalVM Java 17+ 的参数，

```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI -Dgraal.TuneInlinerExploration=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive
```

如果你使用Java 21 以上，你可以将 `-XX:-ZProactive` 换为 `-XX:+ZGenerational` ，Java 22以上必须切换

### 以下是额外选项

更激进的内联，在 Graal 中通过 `-Dgraal.BaseTargetSpending=160` （默认为 120）和 OpenJDK 中的其他一些标志。具有较大缓存的 CPU 可能会从中受益。

`-Dgraal.OptWriteMotion=true` 和 `-Dgraal.WriteableCodeCache=true` ，它们看起来不稳定，但在 GraalVM 22.3.0+ 中可能更稳定

</details>

<details>
  <summary>Mukul1127 Flag (G1GC)</summary>


```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:GCTimeRatio=99 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16
```

</details>

<details>
  <summary>Dreeam Flag (G1GC)</summary>

梦先生的参数

```shell
-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+ExplicitGCInvokesConcurrent -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:+PerfDisableSharedMem -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=3 -XX:+AlwaysActAsServerClassMachine -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseCompressedOops -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches
```

</details>

<details>
  <summary>Aikar's Flag </summary>

```shell
java -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

</details>

## 通用

### 内存优化

如果服务器内存足够，可以加上此参数 `-XX:-ZUncommit` ，要求 JVM 总是提前把要用的内存申请好，

并且阻止 JVM 把临时空出来的内存还给系统。这会加快短时间有大量内存的需求时的速度。

### 大页支持

注意在WINDOWS上使用大页，必须要以管理员启动

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

这里就不再过多的赘述了。(LargePages对服务器提升相当巨大,在我的电脑上，它提升了50%的性能)

如果支持 LargePages ，加上此参数

```shell
-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS
```


如果支持 TransparentHugePages (不要把两个都加上，优先LargePages)，加上此参数

```shell
-XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS
```

:::tip

在某些服务器上，开启大页后，会延长 JVM 的启动时间，时间从十秒到十分钟不等

:::


### SIMD

如果你使用的是 Pufferfish 的分支(Purpur，Leaf，Leaves，Gale)，你可以添加此参数

```shell
--add-modules=jdk.incubator.vector
```

### 下载源加速

默认的 SpigotLibraryLoader 下载源在国内访问很慢，如果你使用的是Leaf，你可以添加参数使用国内下载源：

```shell
-DLeaf.library-download-repo=https://maven.aliyun.com/repository/public
```

### 中文编码

防止乱码

```shell
-Dfile.encoding=UTF-8
```

### 删除垃圾信息

(仅适合Leaf或者Gale)

```shell
-Dgale.log.warning.root=false -Dgale.log.warning.offline.mode=false
```

### 更快的安全随机数发生

```shell
-Djava.security.egd=file:/dev/urandom
```

### 异步日志

```shell
 -Xlog:async
```

异步日志记录可能会导致日志记录的顺序不确定

### 更长的KeepAlive时间

```shell
-Dpaper.playerconnection.keepalive=60
```

如果你的网络不好,可以适当延长keepalive时间,打开[alternate-keepalive](go.md#use-alternate-keepalive)

## 参数解释

### ZGC 与 G1GC

废话不说，直接上图

ZGC

![](_images/zgc.png)

G1GC

![](_images/g1gc.png)

显然,单次GC时间从32ms降到0.012ms

:::tip

你可能会发现`ZGC Cycle Time`很长,但其实你不用关心,因为没有停顿主线程，你只需要关心`ZGC Pause Time`即可

:::

## JDK

TODO
