---
title: 选择、下载和安装 Java
sidebar_position: 1
---

# 选择、下载和安装 Java

## 选择版本

:::warning
部分服务端有在项目的 README 中标注最低版本和推荐版本，例如 [Beast](https://github.com/HomoMC/Beast)，最低版本为 Java
8，推荐版本为 Java 21
MOD 服务端
:::

### 常见插件端(Paper 等)

| Minecraft 版本  | 最低版本    | 推荐版本    |
|---------------|---------|---------|
| 1.0 - 1.11.2  | Java 6  | Java 8  |
| 1.12 - 1.16.4 | Java 8  | Java 11 |
| 1.16.5        | Java 8  | Java 16 |
| 1.17 - 1.17.1 | Java 16 | Java 17 |
| 1.18 - 1.20.4 | Java 17 | Java 21 |
| 1.20.5 - 1.21 | Java 21 | Java 21 |

### 混合服务端(CatServer 等)

#### CatServer

| Minecraft 版本 | 最低版本    | 推荐版本    |
|--------------|---------|---------|
| 1.12.2       | Java 8  | Java 8  |
| 1.16.5       | Java 8  | Java 11 |
| 1.18.2       | Java 17 | Java 17 |

#### Mohist

| Minecraft 版本    | 最低版本    | 推荐版本    |
|-----------------|---------|---------|
| 1.7.10          | Java 8  | Java 8  |
| 1.16.5          | Java 11 | Java 11 |
| 1.18.2 - 1.20.2 | Java 17 | Java 17 |

#### SpongeForge

| Minecraft 版本    | 最低版本    | 推荐版本    |
|-----------------|---------|---------|
| 1.8 - 1.12.2    | Java 8  | Java 8  |
| 1.16.5(吐槽:就你特殊) | Java 17 | Java 17 |
| 1.19.4          | Java 17 | Java 17 |
| 1.20.6， 1.21.1  | Java 21 | Java 21 |

## 直接下载

:::warning

此处下载链接可能不是最新版，如需下载最新版请跳转至 [手动下载](#%E6%89%8B%E5%8A%A8%E4%B8%8B%E8%BD%BD)

:::

<!--markdownlint-disable line-length-->

| Java 版本 | 下载链接                                                                                                                                                                        |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Java 8  | [Dragonwell](https://dragonwell.oss-cn-shanghai.aliyuncs.com/8.19.20/Alibaba_Dragonwell_Extended_8.19.20_x64_windows.zip)                                                   |
| Java 11 | [Dragonwell](https://dragonwell.oss-cn-shanghai.aliyuncs.com/11.0.23.20.9/Alibaba_Dragonwell_Extended_11.0.23.20.9_x64_windows.zip)                                         |
| Java 17 | [Zulu](https://d.injdk.cn/d/download/zulu/17/zulu17.52.17-ca-jdk17.0.12-win_x64.zip)                                                                                        |
| Java 21 | [GraalVM](https://d.injdk.cn/d/download/graalvm/21/graalvm-jdk-21_windows-x64_bin.zip)  [Zulu](https://d.injdk.cn/d/download/zulu/21/zulu21.36.17-ca-jdk21.0.4-win_x64.zip) |
| Java 24 | [GraalVM](https://d.injdk.cn/d/download/graalvm/24/graalvm-jdk-24_windows-x64_bin.zip) [Zulu](https://d.injdk.cn/d/download/zulu/24/zulu24.28.83-ca-jdk24.0.0-win_x64.zip)  |

<!--markdownlint-enable line-length-->

:::danger

32 位操作系统开个鬼服...

[32 位和 64 位有什么区别](https://cn.bing.com/search?q=32%E4%BD%8D%2064%E4%BD%8D%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D)

[如何确定自己电脑是 32 位还是 64 位](https://cn.bing.com/search?q=%E5%A6%82%E4%BD%95%E7%A1%AE%E5%AE%9A%E8%87%AA%E5%B7%B1%E7%94%B5%E8%84%91%E6%98%AF32%E4%BD%8D%E8%BF%98%E6%98%AF64%E4%BD%8D)

:::

## 手动下载

### 下载镜像

[InJDK](https://d.injdk.cn/download) 各种 JDK 的下载镜像

### Oracle 版

官方版本

<details>
  <summary>怎么找到官网并从官网下载</summary>

![](_images/Oracle-1.png)
![](_images/Oracle-2.png)
![](_images/Oracle-3.png)
![](_images/Oracle-4.png)

如果再往下翻的话可以看到 Java 8 / 11。

![](_images/Oracle-5.png)

但是在这里 Java 8 需要登录才能下载。

你可以在下方链接直接下载 Java 8：

https://www.java.com/zh-CN/download/
</details>

如果你想进行 JVM 优化，请看 [JVM 优化](https://nitwikit.8aka.org/Java/optimize/jvm)

## 验证 Java 安装

打开 Windows 终端 / PowerShell / CMD 。

[怎么打开 Windows 终端](https://cn.bing.com/search?q=%E6%80%8E%E4%B9%88%E6%89%93%E5%BC%80windows%E6%8E%A7%E5%88%B6%E5%8F%B0)

![](_images/cmd-1.png)

输入：

```shell
java -version
```

并回车：

![](_images/cmd-2.png)

> 返回类似的消息即为 Java 已安装

## 使用 AJI 静默安装 Java

群友氿月写的一个小脚本，可以在 Windows 平台后台静默安装 JDK。

<details>
<summary>食用方式：</summary>

1. 打开此链接下载 AJI: https://github.com/Lafcadia/AJI/releases/download/v0.0.2/main.exe
2. 下好了，右键选择以管理员权限打开(如果不以管理员权限打开就无法绑定 Java 环境变量，虽然不给管理员权限程序也能正常运行，并安装
   Java，但可能会在后续阶段出现问题)
3. ![示意图](https://github.com/user-attachments/assets/28035c47-d34b-4b38-b895-29f38366bef9)
4. 选择合适的版本的 Java，点击 `Install Java`，下载。
5. 不要关闭窗口，直到下方的提示栏从 `Installing...` 变为 `Complete.`

</details>

## 本节视频教程

[**点此前往B站**: 笨蛋级MC开服教程-第三集P1:实机演示安装JAVA](https://www.bilibili.com/video/BV1eT42167iZ/)
