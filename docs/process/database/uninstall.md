---
title: 卸载
slug: /database/uninstall
sidebar_position: 5
---

## 数据库卸载

当你乱捣鼓一通，然后给你数据库整炸了，还不会修，那除了花钱请大佬最好的办法就是删掉重新安装

### 宝塔面板

TODO

https://www.bt.cn/bbs/thread-9043-1-1.html

https://www.bt.cn/new/btcode.html

### 小皮数据库

### Windows 平台：

首先，通过 PHPStudy 的控制面板，找到 Mysql 服务，并点击“暂停”按钮

之后，找到 PHPStudy 的安装目录，找到 Mysql 的安装文件夹

注：通常命名为：MySQL 或者mysqlXX（XX为版本号）

然后直接删除这个文件夹

接下来，我们需要清理配置（清理方式可选择手动注释或者删除）文件（位于安装目录的 conf 文件夹下，数据库的配置文件名称为 mysql.conf ）

最后，我们重新启动 PHPStudy 

### Linux平台：

首先，点击左侧面板的数据库，进入数据库列表管理页面

之后，选择需要的数据库，并点击删除

最后，在弹出的提示框中点击确定，即可删除数据库

### 暴力删除

也许我们会遇到：用温和的方式弄不干净数据库的尸体，这尸体又影响我重新安装数据库了

那就暴力的删干净吧

TODO
