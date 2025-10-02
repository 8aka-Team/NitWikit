---
title: ChangeOutput
sidebar_position: 9
---

# ChangeOutput

:::info

`eCloud` https://api.extendedclip.com/expansions/changeoutput

`Placeholder List` https://wiki.placeholderapi.com/users/placeholder-list/#changeoutput

`GitHub` https://wiki.placeholderapi.com/users/placeholder-list/#changeoutput

`Continue-Project` https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list#changeoutput

:::

## 安装此扩展

```text
/papi ecloud download ChangeOutput
/papi reload
```

## 使用

允许你修改其他变量返回的内容。

```text
%changeoutput_<选项>_input:<输入内容>_matcher:<匹配内容>_ifmatch:<匹配输出的内容>_else:<不匹配输出的内容>%
```

- `<选项>`：
    - `equals` - 完全匹配内容
    - `ignorecase` - 忽略英文字符的大小写
    - `ignorecolor` - 忽略传入的彩色代码
    - `contains` - 包含匹配内容
    - `>=` - 检查输入是否大等于匹配内容
    - `>` - 检查输入是否等于匹配内容
    - `<=` - 检查输入是否小等于匹配内容
    - `<输入内容>` - 待比较的文本
    - `<匹配内容>` - 参与比较的文本或关键词
    - `<匹配输出的内容>` - 符合比较条件时输出的内容
    - `<不匹配输出的内容>` - 不符合比较条件时输出的内容

所有参数均可嵌入变量，需以 `{}` 替代百分号。
