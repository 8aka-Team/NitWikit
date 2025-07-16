---
title: 内核优化
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 内核优化

内核优化主要针对 Linux 操作系统而非 Windows，以下命令需要以 root 权限运行

## 内核参数优化

tuned 调优服务可以通过设置调优配置文件来调整操作系统，以便在特定工作负载下更好地执行。

执行以下命令来安装 tuned:

<Tabs defaultValue="Debian/Ubuntu">
<TabItem value="Debian/Ubuntu">

```shell
sudo apt install tuned
```

</TabItem>
  <TabItem value="RedHat/CentOS">

```shell
sudo yum install tuned
```

</TabItem>
<TabItem value="ArchLinux">

```shell
sudo pacman -S tuned
```

</TabItem>
</Tabs>

然后启动：

```shell
systemctl enable tuned --now
```

然后运行工具并使用以下命令调整内核：

```shell
tuned-adm profile throughput-performance
```

## 设置大页面

打开文件 `/etc/sysctl.conf`,在末尾添加以下内容

```text
vm.nr_hugepages = <需要的页数>
```

可以通过一个公式知道需要的页数：

```text
(分配的内存数 (单位：MB)) / 2 + 300 
```

比如我分配了 12GB 的内存 (也就是 12288 MB),那么设置的值为`12288 / 2+ 300 = 6444`,最后的设置应该长这样

```text
vm.nr_hugepages = 6444
```

然后重启物理机

## 激活透明大页面

首先需要检查操作系统是否支持大页面：

```shell
cat /sys/kernel/mm/transparent_hugepage/shmem_enabled
```

如果返回包含以下内容，那么操作系统支持透明大页面

```shell
always within_size advise never deny force
```

然后运行以下命令激活透明大页面

```shell
echo madvise | sudo tee /sys/kernel/mm/transparent_hugepage/enabled
echo advise | sudo tee /sys/kernel/mm/transparent_hugepage/shmem_enabled
echo defer | sudo tee /sys/kernel/mm/transparent_hugepage/defrag
echo 1 | sudo tee /sys/kernel/mm/transparent_hugepage/khugepaged/defrag
```

最后，我们需要配置开机自启动

```shell
sudo apt install sysfsutils

sudo tee /etc/sysfs.d/enableTHP.conf <<EOF
kernel/mm/transparent_hugepage/enabled=madvise
kernel/mm/transparent_hugepage/shmem_enabled=advise
kernel/mm/transparent_hugepage/defrag=defer
kernel/mm/transparent_hugepage/khugepaged/defrag=1
EOF

sudo systemctl restart sysfsutils
```

这样就可以了，然后重启机器即可

## CPU 调优

强制所有 CPU 核心运行在最高频率 (不同于超频，不会影响 CPU 寿命)

```shell
sudo cpupower frequency-set -g performance
```

## XanMod

XanMod Linux 内核融合了许多优化补丁，包括许多来自 Cloudflare,Google 等未被合并进主分支的优化

### 安装

1. 检查兼容性

    ```shell
    awk -f <(wget -qO- https://dl.xanmod.org/check_x86-64_psabi.sh)
    ```

   输出结果

    ```shell
    CPU supports x86-64-v4
    ```

   这里可以看到我的 CPU 是支持 v4 版本的，安装时可以按照此结果进行选择。

   :::warning
   一定要选择符合的版本进行安装，否则将导致无法正常启动！
   :::

2. 添加上游公钥：

    ```shell
    wget -qO - https://dl.xanmod.org/archive.key | gpg --dearmor -vo /usr/share/keyrings/xanmod-archive-keyring.gpg
    ```

3. 添加源：

    ```shell
    echo 'deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/xanmod releases main' | tee /etc/apt/sources.list.d/xanmod-release.list
    apt update
    ```

4. 安装

    ```shell
    apt install -y linux-xanmod-rt-x64v3
    ```

   `v3` 需要根据第 1 步的 CPU supports 更改，最后重启即可

   :::tip
   
   `CPU supports x86-64-v4` 仍然需要安装 `x64v3`,AVX512 对于内核没有影响
   
   :::

5. 检查安装

   重启后检查安装

    ```shell
    uname -r
    ```

### 配置优化

