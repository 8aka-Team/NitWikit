---
title: 连接服务器
sidebar_position: 2
---

# 连接服务器

使用 SSH 工具连接至服务器，在这里举出几种方法

# powershell

如 Windows 自带的 powershell

<details>
    <summary>大概长这样</summary>

![](_images/Linux开服/连接服务器/1.png)

按下 Win + R 输入 powershell 即可

随后在 cmd 或 powershell 中输入 ssh -p (port) (username)@(hostname) 即可连接 Linux 服务器。

此时会弹出是否保存服务器密钥，选择接受并保存，之后就不会再弹出，本文以 Ubuntu24.04 + Finalshell 为例。

:::tip

port 输入服务器的 ssh 端口
username 为登录服务器的用户名
hostname 为服务器的域名或者 IP

:::

</details>

FinelShell：

![](_images/Linux开服/连接服务器/2.png)

Xshell + Xftp:

TODO

# WindTerm

https://github.com/kingToolbox/WindTerm

一个开源的 SSH/Telnet/Serial/Shell/Sftp 客户端工具

![WindTerm](_images/Linux开服/连接服务器/WindTerm.png)
