---
sidebar_position: 9
title: 代码高亮示例
---

# 代码高亮示例

NitWikit支持多种编程语言的代码高亮，让您的文档更加专业和美观。

## 基本使用

只需要在代码块开始处指定语言名称，就能自动高亮该语言的代码。

````md
```javascript
const hello = 'world';
console.log(hello);
```
````

效果如下:

```javascript
const hello = 'world';
console.log(hello);
```

## 行高亮

使用特殊注释可以高亮代码中的特定行：

````md
```javascript
// 普通代码行
const sum = (a, b) => {
  // highlight-next-line
  return a + b; // 这行会被高亮显示
};

// highlight-start
// 多行高亮示例
function multiply(a, b) {
  return a * b;
}
// highlight-end
```
````

效果如下:

```javascript
// 普通代码行
const sum = (a, b) => {
  // highlight-next-line
  return a + b; // 这行会被高亮显示
};

// highlight-start
// 多行高亮示例
function multiply(a, b) {
  return a * b;
}
// highlight-end
```

## 错误行标记

有时候您可能想展示错误代码，可以使用错误行标记:

````md
```javascript
// 正确的代码
let array = [1, 2, 3];
array.forEach(item => console.log(item));

// error-next-line
console.log(item); // 这行是错误的，因为item在这个作用域不可用

// error-start
// 多行错误示例
function brokenFunction() {
  return x + y; // x和y都未定义
}
// error-end
```
````

效果如下:

```javascript
// 正确的代码
let array = [1, 2, 3];
array.forEach(item => console.log(item));

// error-next-line
console.log(item); // 这行是错误的，因为item在这个作用域不可用

// error-start
// 多行错误示例
function brokenFunction() {
  return x + y; // x和y都未定义
}
// error-end
```

## 支持的语言

NitWikit支持多种编程语言的语法高亮，包括但不限于：

- JavaScript/TypeScript/JSX/TSX
- HTML/XML/Markdown
- CSS/SCSS/SASS/LESS
- Python/Ruby/PHP/Go/Rust
- Java/Kotlin/Scala
- C/C++/C#/Dart
- SQL/JSON/YAML/TOML
- Shell脚本/Bash
- Docker/Nginx/Apache
- 更多语言请查看[Prism.js支持的语言列表](https://prismjs.com/#supported-languages)

## 使用示例

### Python

```python
def fibonacci(n):
    """返回斐波那契数列的第n个数"""
    # highlight-start
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    # highlight-end
    return fibonacci(n-1) + fibonacci(n-2)

# 测试函数
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")
```

### Java

```java
public class HelloWorld {
    // highlight-next-line
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        int sum = 0;
        // error-start
        for (int i = 0; i < 10; i--) { // 无限循环错误
            sum += i;
        }
        // error-end
    }
}
```

### 命令行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
``` 