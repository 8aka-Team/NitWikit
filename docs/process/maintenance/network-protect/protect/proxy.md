---
title: 防御 L4
sidebar_position: 3
---

# 防御 L4

对于大多数 MC 服务器，150G 的防御是足够的，性价比较高。

一般托管一个月大概 800 RMB，速率为 50 Mbps。

建议最多升级到 300G 防御 (再多就放弃吧这是想让你倒闭的)。

如果是 VPS，建议向 VPS 提供商咨询防御服务。

## 使用 Minecraft 代理

例如 TCPShield，Cloudflare 和 MineKube

包含专门针对于缓解 Minecraft 攻击的负载均衡代理，且能够有效隐藏服务器 IP 地址。

缺点是似乎还没有任何一家这样的代理拥有国内服务器 (延迟高)，且需要花费一点时间设置

:::warning

那些在 CF 上 A(或 AAAA，CNAME) 过去到源站 (可能配上 SRV) 就是**自欺欺人，完全没用**，CF 压根不会代理这些端口和协议的流量，开小黄云也一样

:::

### 海外

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="protect">
<TabItem value="cf-tunnel" label="Cloudflare Tunnel">

Cloudflare 的内网穿透 Tunnel，当高防也是疯了

优点：

- 免费，无需注册
- 296 Tbps 高防，298 位置
- 不限流
- 支持 TCP，UDP，RDP，SSH，HTTP
- SSH 提供 WebSSH，还可以通过 Access 管理
- 自带内网穿透

缺点：

- 延迟较大 (不可以优选)
- 客户端需安装 mod 才能进入 (仅限 TCP，UDP)

</TabItem>
<TabItem value="cf-spectrum" label="Cloudflare Spectrum">

Cloudflare 用于 TCP，UDP 协议的防御，可惜价格太贵了 (1$/GB 抢钱)

优点:

- 296 Tbps 高防，298 位置
- 支持 TCP，UDP，RDP，SSH，HTTP
- 提供 1 个 AnyCast 独立 IPV4
- SSH 提供 WebSSH，还可以通过 Access 管理

缺点：

- 价格太贵了 (CF Pro + 流量计费)(CF Partner 计划早没了)
- 延迟较大 (不可以优选)

价格多贵？

Cloudflare Pro 25$/月 (约合人民币 178 元，免费流量**5GB**)，此后 1$/**GB**

也就是说，1 TB 流量价格为 1044$，约合人民币 7443 元，还不算 CF Pro 订阅费用，真需要可以考虑 Papyrus

</TabItem>
<TabItem value="minekube" label="MineKube">

MineKube 的免费保护，这个组织还有另一个有名作品 Gate

个人感觉比 Cloudflare Tunnel 强很多 (比 Cloudflare Spectrum 体验都好)

优点：

- 免费，无需注册
- 自带高防
- 不限流
- 会提供一个免费域名和 1 个 AnyCast 独立 IPV4
- 有 Dashboard，可以进行网络分流，管理，黑名单等操作
- 自带内网穿透

缺点：

- 延迟非常大
- 没 Geyser 支持

[官网](https://connect.minekube.com/)

</TabItem>
<TabItem value="tcpshield" label="TCPShield">

TCPShield 专业的 Minecraft 网络保护

优点：

- 提供免费套餐 (1TB 免费流量)
- **L7 层保护 (会校验流量合法性)**
- 提供面板管理流量
- 价格便宜

缺点:

- 延迟较大 (启动 Asia Network 后会好很多)

Asia Network(亚洲网络):

- 提供新加坡和东京网络
- 价格:0.01 $/GB(与其他流量分开计费，没有免费流量)(约合人民币 7 分)
- 需要 Pro 计划

Geyser 支持需要 Premium 计划 (100 $/月，堪比抢钱)

Pro 计划 (25$ 每月)(约合人民币 178 元):

- 5 TB 免费流量
- IP 防火墙，可过滤流量

[官网](https://tcpshield.com/)

</TabItem>
<TabItem value="playit" label="Playit.gg(推荐)">

性价比非常高，虽说~~正式用途是朋友联机~~

优点:

- 不限流量
- 支持任意 TCP，UDP 代理
- 提供亚洲节点 (一般来说会被分配到日本节点)
- 提供免费域名
- **自带内网穿透**
- 提供防火墙

缺点:

- 没有分析面板
- 绑定自己的域名需要 Premium
- 没有 L7 过滤

Premium 价格:**3 美元**/月 (约合 20 人民币)(非常便宜!)

可以购买独立 IPV4 IP 和 IPV6 IP

</TabItem>
<TabItem value="papyrus" label="Papyrus">

