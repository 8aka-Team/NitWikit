---
title: 托管
sidebar_position: 2
---

# 托管

由于 MC 资源包是通过 URL 传递的，因此，你需要一个服务器去托管资源包

## 托管插件

### RoseResourcepack

RoseResourcepack 是一个强大的资源包管理插件，拥有许多很好的功能

* **集成资源包托管：直接从您的服务器托管资源包**(比 IA 那个唐诗好多了)
* 多版本支持：兼容 Minecraft 1.16.5 至 1.21.3 版本。
* MiniMessage 支持：使用 MiniMessage 自定义消息。
* 与其他插件集成：与 BetterHUD、ItemsAdder 和 Oraxen 等插件兼容。
* 资源包保护：保护您的资源包不被解包。
* 异步处理：异步构建资源包，减少延迟。
* 自动 SHA1 哈希生成：自动生成 SHA1 哈希值。
* 自动交付：玩家登录时自动交付资源包。
* 重置资源包命令：允许玩家通过命令重置其资源包。
* **多包应用：为玩家应用多个资源包（Minecraft 1.20.3+）**
* 强制安装：强制客户端安装资源包（Minecraft 1.17+）。
* 自定义消息支持：在客户端的提示屏幕上显示自定义消息。

[下载地址](https://www.spigotmc.org/resources/roseresourcepack-easy-auto-hosting-for-a-unique-pack.107483/)

[中文文档](https://plugins.8aka.org/ShortDoc/RoseResourcepack/)

### ItemsAdder

https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting

### Oraxen

看配置文件

### CraftEngine

https://ce.gtemc.cn/zh-Hans/getting_start/set_up_host

## 托管网站

以下均为 ia 文档中所说的 第三方平台托管 (external-host)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="store">
<TabItem value="setup" label="Setup.md(最推荐)">

官网：https://www.setup.md/usercontent

完全免费，最大可上传 250 MB

**优势**：

- 免费
- 速度可以
- 稳定
- 支持多种文件格式，不止 ZIP

**劣势**：

- 注册要开梯子

</TabItem>
<TabItem value="mcpack" label="MCPacks(免登录)">

官网：https://mc-packs.net/

完全免费，最大可上传 95MB

**优势**：

- 免费，无需注册
- 速度可以
- 稳定

**劣势**：

- 无法更新资源包，每次都需要更改链接

</TabItem>
<TabItem value="cf" label="Cloudflare">

官网：https://cloudflare.com

提供两种存储方式，分别是 R2 和 KV

### Cloudflare R2

免费的 Cloudflare R2 提供 10 GB 的免费空间，只不过需要**绑定银行卡或者 PayPal**(不会花钱)，非常推荐

- 使用方法：创建一个 R2 存储桶，名称自选，位置选择`亚太地区 (APAC)`(速度最快)，默认存储类一定要选择 `标准`
  ，创建好后直接上传资源包就可以了 (可以设置自定义域)

- 无域名方案：完成上一步后，打开设置，找到`R2.dev 子域 `，点击 `允许访问` 即可使用 CF 提供的免费域名

图文教程：https://juejin.cn/post/7331584783611281444

**优势**：

- 稳定：相当的稳定，没出过问题
- 速度：不同于 CF CDN 的环大陆减速，R2 亚太地区速度非常给力
- 价格：10 GB 以内免费

**劣势**：

- 需要绑定银行卡或者 PayPal

(笨蛋文档官方资源分发也是 R2)

### Cloudflare KV

CF Worker 的一个附属品，用来当可持久存储的，用来当资源包分发也是无敌了

教程：https://github.com/SharzyL/pastebin-worker

**优势**：

- 价格：1 GB 以内免费
- 不需要绑定银行卡或者 PayPal

**劣势**：

- 单个文件最大 25 MB
- 一天只能访问 10 万次

</TabItem>
<TabItem value="tebi" label="Tebi">

官网：https://tebi.io

一个非常好的对象存储，提供 50 GB 的免费空间 (当然，由于多存储点，最大只能获得 25 GB)

需要绑定信用卡才能使用 (但不校验，可以绕过)

创建时推荐选择新加坡，美西，空间需求不大可以德国，新加坡，美东和美西四个都选

**优势**：

- 免费空间多
- 速度给力
- 稳定

**劣势**：

- 需要绑定银行卡 (可以绕过)
- 有流量限制 (250 GB)

~~那不就没缺点了~~

</TabItem>
<TabItem value="github" label="GitHub">

官网：https://github.com

国内的网络环境不建议用这个

- 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入 ia 的 第三方平台托管 (
  external-host) 或使用 server.properties

- 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建新仓库：https://docs.github.com/zh/repositories/creating-and-managing-repositories/creating-a-new-repository

创建发行版：https://docs.github.com/zh/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui

**优势**：

- 价格：单个文件 2 GB

**劣势**：

- 国内基本连不上

</TabItem>
<TabItem value="gitee" label="Gitee">

官网：https://gitee.com

国内的代码托管平台，访问速度快，推荐使用

- 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入 ia 的 第三方平台托管 (
  external-host) 或使用 server.properties

- 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建发行版：https://help.gitee.com/repository/release/create#%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E5%8F%91%E8%A1%8C%E7%89%88

**优势**：

- 速度：国内访问速度相当快

**劣势**：

- 文件大小：单个限制 100 MB
- 需要绑定手机号

</TabItem>
<TabItem value="gitlab" label="GitLab">

官网：https://gitlab.com

国内访问比较稳定的代码托管平台

- 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入 ia 的 第三方平台托管 (
  external-host) 或使用 server.properties

- 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建仓库：https://www.bookstack.cn/read/gitlab-doc-zh/docs-150.md#2rp8yq

创建发行版：https://www.bookstack.cn/read/gitlab-doc-zh/docs-149.md#chaa1u

**优势**：

- 速度：国内访问比较稳定

**劣势**：

- 文件大小：单个限制 100 MB

</TabItem>
<TabItem value="drive" label="直链网盘">

ia 的文档教了如何使用
[Google Drive](https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/google-drive-1.17.1+) 和
[OneDrive](https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/onedrive)
进行材质托管

:::tip

鉴于国内的网络环境，这两个网盘均不建议使用

:::

国内较大的直链网盘有 [123pan](https://www.123pan.com)，以及一些小的直链网盘，比如 [基岩云](https://drive.wujiyan.cc/)

**优势**：

- 速度：国内访问还可以

**劣势**：

- 123pan 要钱
- 小的直链网盘容易跑路，不稳定
- 速度堪忧

</TabItem>
<TabItem value="self" label="自托管">

使用
ItemsAdder，可以直接在服务器上托管资源包：https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/resourcepack-self-hosting

或者自己搭建个直链下载站来用

**优势**：

- 速度：访问速度自己掌控

**劣势**：

- 占用自己的宽带
- IA 自托管极为脑瘫

如果不想使用 IA 脑瘫自托管，你也可以使用像 [CUFS](http://iscute.cn/chfs) 这样的外置自托管程序

</TabItem>
</Tabs>

## 分发

通常，IA,RoseResourcepack 这些插件会自动将资源包发送给玩家

当然，你也可以使用自带的`server.properties` 进行分发

### 例子

我们拿到 slimefun 的资源包直链地址是:
https://github.com/xMikux/Slimefun-Resourcepack/releases/download/latest-build/Slimefun-ResourcePack.zip ，
然后我们打开`server.properties`，找到以下内容：

```properties
resource-pack=
```

把我们刚才拿到的资源包直链放进去，现在看起来应该是这样

```properties
resource-pack=https://github.com/xMikux/Slimefun-Resourcepack/releases/download/latest-build/Slimefun-ResourcePack.zip
```

然后我们再找到下面

```properties
require-resource-pack=false
```

这个值代表是否需要强制资源包，开启后，如果玩家拒绝应用这个资源包，就不让玩家进入服务器

调好后，你只需要重启服务器就可以享受到资源包了

:::note

上面的例子链接是 GitHub 的，而国内的网络环境有时连不上 GitHub

:::
