---
sidebar_position: 4
---

# TrMenu

一个功能强大的菜单插件，国人插件。

![](_images/trm一定要看wiki呐.jpg)

## TrMenu v2

早已停更，不推荐使用

:::info

`文档` https://temp-17.gitbook.io/trmenu/v/chinese

`SpigotMC` https://www.spigotmc.org/resources/.83120/

:::

## TrMenu v3

:::info

`文档（新）` https://hhhhhy.gitbook.io/trmenu-v3

`文档（旧）` https://trmenu.trixey.cc/

`如何支持1.8` https://hhhhhy.gitbook.io/trmenu-v3/appendix/v3-guide#datasource.yml-dui-yu-1.8-fu-wu-duan

`GitHub（不推荐，已停止维护）` https://github.com/TrPlugins/TrMenu/tree/stable/v3

`GitHub（推荐，社区维护）` https://github.com/Dreeam-qwq/TrMenu

`vscode插件-trm语法提示` https://marketplace.visualstudio.com/items?itemName=hhhhhy.trmenu-helper

:::

交流群：325014486

## Invero

Invero 俗称 TrMenu v4

详情请见 [Invero](Invero.md)

## 案例

### 妙妙写法

### 玩家信息

这是 TrMenu 的一个默认案例

**右键玩家执行动作**

https://github.com/Dreeam-qwq/TrMenu/blob/stable/v3/plugin/src/main/resources/settings.yml

此处为右键玩家打开名为 Profile 的菜单

找到
```yaml
Right-Click-Player: 'open: Profile'
```

**玩家信息菜单**

https://github.com/Dreeam-qwq/TrMenu/blob/stable/v3/plugin/src/main/resources/menus/Profile.yml

### 蹲下+替换副手打开菜单

或者说 shift+F 打开菜单？

**蹲下+替换副手执行动作**

https://github.com/Dreeam-qwq/TrMenu/blob/stable/v3/plugin/src/main/resources/settings.yml

```yaml
  Sneaking-Offhand:
    - condition: 'perm *trmenu.shortcut'
      execute: 'open: Example'
      deny: 'return'
```

### 每日签到

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/trmv3-每日签到.yml)

据作者所说重启服务器会丢数据

不过这些配置主要是用来学习的，不会有人直接cv过去用吧

### 商店

:::tip

你需要安装 [CheckItem](../../Front-Plugin/PlaceHolderAPI/CheckItem.md)

并 [开启give和remove](../../Front-Plugin/PlaceHolderAPI/CheckItem.md#启用give和remove) 和 [更改-boolean](../../Front-Plugin/PlaceHolderAPI/outline.md#更改-boolean)

:::

:::warning

使用 最新的 **TrMenu社区版** 不保证旧版本可用性

:::

#### 以物易物

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
      - if papi %checkitem_mat:diamond,amt:2% then {
          papi %checkitem_remove_mat:diamond,amt:2%
          papi %checkitem_give_mat:emerald,amt:3%
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

```yaml
  '写法1':
    display:
      name: '10块钱买2个钻石（限购20个）'
      material: stone
    icons:
      - condition: 'meta set KEY to 限购数据1'
      - condition: 'data set papi %trmenu_meta_KEY% to 20'
    actions:
      - condition: meta set 单价 to 10
      - condition: 'all [ money papi %trmenu_meta_单价% check data get meta get KEY > 0 ]'
        actions:
          # 扣钱
          - 'take-money: %trmenu_meta_单价%'
          # 扣一次限购
          - 'data set papi %trmenu_meta_KEY% to math data get meta get KEY - 1'
          # 给货
          - 'papi %checkitem_give_mat:emerald,amt:3%'
          - tell data get meta get KEY
          - tell papi %vault_eco_balance%
          - tell math - [ data get meta get KEY 1 ]
        deny:
          - tell inline '钱不够，你有{{papi %vault_eco_balance%}}块，还差{{math papi %trmenu_meta_单价% - papi %vault_eco_balance%}}块 {condition=not money meta get 单价}'
          - tell inline '限购次数用完了 {condition=check data get meta get KEY == 0}'
```

#### 全服限购

#### 出售

#### 个人限售

#### 全服限售

