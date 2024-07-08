---
title: 配置
slug: /database/configure
sidebar_position: 2
---

# 配置

1. 请一定记得关闭远程数据库访问;

2. 如果一定要开启远程数据库请设置复杂密码;

3. 必须要先创建数据库插件才有权限创建表(这不废话吗不然插件配置文件里填什么);

:::info

语句示例:

```sql
CREATE DATABASE <数据库名称> CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

解释: `CHARACTER SET utf8mb4` 将数据库字符集设置为 utf8mb4， 能够存储包括表情符号在内的所有 Unicode 字符。 `utf8mb4_general_ci` 是一种不区分大小写（case-insensitive）的排序规则，如果你想区分大小写，可以改为 `utf8mb4_bin`，`_bin` 意为以二进制方式比较字符。

:::

4. 数据库参数记得调整(TODO)

# 小皮数据库

<details>
  <summary>配置数据库</summary>

安装好后在首页启动 MySQL

![](_images/9.png)

更改 root 账户的密码

:::danger

不要设置过于简单的密码！

尤其是你打算把数据库开到公网，**绝对不要**设置过于简单的密码！

**这真的很严重**

:::

![](_images/10.png)

![](_images/11.png)

然后你就可以建数据库了，建好之后把你填这里的信息填到插件的配置文件里

</details>

# 宝塔面板

<details>
  <summary>配置数据库</summary>

TODO

</details>
