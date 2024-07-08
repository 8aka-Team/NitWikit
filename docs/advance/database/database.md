---
title: 数据库相关
slug: /docs/database/database
sidebar_position: 1
---

# 数据库相关

:::info

数据库好处都有啥? 谁说对了就给他!

1. 数据库的备份维护等所占用的时间远比将整个服务器停止后打包压缩备份快得多;

2. 同样的数据量， MySQL比yml/txt/sqlite等占用也小得多.特别是对于数据量大的插件(30Gb的dynmap文件使用MySQL后整个数据库将压缩到15Gb);

3. 读取速度快， 某些插件使用yml储存数据时启动一个插件甚至需要10s+， 换用mysql后服务器启动速度快;

4. Redis/MySQL 等数据库配合可轻松完成玩家数据同步等;

5. 在数据量较大时候相较sqlite有更好的性能， 查询时需要的时间短， 特别是某些经济插件付款时避免顿卡.

:::

# MySQL / MariaDB

MariaDB是著名的MySQL分叉，只是服务器腐竹的话，你只需要知道这两个东西差不多就好了

:::info

当 MariaDB Server 的前身 MySQL 于 2009 年被 Oracle 收购时，MySQL 创始人 Michael “Monty” Widenius 出于对 Oracle 管理权的担忧而分叉了该项目，并将新项目命名为 MariaDB。

> 来自 https://mariadb.org/zh/

:::

## Redis

TODO
