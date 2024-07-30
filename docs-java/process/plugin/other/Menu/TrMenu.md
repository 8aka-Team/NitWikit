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

**目前**还不推荐使用

文档不全，部分案例付费入群获取，但是目前不对外出售

别人备份的源码 1.0.3版本 https://github.com/inrhor/Invero

作者自己发的 1.0.8版本 也是老板本 https://gitlab.com/Arasple/Invero

~~文档 https://legacy.invero.fining.io/~~

文档地址改了，我就不放新地址了

# 案例

## TrMenu v3

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

## Invero

### 每日签到

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/inv-每日签到.yml)

### tpa选人菜单

[查看配置](https://github.com/postyizhan/NitWikit/blob/main/docs-java/process/plugin/other/Menu/demo/inv-tpa选人菜单.yml)
