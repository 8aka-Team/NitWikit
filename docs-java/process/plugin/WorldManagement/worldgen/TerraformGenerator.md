---
title: TerraformGenerator
sidebar_position: 8
sidebar_label: TerraformGenerator
---

<!--markdownlint-disable line-length-->

# TerraformGenerator

![TerraformGenerator 地形展示](https://img.fastmirror.net/s/2024/08/03/66ad8d09b6679.png)

<div align="center">
<img src="https://img.fastmirror.net/s/2024/08/03/66ad8fef89d62.png" width="45%" style={{marginRight: '20px'}} />
<img src="https://img.fastmirror.net/s/2024/08/03/66ad8fea5ff5a.png" width="45%" />
</div>

## 介绍

TerraformGenerator 是一个旨在增强原版 Minecraft 世界生成体验的插件。这个插件的特点在于它在保持可获得原 Minecraft 世界所有可获取的物品的前提下，探索一个由插件生成的更为丰富或独特的游戏世界。

插件的主要特点包括：

- 生成真实的地形，包括山脉、峡谷、河流等
- 丰富的生物群系，每个生物群系都有独特的特征
- 支持自定义结构生成
- 包含多种预设的人工建筑，如城市、村庄等
- 可配置的世界生成参数
- 优化的性能，支持大型服务器使用

## 安装

1. 从 SpigotMC 或 MineBBS 下载最新版本的 TerraformGenerator
2. 将插件放入服务器的 `plugins` 文件夹中
3. 重启服务器
4. 插件会自动生成配置文件

## 使用方法

### 基础命令

- `/terraform new <世界名称>` - 创建新的 TerraformGenerator 世界
- `/terraform tp <世界名称>` - 传送到指定的世界
- `/terraform list` - 列出所有 TerraformGenerator 世界
- `/terraform biome` - 显示当前位置的生物群系信息
- `/terraform populate` - 重新生成当前区块的结构
- `/terraform version` - 显示插件版本信息

### 世界预生成

为了获得更好的服务器性能，建议预生成世界：

```bash
/terraform pregen <世界名称> <半径> [线程数]
```

## 效果展示

<div align="center">

![TerraformGenerator 效果图](https://img.fastmirror.net/s/2024/08/03/66ad90e5a1d96.png)
![TerraformGenerator 效果图](https://img.fastmirror.net/s/2024/08/03/66ad931238bb8.png)
![TerraformGenerator 效果图](https://img.fastmirror.net/s/2024/08/03/66ad93168328f.png)
![TerraformGenerator 效果图](https://img.fastmirror.net/s/2024/08/03/66ad90e9d729f.png)
![TerraformGenerator 效果图](https://img.fastmirror.net/s/2024/08/03/66ad90e981d9a.png)

</div>

## 配置文件

配置文件位于 `plugins/TerraformGenerator/config.yml`

## 权限列表

<details>
  <summary>点击展开权限列表</summary>

```yaml
permissions:
  terraform.*:
    description: "允许使用所有 TerraformGenerator 命令"
    children:
      terraform.command.*: true
  terraform.command.new:
    description: "允许创建新世界"
    default: op
  terraform.command.tp:
    description: "允许传送到 TerraformGenerator 世界"
    default: op
  terraform.command.list:
    description: "允许查看世界列表"
    default: op
  terraform.command.biome:
    description: "允许查看生物群系信息"
    default: op
  terraform.command.pregen:
    description: "允许预生成世界"
    default: op
```

</details>

## 链接

:::info

`SpigotMC` https://www.spigotmc.org/resources/terraform-generator.75132/

`GitHub` https://github.com/Hex27/TerraformGenerator

`MineBBS` https://www.minebbs.com/resources/terraformgenerator.9076/

:::

## Bstats

[![](https://bstats.org/signatures/bukkit/TerraformGenerator.svg)](https://bstats.org/plugin/bukkit/TerraformGenerator/8591)
