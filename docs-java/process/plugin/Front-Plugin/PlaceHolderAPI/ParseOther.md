---
title: ParseOther
sidebar_position: 8
---

# ParseOther

:::info

`eCloud` https://api.extendedclip.com/expansions/parseother

`Placeholder List` https://wiki.placeholderapi.com/users/placeholder-list/#parseother

`GitHub` https://github.com/PlaceholderAPI/ParseOther

`Continue-Project` https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list#parseother

:::

允许你以其他玩家的身份判断任何变量。

你必须使用 unsafe 变量才可判断有关 username 与 uuid 的变量。

确保嵌入的变量使用了花括号 {}，否则无效。

## 安装此扩展

```text
/papi ecloud download ParseOther
/papi reload
```

## 使用

```text
%parseother_{玩家名称}_{不带百分号的变量}%
%parseother_unsafe_{玩家名称变量}_{不带百分号的变量}%
%parseother_{uuid}_{不带百分号的变量}%
%parseother_unsafe_{玩家 UUID 变量}_{不带百分号的变量}%
```

例如，查看玩家 postyizhan 的 %player_health% 变量返回值

![](_images/ParseOther/ParseOther.png)
