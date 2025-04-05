---
title: 配置
sidebar_position: 3
---

## 数据库配置

### MySQL

MySQL 的配置文件在 Windows 中，是 `my.ini` ，默认在 `C:\Program Files\MySQL\MySQL Server X.X` 文件夹中

而 Linux 中，是 `my.cnf` ，默认路径为 `/etc/my.cnf`

<details>
  <summary>示例配置文件</summary>

```ini
[client]

port=3306

[mysql]

default-character-set=utf8

[mysqld]

port = 3306

#设置 MySQL 的端口

socket = /tmp/mysql.sock

#设置mysql的安装目录，别动

basedir=F:\\Hzq Soft\\MySql Server 51GA

#设置mysql数据库的数据的存放目录，如果你觉得原来存放数据库的地方不够用了可以迁到其他地方去

#但是要注意把原来的存放目录里面的东西迁移到那个地方去

datadir=F:\\Hzq Soft\\MySql Server 51GA\\data

#innodb_log_arch_dir 默认datadir

#innodb_log_group_home_dir  默认datadir

#设置mysql服务器的字符集，默认编码

default-character-set=utf8

#连接数的操作系统监听队列数量，如果经常出现“拒绝连接”错误可适当增加此值

back_log = 50

#不使用接听TCP / IP端口方法，mysqld通过命名管道连接

#skip-networking

#最大连接数量

#有时候插件会因为这个值太小而报错，建议设置大一点，比如 65536 ，甚至有时候这都不够

max_connections = 90

#打开表的线程数量限定，最大4096，除非用mysqld_safe打开限制

table_open_cache = 2048

#MySql 服务接收针对每个进程最大查询包大小

max_allowed_packet = 16M

#作用于SQL查询单笔处理使用的内存缓存，如果一笔操作的二进制数据超过了限定大小，将会在磁盘上开辟空间处理，一般设为 1-2M即可，默认1M

binlog_cache_size = 2M

#单个内存表的最大值限定

max_heap_table_size = 64M

#为每个线程分配的排序缓冲大小

sort_buffer_size = 8M

#join 连表操作的缓冲大小，根据实际业务来设置，默认8M

join_buffer_size = 32M

#操作多少个离开连接的线程的缓存

thread_cache_size = 8

#并发线程数量，默认为8，可适当增加到2倍以内。如果有多个CPU可以乘 上CPU的数量。双核CPU可以乘 上当前最核数再乘 上70%-85%

thread_concurrency = 16

#专用于具体SQL的缓存，如果提交的查询与几次中的某查询相同，并且在query缓存中存在，则直接返回缓存中的结果。

query_cache_size = 64M

#对应上一条设置，当查询的结果超过下面设置的大小时，将不会趣入到上面设置的缓存区中，避免了一个大的结果占据大量缓存。

query_cache_limit = 2M

#设置加全文检索中的最小单词长度。

#ft_min_word_len = 4

#CREATE TABLE 语句的默认表类型，如果不自己指定类型，则使用下行的类型

default-storage-engine = InnoDB

#线程堆栈大小，mysql说它自己用的堆栈大小不超过64K。这个值可适当设高一点(在RCA的项目中都是共用同一个数据库连接的)，默认192K

thread_stack = 800K

#设置事务处理的级别，默认 REPEATABLE-READ，一般用它就即可，以下二行按顺序对应，

#可读写未提交的数据，创建未提交的数据副本读写，未提交之前可读不可写，只允许串行序列招行事务。

# READ-UNCOMMITTED， READ-COMMITTED， REPEATABLE-READ， SERIALIZABLE

transaction_isolation = REPEATABLE-READ

#单一内存临时表在内存中的大小，超过此值自动转换到磁盘操作

tmp_table_size = 64M

#启动二进制日志功能，可通过它实现时间点恢复最新的备份

#log-bin=mysql-bin

#二进制日志格式，对就上一条，-建议混合格式

#binlog_format=mixed

#对应上一条，如果一个查询超过了下条设定的时间则执行上一条。

long_query_time = 2

#自定义主机ID识别符，用于主从或多服务器之间识别，为 一个 int 类型

server-id = 1

#一般用来缓存MyISAM表的主键，也用于临时的磁盘表缓存主键，上面多次出现临时磁盘表，所以就算不用MyISAM也最好为其设置一个不小的值，默认32M

key_buffer_size = 56M

#全表扫描MyISAM表时的缓存，每个线程拥有下行的大小。

read_buffer_size = 2M

#排序操作时与磁盘之间的缓存，分到每个线程，默认16M

read_rnd_buffer_size = 16M

#MyISAM使用特殊树形进行批量插入时的缓存，如insert ... values(..)(..)(..)

bulk_insert_buffer_size = 64M

#MyISAM索引文件的最大限定，

myisam_max_sort_file_size = 12G

#如果一个myisam表有一个以上的索引， MyISAM可以使用一个以上线程来排序并行它们。较耗硬件资源，如果你的环境不错，可以增加此值。

myisam_repair_threads = 2

#自动检查和修复无法正确关闭MyISAM表。

myisam_recover

# *** INNODB Specific options ***

#开启下条将会禁用 INNODB

#skip-innodb

#一般不用设置或者说设了也没多大用，InnoDB会自己与操作系统交互管理其附加内存池所使用InnoDB的存储数据的大小

innodb_additional_mem_pool_size = 16M

#innodb整体缓冲池大小，不宜过大，设为本地内存的 50%-75% 比较合适，在本机开发过程中可以设得较小一点如 64M，256M

innodb_buffer_pool_size = 256M

#InnoDB的数据存储在一个或多个数据文件组成的表空间

innodb_data_file_path = ibdata1:10M:autoextend

#用于异步IO操作的线程数量，默认为 4 ，可适当提高

innodb_file_io_threads = 8

#线程数内允许的InnoDB内核，不宜太高

innodb_thread_concurrency = 14

#InnoDB的事务日志快存行为，默认为 1，为0可减轻磁盘I/0操作，还有以为2

innodb_flush_log_at_trx_commit = 1

#InnoDB的用于的缓冲日志数据的大小

innodb_log_buffer_size = 16M

#日志文件，可设置为25%-90%的总体缓存大小，默认 256M. 修改此项要先删除datadir\ib_logfileXXX

innodb_log_file_size = 256M

#日志组数量，默认为3

innodb_log_files_in_group = 3

#InnoDB的日志文件位置。默认是MySQL的datadir

#innodb_log_group_home_dir

#InnoDB最大允许的脏页缓冲池的百分比，默认90

innodb_max_dirty_pages_pct = 90

#事务死锁超时设定

innodb_lock_wait_timeout = 120

```

