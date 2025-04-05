---
title: 储存空间优化
sidebar_position: 4
---

# 储存空间优化

## 插件数据优化

对于 `/plugins` 文件夹储存是否需要进行优化这个问题，有个很简单的判断方法就是查看总占用，

如果超过了 200 MB ，那么很有可能有些插件使用了 Sqlite / yml / zip 等方式储存了一些东西，

在服务器有一定人数的情况下这并不是推荐的储存方式，在某些情况下可能对储存空间会有一定的占用。

### 使用数据库

合理使用数据库可以降低服务器硬盘占用。详见[数据库相关](/docs-java/process/database.md)

## 备份空间优化

### 使用备份插件替代整端备份

推荐两个备份插件(高效的备份，无需停服即可备份)：

[ebackup](https://www.spigotmc.org/resources/ebackup-simple-and-reliable-backups-for-your-server-supports-ftp-sftp.69917/)
可设置黑名单不备份某些文件，FTP 远程备份支持

[serverbackup](https://www.spigotmc.org/resources/server-backup-ingame-dropbox-ftp-backup-1-8-1-20-multithreaded.79320/)
可支持增量备份(即只备份最近变更过的文件)，占用空间更小

## 存档存储空间优化

Minecraft 默认的区块格式是 ANVIL ，但是这个区块格式有很多弊端，比如存了一些无用信息，使用了强制对齐等，

且至今还使用着古老的 zlib 压缩格式，所以如果硬盘吃紧时候，可以尝试对其进行调整。

注意，这是很底层的东西，其实不推荐在非必要情况下进行处理

### 删除过时区块

[Regionerator](https://github.com/Jikoo/Regionerator) 会自动删除未使用的区块,但请注意,该插件是自动的,并且不可撤销

不支持 Linear

### 更高效的储存方式

#### Linear

:::danger

Linear不适合玩家基数非常大/服务器经常滞后/ CPU 核心数目小/服务器硬盘空间足够大的服务器。

换句话来说，只有玩家并不多但需要较大的地图且 VPS 默认给的硬盘较小时才应该考虑此格式。

Leaf/Luminol 等核心最新版已应用修复补丁,虽然性能会受到影响,但不会出现回档情况(自己作死断电那当然没办法)

:::

此格式是由著名的 Xymb 大佬开发，相比于 ANVIL ，可以节省巨大的空间

主世界可以节省大约 50% 的空间，末地大约为 90% ，且使用现代的 zstd & lz4 压缩，可以获得更快的加载和保存速度。

##### 转换区域格式

使用之前你需要将 ANVIL 转换成 Linear 区域格式，如果你使用的是 Leaves ，你可以在服务端内部自动转换。

[转换工具](https://github.com/xymb-endcrystalme/LinearRegionFileFormatTools) ，转换非常简单你只需要看着教程做就行(
记得做备份)

##### 开启区域格式

目前，支持线性区域格式的仅有 LinearPurpur ， LinearPaper ， Leaves ， Leaf ， Kaiiju (还有一堆Fork)，

开启教程不多说，你只需要查看 Wiki 就行。

##### 不兼容的插件

目前已知不兼容线性区域的格式的插件极少无比: ServerBackup 一款备份插件，会由于找不到mca文件报错。
，大部分在线网页地图浏览程序，以及Residence部分不兼容(
感谢z大神的优雅代码，当传送到一个未加载区块的领地时会崩溃),Regionerator 不兼容

##### 测试结果

感谢 HaHaWTH 提供的测试结果，测试内容为使用 Chunky 加载半径 1000 格的方块并保存，测试核心为 Leaf ，实际结果可能与测试结果有出入。

| 世界   | ANVIL(原版格式) | Linear(压缩比为一) | Linear(压缩比为六，默认压缩比) | Linear(压缩比为22)(最大压缩比) |
|------|-------------|---------------|---------------------|-----------------------|
| 主世界  | 192MB       | 142MB         | 117MB               | 92MB                  |
| 地狱   | 118MB       | 70MB          | 60MB                | 46MB                  |
| 末地   | 87MB        | 1.72MB        | 1.2MB               | 914KB                 |
| 保存用时 | 3m18s       | 3m50s         | 4m44s               | 23m21s                |
| 内存占用 | 3GB左右       | 3.1GB         | 3.3GB               | 3.4 ~ 18GB(极不稳定)      |

:::note

不推荐压缩比开到最大，推荐值为 6

:::

#### Slime

请查看[Slime 区域格式](/docs-java/advance/slime-world.md)

## 其他

1。使用软链接 / 快捷方式共享多个服务器的 lib ，Minecraft 本体等(除非空间非常少否则不要这样，后果自负)；

2。使用清理软件；

3。重装系统，并最小化安装(不安装非必要软件)；

4。检查是否有多余的 Java(一般来说开服一个版本的 Java 即可)。

:::warning

除非你知道你在删什么否则请先请教大佬能不能删除或者先备份，不要删了才发现服务器出问题。

:::
