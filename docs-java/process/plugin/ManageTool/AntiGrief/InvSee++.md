---
sidebar_position: 4
sidebar_label: 查包 - InvSee++
---

# InvSee++

:::info

`SpigotMC` https://www.spigotmc.org/resources/invsee.82342/

`Modrinth` https://modrinth.com/plugin/invsee++

`GitHub` https://github.com/Jannyboy11/InvSee-plus-plus

:::

InvSee++ 可以查看和编辑其他玩家的物品栏和末影箱。

[Essentials](/docs-java/process/plugin/ManageTool/BasicPlugins/EssentialsX/Outline.md) 也有这个功能，但 InvSee 可以：

- 拿走或替换玩家的装备
- 查询离线玩家的背包
  ...

## 功能：

- 查看和编辑其他玩家的物品栏和末影宝箱。
- 包括玩家的盔甲内容和副手物品。
- 包括玩家的合成/工作台/铁砧/锻造台/石匠/磨石/织布机/附魔台/商人物品以及玩家光标中的物品。
- 支持离线玩家，甚至支持从未登录过服务器的玩家。
- 当玩家重新登录时，物品栏会自动重新加载。
- （可选）与 PerWorldInventory 集成。这需要在其配置中加入 `load-data-on-join： true` 。

## 命令

- /invsee [用户名]/[UUID] （查看背包）
- /endersee [用户名]/[UUID] （看末影箱）

## 扩展插件

### InvSee++ Give

将物品添加到离线玩家的背包/末影箱。

#### 指令

- /invgive （添加到背包）
- /endergive （添加到末影箱）

指令格式和普通的 give 指令一模一样。

### InvSee++ Clear

清除离线玩家背包/末影箱中的物品。

#### 指令

- /invclear （清除背包中的物品）
- /enderclear （清除末影箱中的物品）

指令格式和普通的 clear 指令一模一样。
