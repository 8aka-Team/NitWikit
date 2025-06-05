---
title: 白名单
sidebar_position: 7
---

# 白名单

白名单是一种服务器管理工具，只允许在白名单上的玩家进入服务器

:::warning

白名单最好与正版验证或其他第三方验证一起使用，不然很容易被绕过

:::

## 开启

你需要先在服务端配置文件中打开白名单功能才能使用

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="open">
<TabItem value="java" label="Java 服务器">

包括所有 Java 服务端

在`server.properties`中打开`white-list`

```properties
white-list=true
```

</TabItem>
<TabItem value="bedrock" label="BDS 服务器">

包括 LeviLamina 和 EndStone 服务器

在`server.properties`中打开`allow-list`

```properties
allow-list=true
```

</TabItem>
<TabItem value="nukkit" label="NukkitX 服务器">

包括 NukkitX，PowerNukkitX，NukkitX-MOT，PM1E

在`server.properties`中打开`allow-list`

```properties
allow-list=on
```

</TabItem>
</Tabs>

## 添加/删除玩家

<Tabs queryString="command">
<TabItem value="java" label="Java 服务器">

* `/whitelist add`  将玩家名添加到白名单。该玩家不需要在线。
* `/whitelist list` — 列出白名单中的玩家名。
* `/whitelist off` — 在此服务器上禁用白名单验证。
* `/whitelist on` — 在此服务器上启用白名单验证。
* `/whitelist reload` —
  从硬盘中重新读取`white-list.txt`（1.7.5及以前）或`whitelist.json`（1.7.6及以后）中的白名单列表（当`white-list.txt`或w
  `whitelist.json`在Minecraft外被修改时使用）。
* `/whitelist remove` — 将玩家名从白名单中移除。该玩家不需要在线。

</TabItem>
<TabItem value="bedrock" label="基岩版服务器">

* `/allowlist add`  将玩家名添加到白名单。该玩家不需要在线。
* `/allowlist list` — 列出白名单中的玩家名。
* `/allowlist off` — 在此服务器上禁用白名单验证。
* `/allowlist on` — 在此服务器上启用白名单验证。
* `/allowlist reload` —
  从硬盘中`allowlist.json`中的白名单列表（当`allowlist.json`在Minecraft外被修改时使用）。
* `/allowlist remove` — 将玩家名从白名单中移除。该玩家不需要在线。

</TabItem>
</Tabs>

## 扩展插件

### BistroWhitelist(Java 版)

:::info

`官网` https://wiki.mcxjg.cn/

`Gitee` https://gitee.com/myKasa/BistroWhitelist

`文档(中文)` https://wiki.mcxjg.cn/wiki/BistroWhitelist/%E7%AE%80%E4%BB%8B/

`MineBBS` https://www.minebbs.com/resources/bistrowhitelist-bistrobot-qq.9058/

:::

带有许多功能的白名单插件，支持Q群白名单，Geyser，跨服白名单等
