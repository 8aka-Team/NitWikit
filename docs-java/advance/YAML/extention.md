---
title: 扩展
sidebar_position: 3
---

# 扩展

## 锚点

:::warning

锚点一定要先声明再使用。

即整个 .yml 文件从上往下设置锚点**一定要**在引用锚点之前。

否则会语法报错。

:::

### 符号

`&` 设置锚点。

`*` 引用锚点。

`<<` 合并到当前数据。

### 例子

这样写：

```
defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  common: *defaults
```

相当于：
```
defaults:
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  adapter: postgres
  host: localhost

test:
  common:
    adapter: postgres
    host: localhost
```

## 换行

### 保留换行

使用 `|` 来表示该语法，每行的缩进和行尾空白都会被去掉，而额外的缩进会被保留。
```YAML
lines: |
  我是第一行
  我是第二行
    我是帅气迷人的驿站
      我是第四行
  我是第五行
```
使用 `|+` 来表示该语法，保留行尾及字符末尾的换行符。
```YAML
lines: |+
  我是第一行
  我是第二行
```

使用 `|-` 来表示该语法，保留行尾换行符，但不保留字符末尾的换行符。
```YAML
lines: |-
  我是第一行
  我是第二行
```

### 折叠换行

使用 `>` 来表示该语法，只有空白行才会被识别为换行，原来的换行符都会被转换成空格。
```YAML
lines: >
  我是第一行
  我也是第一行
  我仍是第一行
  我依旧是第一行
  我是第二行
  这么巧我也是第二行
```

使用 `>+` 来表示该语法，将行尾换行符替换成空格，保留字符末尾的换行符。
```YAML
lines: >+
  我是第一行
  我也是第一行
```

使用 `>-` 来表示该语法，将行尾换行符替换成空格，不保留字符末尾的换行符。
```YAML
lines: >-
  我是第一行
  我也是第一行
```