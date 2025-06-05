---
title: 配置服务端
sidebar_position: 5
---

# 配置服务端

开启服务器后，你需要进行一些简单配置，比如修改服务器端口，正版验证等

:::note

本篇只包含`server.proprites`和`游戏规则`的解释，要想完整的配置服务端，请不要只依赖本篇

:::

## 笨蛋脚本

[下载](https://script.8aka.org/config-eazy)，我们会询问一些问题，帮你 **自动配置**

目前可以配置的

- 服务器端口
- 正版验证
- 服务器种子
- 最大玩家数

## server.proprites
这一小节配置文件都位于服务端根目录下的`server.proprites`文件。如需修改，请打开该文件并找到对应选项

### 正版验证

```properties
online-mode=true
```

正版验证默认被开启，不关闭正版验证的话盗版玩家是不能加入游戏的。如果你没有用正版启动游戏，那么加入服务器会出现：

![](_images/无效会话.png)

如果你想关闭正版验证，将 `true` 改为 `false` ，保存，重启服务端

:::danger

**不要在服务器投入运营后去改正版验证状态!** 这会造成 UUID 混乱，玩家数据丢失，当然你可以转换 UUID 来解决这个问题 [查看解决方法](https://klpbbs.com/thread-131458-1-1.html)

如果需要更多的验证方式(如 **皮肤站**/**统一认证** 等)，请在服务器 **公测前** 确定，具体请参考[更多验证方式](/docs-java/advance/loginchoices.md)

:::

注意，在离线模式下，玩家大概率没皮肤，你需要 [SkinsRestorer](/docs-java/process/plugin/other/SkinsRestorer.md)，根据需求选择 SkinsRestorer 的版本。

### 最大玩家数

```properties
max-players=20
```

后面的数字就是你希望这个服务器最大能进入的玩家数。

### 服务器种子

```properties
level-seed=
```

这里面就可以填上你想要的种子，不填表示随机种子
:::note

在服务器生成地图后修改种子是**无效的**

因此，请确保修改种子时，地图未生成

:::

:::note

你可能会发现一些结构，比如村庄的生成，并不会遵循种子，是由于 `Spigot` 及其下游服务端加入了随机种子

地形的生成也会出现一些偏差，一些服务端也会添加一些地形生成优化补丁，通常会小范围改变地形生成

当然，你仍然可以利用种子定位群系，比如找史莱姆区块

:::

### 启用命令方块

```properties
enable-command-block=false
```

服务器中命令方块默认关闭，**并且不建议开启**。

**命令方块是性能低下的，并且其所有功能都可以用插件替代。**

将此项设置为 `true`，即可启用命令方块。

### 设置难度

```properties
difficulty=hard
```

支持以下值

- peaceful / 0 - 和平
- easy / 1 - 简单
- normal / 2 - 普通
- hard / 3 - 困难

### 出生点保护

```properties
spawn-protection=16
```

出生点的保护范围，在保护范围中只有OP可以破坏或者放置

设置为0可以禁用

:::warning

强烈**建议禁用**这一配置，无论你是否需要出生点保护。

这一配置的保护**并不能**防御苦力怕、TNT等造成的破坏。

如有保护出生点的需求，可以考虑使用插件 [WorldGuard](../process/plugin/WorldManagement/WorldGuard.md)

:::

### 是否允许玩家前往下界/是否生成下界世界

```properties
allow-nether=true
```

设置为 `false` 可以禁用下界

### 默认游戏模式

```properties
gamemode=survival
```

支持以下模式

- survival / 0 - 生存
- creative / 1 - 创造
- adventure / 2 - 冒险
- spectator / 3 - 旁观

### 强制游戏模式

```properties
force-gamemode=false
```

如果设置为 `true` ，玩家加入后将会被强制改为默认游戏模式

### 结构生成

```properties
generate-structures=true
```

结构（如村庄）是否会在新区块中生成

:::note

即使设置为false，地牢仍会生成

:::

### 玩家互相攻击

```properties
pvp=true
```

设置为true，即可允许玩家互相攻击

### 允许飞行

```properties
allow-flight=true
```

:::warning

该选项极易误判，因此最好将此值设为 `true`，无论你是否需要飞行，如果你需要反飞行，请查看反作弊一章

:::

### 服务器端口

请前往 [连接服务器](connect-to-server.md) 章节查看

## 游戏规则

这一部分的配置需要使用 `/gamerule` 来完成，而非 `server.properties`

点击查看[全部游戏规则](https://minecraft.fandom.com/zh/wiki/%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99#%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99%E5%88%97%E8%A1%A8)

:::tip

请注意，默认情况下 `/gamerule` 所设置的游戏规则**只会**在执行命令的世界生效

[Ultimate Gamerules Manager](https://www.spigotmc.org/resources/ultimate-gamerules-manager-1-13-1-20-3.102215/) 是个不错的插件，适合新手管理 gamerule 时使用

:::

### 进度达成

是否在聊天框中公告玩家进度的达成。

开启: `/gamerule announceAdvancements true`

关闭: `/gamerule announceAdvancements false`

### 死亡不掉落

设置为true时，死亡时玩家的背包物品和经验值会得到保留。

设置为false时，重生后玩家的物品和部分经验值会掉落在死亡位置。

开启: `/gamerule keepInventory true`

关闭: `/gamerule keepInventory false`

### 记录管理员使用过的命令

是否在服务器日志中记录管理员使用过的命令。

开启: `/gamerule logAdminCommands true`

关闭: `/gamerule logAdminCommands false`
