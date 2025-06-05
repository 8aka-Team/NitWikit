---
title: RNG
sidebar_position: 3
---

# RNG 漏洞

RNG 是 **随机数生成器** 的简写。

本质上只是个计算器，用来计算 Minecraft 中的随机事件。

- **原理？**

计算机产生随机数不是真正的随机，而是根据已有的数据，通过复杂的公式产生一个 “伪随机数” 。

那么，如果你知道这个公式，并且知道要使用什么数据，操纵进入公式的数据，就可以使随机数变成自己想要的结果。

利用此漏洞的客户端 mod：

- [clientcommands](https://www.mcmod.cn/class/4239.html)
- [EnchantmentCracker](https://github.com/Earthcomputer/EnchantmentCracker)

## 能干啥？

### 指定附魔

玩家可以百分百附出满级附魔。

### 耐久无损耗

耐久附魔不是增加物品的耐久，而是有概率不消耗耐久。

### 钓鱼出指定宝藏

同理，玩家可以想钓出什么，就能钓出什么。

## 如何防御 RNG 漏洞

[Paper](https://papermc.io) 核心(包括它们的分支)，可以防止玩家破解 RNG 。

其中， [Purpur](https://purpurmc.org/) 和 [Leaves](https://leavesmc.org/) (包括它们的分支)可以自行选择使用的 RNG 算法。

对于 [Purpur](https://purpurmc.org/) 和 [Leaves](https://leavesmc.org/) 用户，你可以根据自己的核心类型按照下文修改配置 (默认就是开启的)：

这是 Purpur 的配置方法：

```yaml title="purpur.yml"
    settings:
      entity:
        shared-random: true
```

这是 Leaves 的配置方法；

```yaml title="leaves.yml"
use-vanilla-random: false
```

:::tip

如果你使用 Paper 核心但想用回原版的 RNG 算法，请参考 [Paper#7166](https://github.com/PaperMC/Paper/issues/7166#issuecomment-998988542) 中提到的解决方法。

如果你使用 Gale、Leaf 等核心，你甚至无需为此担心，因为他们的 RNG 算法已经经过改良，不再是原版的 RNG 。

:::