:::tip

1. 其中所有参数并非都能生效，需修改后`sysctl -p`验证有无报错
2. 其中`net.ipv4.tcp_wmem`和`net.ipv4.tcp_rmem`缓冲区参数需经过[👉计算后](https://tcp-cal.mereith.com/)得到
3. **修改前先备份！！！**

:::

```text
cat <<'TEXT' > /etc/sysctl.conf
# ------ 网络调优: 基本 ------
# TTL 配置, Linux 默认 64
# net.ipv4.ip_default_ttl=64

# 参阅 RFC 1323. 应当启用.
net.ipv4.tcp_timestamps=1
# ------ END 网络调优: 基本 ------

# ------ 网络调优: 内核 Backlog 队列和缓存相关 ------
# Ref: https://www.starduster.me/2020/03/02/linux-network-tuning-kernel-parameter/
# Ref: https://blog.cloudflare.com/optimizing-tcp-for-high-throughput-and-low-latency/
# Ref: https://zhuanlan.zhihu.com/p/149372947
# 以下四项实际上和 net.ipv4.tcp_rmem, net.ipv4.tcp_wmem 重复, 设定一个即可
# https://github.com/torvalds/linux/blob/87d6aab2389e5ce0197d8257d5f8ee965a67c4cd/net/ipv4/tcp_output.c#L241-L248
# net.core.wmem_default=1310720
# net.core.rmem_default=1310720
# net.core.rmem_max=536870912
# net.core.wmem_max=536870912
# 由左往右为 最小值 默认值 最大值
# 有条件建议依据实测结果调整 tcp_rmem, tcp_wmem 相关数值
# 个人实测差别不大, 可能是我网本来就比较好
# 缓冲区相关配置均和内存相关
net.ipv4.tcp_rmem=8192 262144 536870912
net.ipv4.tcp_wmem=4096 16384 536870912
net.ipv4.tcp_adv_win_scale=-2
net.ipv4.tcp_collapse_max_bytes=6291456
net.ipv4.tcp_notsent_lowat=131072
net.core.netdev_max_backlog=10240
net.ipv4.tcp_max_syn_backlog=10240
net.core.somaxconn=3276800
net.ipv4.tcp_abort_on_overflow=1
# 所有网卡每次软中断最多处理的总帧数量
net.core.netdev_budget = 600
# 流控和拥塞控制相关调优
# Egress traffic control 相关. 可选 fq, cake
# 实测二者区别不大, 保持默认 fq 即可
net.core.default_qdisc=fq
# Xanmod 内核 6.X 版本目前默认使用 bbr3, 无需设置
# 实测比 bbr, bbr2 均有提升
# 不过网络条件不同会影响. 有需求请实测.
# net.ipv4.tcp_congestion_control=bbr3
# 显式拥塞通知
# 已被发现在高度拥塞的网络上是有害的.
# net.ipv4.tcp_ecn=1
# TCP 自动窗口
# 要支持超过 64KB 的 TCP 窗口必须启用
net.ipv4.tcp_window_scaling=1
# 开启后, TCP 拥塞窗口会在一个 RTO 时间
# 空闲之后重置为初始拥塞窗口 (CWND) 大小.
# 大部分情况下, 尤其是大流量长连接, 设置为 0.
# 对于网络情况时刻在相对剧烈变化的场景, 设置为 1.
net.ipv4.tcp_slow_start_after_idle=1
# nf_conntrack 调优
# Add Ref: https://gist.github.com/lixingcong/0e13b4123d29a465e364e230b2e45f60
net.nf_conntrack_max=1000000
net.netfilter.nf_conntrack_max=1000000
net.netfilter.nf_conntrack_tcp_timeout_fin_wait=30
net.netfilter.nf_conntrack_tcp_timeout_time_wait=30
net.netfilter.nf_conntrack_tcp_timeout_close_wait=15
net.netfilter.nf_conntrack_tcp_timeout_established=300
net.ipv4.netfilter.ip_conntrack_tcp_timeout_established=7200
# TIME-WAIT 状态调优
# Ref: http://vincent.bernat.im/en/blog/2014-tcp-time-wait-state-linux.html
# Ref: https://www.cnblogs.com/lulu/p/4149312.html
# 4.12 内核中此参数已经永久废弃, 不用纠结是否需要开启
# net.ipv4.tcp_tw_recycle=0
## 只对客户端生效, 服务器连接上游时也认为是客户端
net.ipv4.tcp_tw_reuse=1
# 系统同时保持TIME_WAIT套接字的最大数量
# 如果超过这个数字 TIME_WAIT 套接字将立刻被清除
net.ipv4.tcp_max_tw_buckets=55000
# ------ END 网络调优: 内核 Backlog 队列和缓存相关 ------

# ------ 网络调优: 其他 ------
# Ref: https://zhuanlan.zhihu.com/p/149372947
# Ref: https://www.starduster.me/2020/03/02/linux-network-tuning-kernel-parameter/\#netipv4tcp_max_syn_backlog_netipv4tcp_syncookies
# 启用选择应答
# 对于广域网通信应当启用
net.ipv4.tcp_sack=1
# 启用转发应答
# 对于广域网通信应当启用
net.ipv4.tcp_fack=1
# TCP SYN 连接超时重传次数
net.ipv4.tcp_syn_retries=3
net.ipv4.tcp_synack_retries=3
# TCP SYN 连接超时时间, 设置为 5 约为 30s
net.ipv4.tcp_retries2=5
# 开启 SYN 洪水攻击保护
# 注意: tcp_syncookies 启用时, 此时实际上没有逻辑上的队列长度,
# Backlog 设置将被忽略. syncookie 是一个出于对现实的妥协,
# 严重违反 TCP 协议的设计, 会造成 TCP option 不可用, 且实现上
# 通过计算 hash 避免维护半开连接也是一种 tradeoff 而非万金油,
# 勿听信所谓“安全优化教程”而无脑开启
net.ipv4.tcp_syncookies=0

# Ref: https://linuxgeeks.github.io/2017/03/20/212135-Linux%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0rp_filter/
# 开启反向路径过滤
# Aliyun 负载均衡实例后端的 ECS 需要设置为 0
net.ipv4.conf.default.rp_filter=2
net.ipv4.conf.all.rp_filter=2

# 减少处于 FIN-WAIT-2 连接状态的时间使系统可以处理更多的连接
# Ref: https://www.cnblogs.com/kaishirenshi/p/11544874.html
net.ipv4.tcp_fin_timeout=10

# Ref: https://xwl-note.readthedocs.io/en/latest/linux/tuning.html
# 默认情况下一个 TCP 连接关闭后, 把这个连接曾经有的参数保存到dst_entry中
# 只要 dst_entry 没有失效, 下次新建立相同连接的时候就可以使用保存的参数来初始化这个连接.
# 通常情况下是关闭的, 高并发配置为 1.
net.ipv4.tcp_no_metrics_save=1
# unix socket 最大队列
net.unix.max_dgram_qlen=1024
# 路由缓存刷新频率
net.ipv4.route.gc_timeout=100

# Ref: https://gist.github.com/lixingcong/0e13b4123d29a465e364e230b2e45f60
# 启用 MTU 探测，在链路上存在 ICMP 黑洞时候有用（大多数情况是这样）
net.ipv4.tcp_mtu_probing = 1

# No Ref
# 开启并记录欺骗, 源路由和重定向包
net.ipv4.conf.all.log_martians=1
net.ipv4.conf.default.log_martians=1
# 处理无源路由的包
net.ipv4.conf.all.accept_source_route=0
net.ipv4.conf.default.accept_source_route=0
# TCP KeepAlive 调优
# 最大闲置时间
net.ipv4.tcp_keepalive_time=600
# 最大失败次数, 超过此值后将通知应用层连接失效
net.ipv4.tcp_keepalive_probes=3
# 发送探测包的时间间隔
net.ipv4.tcp_keepalive_intvl=15
# 放弃回应一个 TCP 连接请求前, 需要进行多少次重试
net.ipv4.tcp_retries1 = 5
# 在丢弃激活(已建立通讯状况)的 TCP 连接之前, 需要进行多少次重试
net.ipv4.tcp_retries2 = 5
# 孤立 Socket
net.ipv4.tcp_orphan_retries = 3
# 系统所能处理不属于任何进程的TCP sockets最大数量
net.ipv4.tcp_max_orphans=3276800
# arp_table的缓存限制优化
net.ipv4.neigh.default.gc_thresh1=128
net.ipv4.neigh.default.gc_thresh2=512
net.ipv4.neigh.default.gc_thresh3=4096
net.ipv4.neigh.default.gc_stale_time=120
net.ipv4.conf.default.arp_announce=2
net.ipv4.conf.lo.arp_announce=2
net.ipv4.conf.all.arp_announce=2
# ------ END 网络调优: 其他 ------

# ------ 内核调优 ------

# Ref: Aliyun, etc
# 内核 Panic 后 1 秒自动重启
kernel.panic=1
# 允许更多的PIDs, 减少滚动翻转问题
kernel.pid_max=32768
# 内核所允许的最大共享内存段的大小（bytes）
kernel.shmmax=4294967296
# 在任何给定时刻, 系统上可以使用的共享内存的总量（pages）
kernel.shmall=1073741824
# 设定程序core时生成的文件名格式
kernel.core_pattern=core_%e
# 当发生oom时, 自动转换为panic
vm.panic_on_oom=1
# 表示强制Linux VM最低保留多少空闲内存（Kbytes）
# vm.min_free_kbytes=1048576
# 该值高于100, 则将导致内核倾向于回收directory和inode cache
vm.vfs_cache_pressure=250
# 表示系统进行交换行为的程度, 数值（0-100）越高, 越可能发生磁盘交换
vm.swappiness=10
# 仅用10%做为系统cache
vm.dirty_ratio=10
vm.overcommit_memory=1
# 增加系统文件描述符限制
# Fix error: too many open files
fs.file-max=6553560
fs.inotify.max_user_instances=8192
fs.inotify.max_user_instances=8192
# 内核响应魔术键
kernel.sysrq=1
# 弃用
# net.ipv4.tcp_low_latency=1

# Ref: https://gist.github.com/lixingcong/0e13b4123d29a465e364e230b2e45f60
# 当某个节点可用内存不足时, 系统会倾向于从其他节点分配内存. 对 Mongo/Redis 类 cache 服务器友好
vm.zone_reclaim_mode=0

# Ref: Unknwon
# 开启F-RTO(针对TCP重传超时的增强的恢复算法).
# 在无线环境下特别有益处, 因为在这种环境下分组丢失典型地是因为随机无线电干扰而不是中间路由器阻塞
net.ipv4.tcp_frto = 2
# TCP FastOpen
net.ipv4.tcp_fastopen = 3
# TCP 流中重排序的数据报最大数量
net.ipv4.tcp_reordering = 300
# 开启后, 在重传时会试图发送满大小的包. 这是对一些有 BUG 的打印机的绕过方式
net.ipv4.tcp_retrans_collapse = 0
# 自动阻塞判断
net.ipv4.tcp_autocorking = 1
# TCP内存自动调整
net.ipv4.tcp_moderate_rcvbuf = 1
# 单个TSO段可消耗拥塞窗口的比例, 默认值为 3
net.ipv4.tcp_tso_win_divisor = 3
# 对于在 RFC1337 中描述的 TIME-WAIT Assassination Hazards in TCP 问题的修复
net.ipv4.tcp_rfc1337 = 1
# 包转发. 出于安全考虑, Linux 系统默认禁止数据包转发
net.ipv4.ip_forward = 0
# 取消对广播 ICMP 包的回应
net.ipv4.icmp_echo_ignore_broadcasts = 1
# 开启恶意 ICMP 错误消息保护
net.ipv4.icmp_ignore_bogus_error_responses = 1

TEXT

cat <<'TEXT' > /etc/security/limits.conf
* soft nofile 65535
* hard nofile 65535
* soft noproc 65535
* hard noproc 65535
root soft nofile 65535
root hard nofile 65535
root soft noproc 65535
root hard noproc 65535
TEXT

cat <<'TEXT' > /etc/security/limits.d/90-nproc.conf
* soft nproc 65535
root soft nproc 65535
TEXT
```

参考 NodeSeek 大佬教程：

* https://www.nodeseek.com/post-37225-1
* https://www.nodeseek.com/post-197087-1
