---
title: 注意事项
sidebar_position: 8
---

# 注意事项

:::danger[非常危险]

只要你的子服和代理端都位于同一内网或同一主机上，就尽可能不要给该子服开公网！某些情况下，即使正确配置了代理端，玩家也可以直接通过子服的端口连接至子服。
这将会导致很多问题，比如绕过登录服随便登录别人账号，窃取 OP 账号权限等严重时可能会直接导致服务器被提权或后门等。

<details>
  <summary>如何禁用子服的公网</summary>

- 如果你的公网是通过端口映射/内网穿透实现的：
只保留代理端的端口映射/内网穿透隧道，把其他所有子服的端口映射/内网穿透隧道都关闭。
- 如果你的服务器能直接获取公网（典型的比如带独立 IP 的云服务器）：
在系统防火墙中禁止该子服服务端可执行文件或该子服对应端口的入站。
- 如果子服与代理端位于不同的局域网只能通过公网互相通信：
    - 在代理端和子服所处的两台服务器之间建立 VPN
    （此处指虚拟专用网络，是通常用于登录学校内网或企业内网的那种网络，不是科学上网！），让子服和代理端通过 VPN 通信
    - 选用有成熟的防止玩家绕过代理端连接子服的方案，如 Velocity + Paper 或 BungeeCord + Spigot/Paper 等
- 因某些原因有独立 IP 又无法开启防火墙：
选用有成熟的防止玩家绕过代理端连接子服的方案，如 Velocity + Paper 或 BungeeCord + Spigot/Paper 等

全部配置完成后，记得自己直接连接子服端口进行测试，如果只有通过代理端端口能够成功进入子服，所有子服都完全无法直接通过其端口连接（提示无法连接至世界、远程主机强行关闭了一个现有的连接、连接被拒绝等），证明配置成功。

</details>

:::

## 不要给玩家 `/server` 权限

用 `菜单/npc` 或其他东西跨服，但是不要给玩家这个权限(玩家默认有)，会被玩家发现服主的小 ♂ 秘 ♂ 密 ♂

这个权限是由代理进行检查的，仅靠后端服务器无法干涉权限处理，也就是说玩家可以在未登录之前使用此命令跳转到另外一个服务器，如果另外的服务器没登陆插件，那么通过此方法就可以使用到 OP 账号

:::tip

如果你使用的是 AuthMe 登录插件，请务必在代理端安装对应的 AuthMe 插件，如 AuthMe-Velocity、AuthMeBungee 等插件

这样就可以避免一些此类问题了

:::

### 关闭权限

在跨服端安装 [Luckperms](/docs-java/process/plugin/ManageTool/Permission/Permission.md) 的跨服端对应版本然后执行命令：

- BungeeCord

```text
/lpb group default permission set bungeecord.command.server false
```

- Velocity

```text
/lpv group default permission set velocity.* false
```

自己搭了个 vc 然后权限节点没有补全，你把权限全 `false` 了算了，反正玩家也用不到

## bc 的语义扩大

bc 这个缩写应只指 BungeeCord 核心

但是很多人用 bc 指 BungeeCord 和它的分支，甚至指所有的跨服端(把 Velocity 和包括进去了)

希望在看的你用 bc 这个缩写时只用来指 BungeeCord 核心，避免产生不必要的误会

:::note

服务端有个命令是 `/bc` ，用来发公告的，这和此处的 BungeeCord 没有关系

:::

## Velocity 的缩写

最常见的缩写是 `vc`
