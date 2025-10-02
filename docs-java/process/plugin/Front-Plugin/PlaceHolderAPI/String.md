---
title: String
sidebar_position: 9
---

# String

:::info

`eCloud` https://api.extendedclip.com/expansions/string

`变量列表` https://wiki.placeholderapi.com/users/placeholder-list/#string

`GitHub` https://github.com/BlitzOffline/StringExpansion

`Continue-Project` https://continue-project.netlify.app/PlaceholderAPI/user-guides.placeholder-list#string

:::

用于处理字符串的简单 PlaceholderAPI 扩展。

## 安装此扩展

```text
/papi ecloud download String
/papi reload
```

```yaml title="plugins/PlaceHolderAPI/config.yml"
"string":
  # 用于分隔参数的字符
  "separator": "_"
  # 在使用 %string_replaceCharacters_<configuration>_<string>% 时替换字符串中的特定字符
  "replaceCharacters":
    # 配置名称
    "small-numbers":
      # 要替换的字符
      "0": "₀"
      "1": "₁"
      "2": "₂"
      "3": "₃"
      "4": "₄"
      "5": "₅"
      "6": "₆"
      "7": "₇"
      "8": "₈"
      "9": "₉"
```

变量列表：  
  `%string_equals_<string>_<match>%` - 检查 `string` 和 `match` 是否为相同字符串（区分大小写）  
  
  `%string_equalsIgnoreCase_<string>_<match>%` - 检查 `string` 和 `match` 是否相同（不区分大小写）  
  
  `%string_contains_<string>_<match>%` - 检查 `string` 是否包含 `match`（区分大小写）  
  
  `%string_containsIgnoreCase_<string>_<match>%` - 检查 `string` 是否包含 `match`（不区分大小写）  

  `%string_charAt_<index>_<string>%` - 返回字符串 `string` 中索引为 `index` 的字符  

  `%string_indexOf_<string>_<match>%` - 返回 `match` 在 `string` 中第一次出现的索引。如果不存在则返回 -1  

  `%string_lastIndexOf_<string>_<match>%` - 返回 `match` 在 `string` 中最后一次出现的索引。如果不存在则返回 -1  

  `%string_substring_<startIndex>_<string>%` - 返回从 `startIndex` 开始的子字符串  
  **支持负索引作为起始索引**

  `%string_substring_<startIndex>,<endIndex>_<string>%` - 返回从 `startIndex` 开始到 `endIndex` 之前结束的子字符串  
  **支持负索引作为结束索引**  
  
  `%string_shuffle_<string>%` - 返回字符顺序被打乱的 `string`  
  
  `%string_uppercase_<string>%` - 返回所有字母都为大写的 `string`  
  
  `%string_lowercase_<string>%` - 返回所有字母都为小写的 `string`  

  `%string_sentencecase_<string>%` - 返回首字母大写、其余字母小写的 `string`  

  `%string_capitalize_<string>%` - 返回首字符大写的 `string`

  `%string_length_<string>%` - 返回 `string` 的长度  
  
  `%string_random_<string1>,<string2>,<string3>,<etc>%` - 从给定列表中返回一个随机字符串  

  `%string_replaceCharacters_<configuration>_<string>%` - 根据配置文件中的定义替换 `string` 中的特定字符
  
  `%string_alternateuppercase_<string>%` - 将每隔一个字符转换为大写

  `%string_startswith_<string>_<match>%` - 检查 `string` 是否以 `match` 开头

  `%string_endswith_<string>_<match>%` - 检查 `string` 是否以 `match` 结尾

  `%string_trim_<string>%` - 去除 `string` 开头和结尾的空格

  `%string_occurences_count_<string>_<match>%` - 计算 `match` 在 `string` 中出现的次数
  
  
  
  **支持 PlaceholderAPI 变量。只需使用大括号（`{}`）而不是百分号（`%%`）。**  
  例如：`%string_equals_{server_name}_Lobby%` - 将基于 `%server_name%` 变量检查当前服务器名称是否为 lobby。
