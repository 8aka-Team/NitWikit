---
sidebar_position: 3
---

# Math

:::info

`eCloud` https://api.extendedclip.com/expansions/math/

`Placeholder List` https://wiki.placeholderapi.com/users/placeholder-list/#math

`GitHub` https://github.com/Andre601/Math-Expansion

:::

## 安装此扩展
```
/papi ecloud download Math
/papi reload
```

## 如何使用

### 基础

```
%math_你的算式%
```
**如：**

![](_images/Math/1.png)

发现输出的结果有三位小数，你可以在 `plugins\PlaceholderAPI\config.yml` 中找到

```
  math:
    Disable-Warnings: false
    Rounding: half-up
    Decimals: 3
    Debug: false
```

修改`Decimals: 3`即可修改默认输出的小数位数

**或者**

```
%math_小数位数_你的算式%
```

**如：**

![](_images/Math/2.png)

### 运算符

- `+` 加法运算
- `-` 减法运算
- `*` 乘法运算
- `%` 除法运算

支持括号 比如 (1+2)x2=6 为

![](_images/Math/3.png)

### 支持变量

使用 `{}` 代替变量的 `%`

比如 [Server扩展](https://wiki.placeholderapi.com/users/placeholder-list/#server)的 `%server_online%` 显示当前服务器在线玩家数

![](_images/Math/4.png)

我本地测试服务器里就我自己一个人，所以 1+1=2
