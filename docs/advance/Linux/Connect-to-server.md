---
title: 连接服务器
sidebar_position: 2
---

# 连接服务器

使用 SSH 工具连接至服务器，在这里举出几个工具

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="powershell" label="powershell" default>

![](_images/Linux开服/连接服务器/1.png)

windows 系统自带的 powershell

按下 Win + R 输入 powershell 即可

随后在 cmd 或 powershell 中输入 ssh -p (port) (username)@(hostname) 即可连接 Linux 服务器。

此时会弹出是否保存服务器密钥，选择接受并保存，之后就不会再弹出。

:::tip

port 输入服务器的 ssh 端口
username 为登录服务器的用户名
hostname 为服务器的域名或者 IP

:::

  </TabItem>
  <TabItem value="windterm" label="WindTerm">

![WindTerm](_images/Linux开服/连接服务器/WindTerm.png)

一个开源的 SSH/Telnet/Serial/Shell/Sftp 客户端工具

https://github.com/kingToolbox/WindTerm

  </TabItem>
  <TabItem value="finelshell" label="FinelShell">

![](_images/Linux开服/连接服务器/2.png)

FinalShell是一体化的的服务器,网络管理软件,不仅是ssh客户端,还是功能强大的开发,运维工具,充分满足开发,运维需求.

  </TabItem>
  <TabItem value="xshell" label="Xshell">

![](https://www.xshell.com/wp-content/uploads/2020/10/p-xshell7-top-zh.png)

他称自己是 业界最强大的SSH客户机

  </TabItem>
</Tabs>
