---
title: 搭建内网穿透（Frp）
sidebar_position: 7
---

<!-- @format -->

# 搭建内网穿透（Frp）

## 使用现成的内网穿透提供商

笔者无法在这里推荐运营商，因为目前在开服方面还没有受到广泛认可的内网穿透运营商。不同的运营商收费不同，限量不同，节点也不同。上网搜索“内网穿透”就能找到大量内网穿透的运营商，但是在选购的时候非常建议多家对比，找到最适合自己使用的运营商。下面是选择过程中除了价格外尤其需要注意的地方：
1. 正规性：最好能在运营商的官网最下面看到网站备案信息，并且运营商也介绍了自己的公司名称，公司名称上网也能查得到。 
2. 流量：小服务器每月只能用掉几G，但是大服务器每月能用掉几百G甚至几T的流量。你需要确定对流量的收费是否适合自己。如果不确定多少流量适合自己，你可以先找一家运营商用一个月，看看自己要花掉乐多少流量。
3. 带宽：一些内网穿透运营商只会给每个服务器几M的带宽，对于大型服务器完全不够用。注意，一般不限流量的内网穿透运营商带宽都很低。
4. 隧道数：内网穿透每映射一个端口出去就叫一条隧道。每个服务端都可能需要占用一条隧道，你还需要一些隧道用来管理服务器等。一般新手有一个隧道就够，但是后面你可能需要远程桌面等要用到更多隧道。
5. 节点：由于内网穿透是客户端向节点发送数据后节点再向服务器发送数据，和客户端与服务器直接通信相比，数据需要在节点上绕一下，这样一来延迟到来到了客户端到节点的延迟和服务端到节点延迟的总和。
<details>
  <summary>如何选择合适的节点？</summary>
  
根据三角形两边之和大于第三边的定理，节点距离客户端或服务端越近，游戏延迟就越小。然而你无法确定客户端的地理位置，毕竟玩家来自大江南北。那么只有缩短节点与服务器之间的距离，才能保证所有玩家的延迟都最低。例如服务器位于河北，有两个节点分别位于山东枣庄和江苏宿迁，有两个玩家分别位于广东和辽宁，那么当选择离服务器更近的枣庄节点时，假设辽宁玩家到节点为20ms，广东玩家到节点为50ms，服务器到节点为10ms，那么辽宁玩家的游戏延迟就是20+10=30ms，广东玩家的游戏延迟就是50ms+10ms=60ms。当选择离服务器更远的宿迁节点时，假设辽宁玩家到节点为40ms，广东玩家到节点为30ms，服务器到节点为30ms，那么辽宁玩家的游戏延迟就是50+30=70ms，广东玩家的游戏延迟就是40+30=60ms。选择宿迁节点时虽然广东玩家的延迟不变，但是辽宁玩家连接服务器时，数据从更远的宿迁绕了一圈再回来，延迟高了很多。因此选择运营商时，优先选择拥有离自己近的节点的运营商。
</details>
6. 实名认证：为了在意外事故中更好地规划责任，很多内网穿透运营商都要求实名认证才能开始使用，或者部分节点需要实名认证。还有一些实名认证时还要求用户必须成年（年满18岁）。况且实名认证服务提供方收费，内网穿透运营商可能会让你自行承担费用，目前价格通常在1元。所以在选择运营商时，如果你未成年，或者没有在线支付的能力，那么在一些运营商处可能会受到限制。

## 自建 Frp

首先你得确保你有一台有公网 IP 的机器，最好是**Linux**的。

如果你的朋友愿意把他的服务器作为节点提供给你，你还需要注意配置方法包括了需要在他的服务器上进行的操作，你可能需要他交给你服务器的控制权，或者请求他的帮助。

这里假定你有一台符合条件的 Linux 服务器，并且你已经可以连上你服务器的**SSH**。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 安装 Frp

1. 首先确保服务器所有软件包是最新的：

不同的 Linux 发行版更新方法大同小异

