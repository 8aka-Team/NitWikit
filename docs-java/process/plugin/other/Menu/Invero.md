---
sidebar_position: 5
---

# Invero

Invero 俗称 TrMenu v4

**目前**还不推荐使用

文档不全，部分案例付费入群获取，但是目前不对外出售

别人备份的源码 1.0.3版本 https://github.com/inrhor/Invero

作者自己发的 1.0.8版本 也是老板本 https://gitlab.com/Arasple/Invero

~~文档 https://legacy.invero.fining.io/~~

文档地址改了，我就不放新地址了

## 案例

### 妙妙写法

#### 子图标写true

与 [这里](TrMenu.md#子图标写true) 相同的原理

#### 子图标写动作

与 [这里](TrMenu.md#子图标写动作) 相同的原理

#### 生成器配置多行lore

```yaml
generator:
  output:
    material: 'NAME_TAG'
    # ! 重要！ 开启lore解析增强
    enhancedLore: true
  elements:
  - name: 'demo1'
    lore: |-
      lore1
      \n lore2
  - name: 'demo2'
    lore: |-
      lore1
      \n lore2
```

#### vault经济与PlayerPoints经济
```yaml
  'A':
    head: stone
    name: 给予扣除检测vault经济
    action:
      money give 100
      money take 100
      if money has 300 then tell >300 else tell <300
  'B':
    head: stone
    name: 给予扣除检测PlayerPoints经济
    action:
      points give 100
      points take 100
      if points has 300 then tell >300 else tell <300
```

#### ctx与persist与&
```yaml
items:
  '1':
    head: stone
    name: '菜单语境'
    # 这只是临时的，在菜单关闭后就会消失
    action:
      context set awa to 1
      tell context get awa
      tell &awa
  '2':
    head: stone
    name: '玩家持久变量'
    # 持久的，关闭菜单也不会消失

    # 单一个体玩家的独立持久变量
    # 有点像是papi
    # 玩家A的名为qwq的变量存储1 get得到会是1
    # 玩家B的名为qwq的变量存储2 get得到会是2
    lore:
      - 'persist设置后不会立即更新kether语境中的变量 但context会'
      - '所以你可以看到persist底下一个是输出2一个输出2-persist'
    action:
      tell ---context---
      context set player@qwq to 2
      tell context get player@qwq
      tell &player@qwq

      tell ---persist---
      persist set qwq to 2-persist by PLAYER
      tell persist get qwq by PLAYER
      tell &player@qwq
  '3':
    head: stone
    name: '全局变量'
    # 持久的

    # 比如变量www里面存储了 1
    # 那么不管哪个玩家读取www这个全局都是读出1
    # 你把变量www里面存储改成 2
    # 那么不管哪个玩家读取www这个全局都是读出2
    lore:
      - '和玩家持久变量写的lore一个理'
    action:
      tell ---context---
      context set global@www to 3
      tell context get global@www
      tell &global@www

      tell ---persist---
      persist set www to 3-persist by global
      tell persist get www by global
      tell &global@www
```

#### 单面板配置玩家背包

```yaml
menu:
  title: '单面板配置玩家背包'
  # 虚拟容器 建议开启
  virtual: true
  # 隐藏玩家背包 必须开启
  hide-player-inventory: true

layout:
  - '         '
  - ' A       '
  - '         '
  - '         '
  - '         '
  - '         '
  - 'BBBBBBBBB'
  - '         '
  - '         '
  - '         '

icons:
  'A':
    material: iron_ingot
  'B':
    material: stone
    name: '玩家背包'
```

### 每日签到

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/inv-每日签到.yml)

### tpa选人菜单

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/inv-tpa选人菜单.yml)

### 称号系统

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/inv-称号系统.yml)

### 商店

:::tip

你需要安装 [CheckItem](../../Front-Plugin/PlaceHolderAPI/CheckItem.md)

并 [开启give和remove](../../Front-Plugin/PlaceHolderAPI/CheckItem.md#启用give和remove) 和 [更改-boolean](../../Front-Plugin/PlaceHolderAPI/outline.md#更改-boolean)

:::

不想写，以后再说8，你可以先照着trm那边去学

#### 以物易物

#### 购买

#### 个人限购

#### 全服限购

#### 出售

#### 个人限售

#### 全服限售



