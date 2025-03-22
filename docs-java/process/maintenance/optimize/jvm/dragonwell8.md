---
sidebar_position: 3
title: Dragonwell 8
---


# Dragonwell 8

这些参数只适合 Dragonwell 8

## 基础

<!--markdownlint-disable line-length-->

```text
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+ParallelRefProcEnabled -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+PerfDisableSharedMem -XX:+AggressiveOpts -XX:+UseFastAccessorMethods -XX:MaxInlineLevel=15 -XX:MaxVectorSize=32 -XX:+UseCompressedOops -XX:ThreadPriorityPolicy=1 -XX:+UseDynamicNumberOfGCThreads -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=350M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseFPUForSpilling -XX:+UseBigDecimalOpt
```

<!--markdownlint-enable line-length-->

这些是基础参数

x86 Java 8 用户可以添加以下附加参数：

```text
-XX:+UseXMMForArrayCopy
```

## G1GC 参数

<!--markdownlint-disable line-length-->

```text
-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 
```

<!--markdownlint-enable line-length-->

## JWarmup

JWarmup的基本原理: 根据前一次程序运行的情况，记录下热点方法、类编译顺序等信息，在应用下一次启动的时候积极加载相关的类，并积极编译相关的方法，进而应用启动后可以直接运行编译好的Java代码(C2编译)。

### 使用步骤

#### 记录阶段(一般是beta环境)，在5分钟后生成profiling data

<!--markdownlint-disable line-length-->

添加参数`-XX:-ClassUnloading -XX:-CMSClassUnloadingEnabled -XX:-ClassUnloadingWithConcurrentMark -XX:CompilationWarmUpLogfile=jwarmup.log -XX:+CompilationWarmUpRecording -XX:CompilationWarmUpRecordTime=300`

<!--markdownlint-enable line-length-->

#### 使用阶段(一般是生产环境)

添加参数`-XX:+CompilationWarmUp -XX:-TieredCompilation -XX:CompilationWarmUpLogfile=jwarmup.log -XX:CompilationWarmUpDeoptTime=0`

## 对象头压缩

可以节约10%左右的Java对象内存占用，并可能提升程序性能。

添加参数`-XX:+UseCompactObjectHeaders`

## Wisp

Wisp在JVM上提供了一种用户态的线程实现。开启Wisp2后，Java线程不再简单地映射到内核级线程，而是对应到一个协程，JVM在少量内核线上调度大量协程执行，以减少内核的调度开销

只需添加JVM参数即可开启Wisp2，无需更改程序！！

:::tip

仅支持Linux x64

:::

添加参数`-XX:+UnlockExperimentalVMOptions -XX:+UseWisp2`

## G1ElasticHeap

G1ElasticHeap 是一种 GC 功能，用于将 Java 堆的内存返回给操作系统，以减少 Java 进程的内存占用。要启用此功能，你需要通过以下选项使用 G1 GC：

```text
-XX:+G1ElasticHeap -XX:+ElasticHeapPeriodicUncommit
```