没有免费套餐，但看在 Cloudflare Spectrum 的面子上还是写了

VIP 套餐 (25 $ 每月，约合人民币 177 元):

- 支持 Geyser
- L7 过滤

流量状况:

- 无限流量：仅提供纽约，法兰克福节点
- Cloudflare Spectrum 流量：流量数未知，但不是无限

Enterprise 套餐 (250 $ 每月，约合人民币 1778 元):

- Cloudflare Spectrum 无限流量

:::tip

说句好笑的，Papyrus 官网上说他们有 330 节点，但实际上，Cloudflare 去掉中国节点后只有 298 个节点，算上中国节点后才 330 个

Cloudflare Spectrum 目前是没中国节点的

:::

</TabItem>
</Tabs>

### 国内

目前没有价格可以接受并且好用的四级代理,如果你非常有钱,可以考虑 EdgeOne 企业版(腾讯), ESA 企业版(阿里)

### Geyser 兼容

由于 [RakNet 放大攻击](https://geysermc.org/blog/raknet-amplification-attack#rate-limiting),Geyser 实施了速率限制,以防止协议的进一步潜在滥用

所以你需要将前端代理 IP 加入白名单,像这样:

```yaml
bedrock:
# ...
  enable-proxy-protocol: true
  proxy-protocol-whitelisted-ips: [ "https://cosmic.global/ips/", "https://tcpshield.com/v4/" ]
```

你可以在这些服务的官网上找到 IP 池


## 狂套 Frp

这个方法比较缺德，我们只需要疯狂 Frp，一个 Frp 被打死了，我们就换另一个 Frp，通知玩家重新连接就可以。

:::danger

除非迫不得已，不要使用这种方法防御攻击。就算被迫使用这种方法防御攻击，也千万不要告诉任何人，最好对于自己的服务器管理员也闭口不谈，只说“攻击的事我暂时解决了，让玩家进服吧”。
因为在开服圈子的任何一处这种方法都是一种十分自私、对同行极不负责任的行为。
你的行为可能会导致相应的内网穿透运营商突然出现大量额外支出，并影响大量使用同一节点的人正常使用服务 (如果节点被打死了，那么攻击者就是在攻击你的过程中误伤了大量其他无辜用户)。不要因为你图省事的想法牵连无辜的陌生人。

<!--![](_images/angryopenfrp.jpg)  -->

:::

有着闲心还不如用上一条的免费防御，虽然速度慢一点

## 更换 IP

攻击者需要服务器的 IP 地址才能攻击。

可以不断的更换 IP 地址，打死一个换一个。

还可以使用动态 DNS (DDNS)，换 IP 还能顺便更新 DNS 记录。

:::danger

如果你使用的是腾讯云之类的大厂 VPS，永远不要尝试硬扛 DDOS，服务器受攻击流量超过其机房黑洞阈值时，服务商会屏蔽服务器的外网访问，直接断网并且恢复时间未知。

:::

## 反向代理

IPv4 地址的数量是极其有限的，不管是租赁还是托管，服务商通常不会允许你频繁更换 IP 地址（或者得加钱）。

正如前一个方法所言，攻击者需要服务器的 IP 地址才能攻击。但如果我们可以把服务器的地址藏起来呢？

额外租赁一些低价的云服务器做反向代理，所有需要访问源服务器的玩家，都需要通过反向代理才可访问。这会提升一定的延迟，但总比被攻击时进不去服务器要强吧？

依此，我们定义源服务器为「源站」，用于反向代理的低价服务器为「节点」。

这些「节点」由此变为「源站」的挡箭牌，替服务器阻挡攻击流量，只要攻击者没有找到源站的 IP，你的服务器就是相对安全的。  
作为替代，你的节点会承受攻击，达到阈值依然会导致玩家无法进服，此方法仅可让你在攻击下可快速恢复访问，而无需等待黑洞封禁时间结束。

使用这个方法，需要你能找到满足以下特点的云服务器来作为节点，条件可能较为苛刻，没有高防服务器那么烧钱但价格也不太便宜。

- 在中国大陆境内 (尤为重要，除非你想玩家延迟 `200ms+`)
- 稳定
- 相对便宜
- 带宽相对较高

可用于制作反向代理的软件有 `hopper-rs`、`nginx`、`haproxy` 等等，配置正确的情况下，反向代理会进行 IP 地址转发，不会导致服务器显示的玩家 IP 全部为同一个 IP 地址。  
有条件最好自行制作一个快捷安装脚本，以便在节点因攻击被断网时，可快速地再租一台节点服务器部署反向代理。

