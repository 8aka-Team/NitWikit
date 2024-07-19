---
title: 资源包分发
sidebar_position: 10
---

# 资源包分发

你可能希望玩家入服自动下载某个材质包

**注意**

JAVA 版的资源包分发与基岩版不同，它是云分发的，提供给客户端的应该是一个**直链**,而不是资源包本身

不管你用什么方式，都必须是直链才可正常使用！

**什么是直链？**

> 直接从服务器下载数据

不需要登陆账号，不需要点击链接打开网页才下载

# 分发

## server.properties

mc服务端自己就有这个材质包分发功能

**例子**

我们拿到slimefun的资源包直链地址是: https://github.com/xMikux/Slimefun-Resourcepack/releases/download/latest-build/Slimefun-ResourcePack.zip ,然后我们打开`server.properties`,找到以下内容

```
resource-pack=
```

把我们刚才拿到的资源包直链放进去，现在看起来应该是这样

```
resource-pack=https://github.com/xMikux/Slimefun-Resourcepack/releases/download/latest-build/Slimefun-ResourcePack.zip
```

然后我们再找到下面

```
require-resource-pack=false
```

这个值代表是否需要强制资源包，开启后，如果玩家拒绝应用这个资源包，就不让玩家进入服务器

调好后，你只需要重启服务器就可以享受到资源包了

:::note

你**完全照做**然后下载不到材质包也很正常，因为上面的链接是 GitHub 的，而国内的网络环境有时连不上 GitHub 很正常

:::

# 下面这些都还没做

## 使用 ItemsAdder

## 使用 Oraxen

# 托管

## GitHub

## Gitee

## Gitlab

## 直链网盘

## 自托管

# FAQ

## 我想让客户端不要下载重复的资源包可以吗？

当然可以，找到以下配置

```
resource-pack-sha1=
```

填入资源包的sha1就行,如果您不知道怎么生成，你可以前往 [在线网站](https://www.strerr.com/cn/sha1_file.html),把你文件上传然后复制生成的哈希值到这里就可以

我们以 Slimefun 为例子

```
resource-pack-sha1=633183ce43a0282328153e63ba6ab8788a0417164b2146db8da1b5c40c8cf411
```

最后整出来应该是这样子的