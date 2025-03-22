---
title: YAML
sidebar_position: 2
---


# 概览

## 什么是 YAML?

> YAML 是 "YAML Ain't a Markup Language"(YAML 不是一种标记语言)的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"(仍是一种标记语言)。
>
> YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表、标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、调试内容、文件大纲(例如：许多电子邮件标题格式和 YAML 非常接近)。
>
> YAML 的配置文件后缀为 *.yml* 或者 *.yaml* ，如：`config.yml` 。

Minecraft 服务器用到的 YAML 语法都是非常非常基础的，只要了解一下就可以。(甚至看看配置文件就明白了)

## 概要 TL;DR

- 大小写敏感
- 使用缩进表示层级关系
- 缩进不允许使用 **TAB** ，只允许**空格**
- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- `#` 表示注释
- 冒号后面有空格
- 字符串要加单引号或双引号

:::info
在不涉及转义字符 (形如 \n， \r) 时，单双引号等价。

在部分特殊情况，字符串不需要加引号，仍然建议使用引号来减小歧义。
:::

:::info

有可能你的文本编辑器用的缩进不是**空格**，这会导致插件报错。

自己在文本编辑器找找或者浏览器搜下怎么改。

:::

## 参考

https://www.runoob.com/w3cnote/yaml-intro.html

https://www.cnblogs.com/AcAc-t/p/yaml_anchor_refer.html

https://curder.github.io/yaml-study/guide/quote.html

https://zhuanlan.zhihu.com/p/145173920

https://zhuanlan.zhihu.com/p/616843858
