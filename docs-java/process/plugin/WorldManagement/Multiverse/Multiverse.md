---
sidebar_position: 4
slug: /Multiverse
sidebar_label: 多世界 - Multiverse
---

# Multiverse

![](_images/multiverse2-long.png)

<a href="https://modrinth.com/plugin/multiverse-core">
  <img src="https://cdn.jsdmirror.cn/npm/@intergrav/devins-badges@3/assets/cozy/available/modrinth_vector.svg" class="stylish-image" alt="Modrinth" />
</a>
<a href="https://hangar.papermc.io/Multiverse/Multiverse-Core">
  <img src="https://cdn.jsdmirror.cn/npm/@intergrav/devins-badges@3/assets/cozy/available/hangar_vector.svg" class="stylish-image" alt="Hangar" />
</a>
<a href="https://dev.bukkit.org/projects/multiverse-core">
  <img src="https://cdn.jsdmirror.cn/npm/@intergrav/devins-badges@3/assets/cozy/supported/bukkit_vector.svg" class="stylish-image" alt="Bukkit" />
</a>
<a href="https://www.spigotmc.org/resources/multiverse-core.390">
  <img src="https://cdn.jsdmirror.cn/npm/@intergrav/devins-badges@3/assets/cozy/supported/spigot_vector.svg" class="stylish-image" alt="Spigot" />
</a>



<a href="https://github.com/DecentSoftware-eu/DecentHolograms/releases">
  <img src="https://img.shields.io/github/v/release/Multiverse/Multiverse-Core" class="stylish-image" alt="Release" />
</a>
<a href="https://discord.gg/NZtfKky">
  <img src="https://img.shields.io/discord/325459248047980545?label=discord&logo=discord" class="stylish-image" alt="Discord" />
</a>
<a href="https://patreon.com/dumptruckman">
  <img src="https://img.shields.io/badge/donate-patreon-white?logo=patreon" class="stylish-image" alt="Support us on Patreon" />
</a>
<a href="https://github.com/Multiverse/Multiverse-Core/blob/main/LICENSE.md">
  <img src="https://img.shields.io/github/license/Multiverse/Multiverse-Core?color=blue" class="stylish-image" alt="License" />
</a>

> 知名老牌多世界插件。可以新建，删除，导入世界（维度）等。

## 扩展

- [Multiverse-NetherPortals](https://github.com/Multiverse/Multiverse-NetherPortals) -> 允许玩家创建能够带他们去指定世界的地狱传送门！
- [Multiverse-Portals](https://github.com/Multiverse/Multiverse-Portals) -> 创建传送到指定地点的传送门。
- [Multiverse-Inventories](https://github.com/Multiverse/Multiverse-Inventories) -> 将玩家背包按世界隔离。
- [Multiverse-SignPortals](https://github.com/Multiverse/Multiverse-SignPortals) -> 告示牌传送！

## 链接

:::info

`官网` https://mvplugins.org

`Bukkit` https://dev.bukkit.org/projects/multiverse-core

`SpigotMC` https://www.spigotmc.org/resources/.390

`Hangar` https://hangar.papermc.io/Multiverse/Multiverse-Core

`Modrinth` https://modrinth.com/plugin/multiverse-core

`MineBBS` https://www.minebbs.com/resources/.8889

`GitHub` https://github.com/Multiverse/Multiverse-Core

`文档` https://github.com/Multiverse/Multiverse-Core/wiki

`插件百科` https://mineplugin.org/Multiverse-Core

:::

~~值得一提的是，在 [GitHub](https://github.com/Multiverse/Multiverse-Core/releases) 上的版本比在 SpigotMC 上能下载到的版本要新。~~

开发组貌似想起来自己曾在 SpigotMC 发过此资源了

## 禁止生成默认世界

要这么做的原因无非是因为一个服务器可能被作为大厅服务器，或者小游戏服务器无须其它世界。

- 主世界
  各类服务端均无法禁用。~~禁用了还玩什么？~~
- 下界
  在原版的配置文件 `server.properties` 中，将 `allow-nether` 设置为 `false`。
- 末地
  打开 Bukkit 配置文件 `bukkit.yml`，将 `settings` 中的 `allow-end` 设置为 `false`。

在 `/plugins/Multiverse-Core/config.yml` 中，有这样的配置：

```yaml
  world-name-format:
    nether: '%overworld%_nether'
    end: '%overworld%_the_end'
```

这里规定了默认的世界名称格式，只需要更改这里的配置，或者在禁用了默认世界后创建名称不符合这里格式的世界，这样就可以间接实现对地狱门和末地门
的禁用，因为它们不再与主世界有关联，因此地狱门和末地门会失效（即使它们可以被激活）。

## Folia

[Multiverse-Core_Zeta](https://github.com/RenYuan-MC/Multiverse-Core_Zeta) 是 Multiverse-Core 的一个 fork，支持 Folia
,你可以[在这](https://dl.8aka.org/plugins/multiverse-core-4.3.14-zeta_folia-experimental.jar) 下载预编译版本，或自行编译

## 崩服漏洞

> Fix issue where special chars cause PatternSyntaxException leading to a server crash.

Multiverse-Core [4.3.1](https://www.spigotmc.org/resources/multiverse-core.390/update?update=424085) 版本已经修复此问题，请更新到最新版

如果你因为某些原因不能更新到最新版，可以使用修复补丁

补丁 (只需安装其中一个)：

- [Multiverse-Patches](https://www.spigotmc.org/resources/.96390)
- [Multiverse-Core Fix](https://www.spigotmc.org/resources/.70218)

## Bstats

[![](https://bstats.org/signatures/bukkit/Multiverse-Core.svg)](https://bstats.org/plugin/bukkit/Multiverse-Core/7765)
