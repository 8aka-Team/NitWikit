---
title: RNG
sidebar_position: 3
---

# RNG 漏洞

RNG 是 **随机数生成器** 的简写。

本质上只是个计算器，用来计算 Minecraft 中的随机事件。

**原理？**

计算机产生随机数不是真正的随机，而是根据已有的数据，通过复杂的公式产生一个 “伪随机数” 。

那么，如果你知道这个公式，并且知道要使用什么数据，操纵进入公式的数据，就可以使随机数变成自己想要的结果。

利用此漏洞的客户端 mod：

- [clientcommands](https://www.mcmod.cn/class/4239.html)
- [EnchantmentCracker](https://github.com/Earthcomputer/EnchantmentCracker)

# 能干啥？

## 指定附魔

玩家可以百分百附出满级附魔。

## 耐久无损耗

耐久附魔不是增加物品的耐久，而是有概率不消耗耐久。

## 钓鱼出指定宝藏

同理，玩家可以想钓出什么，就能钓出什么。

# 如何防御 RNG 漏洞

[purpur](https://purpurmc.org/) 和 [leaves](https://leavesmc.org/) 核心(包括它们的分支)，可以防止玩家破解 RNG 。

您可以将配置改为如下 (默认就是开启的)：

`purpur.yml`

```yaml
    settings:
      entity:
        shared-random: true
```

`leaves.yml`

```yaml
use-vanilla-random: false
```

如果您使用 Gale、Leaf 等核心，您甚至无需为此担心，因为他们的 RNG 算法已经经过改良，不再是原版的 RNG 。

