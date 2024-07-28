---
sidebar_position: 6
title: Azul Zing
slug: /optimize/jvm/zing
---

# Azul Zing

~~神无需优化~~

通用内容的参数可以使用(比如大页),但不要自行指定GC,或其他优化参数

## ReadyNow

你大概已经注意到了,Zing的预热期很长，ReadyNow就是来解决这个问题的

若要启用 ReadyNow，请添加以下命令行选项，其中两者`<file>`通常相同：

`-XX:ProfileLogIn=<file>` 指示 Azul Platform Prime 使用现有配置文件日志中的信息。

`-XX:ProfileLogOut=<file>` 记录之前的编译和运行中的去优化决策。

然后，运行应用程序将自动生成或更新配置文件日志。此配置文件日志将在应用程序的后续运行时使用，从而改进预热。

官方推荐所有重要函数执行**5万遍**

添加`-XX:+FalconUseCompileStashing`以使用编译存储

## 垃圾回收器

C4 是 Zing 中唯一的垃圾收集器，取代了 OpenJDK 中可用的其他垃圾收集器。

## 紧凑字符串

添加选项`-XX:+CompactStrings`可减少内存占用，提高字符串密集型应用程序的性能，并减少花费在垃圾回收上的时间

## Zing System Tool

这玩意可以让你的系统更加适应Zing,可以自动优化系统配置,开启大页,但很可惜,这需要成为付费客户,等待富哥

## 下载

虽然需要公司账户，但我们通过神秘手段搞到了安装包,都是JDK

(放心，没毒，下载源都是cdn.azul.com(Azul官方网站))

[RPM](https://cdn.azul.com/zing-zvm/ZVM24.06.0.0/zing24.06.0.0-2-jdk21.0.3-linux.x86_64.rpm)

[TAR.GZ](https://cdn.azul.com/zing-zvm/ZVM24.06.0.0/zing24.06.0.0-2-jdk21.0.3-linux_x64.tar.gz)

[DEB](https://cdn.azul.com/zing-zvm/ZVM24.06.0.0/zing24.06.0.0-2-jdk21.0.3-linux_amd64.deb)

## 一些特殊情况

zing和mariadb不要一起用
