---
title: 插件特征文件 (plugin.yml)
sidebar_position: 3
---

# plugin.yml

用解压缩软件打开插件的jar文件就可以看到 `plugin.yml`：

![](_images/plugin.yml/拆开jar.png)

用文本编辑器可以打开它：

![](_images/plugin.yml/plugin.yml.png)

其实只有 `name` 和 `main` 是必填的，其他可写可不写。

比如一个插件有提供命令，但它不在 `plugin.yml` 中写 `commands` 也是很常见的。

## 常见的键

:::tip

其实这里面写什么都可以，但多数就那么几样...

:::

下面是常见的一些键值：

## `name`

插件的名字，也是会在插件列表（`/pl`）和日志中输出的信息中显示的插件名。

## `version`

插件版本，显示在 `/version 插件名` 中。

## `main`

插件主类，加载插件时运行的类的名称，类似正常程序中的 main 函数，服主不用管。

## `description`

简短描述插件的作用，会在 `/pl` 命令中鼠标悬浮在插件名称上时显示。

## `authors`

插件作者，显示在 `/version 插件名` 中。

## `contributors`

贡献者，指非作者但为插件贡献了代码的人。

## `website`

插件相关的网站，显示在 `/version 插件名` 中。

## `api-version`

插件编译时使用的 API 版本，影响着 BukkitAPI 对插件提供的兼容性。

## `load`

这告诉服务器何时加载插件。它可以是 `STARTUP` 或 `POSTWORLD` 。 如果未指定，将默认为 `POSTWORLD`。

## `prefix`

在服务器日志中显示的前缀，有别于插件名称。

## `libraries`

插件的依赖库表，不过这并不是前置插件的意思，而是插件开发时用到的依赖。

## `permissions`

插件权限相关。

## `default-permission`

默认权限。

## `commands`

插件提供的命令。

## Dependencies

[依赖关系](https://docs.papermc.io/paper/dev/plugin-yml#dependencies)。

### `depend`

硬依赖，必须安装。

### `softdepend`

软依赖，即不必须装的依赖。

### `loadbefore`

在此列表中的插件加载前加载本插件。

### `probides`

告诉服务器本插件会提供哪些库或功能。

## `folia-supported`

当此项为 `true` 时，Folia 端才会尝试加载此插件。

如果插件的 `plugin.yml` 里没有此项，你可以试着手动添加。

```
folia-supported: true
```

:::danger

Folia 端对 Bukkit API 的修改是破坏性的，你手动添加而不是插件开发者去兼容，通常加载了也是不可用的。

这就是为什么要开启此项 Folia 端才会加载该插件。

:::

# 参考

- https://docs.papermc.io/paper/dev/plugin-yml
