---
title: 基础
sidebar_position: 2
---

# 基础

假如你想更进一步，请继续阅读。

## 数据类型

### 对象
键值对的集合。

形如 `key: value` ，也可以形如 `key1: {key1: value1, key2: value2, ...}` 。

比如这里 `key` 是键，`value` 是这个键的值 `: `(冒号后有个空格)被称为 `映射标记` 。

### 数组
以 `-` 开头的行表示构成一个数组，数组是一组按次序排列的值。

YAML 支持多维数组，可以使用行内表示：`key: [value1, value2, ...]` 。

这个写法相当于：
```yaml
key1:
  - value1
  - value2
  - ...
```

一个相对复杂的例子：
```
companies:
    - id: 1
      name: company1
      price: 200W
    - id: 2
      name: company2
      price: 500W
```
意思是 companies 属性是一个数组，每一个数组元素又是由 id、name、price 三个属性构成。

### 复合结构
数组和对象可以构成复合结构，例：

```yaml
languages:
  - Ruby
  - Perl
  - Python
websites:
  YAML: yaml.org
  Ruby: ruby-lang.org
  Python: python.org
  Perl: use.perl.org
```

转换为json为：
```json
{
  languages: [ 'Ruby'， 'Perl'， 'Python']，
  websites: {
    YAML: 'yaml.org',
    Ruby: 'ruby-lang.org',
    Python: 'python.org',
    Perl: 'use.perl.org'
  }
}
```

### 纯量
纯量是最基本的，不可再分的值，包括：
- 字符串
- 布尔值
- 整数
- 浮点数
- Null
- 时间
- 日期

例子：
```
boolean:
    - TRUE  # true，True 都可以。
    - FALSE  # false，False 都可以。
float:
    - 3.14
    - 6.8523015e+5  #可以使用科学计数法。
int:
    - 123
    - 0b1010_0111_0100_1010_1110  #二进制表示。
null:
    nodeName: 'node'
    parent: ~  #使用 ~ 表示 null 。
string:
    - 哈哈
    - 'Hello world'  #可以使用双引号或者单引号包裹特殊字符。
    - newline
      newline2  #字符串可以拆成多行，每一行会被转化成一个空格。
date:
    - 2018-02-17  #日期必须使用 ISO 8601 格式，即 yyyy-MM-dd 。
datetime:
    -  2018-02-17T15:02:31+08:00  #时间和日期之间使用 T 连接，最后使用 + 代表时区。
```

## 缩进
书写的时候要尤其注意缩进。

如：
```
options:
  enable: true
  check: false
  drop-block: true
  other:
    money: 10
    welcome: "欢迎你"
guide:
  show: true
  receive: "你好"
```

我们称 `options` 和 `guide` 在同一缩进下。

`enable` 和 `check` 在同一缩进下，同样的，`enable` 和 `drop-block` 也在同一缩进下，以此类推。

而 `options.enable` (指 options 缩进下的 enable 键) 和 `options.other.money` 以及 `guide.show` 则不在同一缩进下。

在同一缩进下不允许出现相同的键，如：

```
options:
  enable: true
  enable: false
  check: false
```

如果你的文本编辑器支持 YAML 语法，那么它应该会标红提示你语法错误，这样的配置插件读取也会报错。

不在同一缩进下则可以出现相同的键，如：

```
options:
  enable: true
  check: false
guide:
  enable: true
  check: true
```