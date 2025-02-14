---
title: TrMenu
sidebar_position: 4
---

# TrMenu

![](https://gitee.com/postyizhan/images-hosting/releases/download/gif/animation.gif)

<a href="https://github.com/Dreeam-qwq/TrMenu/releases">
  <img src="https://img.shields.io/github/v/release/Dreeam-qwq/TrMenu" class="stylish-image" alt="Release" />
</a>
<a href="https://github.com/Dreeam-qwq/TrMenu/releases">
  <img src="https://img.shields.io/github/downloads/Dreeam-qwq/TrMenu/total" class="stylish-image" alt="Downloads" />
</a>
<a href="https://github.com/Dreeam-qwq/TrMenu">
  <img src="https://img.shields.io/github/languages/code-size/Dreeam-qwq/TrMenu" class="stylish-image" alt="Code Size" />
</a>
<a href="https://github.com/Dreeam-qwq/TrMenu/blob/stable/v3/LICENSE.md">
  <img src="https://img.shields.io/badge/license-TrMenu-lightgreen.svg" class="stylish-image" alt="License" />
</a>

```text
一个功能强大的菜单插件，国人插件。目前由社区维护。
```

## 忽悠

### 这个分支中有哪些新功能？

- 支持 1.8.9 ~ 最新版本
- 修复头颅显示问题
- [国际化语言](https://github.com/Dreeam-qwq/TrMenu/pull/64)
- 更多功能...

Notice：维护这个分支完全是个人兴趣。

### TrMenu v3 的优势

- 极佳的速度和性能：不仅针对条件判断进行了优化，而且重构了虚拟背包的API
- 大量的模块已经确认拥有更好的性能，同时提供了一个特别的方式来检测 TrMenu 的性能表现
- 一如既往的强大功能：几乎所有功能都经过优化和保留，并添加了新功能。
- 功能与脚本：统一并标准化了内联函数的使用，重构了 TrMenu 动作，并全面支持新的 kether 脚本语言。
- 更多信息：请看 wiki

## 链接

### TrMenu v2

早已停更，不推荐使用

:::info

`SpigotMC` https://www.spigotmc.org/resources/.83120/

`文档` https://temp-17.gitbook.io/trmenu/v/chinese

:::

### TrMenu v3

:::info

`MineBBS` https://www.minebbs.com/resources/trmenu-bug.9080/

`GitHub(不推荐，已停止维护)` https://github.com/TrPlugins/TrMenu/tree/stable/v3

`GitHub(推荐，社区维护)` https://github.com/Dreeam-qwq/TrMenu

:::

交流群：325014486

[如何支持1.8](https://hhhhhy.gitbook.io/trmenu-v3/appendix/v3-guide#datasource.yml-dui-yu-1.8-fu-wu-duan)

## 文档

- https://trmenu.trixey.cc

旧文档，不推荐阅读

- https://hhhhhy.gitbook.io/trmenu-v3

新文档，推荐阅读，但可能需要挂梯子

- https://mirror.8aka.org/https://hhhhhy.gitbook.io/trmenu-v3

新文档的笨蛋镜像，不挂梯也可访问

- https://bukkit.wiki/plugins/plugins/trmenu

阔大帅的文档，拥有上方新文档的全部内容且访问速度快

- https://wiki.ptms.ink/index.php?title=%E7%A4%BE%E5%8C%BA:TrMenu

社区文档，或许比上方的文档更容易理解

![](_images/TrMenu/trm一定要看wiki呐.jpg)

## vscode 插件

与 TrMenu 或 [kether](/docs-java/advance/kether/kether.md) 有关的 vscode 插件

- [TrMenu-Helper](https://marketplace.visualstudio.com/items?itemName=hhhhhy.trmenu-helper)

TrMenu 语法提示

- [kether-snippet](https://marketplace.visualstudio.com/items?itemName=LiteCat.kether-snippet)

kether 语法提示

## bStats​

[![](https://bstats.org/signatures/bukkit/TrMenu.svg)](https://bstats.org/plugin/bukkit/TrMenu/5742)

## 案例

:::warning

请使用 最新的 **TrMenu社区版** 不保证**旧**版本可用性

:::

### 妙妙写法

#### 子图标写true

`condition` 最后的结果为 true 就会显示这个子图标

```yaml
  'A':
    display:
      material: stone
    icons:
      - condition: 'true'
        display:
          name: '我有没有条件啊！我到底有没有条件啊！'
```

所以你可以直接写 true 让他显示这个子图标

![](_images/为难.jpg)

#### 子图标写动作

因为 `condition` 会执行里面的kether语句

所以你可以这样子在菜单打开或重新计算子图标的时候跑一遍这些语句

```yaml
  'A':
    display:
      material: stone
    icons:
      - condition: 'tell 想不到骚话'
      - condition: 'tell 想不到骚话'
      - condition: 'tell 想不到骚话'
      - condition: 'tell 想不到骚话'
      - condition: 'tell 想不到骚话'
```

特别的，写在此处的语句要比 name，lore 等位置先执行，下方是一个使用此特性的案例

```yaml
  'A':
    display:
      material: stone
    icons:
      - condition: 'meta set mat to stone'
      - condition: 'tell meta get mat'
      - condition: 'meta set amt to 10'
    actions:
      all:
        tell meta get mat
        papi join [ '%checkitem_remove_mat:' meta get mat ',amt:' meta get amt '%' ]
```

![](_images/子图标写动作.png)

### 玩家信息

这是 TrMenu 的一个默认案例

#### 右键玩家执行动作

https://hhhhhy.gitbook.io/trmenu-v3/usage/shortcuts

此处为右键玩家打开名为 Profile 的菜单

找到

```yaml
Right-Click-Player: 'open: Profile'
```

#### 玩家信息菜单

https://github.com/Dreeam-qwq/TrMenu/blob/stable/v3/plugin/src/main/resources/menus/Profile.yml

### 蹲下+替换副手打开菜单

或者说 shift+F 打开菜单？

#### 蹲下+替换副手执行动作

https://hhhhhy.gitbook.io/trmenu-v3/usage/shortcuts

```yaml
  Sneaking-Offhand:
    - condition: 'perm *trmenu.shortcut'
      execute: 'open: Example'
      deny: 'return'
```

<!-- ### 每日签到

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/trmv3-每日签到.yml)

据作者所说重启服务器会丢数据

不过这些配置主要是用来学习的，不会有人直接cv过去用吧 -->

### 商店

:::tip

你需要安装 [CheckItem](../../Front-Plugin/PlaceHolderAPI/CheckItem.md)

并 [开启give和remove](../../Front-Plugin/PlaceHolderAPI/CheckItem.md#启用give和remove) 和 [更改-boolean](../../Front-Plugin/PlaceHolderAPI/Q&A.md#更改-boolean)

:::

#### 以物易物

**知识点：**

- TrMenu 文档熟读并背诵
- [kether](/docs-java/advance/kether/basic.md)
- [CheckItem](../../Front-Plugin/PlaceHolderAPI/CheckItem.md)

```yaml
  '写法1':
    display:
      name: '两个钻石换三个绿宝石'
      material: stone
    actions:
      - condition: 'papi %checkitem_mat:diamond,amt:2%'
        actions:
          - 'papi %checkitem_remove_mat:diamond,amt:2%'
          - 'papi %checkitem_give_mat:emerald,amt:3%'
        deny:
          - 'tell inline "物品不够，你有{{papi %checkitem_amount_mat:diamond,amt:2%}}个，还差{{math 2 - papi %checkitem_amount_mat:diamond,amt:2%}}个"'
  '写法2':
    display:
      name: '两个钻石换三个绿宝石'
      material: stone
    actions:
      - if papi %checkitem_mat:diamond，amt:2% then {
          papi %checkitem_remove_mat:diamond，amt:2%
          papi %checkitem_give_mat:emerald，amt:3%
        } else tell inline "物品不够，你有{{papi %checkitem_amount_mat:diamond,amt:2%}}个，还差{{math 2 - papi %checkitem_amount_mat:diamond,amt:2%}}个"
```

#### 购买

```yaml
  '写法1':
    display:
      name: '10块钱买2个钻石'
      material: stone
    actions:
      - condition: 'money 10'
        actions:
          - 'take-money: 10'
          - 'papi %checkitem_give_mat:emerald,amt:3%'
        deny:
          - tell inline "钱不够，你有{{papi %vault_eco_balance%}}块，还差{{math 10 - papi %vault_eco_balance%}}块"
  '写法2':
    display:
      name: '10块钱买2个钻石'
      material: stone
    actions:
      - if money 10 then {
          command inline"money take {{player name}} 10"
          papi %checkitem_give_mat:emerald,amt:3%
        } else tell inline "钱不够，你有{{papi %vault_eco_balance%}}块，还差{{math 10 - papi %vault_eco_balance%}}块"
```

#### 个人限购

**知识点：**

- TrMenu 文档熟读并背诵
- [kether](/docs-java/advance/kether/basic.md)
- [CheckItem](../../Front-Plugin/PlaceHolderAPI/CheckItem.md)
- [妙妙写法](#妙妙写法)
- [\{condition=\}条件](https://hhhhhy.gitbook.io/trmenu-v3/menu/action/option#tiao-jian)

<!--markdownlint-disable line-length-->

```yaml
  'C':
    display:
      name: '10块钱买2个钻石(限购20个)'
      material: stone
    icons:
      - condition: meta set KEY to 限购数据1
      - condition: data set papi %trmenu_meta_KEY% to 20
    actions:
      - condition: meta set 单价 to 10
      - condition: all [ money papi %trmenu_meta_单价% check data get meta get KEY > 0 ]
        actions:
          # 扣钱
          - 'take-money: %trmenu_meta_单价%'
          # 扣一次限购
          - data set papi %trmenu_meta_KEY% to join [ math data get meta get KEY - 1 ]
          - tell join [ "剩余限购次数：" data get meta get KEY " 剩的钱：" papi %vault_eco_balance% ]
          # 给货
          - papi %checkitem_give_mat:emerald,amt:3%
        deny:
          - tell inline 钱不够，你有{{papi %vault_eco_balance%}}块，还差{{math papi %trmenu_meta_单价% - papi %vault_eco_balance%}}块 {condition=not money meta get 单价}
          - tell inline 限购次数用完了 {condition=check data get meta get KEY == 0}
```

<!--markdownlint-enable line-length-->

#### 全服限购

上面个人限购的 data 改成 globaldata

自己看文档：https://hhhhhy.gitbook.io/trmenu-v3/menu/action/types#shu-ju-cao-zuo

#### 出售

和上面的购买几乎一样的逻辑，自己去学 CheckItem 然后把 give 改成 remove

#### 个人限售

和上面的个人限售几乎一样的逻辑，自己去学

#### 全服限售

上面的会了这个你就会写了
