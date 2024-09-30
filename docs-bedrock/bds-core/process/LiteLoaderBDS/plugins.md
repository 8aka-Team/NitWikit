---
title: 插件安装教程
sidebar_position: 2
---

# 插件安装教程

## 插件的分类

LiteLoaderBDS 的插件共有以下几类：

1. 原生插件(native)：俗称 dll 插件。通常是一个 .dll 后缀的文件。
2. QuickJS 插件(qjs)：俗称单文件 js 插件。通常是一个 .js 后缀的文件。
3. Lua 插件：通常是一个 .lua 后缀的文件。
4. NodeJS 插件：通常是一个文件夹或是一个 .llplugin 后缀的文件。
5. Python 插件：通常是一个文件夹或是一个 .py 后缀的文件。
6. LL.NET 插件：通常是一个 .dll 后缀的文件。虽然和原生插件后缀相同，但是这种插件必须安装了 LL.NET 插件的依赖才能正常加载和运行。

## 安装原生、QuickJS、Lua、Python 单文件插件

将插件的所有文件放入 `plugins` 文件夹，然后服务器将在下次启动时加载该插件。

## 安装 NodeJS 插件

将插件的所有文件放入 `plugins` 文件夹中的 `nodejs` 文件夹，然后服务器将在下次启动时加载该插件。

## 安装 Python 多文件插件

将插件的所有文件放入 `plugins` 文件夹中的 `python` 文件夹，然后服务器将在下次启动时加载该插件。

## 安装 LL.NET 插件

TODO
