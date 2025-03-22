---
title: IrisWorldGen
sidebar_position: 7
sidebar_label: IrisWorldGen
---

<!--markdownlint-disable line-length-->

# IrisWorldGen

![Iris](https://s1.ax1x.com/2022/07/07/jd5y0s.png)

## 效果展示

![Iris 地形展示](https://s1.ax1x.com/2022/07/07/jd55X4.png)

<div align="center">
<img src="https://s1.ax1x.com/2022/07/07/jd5onJ.png" width="100%" />

<div style={{marginTop: '20px'}}>
<img src="https://s1.ax1x.com/2022/07/07/jd577R.png" width="45%" style={{marginRight: '20px'}} />
<img src="https://s1.ax1x.com/2022/07/07/jd5TB9.png" width="45%" />
</div>
</div>

## 介绍

Iris 是一个功能齐全的地形生成器插件，适用于 Paper 服务端（不支持 Spigot）。这个插件可以让你的 Minecraft 世界变得更加丰富多彩，支持 1.17 以上版本。

插件的主要特点：
- 预设世界已有 100 多个生物群落，2000 多个结构和丰富的细节
- 支持多核心并行生成世界，生成速度快
- 完全可自定义的"项目"系统，可以制作属于自己的生物群落、区域、结构和装饰
- 内置 Studio 模式，可以让你一边设计一边预览地形效果
- 支持热重载，修改配置后无需重启服务器
- 可以使用指令快速寻找生物群系
- 可以在 GitHub 上分享你的地形项目

## 地形特性

Iris 的地形生成系统非常强大：
- 无限制的 3D 生物群系
- 丰富的洞穴生物群系
- 特色的海岸、海洋和陆地生物群系
- 自定义山脉和生物群系分布
- 完全的方块状态控制
- 超过 50 种噪声生成器可供选择
- 支持自定义结构和装饰物

## 安装

1. 确保你使用的是 Paper 服务端（1.17 及以上版本）
2. 从 SpigotMC 下载最新版本的 Iris
3. 将插件放入服务器的 `plugins` 文件夹中
4. 重启服务器
5. 插件会自动生成配置文件和默认维度包

## 使用方法

### 基础命令

- `/iris create <世界名称> <维度包>` - 创建新的 Iris 世界
- `/iris tp <世界名称>` - 传送到指定的世界
- `/iris list` - 列出所有可用的维度包
- `/iris worlds` - 显示所有 Iris 世界
- `/iris biome goto <生物群系>` - 快速前往指定生物群系

### 世界预生成

为了获得更好的游戏体验，建议预生成世界：

```bash
/iris pregen start <世界名称> -r <半径> -t <线程数>
/iris pregen pause - 暂停预生成
/iris pregen resume - 继续预生成
/iris pregen stop - 停止预生成
```

## 配置文件

配置文件位于 `plugins/Iris/config.yml`

<details>
  <summary>点击展开配置示例</summary>

```yaml
# Iris 主配置文件

# 性能设置
performance:
  # 区块生成线程数
  threads: 4
  # 预加载区块半径
  preload-radius: 3
  
# 世界设置
worlds:
  # 默认维度包
  default-pack: "overworld"
  # 是否在服务器启动时加载所有世界
  load-all-worlds: true
  
# 兼容性设置
compatibility:
  # 是否启用 MythicMobs 支持
  mythicmobs: true
  # 是否启用 PlaceholderAPI 支持
  placeholderapi: true
```

</details>

## 权限列表

<details>
  <summary>点击展开权限列表</summary>

```yaml
permissions:
  iris.*:
    description: "允许使用所有 Iris 命令"
    children:
      iris.command.*: true
  iris.command.create:
    description: "允许创建新世界"
    default: op
  iris.command.tp:
    description: "允许传送到 Iris 世界"
    default: op
  iris.command.list:
    description: "允许查看维度包列表"
    default: op
  iris.command.worlds:
    description: "允许查看世界列表"
    default: op
  iris.command.pack:
    description: "允许管理维度包"
    default: op
  iris.command.studio:
    description: "允许使用 Iris Studio"
    default: op
```

</details>

## 维度包开发

Iris 支持自定义维度包开发，你可以创建自己的：
- 生物群系
- 地形生成器
- 结构和建筑
- 洞穴系统
- 战利品表
- 实体生成规则

详细的开发文档请参考 [Iris 官方文档](https://docs.volmit.com/iris)。

## 链接

:::info

`SpigotMC` https://www.spigotmc.org/resources/iris-dimension-engine.84586/

`官方文档` https://docs.volmit.com/iris

`Discord` https://discord.gg/volmit

:::

## Bstats

[![](https://bstats.org/signatures/bukkit/Iris.svg)](https://bstats.org/plugin/bukkit/Iris/9089)
