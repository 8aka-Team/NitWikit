---
sidebar_position: 7
title: OpenJ9
slug: /optimize/jvm/openj9
---

# OpenJ9

OpenJ9 是完全重新设计的 JVM，拥有独立的垃圾回收系统，与 HotSpot JVM 的 G1GC、ZGC 等完全不同。

:::warning

这些参数的主要目的是降低内存占用，而非优化性能

:::

:::danger

**重要兼容性说明**

由于 Paper 服务端内置 Spark 性能分析器，而 Spark 与 OpenJ9 不兼容，因此默认情况下**不能在 Paper 服务端上使用 OpenJ9**。

:::

## Paper 兼容性修复

如需在 Paper 及其分支上使用 OpenJ9，需禁用内置 Spark：

### 方法一：配置文件（推荐）

在 `config/paper-global.yml` 中设置：

```yaml
spark:
  enabled: false
```

### 方法二：启动参数

添加参数：

```text
-Dpaper.preferSparkPlugin=true
```

:::warning

禁用 Spark 后无法使用性能分析功能。

:::

## 基础参数

<!--markdownlint-disable line-length-->

```text
-XX:+IdleTuningGcOnIdle -XX:+UseAggressiveHeapShrink -XX:-OmitStackTraceInFastThrow -XX:+UseFastAccessorMethods -XX:+OptimizeStringConcat -Xshareclasses:allowClasspaths -Xshareclasses:cacheDir=./cache -Xaot -XX:+UseCompressedOops -XX:ObjectAlignmentInBytes=256 -Xshareclasses -XX:SharedCacheHardLimit=800M -Xtune:virtualized -XX:+TieredCompilation -XX:InitialTenuringThreshold=5 -Dlog4j2.formatMsgNoLookups=true -XX:-DisableExplicitGC
```

<!--markdownlint-enable line-length-->

## 垃圾回收策略

OpenJ9 使用 `-Xgcpolicy` 参数来指定垃圾回收策略，而不是 HotSpot 的 `-XX:+UseG1GC` 或 `-XX:+UseZGC`。

### 推荐策略：gencon（默认）

适合大多数 Minecraft 服务器场景，特别是有大量短生命周期对象的事务性应用。

```text
-Xgcpolicy:gencon
```

:::tip

对于 Minecraft 服务器，gencon 策略通常是最佳选择，因为它专门针对有大量临时对象的应用进行了优化。

:::

<details>
<summary>其他可选策略</summary>

### balanced 策略

适合大堆内存（仅 64 位），能够平衡暂停时间并减少碎片化。

```text
-Xgcpolicy:balanced
```

### optavgpause 策略

优化平均暂停时间，适合对延迟敏感的应用。

```text
-Xgcpolicy:optavgpause
```

### optthruput 策略

优化吞吐量，适合能容忍较长 GC 暂停的应用。

```text
-Xgcpolicy:optthruput
```

### metronome 策略

提供确定性的短暂停时间（仅 Linux x86-64 和 AIX）。

```text
-Xgcpolicy:metronome
```

</details>