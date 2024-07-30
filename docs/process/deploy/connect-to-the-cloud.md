---
title: 连接到云
sidebar_position: 4
---

# 连接到云

当你买好服务器后，你应该如何连接到服务器并部署你的服务端

## 面板

去骚扰卖你面板的人

## vps

<details>
  <summary>远程桌面连接</summary>

按下 `win键` + `R键`

![](_images/连接服务器/1.png)

在弹出的窗口中输入 `mstsc`

把卖你 vps 的人给你的信息照着填进去就可以连接到你的 vps 了。

你也可以在 vps 安装 [ToDesk](https://www.todesk.com/download.html) 或 [向日葵远程控制](https://sunlogin.oray.com/) 等软件

#### 映射驱动器

可以在 vps 中点击 `此电脑` 看到本地的 **驱动器**（c 盘 d 盘的，这下听懂了吧）

方便你传输文件

或者，你也可以 `Ctrl c` + `Ctrl v` 来传文件

![](_images/连接服务器/2.png)

![](_images/连接服务器/3.png)

</details>

#### 放行端口

然后你需要在防火墙放行你 mc 服务端使用的端口，可参考教程：https://blog.csdn.net/aa1213366512/article/details/119964839

接着用外网地址连接你的服务器

**举例，不一定正确：**

你远程桌面连接用的是 `yizhan.wiki:12345`

你的服务商告诉你，你可以使用 `12346` 端口

那你就把你服务端的 [端口](https://yizhan.wiki/NitWikit/Java/start/connect-to-server#%E7%AB%AF%E5%8F%A3) 设置为 `12346` ，记得 [放行端口](#放行端口)

然后在你的游戏客户端里添加服务器，填地址为 `yizhan.wiki:12346`

## 家里云

<details>
  <summary>我有公网ip</summary>

嘎嘎开就行了

</details>

<details>
  <summary>我没有/不知道啥是公网ip</summary>

[申请公网ip](https://search.bilibili.com/all?keyword=%E7%94%B3%E8%AF%B7%E5%85%AC%E7%BD%91ip)

如果申请不到，那么为了在没有公网IP的情况下连接到你的内外机器，你需要 **内网穿透（Frp）**

[内网穿透](intranet-penetration.md)

[Linux | 搭建内网穿透（Frp）](../../advance/Linux/frp.md)

</details>

## 独立机

这还用教？

## 开服器

不教
