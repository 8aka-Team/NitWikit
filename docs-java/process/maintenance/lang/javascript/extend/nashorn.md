---
title: Nashorn 扩展
sidebar_position: 1
---

# Nashorn 扩展

## 访问Java类

要从JavaScript访问原始类型和引用类型的Java类型，可以调用`Java.type()`函数，返回与传入的类名称对应的类型对象。例如，以下示例演示了如何获取各种类型对象：

```js
var ArrayList = Java.type("java.util.ArrayList");
var intType = Java.type("int");
var StringArrayType = Java.type("java.lang.String[]");
var int2DArrayType = Java.type("int[][]");
```

返回的类型对象可以在JavaScript代码中像使用Java类名一样使用。例如，可以使用它来实例化新对象：

```js
var anArrayList = new Java.type("java.util.ArrayList");
```

可以使用`Java.type()`返回的类型对象来访问静态字段和方法：

```js
var File = Java.type("java.io.File");
File.createTempFile("nashorn", ".tmp");
```

要访问静态内部类，可以在`Java.type()`方法的参数中使用美元符号（$）。以下示例演示了如何返回`java.awt.geom.Arc2D`中的`Float`内部类的类型对象：

```js
var Float = Java.type("java.awt.geom.Arc2D$Float");
```

如果已经有外部类的类型对象，可以像访问外部类的属性一样访问内部类：

```js
var Arc2D = Java.type("java.awt.geom.Arc2D");
var Float = Arc2D.Float;
```

对于非静态内部类，必须将外部类的实例作为构造函数的第一个参数。

尽管JavaScript中的类型对象与Java中的`java.lang.Class`对象类似，但它们是不同的。你可以使用`class`和`static`属性将两者互相转换。

## 导入Java包和类

为了通过简化名称访问Java类，可以使用`importPackage()`和`importClass()`函数来导入Java包和类。以下示例展示了如何使用这两个函数：

```js
// 加载兼容性脚本
load("nashorn:mozilla_compat.js");
// 导入java.awt包
importPackage(java.awt);
// 导入java.awt.Frame类
importClass(java.awt.Frame);
// 创建新的Frame对象
var frame = new java.awt.Frame("hello");
// 调用setVisible()方法
frame.setVisible(true);
// 访问JavaBean属性
print(frame.title);
```

标准的Java SE包有快捷方式（例如，`java`代表`Packages.java`，`javax`代表`Packages.javax`，`org`代表`Packages.org`）。`java.lang`包不会默认导入，因为其类可能与JavaScript中的内建对象（如Object、Boolean、Math等）冲突。

## 使用Java数组

要创建一个Java数组对象，首先需要获取Java数组的类型对象，然后实例化它。访问数组元素和`length`属性的语法与Java中相同。以下示例演示了如何创建一个Java数组对象并访问其元素：

```js
var StringArray = Java.type("java.lang.String[]");
var a = new StringArray(5);

// 设置第一个元素的值
a[0] = "Scripting is great!";
// 打印数组的长度
print(a.length);
// 打印第一个元素的值
print(a[0]);
```

给定一个JavaScript数组，可以使用`Java.to()`方法将其转换为Java数组。你必须将JavaScript数组变量传递给此方法，并指定要返回的数组类型。

```js
// 创建JavaScript数组
var anArray = [1, "13", false];

// 将JavaScript数组转换为Java int[]数组
var javaIntArray = Java.to(anArray, "int[]");
print(javaIntArray[0]); // 输出数字1
```

## 实现Java接口

在JavaScript中实现Java接口的语法类似于在Java中声明匿名类。你可以实例化一个接口，并在同一个表达式中实现其方法。以下示例演示了如何实现`Runnable`接口：

```js
// 创建一个实现Runnable接口的对象，run方法作为JavaScript函数实现
var r  = new java.lang.Runnable() {
    run: function() {
        print("running...\n");
    }
};

// 将r变量传递给期望实现了java.lang.Runnable接口的Java方法
var th = new java.lang.Thread(r);
th.start();
th.join();
```

如果方法期望一个只实现单一方法的接口对象，可以直接传递一个JavaScript函数，而不必创建完整的实现对象。

## 扩展抽象Java类

你可以通过传递一个JavaScript对象并在其中实现抽象方法来实例化抽象Java类的匿名子类。以下示例展示了如何实例化`java.util.TimerTask`类的一个子类：

