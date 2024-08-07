---
title: 如何预防崩服
---

# 如何预防崩服问题

会有部分不怀好意的人去测试服务器的崩溃漏洞。

别担心，长期保持维护的插件一般不会有崩溃的漏洞，但是我们也要有预防的准备。

## 分类

下面将列出几种常见的 Minecraft 服务器容易遭受的崩溃类型。

### 插件类

在服务器上安装了老版本/未发现漏洞的插件可能导致插件因bug自行崩溃，甚至甚至有漏洞被攻击者利用。这类通常需要服主做好相应的措施预防。首先在选用插件时就应注意：
1. 初次安装时就尽可能解决 WARN 和 ERROR，实在不行就立刻换插件
2. 少用，最好不用停更插件
3. 少用，最好不用黑插件
4. 尽可能使用用户数多的插件

就算你已经保证选用了可依赖的插件，仍然要对这类问题进行预防。具体预防方面有：

1. 对玩家使用的指令进行限制，最好是通过白名单，仅开放玩家会用到的指令。

2. 将服务器的插件做好隐藏和伪装，尽可能防止攻击者获得服务器所使用的插件。

#### 推荐添加黑名单的指令
<details>
  <summary>黑名单指令</summary>

```
      # WorldEdit exploit
      - "//calc"
      - "//calculate"
      - "//eval"
      - "//evaluate"
      - "//solve"
      - "//asc"
      - "//ascend"
      - "//desc"
      - "//descend"
      # HolographicDisplays exploit
      - "/hd readtext"
      - "/holo readtext"
      - "/hologram readtext"
      - "/holograms readtext"
      - "/holographicdisplays readtext"
      # PermissionsEx exploit
      - "/pex promote"
      - "/pex demote"
      - "/promote"
      - "/demote"
      - "/execute"
      # Multiverse exploit
      - "/mv ^"
      - "/mv help <"
      - "/mvhelp <"
      - "/$"
      # FAWE exploit
      - "//to"
      - "/to"
```

</details>

### 运行环境类

这类漏洞基本上很难避免，如log4j，在未发现之前谁也不知道。

服主还是尽可能的多关注网络信息，保证自己能尽快了解到一些漏洞的产生，防止被攻击者钻空子。

### 发包类/物品类（也称原版漏洞）

简单来说，就是向服务器发送一些无法处理/处理缓慢的包。

如经典的Book崩服/告示牌崩服（高版本已修复）

这类如果你是低版本服务器，就需要安装相应的插件进行防御。
