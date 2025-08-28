---
title: 防火墙
sidebar_position: 1
---

# 防火墙

<details>
  <summary>对于一个我的世界服务器来说，至少有以下类型的软件会发布容易被黑客利用的服务：</summary>

- 位于代理服务端后的子服：  
如果子服并未禁止玩家绕过代理服务端连接子服、你的服务器配置了登录插件、你只通过登录服验证玩家身份而子服没有登录插件，
那么玩家就可以直接从公网连接子服并开始游戏而无需登录。由于没有登录步骤验证身份，玩家甚至可以直接登录管理员帐号，从而炸服。
而一旦开启了防火墙阻止公网连接子服，玩家就只能通过代理端连接登录服完成登录步骤，从而避免了这一威胁。
- 部分插件或软件的远程管理功能：  
有一些软件或服务器插件会默认开启远程管理功能，允许管理员通过网页、ssh 等方式管理它，或者你或其他管理员手动开启了它来方便从服务器后台管理服务器。
然而在没有防火墙的情况下，黑客也可以从公网连接这些远程管理服务。如果它们的密码强度不高，甚至是默认密码或无身份认证，黑客就可以通过操控这些软件来攻击服务器
- MySQL 等通过网络连接的数据库：  
如果你的 MySQL 等数据库不需要来自其他服务器的连接（也就是说你的数据库和服务端都在同一服务器上），而你又没有为 MySQL 设置高安全系数的身份验证，
在没有防火墙的情况下，黑客就可以通过公网直接连接你的 MySQL，窃取或篡改你的重要数据。
- OneBot 服务等对外提供 API 的软件：  
如果你的 OneBot 服务等 API 服务不需要来自其他服务器的连接（也就是说你的机器人和框架都在同一服务器上），而你又没有为这些 服务 设置高安全系数的身份验证，
在没有防火墙的情况下，黑客就可以通过公网多直接连接这些 API 来控制这些软件，比如操纵你的机器人发布不实信息或导致其封号

</details>

## 如何开启

- Windows：
    - 打开 Windows Defender 防火墙（Win + R 输入 `Firewall.cpl`）
    - 点击侧边栏中的 启用或关闭 Windows Defender 防火墙
    - 把专用网络设置和公用网络设置都调成“启用 Windows Defender 防火墙”，
去掉“阻止所有传入连接，包括位于允许列表中的应用”的勾，
勾上如果“Windows Defender 防火墙阻止新应用时通知我”。
    - 点击下面的确定
- Linux：执行命令 `service iptables start` 开启防火墙

:::tip

Linux 可以通过 `service iptables status` 命令查看 Linux 系统的防火墙开启情况

:::

## 过滤海外 IP

海外往往是 DDos 的重灾区,禁止海外 IP 可有效缓解 DDos

。以下介绍如何使用 `ipset` 和 `iptables` 实现 IP 地理位置过滤。

### 安装 ipset

**Debian/Ubuntu 系统：**
```bash
apt-get -y install ipset
```

**CentOS 系统：**
```bash
yum -y install ipset
```

**CentOS 7 还需要关闭 firewall 防火墙：**
```bash
systemctl stop firewalld.service
systemctl disable firewalld.service
```

### 清空之前的规则

防止设置不生效，建议清空之前的防火墙规则：

```bash
iptables -P INPUT ACCEPT
iptables -F
```

### 创建 IP 白名单规则

**创建一个名为 cnip 的规则：**
```bash
ipset -N cnip hash:net
```

**下载中国 IP 段：**
```bash
wget -P . http://www.ipdeny.com/ipblocks/data/countries/cn.zone
```

**将 IP 段添加到 cnip 规则中：**
```bash
for i in $(cat /root/cn.zone); do ipset -A cnip $i; done
```

### 应用防火墙规则

**方案一：只允许国内 IP 访问（推荐用于 Minecraft 服务器）**

```bash
# 放行国内 IP 段
iptables -A INPUT -p tcp -m set --match-set cnip src -j ACCEPT
# 放行本地回环
iptables -A INPUT -i lo -j ACCEPT
# 放行已建立的连接
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
# 拒绝其他连接
iptables -P INPUT DROP
```

**方案二：只限制特定端口（适用于需要保留 SSH 访问）**

```bash
# 放行国内 IP 访问指定端口
iptables -A INPUT -p tcp -m set --match-set cnip src --dport 25565 -j ACCEPT
# 拒绝海外 IP 访问 Minecraft 端口
iptables -A INPUT -p tcp --dport 25565 -j DROP
```

### 删除规则

如需删除规则，将参数中的 `-A` 改成 `-D`：

```bash
iptables -D INPUT -p tcp -m set --match-set cnip src -j ACCEPT
iptables -D INPUT -p tcp --dport 25565 -j DROP
```

### 保存规则

**Debian/Ubuntu：**
```bash
iptables-save > /etc/iptables/rules.v4
```

**CentOS：**
```bash
service iptables save
```

## 禁止 ICMP

可有效防止 L3 攻击

### 方法一：内核参数设置

**临时禁用 ICMP（重启后失效）：**
```bash
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all
```

**永久禁用 ICMP：**
```bash
echo "net.ipv4.icmp_echo_ignore_all=1" >> /etc/sysctl.conf
sysctl -p
```

**恢复 ICMP**
```bash
# 临时启用
echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 永久启用
echo "net.ipv4.icmp_echo_ignore_all=0" >> /etc/sysctl.conf
sysctl -p
```

### 方法二：防火墙设置

:::info 前提条件

使用防火墙方法的前提是内核配置为默认值（即内核没有禁用 ICMP）

:::

**禁用 ICMP：**
```bash
iptables -A INPUT -p icmp --icmp-type 8 -s 0/0 -j DROP
```

**启用 ICMP：**
```bash
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A OUTPUT -p icmp --icmp-type echo-reply -j ACCEPT
```

## 禁止 UDP

可有效防止 L4 攻击

:::info 前提条件

在开始前确保是 TCP 服务,比如 Java 版服务器,Geyser 或者基岩版服务器是 UDP!!

:::

### 指定端口

**禁用 UDP：**
```bash
iptables -A INPUT -p udp --dport 25565 -j DROP
```

**启用 UDP：**
```bash
iptables -A INPUT -p udp --dport 25565 -j ACCEPT
```

### 全部关闭

**禁用 UDP：**
```bash
iptables -A INPUT -p udp -j DROP
```

**启用 UDP：**
```bash
iptables -A INPUT -p udp -j ACCEPT
```
