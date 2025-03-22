---
title: 安装
sidebar_position: 1
---

## 数据库安装

### 直接安装

你可以选择直接下载安装包来安装，如果觉得麻烦，请看下面的**使用工具安装**

:::tip

[sohu MySQL 镜像源](http://mirrors.sohu.com/mysql/MySQL-8.0/)

[阿里 MySQL 镜像源](https://mirrors.aliyun.com/mysql/)

:::

对于 Windows 用户，请下载 `.msi` 或 `zip` 的包，其中 `.msi` 是安装包，`.zip` 是绿色版，推荐下载 `.msi` 版本来安装

对于 MySQL 安装，请看这篇文章: [2024 年 MySQL 8.0 安装 配置 教程 最简易(保姆级)](https://blog.csdn.net/m0_52559040/article/details/121843945)

而标着 `ubuntu` 或 `debian` 是 linux 版本的安装包，linux 用户请下载这个

在下载的时候请务必注意自己的系统、架构等是否与安装包上标的匹配

### 使用工具安装

我会告诉你 **我认为** 最简单的几种安装数据库的方法

#### 小皮数据库

<details>
  <summary>从官网下载和安装</summary>

![](_images/1.png)

![](_images/2.png)

![](_images/3.png)

![](_images/4.png)

![](_images/5.png)

![](_images/6.png)

</details>

<details>
  <summary>卸载MySQL5和安装MySQL8</summary>

MySQL5 版本太低了，很多插件需要更高版本的，装 MySQL8 就够用了

![](_images/7.png)

![](_images/8.png)

</details>

<details>
  <summary>初次启动</summary>

安装好后在首页启动 MySQL

![](_images/9.png)

更改 root 账户的密码

:::danger

不要设置过于简单的密码！

尤其是你打算把数据库开到公网，**绝对不要**设置过于简单的密码！

**这真的很严重**

:::

![](_images/10.png)

![](_images/11.png)

然后你就可以建数据库了，建好之后把你填这里的信息填到插件的配置文件里

</details>

#### 宝塔面板

<details>
  <summary>从官网下载和安装</summary>

![](_images/12.png)

![](_images/13.png)

![](_images/14.png)

![](_images/15.png)

![](_images/16.png)

![](_images/17.png)

![](_images/18.png)

![](_images/19.png)

宝塔面板是必须要绑定账号的

按照提示去做

![](_images/20.png)

全 x 掉，一个都不需要装

![](_images/21.png)

</details>

<details>
  <summary>安装MySQL</summary>

![](_images/22.png)

![](_images/23.png)

![](_images/24.png)

</details>

#### 1Panel面板

:::warning

1Panel面板目前仅支持Linux系统，不支持Windows系统

:::

<details>
  <summary>安装，配置面板</summary>

![](_images/46.png)

![](_images/47.png)

![](_images/48.png)

![](_images/49.png)
</details>

<details>
  <summary>安装MySQL</summary>

![](_images/50.png)

</details>
