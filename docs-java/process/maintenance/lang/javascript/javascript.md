---
title: JavaScript
sidebar_position: 3
---

# JavaScript

JavaScript 在 Minecraft 中有着相当广泛的应用,很多插件和 Mod 都在内部提供了 JavaScript

常见的实现:

* TrMenu
* Kether
* KubeJS

## 入门

推荐在 [W3School](https://www.w3school.com.cn/js/index.asp) 上学习基础知识

如果只需要在 Minecraft 上使用,则不需要学习`JS HTML DOM`,`JS Browser BOM` 和 `JS Async`

## 引擎

JavaScript 运行在 JVM 上是需要执行引擎的,不同的 JS 引擎支持的版本和功能不一样,目前主要有以下引擎:

目前主要有 Nashorn,Rhino,GraalJS,Javet 四个引擎

Rhino 和 Javet 在 Minecraft 中目前应用很少,因此后续部分仅介绍 Nashorn 和 GraalJS

:::warning

你无法改变插件/Mod 使用的 JS 引擎(除非你有能力改源代码),当然你可以督促作者更改 JS 引擎

:::

### 支持标准

Nashorn 和 GraalJS 支持版本范围不同(点击ES标准可查看添加的内容)

Nashorn 支持版本:

* [ECMAScript 5.x(ES 5)](https://www.w3school.com.cn/js/js_es5.asp)
* [ECMAScript 2015(ES 6)](https://www.w3school.com.cn/js/js_es6.asp)(不完全支持)
* [JavaScript 扩展语法](extend/nashorn.md#nashorn-语法扩展)

:::warning

Nashorn 不支持 2015 年后的 ES 特性,在使用的时候请确保 Nashorn 支持

:::

GraalJS 支持版本:

* [ECMAScript 5.x(ES 5)](https://www.w3school.com.cn/js/js_es5.asp)
* [ECMAScript 2015(ES 6)](https://www.w3school.com.cn/js/js_es6.asp)
* [ECMAScript 2016](https://www.w3school.com.cn/js/js_2016.asp)
* [ECMAScript 2017](https://www.w3school.com.cn/js/js_2017.asp)
* [ECMAScript 2018](https://www.w3school.com.cn/js/js_2018.asp)
* [ECMAScript 2019](https://www.w3school.com.cn/js/js_2019.asp)
* [ECMAScript 2020](https://www.w3school.com.cn/js/js_2020.asp)
* [ECMAScript 2021](https://www.w3school.com.cn/js/js_2021.asp)
* [ECMAScript 2022](https://www.w3school.com.cn/js/js_2022.asp)
* [ECMAScript 2023](https://www.w3school.com.cn/js/js_2023.asp)
* [ECMAScript 2024](https://www.w3school.com.cn/js/js_2024.asp)
* 所有最新稳定特性(ES 2025)
* 在[提案中的特性](https://github.com/tc39/proposals)
* [JavaScript 扩展语法](extend/graaljs.md#nashorn-兼容)

### Java 支持

Nashorn 在 JDK 8 中被嵌入到 JDK 中,在 Java 15 中被移除

Nashorn 目前支持 Java 8 + 以上的版本,GraalJS 支持 Java 11+ 版本

### 性能

根据 [Github 性能测试](https://github.com/caoccao/GraalJS-vs-Javet-vs-Nashorn),
GraalJS 在非 GraalVM 上的执行性能是 Nashorn 的 8 倍,在 GraalVM 上的执行性能为 10~12 倍

### 其他功能

GraalJS 有着 Nashorn 很多没有的功能(虽然 Minecraft 不一定用得到),主要有以下功能:

* 更好的互操作性,有着非常多的 API
* 更加安全,可以管控 JS 代码的执行权限
* **支持重载全局层面的运算符**
* 与 Nashorn 完全兼容(需要开启选项)
* 可以运行 WebAssembly,Python,Ruby
* 可以使用 NodeJS 和 NPM
* ...
