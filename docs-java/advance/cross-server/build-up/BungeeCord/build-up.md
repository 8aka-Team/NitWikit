---
title: 搭建
sidebar_position: 2
---

# 搭建

## 下载

前往 [核心选择](/docs-java/advance/cross-server/server-core-choose.md)

1.7.10 用 BungeeCord 的 [构建 1119](https://ci.md-5.net/job/BungeeCord/1119/)

## 启动

创建一个新的文件夹将核心放进去

并且使用参数启动以生成初始文件

如果想进一步优化可以使用 JVM 参数 [Waterfall 官方](https://docs.papermc.io/waterfall/getting-started#running-the-proxy)有推荐的 flags

```bash
java -Xms1024M -Xmx1024M -jar 核心名字.jar
```

## 配置

### config.yml

配置 BungeeCord 端根目录中的 `config.yml`

[详细配置文件讲解](config.yml.md)

```yaml
servers:
  lobby:
    motd: "&1Just another BungeeCord - Forced Host"
    address: localhost:25565
    restricted: false
```

其实不用解释你也看得懂吧

```yaml
servers:
  子服名称:
    motd: "服务器标语"
    address: 服务器地址:服务器端口
    restricted: false
```

照着把你的子服都写上去，就像这样

```yaml
servers:
  login:
    motd: "&1Just another BungeeCord - Forced Host"
    address: localhost:25501
    restricted: false
  survival:
    motd: "&1Just another BungeeCord - Forced Host"
    address: localhost:25502
    restricted: false
  resource:
    motd: "&1Just another BungeeCord - Forced Host"
    address: localhost:25503
    restricted: false
```

### 子服 bc 模式

配置子服端根目录中的 `spigot.yml`

```yaml
bungeecord: false
```

把这个打开 它在 `settings` 节点下

## 加入

见 [加入服务器](/docs-java/advance/cross-server/join-server.md)
