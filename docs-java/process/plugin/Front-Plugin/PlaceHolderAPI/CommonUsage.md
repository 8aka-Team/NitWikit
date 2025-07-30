---
title: 常用变量
sidebar_position: 2
---

# 常用变量

这里只列出**部分**扩展的**部分**变量，这几个变量老是有人问

如果你想了解全部变量，点击 [此处](https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html)

## Player

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#player

```text
/papi ecloud download Player
```

```text
%player_name%  - 玩家名称
%player_exp%   - 玩家的 exp
%player_ping%  - 玩家的延迟
%player_level% - 玩家等级
%player_world% - 玩家所在世界
```

## Server

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#server

```text
/papi ecloud download Server
```

```text
%server_online%         - 服务器在线人数
%server_max_players%    - 服务器最大在线人数
%server_tps%            - 服务器 tps
%server_tps_5%
%server_tps_15%
%server_tps_1_colored%
%server_tps_5_colored%
%server_tps_15_colored%
```

## Vault

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#vault

```text
/papi ecloud download Vault
```

```text
%vault_eco_balance% - 玩家的钱数
```

## Multiverse

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#multiverse-core

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="multiverse">
<TabItem value="v5" label="Multiverse-Core v5">

:::tip

Multiverse-Core v5 已经内置 papi 支持，不再需要额外下载扩展

:::

```text
%multiverse-core_alias% - v5 显示世界别名
```

</TabItem>
<TabItem value="v4" label="Multiverse-Core v4">

```text
/papi ecloud download multiverse
```

```text
%multiverse_world_alias% - v4 显示世界别名
```

</TabItem>
</Tabs>

[案例 | 中文世界名](../../WorldManagement/Multiverse/Q&A_1.md#世界别名)

## PlayerPoints

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#playerpoints

```text
%playerpoints_points% - 点券数
```

PlayerPoints 在 3.0.0 以及更高版本会自动挂钩 papi，不再需要自行安装扩展

如果你承认你有大病，一定要使用旧版本，可以手动下载 [此扩展](https://api.extendedclip.com/expansions/playerpoints)

## Statistic

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#statistic

```text
/papi ecloud download Statistic
```

```text
%statistic_time_played:days% - 在线时间（天）
%statistic_time_played:hours% - 在线时间（时）
%statistic_time_played:minutes% - 在线时间（分）
%statistic_time_played:seconds% - 在线时间（秒）
%statistic_mob_kills% - 生物击杀数
%statistic_deaths% - 死亡数
```

# LuckPerms

> https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list.html#luckperms

```text
/papi ecloud download LuckPerms
```

```text
%luckperms_prefix% - 返回玩家的前缀
%luckperms_meta<键名>% - 返回给定元数据键的单个对应值
%luckperms_groups% - 返回玩家直接继承的权限组列表
%luckperms_has_permission_<权限>% - 返回玩家是否实际拥有该权限（与一般的权限检查不同！）
%luckperms_inherits_permission_<权限>% - 返回玩家是否实际继承该权限（与一般的权限检查不同！）
%luckperms_check_permission_<权限>% - 返回对给定玩家的权限检查
%luckperms_in_group_<权限组>% - 返回玩家是否为给定权限组的成员
%luckperms_expiry_time_<权限>% - 返回直接分配给玩家的临时权限剩余时间
```
