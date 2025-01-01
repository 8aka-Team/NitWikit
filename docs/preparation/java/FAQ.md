---
title: FAQ
sidebar_position: 4
---

# FAQ

## 为什么 .jar 文件的图标是个白纸

1. 服务器根本没有安装 JRE 或者 JDK。
2. 服务器上的 Java 未设置环境变量 (其实这个影响不大)。
3. 没有绑定文件打开方式 (不过其实也没啥必要绑)。

## 怎么制作绿色版 Java & 绿色版怎么使用

下载 Java 时下载 `.zip` 或 `.tar.gz` 结尾的压缩包，将压缩包解压到任意位置。

随后可以修改环境变量 `JAVA_HOME` 即可，如果不懂看 [这篇文章](https://blog.csdn.net/MrsHorse/article/details/82695353)
