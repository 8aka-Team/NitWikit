---
title: GraalJS 扩展
sidebar_position: 2
---

# GraalJS 扩展

## GraalJS

### Nashorn 兼容

`nashorn-compat`选项下可用的功能包括：
- `Java.isJavaFunction`, `Java.isJavaMethod`, `Java.isScriptObject`, `Java.isScriptFunction`
- `new Interface|AbstractClass(fn|obj)`
- `JavaImporter`
- `JSAdapter`
- `java.lang.String`方法
- `load("nashorn:parser.js")`, `load("nashorn:mozilla_compat.js")`
- `exit`, `quit`

[Nashorn语法扩展](nashorn.md#nashorn-语法扩展) 可以通过`js.syntax-extensions`实验性选项启用。如果启用Nashorn兼容模式（`js.nashorn-compat`），这些扩展也会默认启用。

### 类访问

要访问Java类，GraalJS支持`Java.type(typeName)`函数：
```js
var FileClass = Java.type('java.io.File');
```

如果允许宿主类查找（`allowHostClassLookup`），则默认情况下可以访问`java`全局属性。
例如，访问`java.io.File`的现有代码应该重写为使用`Java.type(name)`函数：
```js
// GraalJS（和Nashorn）兼容的语法
var FileClass = Java.type("java.io.File");
// 向后兼容的语法
var FileClass = java.io.File;
```

GraalJS提供了`Packages`、`java`等全局属性以便兼容性。
然而，尽可能明确地使用`Java.type`访问所需的类更为推荐，原因有两个：
1. 它一次性解析类，而不是尝试将每个属性解析为类。
2. 如果类无法找到或不可访问，`Java.type`会立即抛出`TypeError`，而不是默默地将未解析的名称当作包处理。

可以使用`js.java-package-globals`标志来禁用Java包的全局字段（设置为`false`以避免创建这些字段；默认值为`true`）。

### 构造Java对象

可以使用JavaScript的`new`关键字构造Java对象：
```js
var FileClass = Java.type('java.io.File');
var file = new FileClass("myFile.md");
```

### 字段和方法访问

可以像访问JavaScript属性一样访问Java类的静态字段或Java对象的字段：
```js
var JavaPI = Java.type('java.lang.Math').PI;
```

可以像调用JavaScript函数一样调用Java方法：
```js
var file = new (Java.type('java.io.File'))("test.md");
var fileName = file.getName();
```

### 方法参数的转换

JavaScript定义了操作`double`数字类型。
出于性能考虑，GraalJS可能会在内部使用额外的Java数据类型（例如`int`类型）。

在调用Java方法时，可能需要进行值转换。
当Java方法期望一个`long`参数，而提供了一个`int`时，会发生这种情况（`type widening`）。
如果这种转换会导致丢失信息，`TypeError`会被抛出：
```java
// Java
void longArg   (long arg1);
void doubleArg (double arg2);
void intArg    (int arg3);
```
```js
// JavaScript
javaObject.longArg(1);     // 扩展，正常
javaObject.doubleArg(1);   // 扩展，正常
javaObject.intArg(1);      // 匹配，正常

javaObject.longArg(1.1);   // 丢失转换，TypeError!
javaObject.doubleArg(1.1); // 匹配，正常
javaObject.intArg(1.1);    // 丢失转换，TypeError!
```

注意，参数值必须符合参数类型。
你可以使用自定义[目标类型映射](https://www.graalvm.org/truffle/javadoc/org/graalvm/polyglot/HostAccess.Builder.html#targetTypeMapping-java.lang.Class-java.lang.Class-java.util.function.Predicate-java.util.function.Function-)来覆盖此行为。

### 方法选择

Java允许按参数类型重载方法。
当从JavaScript调用Java时，选择最狭窄的可用类型，该类型能将实际参数无损地转换为该类型：
```java
// Java
void foo(int arg);
void foo(short arg);
void foo(double arg);
void foo(long arg);
```
```js
// JavaScript
javaObject.foo(1);              // 将调用foo(short);
javaObject.foo(Math.pow(2,16)); // 将调用foo(int);
javaObject.foo(1.1);            // 将调用foo(double);
javaObject.foo(Math.pow(2,32)); // 将调用foo(long);
```

要覆盖此行为，可以使用`javaObject['methodName(paramTypes)']`语法显式选择方法重载。
参数类型需要用逗号分隔且不带空格，对象类型需要完全限定（例如，`'get(java.lang.String,java.lang.String[])'`）。
请注意，这与Nashorn不同，Nashorn允许额外的空格和简单名称。
在上面的例子中，可能总是希望调用`foo(long)`，即使`foo(short)`可以通过无损转换访问（`foo(1)`）：
```js
javaObject['foo(int)'];
javaObject['foo(double)']
```

注意，参数值仍然必须符合参数类型。
你可以使用自定义[目标类型映射](https://www.graalvm.org/truffle/javadoc/org/graalvm/polyglot/HostAccess.Builder.html#targetTypeMapping-java.lang.Class-java.lang.Class-java.util.function.Predicate-java.util.function.Function-)来覆盖此行为。

显式选择方法重载也在方法重载模糊不清且无法自动解析时有用，或者当你想要覆盖默认选择时：
```java
// Java
void sort(List<Object> array, Comparator<Object> callback);
void sort(List<Integer> array, IntBinaryOperator callback);
void consumeArray(List<Object> array);
void consumeArray(Object[] array);
```
```js
// JavaScript
var array = [3, 13, 3, 7];
var compare = (x, y) => (x < y) ? -1 : ((x == y) ? 0 : 1);

// 抛出TypeError：找到多个适用的重载
javaObject.sort(array, compare);
// 显式选择sort(List, Comparator)
javaObject['sort(java.util.List,java.util.Comparator)'](array, compare);

// 将调用consumeArray(List)
javaObject.consumeArray(array);
// 显式选择consumeArray(Object[])
javaObject['consumeArray(java.lang.Object[])'](array);
```

注意，目前没有办法显式选择构造函数重载。
GraalJS的未来版本可能会取消此限制。

### 包访问

GraalJS提供了一个`Packages`全局属性：
```shell
> Packages.java.io.File
JavaClass[java.io.File]
```

### 数组访问

GraalJS支持从JavaScript代码创建Java数组。
支持Rhino和Nashorn建议的两种模式：
```js
// Rhino模式
var JArray = Java.type('java.lang.reflect.Array');
var JString = Java.type('java.lang.String');
var sarr = JArray.newInstance(JString, 5);
```
```js
// Nashorn模式
var IntArray = Java.type("int[]");
var iarr = new IntArray(5);
```

创建的数组是Java类型，但可以在JavaScript代码中使用：
```js
iarr[0] = iarr[iarr.length] * 2;
```

### Map访问

在GraalJS中，你可以创建和访问Java Map，例如`java.util.HashMap`：
```js
var HashMap = Java.type('java.util.HashMap');
var map = new HashMap();
map.put(1, "a");
map.get(1);
```

GraalJS支持类似于Nashorn的方式迭代这些map：
```js
for (var key in map) {
    print(key);
    print(map.get(key));
}
```

### List访问

在GraalJS中，你可以创建和访问Java List，例如`java.util.ArrayList`：
```js
var ArrayList = Java.type('java.util.ArrayList');
var list = new ArrayList();
list.add(42);
list.add("23");
list.add({});

for (var idx in list) {
    print(idx);
    print(list.get(idx));
}
```

### 字符串访问

GraalJS可以与Java字符串互操作。
字符串的长度可以通过`length`属性查询（请注意，`length`是一个值属性，不能像函数一样调用）：
```js
var javaString = new (Java.type('java.lang.String'))("Java");
javaString.length === 4;
```

请注意，GraalJS在内部使用Java字符串来表示JavaScript字符串，因此上述代码与JavaScript字符串字面量`"Java"`实际上是不可区分的。

### 迭代属性

Java类和Java对象的属性（字段和方法）可以通过JavaScript的`for..in`循环进行迭代：
```java
var m = Java.type('java.lang.Math')
for (var i in m) { print(i); }
> E
> PI
> abs
> sin
> ...
```

## JavaImporter

`JavaImporter`功能仅在Nashorn兼容模式下可用（通过`js.nashorn-compat`选项）。

## Java类和Java对象的控制台输出

GraalJS提供了`print`和`console.log`。

GraalJS提供了与Nashorn兼容的内置`print`函数。

`console.log`由Node.js直接提供。
它不会特别处理互操作对象。
请注意，GraalJS中的`console.log`默认实现仅是`print`的别名，而Node的实现仅在Node.js环境下可用。

## 异常

在Java代码中抛出的异常可以在JavaScript代码中捕获。
它们作为Java对象表示：
```js
try {
    Java.type('java.lang.Class')
    .forName("nonexistent");
} catch (e) {
    print(e.getMessage());
}
```

## Promises

GraalJS支持JavaScript`Promise`对象与Java的互操作性。
Java对象可以作为_thenable_对象暴露给JavaScript代码，允许JavaScript代码`await`Java对象。
此外，JavaScript的`Promise`对象是常规的JavaScript对象，可以通过本文件中描述的机制从Java访问。
这使得Java代码能够在JavaScript Promise被解析或拒绝时从JavaScript回调。

### 使用`await`与Java对象

JavaScript应用程序可以使用`await`表达式与Java对象交互。
当Java和JavaScript必须与异步事件交互时，这非常有用。
要将Java对象暴露给GraalJS作为_thenable_对象，Java对象应实现一个名为`then()`的方法，其签名如下：
```java
void then(Value onResolve, Value onReject);
```

当`await`与实现`then()`的Java对象一起使用时，GraalJS将把该对象视为JavaScript `Promise`。
`onResolve`和`onReject`参数是可执行的`Value`对象，应由Java代码使用来恢复或中止与相应Java对象关联的JavaScript `await`表达式。
更多详细示例用法可以在GraalJS [单元测试](https://github.com/graalvm/graaljs/blob/master/graal-js/src/com.oracle.truffle.js.test/src/com/oracle/truffle/js/test/interop/AsyncInteropTest.java)中找到。

## 扩展Java类

GraalJS支持使用`Java.extend`函数扩展Java类和接口。

### Java.extend

`Java.extend(types...)`返回一个生成的适配器Java类对象，该对象扩展了指定的Java类和/或接口。
例如：
```js
var Ext = Java.extend(Java.type("some.AbstractClass"),
                      Java.type("some.Interface1"),
                      Java.type("some.Interface2"));
var impl = new Ext({
  superclassMethod: function() {/*...*/},
  interface1Method: function() {/*...*/},
  interface2Method: function() {/*...*/},
  toString() {return "MyClass";}
});
impl.superclassMethod();
```

可以通过`Java.super(adapterInstance)`调用父类方法。
这是一个综合示例：
```js
var sw = new (Java.type("java.io.StringWriter"));
var FilterWriterAdapter = Java.extend(Java.type("java.io.FilterWriter"));
var fw = new FilterWriterAdapter(sw, {
    write: function(s, off, len) {
        s = s.toUpperCase();
        if (off === undefined) {
            fw_super.write(s, 0, s.length)
        } else {
            fw_super.write(s, off, len)
        }
    }
});
var fw_super = Java.super(fw);
fw.write("abcdefg");
fw.write("h".charAt(0));
fw.write("**ijk**", 2, 3);
fw.write("***lmno**", 3, 4);
print(sw); // ABCDEFGHIJKLMNO
```

请注意，在`nashorn-compat`模式下，你还可以使用接口或抽象类的类型对象上的新操作符来扩展接口和抽象类：
```js
// --experimental-options --js.nashorn-compat
var JFunction = Java.type('java.util.function.Function');
var sqFn = new JFunction({
   apply: function(x) { return x * x; }
});
sqFn.apply(6); // 36
```
