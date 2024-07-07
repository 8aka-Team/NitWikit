---
title: 权限组
sidebar_position: 3
---

# 权限组

与其单独为每个玩家设置权限，我们可以将权限捆绑为一组，然后直接将一大堆权限一起给予玩家。

比如我想让狗蛋拥有	`essentials.fly` 的权限，我可以直接新建一个权限组并添加权限，然后将狗蛋设置到此权限组。

首先让我们创建一个叫做 `NBplus` 的权限组。

运行 `/luckperms creategroup NBplus` 命令，这会创建一个名叫 `NBplus` 的空权限组。

接下来，运行 `/luckperms group NBplus permission set essentials.fly true`，将 fly 的权限添加到权限组里。

然后我们要把狗蛋加到这个权限组，运行 `/luckperms user GouDan parent add NBplus`。

成功了，狗蛋现在能上天了！



***默认权限组的权限有好多啊！我懒得重新加权限到新的权限组了，每次有更改还要一起改一大堆！怎么办？***

我们可以用到**继承**。

运行 `/luckperms group NBplus parent add default`，这样就能让 NBplus 权限组继承所有默认权限组中的权限。

更多请查看：[Luckperms 中文教程](https://izzelaliz.gitbooks.io/luckperms-wiki/content/Usage.html)
