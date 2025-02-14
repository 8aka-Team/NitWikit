---
title: 数学运算
sidebar_position: 5
---

# 数学运算

## Math

详细请查看：https://www.yuque.com/sacredcraft/kether/action-math

```kether
/* 加法运算：等价于 1+2+3 = 6 */
math add [ 1 2 3 ]
math + [ 1 2 3 ]


/* 减法运算：等价于 9-5-1 = 3 */
math sub [ 9 5 1 ]
math - [ 9 5 1 ]


/* 乘法运算：等价于 3x2x5 = 30 */
math mul [ 3 2 5 ]
math * [ 3 2 5 ]


/* 除法运算：等价于 6÷2 = 3 */
math div [ 6 2 ]
math / [ 6 2 ]
```

除了上面几种用法，Math 还有一种比较舒服的写法：

```text
​/* 计算 1 + 3 x 6 ÷ 3 - 2 */
math 1 + 3 * 5 / 6 - 2
```

当然也可以用上一节学到的变量来运算

```text
/vul eval set a to 1 set b to 2 math &a - &b
```

![](_images/math_1.png)

## calc

详细请查看：https://github.com/TabooLib/taboolib/blob/master/module/module-kether/src/main/kotlin/taboolib/module/kether/action/transform/ActionJexl3.kt

- 加法：a + b
- 减法：a - b
- 乘法：a * b
- 除法：a / b

- 取余：取余操作使用 % 符号。例如，计算 10 除以 3 的余数：10 % 3。

当然也可以使用括号：

![](_images/括号.png)
