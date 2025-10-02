---
title: Progress
sidebar_position: 7
---

# Progress

:::info

`eCloud` https://api.extendedclip.com/expansions/progress

`Placeholder List` https://wiki.placeholderapi.com/users/placeholder-list/#progress

`GitHub` https://github.com/aBooDyy/Progress-Expansion

`Continue-Project` https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list#progress

:::

## 安装此扩展

```text
/papi ecloud download Progress
/papi reload
```

## 使用

```text
%progress_bar_{变量}%
%progress_bar_{变量}_c:<满格符号>%
%progress_bar_{变量}_p:<半满符号>%
%progress_bar_{变量}_r:<未满符号>%
%progress_bar_{变量}_l:<最大长度>%
%progress_bar_{变量}_m:<最大值>%
%progress_bar_{变量}_fullbar:<进度完成时的文本>%
```

例如：

```text
name: '内存使用 / 总内存'
lore:
    - '%progress_bar_{server_ram_used}_m:{server_ram_max}%'
```

![](_images/Progress/Progress.png)
