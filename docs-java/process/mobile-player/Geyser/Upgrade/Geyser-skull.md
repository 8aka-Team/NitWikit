---
title: 如何修复Geyser头颅不显示
sidebar_position: 3
---

# 如何修复Geyser头颅不显示

:::note

目前仍然没有自动修复的办法

:::

导致这个问题的主要原因是基岩版不支持自定义的头颅，所以只能通过Geyser创建映射并分发给客户端

## 如何修复

要在间歇泉中设置自定义头，您必须选择如何注册您的方块。最简单的方法是使用 custom-skulls.yml

### custom-skulls.yml

配置文件位于 Geyser 的配置文件夹中，结构如下

```yaml
#--------------------------------
# Geyser 自定义头骨配置文件
#
# 禁用 `add-custom-skull-blocks` 时会忽略此文件。
# 有关主要配置值集，请参阅“config.yml”
#
# 自定义头骨，其中包含玩家用户名、UUID 或此文件中指定的纹理
# 将被翻译为自定义块并显示在背包和实体上。
#--------------------------------

# Java 玩家用户名
# Geyser启动时皮肤将会更新，玩家必须重新下载
# 如果有玩家更改了皮肤，则资源包不会自动更新。
player-usernames：
 - 间歇泉MC

# Java 玩家 UUID
# Geyser启动时皮肤将会更新，玩家必须重新下载
# 如果有玩家改变了皮肤，则资源包并不会自动更新。
player-uuids：
 - 8b8d8e8f-2759-47c6-acb5-5827de8a72b8

# 自定义玩家头像NBT中找到的一长串字符
player-profiles：
 - ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1liIa6ICJBbWJlcmljaHUi LAOGICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5ly3JhZnQubmV0L3RleHR1cmUvYTkwNzkwYzU3ZTE4MWVkMTNhZGVkMTRjNDdl ZTJmN2M4ZGUzNTMzZTAxN2JhOTU3YWY3YmRmOWRmMWJkZTk0ZiISCiAgICAgICJtZXRhZGF0YSIGOiB7CIAAGICAGICAgIm1vZGVsIiaA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9

# Minecraft 皮肤服务器上皮肤的哈希值
skin-hashes：
 - a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f

```

你只需要提取出你所需要显示的头颅，根据类别添加到配置文件中，然后**重启服务端**，就可以显示

### 玩家用户名

头颅可以通过玩家用户名在此部分注册。这些将在 Geyser 开始时更新。因此，如果玩家的用户名或皮肤发生变化，它们可能会发生变化

### 玩家uuid

头颅可以通过玩家 UUID 在此部分注册。这些将在 Geyser 开始时更新。因此，如果皮肤发生变化，它们可能会发生变化。

### 玩家资料

头可以通过自定义玩家头部的 NBT 中的纹理字符串在此部分注册。除非手动更改该值，否则这些值不会在间歇泉启动时更新。因此，如果玩家的用户名或皮肤发生变化，它们不会改变。数据只是 base64 编码的 JSON。

如果在Paper服务器上，则可以通过将项目握在手中并运行命令来获取头骨的此数据。这会将项目的 NBT 数据输出到聊天和控制台。纹理字符串位于```SkullOwner```标签下、```Properties```标签下、```textures```标签下。例如：/paper dumpitem

```
[05:58:07 INFO]: .KastleFirefox issued server command: /paper dumpitem
[05:58:07 INFO]: minecraft:player_head{display: {Name: '{"text":"Test"}'}， SkullOwner: {Properties: {textures: [{Value: "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"}]}， Id: [I; -229048314, -553040501, -1407961158, 465313087]}}
```

### 皮肤哈希

骷髅头可以通过Minecraft皮肤服务器上的皮肤哈希值在此部分注册。这位于 URL 的末尾。

## 快速提取

那么你可能会问，像Slimefun那么多，有什么快点的方法吗？

当然是有的

### PlayerHeadGetter

[项目地址](https://github.com/zimzaza4/PlayerHeadGetter)

[下载地址](https://github.com/lilingfengdev/PlayerHeadGetterBuild/releases/tag/latest)

**Command**

`/headgetter hand` 获取手上头颅base64

`/headgetter slimefun` 获取Slimefun 已注册头颅base64

`/headgetter inventory` 切换至inventory获取模式(开启后会记录你打开的所有ui中的头颅物品的base64)

`/headgetter save` 导出头颅base64

**使用流程**
- 先用前三个命令获取头颅
- 完事之后使用导出命令
