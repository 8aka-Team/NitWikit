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

上面的例子链接是 GitHub 的，而国内的网络环境有时连不上 GitHub

:::

## 使用 ItemsAdder

https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting

## 使用 Oraxen

看配置文件

# 托管

以下均为ia文档中所说的 第三方平台托管（external-host）

## GitHub

https://github.com

国内的网络环境不建议用这个

> 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入ia的 第三方平台托管（external-host） 或使用 server.properties

> 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建新仓库：https://docs.github.com/zh/repositories/creating-and-managing-repositories/creating-a-new-repository

创建发行版：https://docs.github.com/zh/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui

## Gitee

https://gitee.com

国内的代码托管平台，访问速度快，推荐使用

> 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入ia的 第三方平台托管（external-host） 或使用 server.properties

> 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建发行版：https://help.gitee.com/repository/release/create#%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E5%8F%91%E8%A1%8C%E7%89%88

## GitLab

https://gitlab.com

国内访问比较稳定的代码托管平台

> 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入ia的 第三方平台托管（external-host） 或使用 server.properties

> 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建仓库：https://www.bookstack.cn/read/gitlab-doc-zh/docs-150.md#2rp8yq

创建发行版：https://www.bookstack.cn/read/gitlab-doc-zh/docs-149.md#chaa1u

## 直链网盘

ia的文档教了如何使用 [Google Drive](https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/google-drive-1.17.1+) 和 [onedrive](https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/onedrive) 进行材质托管

:::tip

鉴于国内的网络环境，这两个网盘均不建议使用

:::

[搜索直链网盘](https://cn.bing.com/search?q=%E7%9B%B4%E9%93%BE%E7%BD%91%E7%9B%98)

## 自托管

使用 ItemsAdder，可以直接在服务器上托管资源包：https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/resourcepack-self-hosting

或者自己搭建个直链下载站来用

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