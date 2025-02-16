---
title: Math
sidebar_position: 3
---

import Image from '@theme/IdealImage';

# Math

:::info

`eCloud` https://api.extendedclip.com/expansions/math/

`Placeholder List` https://wiki.placeholderapi.com/users/placeholder-list/#math

`GitHub` https://github.com/Andre601/Math-Expansion

:::

## 安装此扩展

```text
/papi ecloud download Math
/papi reload
```

## 如何使用

### 基础

```text
%math_你的算式%
```

**如：**

<Image img={require('./_images/Math/1.png')} alt="" />

发现输出的结果有三位小数，你可以在 `plugins\PlaceholderAPI\config.yml` 中找到

```yaml
  math:
    Disable-Warnings: false
    Rounding: half-up
    Decimals: 3
    Debug: false
```

修改`Decimals: 3`即可修改默认输出的小数位数

或者：

```text
%math_小数位数_你的算式%
```

**如：**

<Image img={require('./_images/Math/2.png')} alt="" />

### 运算符

- `+` 加法运算
- `-` 减法运算
- `*` 乘法运算
- `%` 除法运算

支持括号 比如 (1+2)x2=6 为

<Image img={require('./_images/Math/3.png')} alt="" />

### 支持变量

使用 `{}` 代替变量的 `%`

比如 [Server扩展](https://wiki.placeholderapi.com/users/placeholder-list/#server)的 `%server_online%` 显示当前服务器在线玩家数

<Image img={require('./_images/Math/4.png')} alt="" />

我本地测试服务器里就我自己一个人，所以 1+1=2