<Tabs>
  <TabItem value="debian" label="Debian/Ubuntu Linux" default>
    ```bash
    apt-get update && apt-get upgrade -y
    ```
  </TabItem>
  <TabItem value="redhat" label="CentOS/Redhat Linux">
    ```bash
    yum -y update
    ```
  </TabItem>
  <TabItem value="arch" label="Arch Linux">
    ```bash
    pacman -Syu
    ```
  </TabItem>
</Tabs>

2. 将`frp.go`软件安装到系统中：

<Tabs>
    <TabItem value="others" label="deb和rht系的 Linux" default>
        手动下载frp软件包：

        ```bash
        cd ~
        wget https：//github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz
        ```

        解压：

        ```bash
        tar -xzvf frp_0.58.1_linux_amd64.tar.gz
        ```

        安装：

        <Tabs>
            <TabItem value="server" label="服务端" default>
                ```bash
                cd ~/frp_0.58.1_linux_amd64/
                cp frps /usr/bin/
                mkdir -p /etc/frp
                cp frps.toml /etc/frp/
                ```
            </TabItem>
            <TabItem value="client" label="客户端" default>
                ```bash
                cd ~/frp_0.58.1_linux_amd64/
                cp frpc /usr/bin/
                mkdir -p /etc/frp
                cp frpc.toml /etc/frp/
                ```
            </TabItem>
        </Tabs>

    </TabItem>
    <TabItem value="arch" label="Arch Linux">

        在 Arch Linux 下可以直接用aur助手通过包管理器安装frp

        ```bash
        # 使用你的aur助手，这里列举了paru的
        paru -Sy frps # 服务器上运行这个
        paru -Sy frpc # 客户机上运行这个
        ```
    </TabItem>

</Tabs>


### 配置 Frp

<Tabs>
    <TabItem value="server" label="服务端" default>
        ```bash
        vim /etc/frp/frps.toml
        ```

        写入如下内容：

        ```toml
        bindPort = 7000 # frps监听的端口

        log.to = "/var/log/frps.log" # 日志存放路径，一般不用改
        log.level = "info" # 日志等级，不用改
        log.maxDays = 3

        auth.token = "example" # 身份验证令牌，frpc要与frps一致
        ```
    </TabItem>
    <TabItem value="client" label="客户端">
        ```bash
        vim ~/frp_0.58.1_linux_amd64/frpc.toml
        ```

        输入以下内容：

        ```toml
        serverAddr = "x.x.x.x" # 你frps服务器的ip地址
        serverPort = 7000 # 你frps服务开在的端口

        log.to = "/var/log/frps.log" # 日志存放路径，一般不用改
        log.level = "info" # 日志等级，不用改
        log.maxDays = 3

        auth.token = "example" # 令牌，与公网服务端保持一致

        [[proxies]]
        name = "mc je"
        type = "tcp" # java版使用tcp协议通信，不可更改
        localIP = "127.0.0.1" # 默认不用改
        localPort = 25565 # mc服务端开在哪个端口？
        remotePort = 25565 # 暴露服务的公网入口

        # 如果你开了互通，要基岩支持
        [[proxies]]
        name = "mc be"
        type = "udp" # 基岩版使用udp协议通信，不可更改
        localIP = "127.0.0.1"
        localPort = 19132
        remotePort = 19132
        ```
        </TabItem>
</Tabs>


### 开启 Frp：

为了保证 frp 在后台运行，这里有两种方法：

1. screen    方便快捷

2. systemd   省心，有点复杂