</details>

:::warning

绝对不要直接把示例配置文件直接复制粘贴进你的配置文件当中

否则有可能会导致数据库无法启动

正确的做法是看完注释之后根据自己的需要，自行去修改配置文件，然后重启或重载 MySQL 服务

:::

此外，还有一些十分重要的配置项，建议修改，没有的配置项可以自行在配置文件中添加

:::info

<!--markdownlint-disable line-length-->

|配置名称       |   作用         |       默认值           |    推荐值      |
|---------------|----------------|-----------------|------------|
|`wait_timeout` |     此项设置 MySQL 在关闭一个非交互的连接之前所要等待的秒数，也就是一项连接如果空闲时间超过设置的值，连接就会被自动关闭，这时候你的插件就会疯狂报错烦死你，建议调大一点。但是太大也不行，否则会严重拖累性能           |      `wait_timeout=28800`        |  86400 |
|`interactive_timeout` |   此项设置 MySQL 关闭一个交互的连接之前所要等待的秒数，需要注意的是， `wait_timeout` 和 `interactive_timeout` 需要同时设置，否则不会生效  | `interactive_timeout=28800`|  86400 |
|`max_allowed_packet`   | 有时候你的插件会告诉你 `Package for query is too large` 那么这个时候你就需要调大这个值了，这一项规定了 MySQL 传输过程中最大允许的包的大小 | `max_allowed_packet=1M`  | 看情况 |
|`max_connections`  |   这一项设置 MySQL 的最大连接数，如果连接数到达这个数值，就无法创建新的连接，这个时候你的插件通常会报错，告诉你 `max_connections` 满了  |   `max_connections=90`   |   32768 |

<!--markdownlint-enable line-length-->

:::

### MariaDB

TODO
