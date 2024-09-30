---
title: 插件安装教程
sidebar_position: 1
---
:::info

作者：[星凌QAQ](https://github.com/XingLingQAQ)

:::

# 插件安装教程

## 插件的结构

LeviLamina 的插件是以文件夹的格式存在的。通常插件文件夹中包含以下内容：

```c
插件文件夹
├─manifest.json             // 插件元数据文件，该文件必须存在并格式正确才能被 LeviLamina 识别
├─(插件配置文件和数据库)... // 插件生成的配置文件和数据库等，大多数插件的配置文件名叫config.json，并以一个文件夹或一个 .db 或 .json 后缀文件作为数据库
├─(插件代码或二进制文件)... // 插件源代码，通常是 .js、.lua、.dll 后缀的文件。不要删除，修改或重命名文件，否则可能导致插件无法运行！
```

通常情况下，你不需要手动修改 `manifest.json` 这个文件，因为插件作者会将它事先配置好。如果有特殊插件需要手动配置这个文件，该插件文档应该会给出相应教程。

## 使用 Lip 安装插件

如果你还没有安装 Lip，可以参考 [上一章的教程](./LeviLamina-Install.md#准备工作-安装-lip) 。

要使用 Lip 安装插件，你必须确保该插件**支持通过 Lip 安装** 。如果插件文档没有写明任何使用 Lip 安装的方法或命令，你就不应该使用 Lip 安装该插件。

通常情况下，一个 Lip 插件的安装命令会像这样：

```shell
lip install <一个URL>
```

### 通过命令安装插件

在服务端根目录(包含 `bedrock_server_mod.exe` 的文件夹)打开 powershell，执行插件使用说明给出的 Lip 安装命令，

### 通过 LipUI 安装插件

TODO

随后插件将在服务器下次启动时被加载。要想让正在运行的服务器加载该插件，你必须**重启服务器** 。

## 手动安装插件

### 原生(native)插件

解压并整理插件文件夹，确保其结构符合上文结出的插件结构。**有时插件压缩包解压后里面会套一层文件夹，这点要格外留意。**

将插件文件夹放入服务器的 `plugins` 文件夹，它将在服务器下次启动时被加载。要想让正在运行的服务器加载该插件，你必须**重启服务器** 。

### LSE 插件

要安装 LSE 插件，你的服务器必须安装了 [Legacy Script Engine](./legacy-script-engine.md) 作为前置。

#### quick-js、lua、python 单文件

指只有一个 .js/.lua/.py 代码文件的插件。

首先将插件文件放入 `plugins` 文件夹，然后启动或重启一次服务器。此时服务器将警告 `WARN [legacy-script-engine-quickjs] Legacy plugins have been migrated， please restart the server to load them!`。**此时插件并未被加载，你需要再次重启服务器** ，之后插件就能加载了。

#### nodejs、python 多文件

指 .llplugin 后缀名或解压后为一个文件夹的 LSE 插件。

如果插件为文件夹，那么检查该文件夹结构。如果其中包含 `manifest.json`，直接将其放入 `plugins` 文件夹即可。随后它将在服务器下次启动时被加载。要想让正在运行的服务器加载该插件，你必须**重启服务器** 。

如果该插件为文件夹但不包含 `manifest.json`，你需要将其放入 `plugins` 文件夹后，按上文 quickjs、lua、python 单文件的操作方法进行操作。

如果该插件为 .llplugin 后缀名的单个文件，你需要将其后缀名改成 .zip 并解压，之后按照上面两种方法进行操作。
