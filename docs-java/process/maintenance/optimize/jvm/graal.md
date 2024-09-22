---
sidebar_position: 5
title: GraalVM EE
slug: /optimize/jvm/graalvm
---

# GraalVM

这些参数只适合 GraalVM EE

## 基础参数

```shell
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI -Dgraal.TuneInlinerExploration=1 -Djdk.graal.CompilerConfiguration=enterprise
```

## G1GC

```shell
-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16
```

## ZGC

```shell
-XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive
```

**不要在 GraalVM 上使用 ZGenerational**

## 正在考虑的标志

更激进的内联,在 Graal 中通过`-Dgraal.BaseTargetSpending=160`(默认为 120)和 OpenJDK 中的其他一些标志。具有较大缓存的 CPU 可能会从中受益

`-Dgraal.OptWriteMotion=true`和`-Dgraal.WriteableCodeCache=true` ,看起来不稳定,但在 GraalVM 22.3.0 中可能更稳定
