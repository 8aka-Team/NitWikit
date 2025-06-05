---
title: ServiceIO
sidebar_position: 2
---

# ServiceIO

[![](https://img.shields.io/github/v/release/TheNextLvl-net/service-io)](https://github.com/TheNextLvl-net/service-io/releases)
[![](https://img.shields.io/github/languages/code-size/TheNextLvl-net/service-io)](https://github.com/TheNextLvl-net/service-io)
[![](https://img.shields.io/github/license/TheNextLvl-net/service-io)](https://github.com/TheNextLvl-net/service-io/blob/main/LICENSE)

一个现代的 Vault 替代品，旨在提供增强功能、更好性能和插件间无缝集成

:::tip

ServiceIO 仅支持 Paper 的最新版本（1.21+）

ServiceIO旨在作为 Vault 的全面替代，可以直接删除 Vault 插件，所有依赖 Vault 的现有插件将继续无缝与 ServiceIO 协同工作。

:::

## 为何选择ServiceIO？

ServiceIO是 VaultAPI 过时限制的前沿解决方案。尽管 Vault 仍然可用，但它依赖于已弃用和支持的代码，迫使开发者处理不安全的 null 接口，可能导致不稳定性与错误。

ServiceIO 通过提供强大的 null 标注、全面的文档和维护良好的源码解决了这些问题。此外，它支持异步数据加载和缓存结果，提升性能和扩展性。

ServiceIO 的一个关键特性是与现有 Vault 接口的无缝集成，允许插件同时使用两个 API，无需额外修改代码。这确保了平稳过渡，同时利用现代、可靠的平台优势。

此外，ServiceIO 支持不同插件间的数据转换，包括 banks, permissions, chat 和 groups。

这消除了开发者编写自定义转换逻辑的需要，节省时间和精力。对于服务器所有者而言，这意味着更换插件比以往任何时候都更为顺畅，确保操作平稳且灵活，而无需手动迁移数据的烦恼。

## 命令

- /service convert banks：转换所有 banks 和 bank accounts
- /service convert chat：转换所有聊天数据（前缀、后缀、昵称等）
- /service convert economy：转换所有经济数据（账户和余额）
- /service convert groups：转换所有群组数据（群组、前缀、后缀、权限、成员）
- /service convert permissions：转换所有权限数据（用户、权限）

## 信息

- /service info bank: 查看已安装的 bank 提供插件
- /service info chat: 查看已安装的 chat 提供插件
- /service info economy: 查看已安装的经济提供插件
- /service info groups: 查看已安装的群组提供插件
- /service info permissions: 查看已安装的权提供插件

## 权限

- /service convert：需要 service.convert
- /service info：需要 service.info
- service.admin 权限允许访问所有 ServiceIO 命令
- 且 vault.admin 等同于 service.admin

## 链接

:::info

`Hangar` https://hangar.papermc.io/TheNextLvl/ServiceIO

`MineBBS` https://www.minebbs.com/resources/.10012

`GitHub` https://github.com/TheNextLvl-net/service-io

:::

## 联系

[![](https://img.shields.io/discord/1293606111177609277?logo=discord&label=Discord)](https://thenextlvl.net/discord)
\<- 点击加入 作者的 Discord

## Bstats

[![](https://bstats.org/signatures/bukkit/TheNextLvl%20ServiceIO.svg)](https://bstats.org/plugin/bukkit/TheNextLvl%20ServiceIO/23083)
