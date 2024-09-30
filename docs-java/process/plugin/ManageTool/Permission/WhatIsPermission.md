---
title: 什么是权限
sidebar_position: 2
---

# 什么是权限

举个栗子，你想要执行 Essentials 插件的tpa命令，那么你需要 `essentials.tpa` 这个权限。

:::note

大佬们，想要这个起作用当然需要装 Essentials 插件了...

:::

![](_images/ummm.jpg)

## 权限节点

形如 xxx.xxx 或者 xxx.xxx.xxx 。

比如上面提到的 essentials.tpa ，我们称为权限节点。

(当然你别认为所有 xxx.xxx 都是权限节点)。

权限节点一般第一项是插件名。


## 权限的状态

权限有三种状态：

| 状态 | 描述 |
| --- | --- |
|true | 允许 |
|false | 禁止 |
|undefined | 未设置 |

**true 和 false 好理解，那 undefined 是什么？**

undefined 表示权限未在 LuckPerms 中明确设置。

这通常意味着它的默认值是 false 。

在极少数情况下，插件会将未定义的权限默认为 true，在这种情况下，你需要将其明确设置为 false 。

### op 是不是拥有所有权限？？

当然了！不过你可以给这名 op 玩家明确设置某权限是 false 。

不过不建议直接给管理人员 op ，分职其责给特定的权限就好。