<Tabs>
    <TabItem value="screen" label="Screen" default>

        确保你的系统上有`screen`包，没有的话安装它们：

        <Tabs>
            <TabItem value="debian" label="Debian/Ubuntu Linux" default>
                ```bash
                apt-get install screen
                ```
            </TabItem>
            <TabItem value="redhat" label="CentOS/Redhat Linux">
                ```bash
                yum install screen 
                ```
            </TabItem>
            <TabItem value="arch" label="Arch Linux">
                ```bash
                pacman -Sy screen
                ```
            </TabItem>    
        </Tabs>

        启动：

        ```bash
        screen -dR frps frps # 服务端
        screen -dR frpc frpc # 客户端
        # 键盘上按Ctrl+A+D退出
        ```
    </TabItem>
    <TabItem value="systemd" label="Systemd">

        在 Linux 系统下，使用 systemd 可以方便地控制 frps 服务端的启动、停止、配置后台运行以及开机自启动。

        <Tabs>
            <TabItem value="server" label="服务端" default>
            1. 创建 systemd 单元文件：

            ```bash
            vim /etc/systemd/system/frps.service
            ```

            ```
            [Unit]
            # 服务名称，可自定义
            Description = frp server
            After = network.target syslog.target
            Wants = network.target

            [Service]
            Type = simple
            ExecStart = /usr/bin/frps -c /etc/frp/frps.toml

            [Install]
            WantedBy = multi-user.target
            ```

            2. 使用 systemd 命令管理 frps 服务

            ```bash
            # 启动frp
            sudo systemctl start frps
            # 停止frp
            sudo systemctl stop frps
            # 重启frp
            sudo systemctl restart frps
            # 查看frp状态
            sudo systemctl status frps
            ```

            3. 设置 frps 开机自启动

            ```bash
            sudo systemctl enable frps
            ```
            </TabItem>
            <TabItem value="client" label="客户端" default>
            1. 创建 systemd 单元文件：

            ```bash
            vim /etc/systemd/system/frpc.service
            ```

            ```
            [Unit]
            # 服务名称，可自定义
            Description = frp client
            After = network.target syslog.target
            Wants = network.target

            [Service]
            Type = simple
            ExecStart = /usr/bin/frpc -c /etc/frp/frpc.toml

            [Install]
            WantedBy = multi-user.target
            ```

            2. 使用 systemd 命令管理 frpc 服务

            ```bash
            # 启动frp
            sudo systemctl start frpc
            # 停止frp
            sudo systemctl stop frpc
            # 重启frp
            sudo systemctl restart frpc
            # 查看frp状态
            sudo systemctl status frpc
            ```

            3. 设置 frpc 开机自启动

            ```bash
            sudo systemctl enable frpc
            ```
            </TabItem>
        </Tabs>
    </TabItem>
</Tabs>

### 配置proxy protocol

如果你使用的是现成的内网穿透运营商提供的内网穿透，**一定要根据运营商提供的教程操作**。以下是两个最有名的内网穿透运营商的 proxy protocol 开启方法。  
[SakuraFrp](https://doc.natfrp.com/bestpractice/realip.html#proxy-protocol)  
[OpenFrp](https://openfrp.wiki/use/proxy-protocol.html#%E8%8E%B7%E5%8F%96%E8%AE%BF%E9%97%AE%E8%80%85%E7%9A%84%E7%9C%9F%E5%AE%9E-ip)  

如果是自建内网穿透，那么如果是 ini 配置文件，就在frpc隧道对应的配置（位于frpc.ini中）中加入一行`proxy_protocol_version = `，如果是协议 v1 就写等于 v1 ， v2 就写等于 v2 。例如：  
```ini
[mc]
type = tcp
local_port = 25565
# 目前支持 v1 和 v2 两个版本的 proxy protocol 协议。
proxy_protocol_version = v2
```
如果是 toml 配置文件，就在 frpc 隧道对应的配置（位于 frpc.toml 中）中加入一行`transport.proxyProtocolVersion = `，如果是协议v1就写等于v1，v2就写等于v2。例如：
```toml
[[proxies]]
name = "mc"
type = "tcp"
localPort = 25565
transport.proxyProtocolVersion = "v2"
```
**frps的frps.ini或frps.toml不用动。**

至于如何选择 v1 和 v2 ，你需要根据对应服务器对 proxy protocol 的支持情况进行选择。例如 Paper 服务端目前只支持 v2。
