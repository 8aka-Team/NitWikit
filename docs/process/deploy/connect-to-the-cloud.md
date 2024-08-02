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
  <summary>Windows远程桌面连接</summary>

### Windows
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


### macOS和手机

在iOS和macOS上，需要在App Store登录海外的Apple ID，然后搜索Microsoft Remote Desktop，就可以找到这个应用。在安卓手机上需要在Google play上搜索Microsoft Remote Desktop就可以找到这个应用，如果手机无法使用Google play，也可以在网上搜索安装包下载。打开应用后，点击加号，点击Add PC，选择或输入那台电脑上的那串代码，然后点击添加或保存。随后点击或双击添加的那台电脑，然后输入帐号和密码，就可以连接到那台电脑。

</details>

<details>
  <summary>Linux ssh</summary>
  
Linux有一个工具被业界广泛使用，它就是ssh。它虽然不能远程控制桌面，但是可以远程登录服务器的命令行，并让服务器执行一些命令。由于ssh非常常用，现在很多Linux系统都已经默认集成了这个软件。  
### 开启ssh
在主流的Linux系统中，执行sshd命令或sudo systemctl start ssh即可开启ssh，如果这些命令都报错，证明ssh服务存在问题，你可以把报错复制粘贴到搜索引擎上查询怎么修复这个问题。开启ssh后，你就可以连接到这台服务器了。
### 连接ssh
#### 通过类Unix系统（Linux或macOS）连接
此时如果可以使用内网的另一台Linux或macOS电脑，你就可以执行ssh 用户名@内网IP地址，然后输入密码来连接到服务器。Linux的内网IP地址可以使用ifconfig命令查看。连接成功后，你虽然不能使用服务器的桌面，但是你可以使用服务器的命令行了。如果要退出，执行exit即可。如果没有Linux或macOS电脑，在Windows电脑和安卓手机上使用工具也可以进行连接。
#### 通过其他主流操作系统连接
Windows有广泛使用的命令行工具XShell，安卓手机也有广泛使用的命令行工具termux，iOS上也有一些命令行工具可以用来连接ssh。下载安装好后，直接使用上文给出的ssh命令即可连接。

Linux同样也需要把一个端口开放到公网，这个端口是22，你可以通过上一章提到的端口映射和内网穿透等方式实现开放到公网。设置好把端口开放到公网之后，你就可以在手机或电脑上输入那个ssh命令，记得把IP地址改成服务器的公网IP，就可以连接到ssh了。

<!--除了ssh之外，还有一种远程桌面叫VNC。VNC是一种远程桌面协议，在Linux上的使用尤其广泛，也可以用作包括Windows在内的其他系统。由于VNC没有业界采用极其广泛的具体软件，这里不介绍广泛使用的软件，具体要使用可以上网搜索相关的软件和教程。 -->
</details>

#### 放行端口

然后你需要在防火墙放行你 mc 服务端使用的端口，可参考教程：https://blog.csdn.net/aa1213366512/article/details/119964839

接着用外网地址连接你的服务器

**举例，不一定正确：**

你远程桌面连接用的是 `yizhan.wiki:12345`

你的服务商告诉你，除了`12345`，你可以使用 `12346` 端口

那你就把你服务端的 [端口](https://yizhan.wiki/NitWikit/Java/start/connect-to-server#%E7%AB%AF%E5%8F%A3) 设置为 `12346` ，记得 [放行端口](#放行端口)

然后在你的游戏客户端里添加服务器，填地址为 `yizhan.wiki:12346`

## 家里云

<details>
  <summary>我有公网ip</summary>

按照上文VPS的方式打开电脑的远程桌面或ssh服务即可。**如果要公网访问，记得在路由器里配置端口映射，把电脑的远程控制端口开放到公网**

</details>

<details>
  <summary>我没有/不知道啥是公网ip</summary>

[申请公网ip](apply-for-public-ip-address.md)

如果申请不到，那么为了在没有公网IP的情况下连接到你的内外机器，你需要 **内网穿透（Frp）**

[内网穿透](intranet-penetration.md)

[Linux | 搭建内网穿透（Frp）](../../advance/Linux/frp.md)

</details>

## 独立机

机房的运维一般会帮你设置。如果你用的是第三方远程桌面，但是服务器本身又有远程控制的条件，按照上文中VPS的方式操作即可。

## 开服器

不教
