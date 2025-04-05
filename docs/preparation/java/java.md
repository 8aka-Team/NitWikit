---
title: Java 相关
sidebar_position: 1
---

# Java 相关

你的服务端和客户端都需要安装 Java 才能运行。各个游戏版本需要安装的 Java 版本不同。

原则上选择最新的兼容的 Java 版本，可以体验到最新的优化，并且大部分现代插件对最新版的特性有优化(比如 AuthMeReReload)。

<details>
  <summary>JRE 和 JDK 是什么? 我该怎么选择?</summary>

JRE (Java Runtime Enviroment) 是 Java 的运行环境。面向 Java 程序的使用者，而不是开发者。如果你仅下载并安装了 JRE，那么你的系统只能运行
Java 程序。
JRE 是运行 Java 程序所必须环境的集合，包含 JVM 标准实现及 Java 核心类库。它包括 Java 虚拟机、Java
平台核心类和支持文件。它不包含开发工具(编译器、调试器等)

JDK (Java Development Kit) 又称 J2SDK (Java2 Software Development Kit)，是 Java 开发工具包，它提供了 Java 的开发环境
(提供了编译器 javac 等工具，用于将 java 文件编译为 class 文件)
和运行环境 (提供了 JVM 和 Runtime 辅助包，用于解析 class 文件使其得到运行)。
如果你下载并安装了 JDK，那么你不仅可以开发 Java 程序，也同时拥有了运行 Java 程序的平台。JDK 是整个 Java 的核心，包括了 Java
运行环境 (JRE)，一堆 Java 工具 tools.jar 和
Java 标准类库 (rt.jar)

总结: **开服最好选择 JDK**，这样不会因为一些插件/Mod 使用类似 ByteBuddy 等黑魔法导致报错，也可以轻松使用 Arthas 等分析工具

并且像 Pufferfish 之类的端可以使用 JDK 中的 SIMD 进行优化

毕竟，现在谁还缺几十 MB 的存储空间，~~真缺那就别开服了~~

对于初学者，只需要阅读 [选择、下载和安装 Java](./choose-and-download-and-install-java.md) 部分，其余为扩展知识。

</details>

import DocCardList from '@theme/DocCardList';

<DocCardList />

![](_images/lava.jpg)
