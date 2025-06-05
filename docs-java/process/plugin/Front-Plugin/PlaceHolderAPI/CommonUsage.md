---
title: 常用变量
sidebar_position: 2
---

# 常用变量

这里只列出**部分**扩展的**部分**变量，这几个变量老是有人问

如果你想了解全部变量，点击 [此处](https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html)

## Player

> https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html#player

```text
/papi ecloud download Player
```

```text
%player_name%  - 玩家名称
%player_exp%   - 玩家的exp
%player_ping%  - 玩家的延迟
%player_level% - 玩家等级
%player_world% - 玩家所在世界
```

## Server

> https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html#server

```text
/papi ecloud download Server
```

```text
%server_online%         - 服务器在线人数
%server_max_players%    - 服务器最大在线人数
%server_tps%            - 服务器tps
%server_tps_5%
%server_tps_15%
%server_tps_1_colored%
%server_tps_5_colored%
%server_tps_15_colored%
```

## Vault

> https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html#vault

```text
/papi ecloud download Vault
```

```text
%vault_eco_balance% - 玩家的钱数
```

## Multiverse

> https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html#multiverse-core

```text
/papi ecloud download multiverse
```

```text
%multiverse_world_alias% - 显示世界别名
```

[案例 | 中文世界名](../../WorldManagement/Multiverse/Multiverse.md)

## PlayerPoints

> https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html#playerpoints

```text
%playerpoints_points% - 点券数
```

PlayerPoints 在 3.0.0 以及更高版本会自动挂钩 papi，不再需要自行安装扩展

如果你承认你有大病，一定要使用旧版本，可以手动下载 [此扩展](https://api.extendedclip.com/expansions/playerpoints)

## Statistic

> https://snowcutieowo.github.io/PlaceholderAPI/user-guides.placeholder-list.html#statistic

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
