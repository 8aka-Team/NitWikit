---
title: 备份
sidebar_position: 5
---

## 备份

你也不想你和你的玩家辛苦开发的世界由于一次断电，一次崩溃而毁于一旦吧? 这些情况很少发生但无法避免，经常做备份是有必要的!

### 备份插件

推荐两个备份插件(高效的备份，无需停服即可备份)：

[ebackup](https://www.spigotmc.org/resources/ebackup-simple-and-reliable-backups-for-your-server-supports-ftp-sftp.69917/)
可设置黑名单不备份某些文件，FTP远程备份支持

[serverbackup](https://www.spigotmc.org/resources/server-backup-ingame-dropbox-ftp-backup-1-8-1-20-multithreaded.79320/)
可支持动态备份(即只备份最近变更过的文件)，占用空间更小

:::warning

虽然使用插件备份既方便又快速，但是插件备份得到的文件有可能是损坏的。

在空间和时间都充足的情况下，推荐直接关服进行备份，并定期检测备份的文件是否存在损坏。

:::

InventoryRollbackPlus 插件可以备份玩家的背包。

:::info

`SpigotMC` ：https://www.spigotmc.org/resources/.85811

`GitHub` ：https://github.com/TechnicallyCoded/Inventory-Rollback-Plus

:::

### 自动备份软件

#### [MCServerBackup](https://github.com/OblivionOcean/MCServerBackup)

MCServerBackup 是由 [玄云海 OblivionOcean](https://github.com/OblivionOcean) 自主研发的一款 Minecraft Java 服务器自动备份软件，主要用于区块备份 (但也可以用于服务器整体备份)。

即将推出一个带有简易 GUI 的版本，更加方便使用，目前使用仍略有难度。

支持将一段时间内所有变动的文件(区块、玩家信息等)全部打包为 `zip` 或 `tar.gz` 格式的压缩包或文件夹。

```python title="使用方法"
python main.py [相对/绝对目录] [时长] [类型]
```

优势：群友 @Lafcadia 写的，可以问群友咋用。

[BorgBackup](https://www.borgbackup.org/)

[rsnapshot](https://rsnapshot.org/)

### 手动备份

Windows 系统在服务器根目录右键点击压缩即可(如果时间比较急推荐zip，如果空间比较紧推荐7zip)。

Linux 使用指令 ```tar -czvf backup_date.tar.gz /[path]/``` (如果使用7zip请自行查看7zip指令)。

面板 - 大多数面板都可以像 Windows 一键压缩。

### 手动精简备份(不推荐)

假如你的存储空间告急，**在你安装好防护软件(如火绒)，确保服务器本体不会被一锅端后**，你可以试试只备份以下内容:

#### 备份世界

这一点相比不用多说，肯定是很十分重要的，记得备份根目录下你创建过的和服务器生成的世界。

#### 备份插件数据文件

插件数据文件、数据库文件等(常见名称有 data.yml ，database.db，data 文件夹等)。

这些需要自己寻找，这也是不推荐的原因，你可以等服务器稳定后找到全部类似的文件并记录下来。

:::danger

如果安装了粘液科技，不管有没有设置 MySQL 存储(设置了也会在 data-storage 文件夹存储部分数据)，一定不要忘记备份根目录下的 data-storage 文件夹！

:::

#### (可选)日志文件

服务器根目录下的 logs 文件夹。

### 删除世界

要想删除世界，只需简单的将 `world` 文件夹删除即可，或删除对应维度文件夹。

但是值得注意的是，大多数插件数据并不会随着世界的移除而移除，

如 NPC 插件可能仍然会尝试在相同名字的世界中尝试生成 NPC，即使他们已经不在原来的位置上。

一些服务端可能将维度拆分成单个文件夹存放至根目录，你需要全部删除才能重置所有维度。
