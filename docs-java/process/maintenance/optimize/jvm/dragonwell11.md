---
sidebar_position: 4
title: Dragonwell 11
---

# Dragonwell 11

这些参数只适合 Dragonwell 11

## 基础

<!--markdownlint-disable line-length-->

```text
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseVtableBasedCHA -Dcom.alibaba.enableFastSerialization=true -XX:+UseBigDecimalOpt -XX:+ReduceNMethodSize
```

<!--markdownlint-enable line-length-->

这些是基础参数

## ZGC

Dragonwell 11 的 ZGC 不同于 OpenJDK11 的 ZGC，Dragonwell 通过移植 OpenJDK 15+的 ZGC补丁，使得Dragonwell的ZGC可以投入生产环境

添加参数 `-XX:+UseZGC -XX:AllocatePrefetchStyle=1`以启用

## G1GC

添加参数

<!--markdownlint-disable line-length-->

```shell
-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16  -XX:+G1BarrierSimple
```

<!--markdownlint-enable line-length-->

## 对象头压缩

可以节约10%左右的Java对象内存占用，并可能提升程序性能。**目前仅支持G1GC和ParallelGC**

添加参数`-XX:+UseCompactObjectHeaders`

## Wisp

Wisp在JVM上提供了一种用户态的线程实现。开启Wisp2后，Java线程不再简单地映射到内核级线程，而是对应到一个协程，JVM在少量内核线上调度大量协程执行，以减少内核的调度开销

只需添加JVM参数即可开启Wisp2，无需更改程序！！

:::tip

仅支持Linux x64

:::

添加参数`-XX:+UnlockExperimentalVMOptions -XX:+UseWisp2`
