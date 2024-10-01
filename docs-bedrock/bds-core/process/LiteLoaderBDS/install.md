---
title: LiteLoaderBDS 安装教程
sidebar_position: 1
---

# LiteLoaderBDS 安装教程

## 下载安装 BDS

LiteLoaderBDS 不会自动下载安装对应版本 BDS，你需要手动寻找和下载相应版本的旧版 BDS。

除了一些第三方网站提供的存档以外，你可以通过这种方式下载到旧版 BDS：将 `https://minecraft.azureedge.net/bin-win/` 与 BDS 压缩包文件名拼接起来。
例如要下载1.20.30.02，你就可以在浏览器中访问 `https://minecraft.azureedge.net/bin-win/bedrock-server-1.20.30.02.zip`

## 下载 LiteLoaderBDS

:::warning

LiteLoaderBDS 仅适配了 BDS 的1.20.32 及以下版本。对于更高版本的 BDS 需要使用 [LeviLamina](../LeviLamina/LeviLamina.md) 加载器。
对于 1.20.40 - 1.20.51 版本，你需要使用其他加载器。如果你只需要兼容 1.20.40 - 1.20.51 的客户端进服，你可以选用 BDS 1.20.32、最新版 LiteLoader 和 Glacie 插件的方案。

:::

前往 https://github.com/LiteLDev/LiteLoaderBDSv2/releases 下载 BDS 版本对应的发行版。你可以在更新日志的 BDS 标签中找到该发行版适配的 BDS 版本。
例如 2.14.1、2.14.0 的 BDS 标签写着 1.20.0.01，证明该发行版适配了 BDS 的 1.20.0.01 版本。

## 安装 LiteLoaderBDS

下载好 `LiteLoaderBDS.zip` 后，解压该压缩包，其中包含四个文件/文件夹：

- LiteLoader.dll
- LLPreLoader.dll
- PreEditor.exe
- plugins

将这四个文件放进 BDS 的根目录。

随后，双击运行 PreEditor.exe。该程序会弹出一个命令行窗口，当其中显示 **Done** 的时候，证明安装成功。

## 运行带有 LiteLoaderBDS 加载器的 BDS

双击 `bedrock_server_mod.exe` 来运行。不要运行 `bedrock_server.exe`。