```js
var TimerTask =  Java.type("java.util.TimerTask");
var task = new TimerTask({ run: function() { print("Hello World!") } });
```

### 扩展具体Java类

对于具体的Java类，不能直接使用类似于抽象类的扩展语法。要扩展具体类，必须使用`Java.extend()`函数。以下示例演示了如何扩展`java.lang.Thread`类并实现`run()`方法：

```js
var Thread = Java.type("java.lang.Thread");
var threadExtender = Java.extend(Thread);
var t = new threadExtender() {
    run: function() { print("Thread running!") }};
```

## 选择方法重载版本

Java方法可以通过参数类型进行重载。在调用时，Nashorn会自动根据实际参数类型选择正确的重载版本。如果遇到模糊的情况，可以显式选择某个特定的重载版本。

```js
var out = java.lang.System.out;
out["println(Object)"]("hello");
```

## 位置

```javascript
print(__FILE__, __LINE__, __DIR__);
```

## 加载脚本

在JavaScript中加载额外的脚本文件非常方便。我们可以使用`load`函数加载本地或远程脚本。

```javascript
load('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js');
```

外部脚本会在相同JavaScript上下文中被执行，所以我们可以直接访问underscore 的对象。要记住当变量名称互相冲突时，脚本的加载可能会使你的代码崩溃。

这一问题可以通过把脚本文件加载到新的全局上下文来绕过：

```javascript
loadWithNewGlobal('script.js');
```

## 数据类型映射

大多数Java与JavaScript之间的转换按预期进行。例如，JavaScript数组会自动转换为Java数组类型，JavaScript函数会自动转换为SAM类型。当数字传递给Java API时，它们会根据目标类型转换为期望的数字类型（无论是装箱类型还是基本类型）。

### 将JSON对象传递给Java

`Java.asJSONCompatible(obj)`函数接受一个脚本对象并返回一个与大多数Java JSON库兼容的对象。它将所有数组作为`List`对象暴露，而其他对象则作为`Map`对象暴露。

## Nashorn 语法扩展

### 条件捕获子句

一个 `try..catch` 语句可以有多个 `catch` 子句，每个子句都有自己的捕获条件。

- 条件捕获子句示例：
```javascript
try {
    func()
} catch (e if e instanceof TypeError) {
     // 处理 TypeError
} catch (e) {
    // 处理其他错误
}
```

### 函数表达式闭包

该语法允许在定义简单单行函数时省略大括号和 `return` 关键字。详情见 [MDN 1.8 新功能](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8)。

- 闭包函数表达式示例：
```javascript
function sqr(x) x*x

// 等效于
// function sqr(x) { return x*x }
```

### `for each` 表达式

ECMAScript 的 `for..in` 遍历对象的属性名或数组的索引，而 `for..each..in` 循环遍历对象的属性值，而不是属性名或索引。详情见 [MDN 参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in)。

- `for each` 循环示例：
```javascript
// 遍历对象的每个值
var arr = [ "hello", "world" ];
for each (a in arr) {
 print(a)
}
```

`for each` 也适用于 Java 数组以及任何 Java 的 `Iterable` 对象。

#### Java 数组的 `for each` 示例
```javascript
var JArray = Java.type("int[]");
var arr = new JArray(10);
for (i in arr) {
   arr[i] = i*i;
}
for each (i in arr) {
   print(i);
}
```

#### 遍历 Java `Map` 示例
```javascript
var System  = Java.type("java.lang.System")
for each (p in System.properties.entrySet()) {
    print(p.key, "=", p.value)
}

for each (e in System.env.entrySet()) {
  print(e.key, "=", e.value)
}
```

### 新表达式中的最后一个参数在 `")"` 后指定

在一个 `new` 表达式中，如果最后一个参数是对象字面量，可以在 `")"` 后指定该参数。

- 匿名类样式的表达式示例：
```javascript
var r = new java.lang.Runnable() {
    run: function() { print("run"); }
}
```

### 匿名函数语句

顶级函数语句可以是匿名的。

- 匿名函数语句示例：
```javascript
function () {
    print("hello")
}
```

如果通过 `eval` 或脚本引擎的 `eval` 调用执行该代码，返回的将是函数对象，可以稍后调用。
