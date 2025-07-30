---
title: SDKMAN
sidebar_position: 4
---

# SDKMAN

SDKMAN 是一个用于管理多个软件开发工具包版本的工具，特别适合需要在不同 Java 版本之间切换的开发者和服务器管理员。

## 什么是 SDKMAN

SDKMAN (Software Development Kit Manager) 可以让你：

- 安装多个 Java 版本
- 在不同版本间快速切换
- 自动管理环境变量
- 支持多种 JDK 发行版

:::tip

SDKMAN 特别适合需要管理多个 Minecraft 服务器的用户，不同版本的服务器可能需要不同的 Java 版本。

:::

## 安装 SDKMAN

### Linux / macOS / WSL

打开终端，执行以下命令：

```bash
curl -s "https://get.sdkman.io" | bash
```

安装完成后，重新打开终端或执行：

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### Windows

SDKMAN 原生不支持 Windows，但可以通过以下方式使用：

1. **WSL (推荐)**: 在 Windows Subsystem for Linux 中安装
2. **Git Bash**: 在 Git Bash 中安装 (可能不稳定)

:::warning

Windows 用户推荐使用 WSL 或直接使用 [AJI 工具](./choose-and-download-and-install-java.md#使用-aji-静默安装-java) 进行
Java 管理。

:::

## 验证安装

```bash
sdk version
```

如果显示版本信息，说明安装成功。

## 基本使用

### 查看可用的 Java 版本

```bash
sdk list java
```

会显示所有可用的 Java 版本和发行版：

```text
================================================================================
Available Java Versions for Linux 64bit
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 Corretto      |     | 21.0.1       | amzn    |            | 21.0.1-amzn
               |     | 17.0.9       | amzn    |            | 17.0.9-amzn
               |     | 11.0.21      | amzn    |            | 11.0.21-amzn
               |     | 8.0.392      | amzn    |            | 8.0.392-amzn
 Dragonwell    |     | 21.0.1       | albba   |            | 21.0.1-albba
               |     | 17.0.9       | albba   |            | 17.0.9-albba
               |     | 11.0.21      | albba   |            | 11.0.21-albba
               |     | 8.0.392      | albba   |            | 8.0.392-albba
 GraalVM CE    |     | 21.0.1       | graalce |            | 21.0.1-graalce
               |     | 17.0.9       | graalce |            | 17.0.9-graalce
 Oracle        |     | 21.0.1       | oracle  |            | 21.0.1-oracle
               |     | 17.0.9       | oracle  |            | 17.0.9-oracle
 Temurin       |     | 21.0.1       | tem     |            | 21.0.1-tem
               |     | 17.0.9       | tem     |            | 17.0.9-tem
               |     | 11.0.21      | tem     |            | 11.0.21-tem
               |     | 8.0.392      | tem     |            | 8.0.392-tem
 Zulu          |     | 21.0.1       | zulu    |            | 21.0.1-zulu
               |     | 17.0.9       | zulu    |            | 17.0.9-zulu
               |     | 11.0.21      | zulu    |            | 11.0.21-zulu
               |     | 8.0.392      | zulu    |            | 8.0.392-zulu
================================================================================
```

### 安装 Java

安装特定版本的 Java：

```bash
# 安装 Java 21 (Temurin)
sdk install java 21.0.1-tem

# 安装 Java 17 (Zulu)
sdk install java 17.0.9-zulu

# 安装 Java 11 (Dragonwell)
sdk install java 11.0.21-albba

# 安装 Java 8 (Corretto)
sdk install java 8.0.392-amzn
```

### 切换 Java 版本

#### 临时切换 (当前会话)

```bash
sdk use java 21.0.1-tem
```

#### 永久切换 (默认版本)

```bash
sdk default java 21.0.1-tem
```

### 查看已安装的版本

```bash
sdk list java | grep installed
```

或者：

```bash
sdk current java
```

### 卸载 Java 版本

```bash
sdk uninstall java 17.0.9-zulu
```

## 实际应用场景

### 场景一：多版本服务器管理

假设你有以下服务器：

- 1.20.4 服务器需要 Java 21
- 1.18.2 服务器需要 Java 17
- 1.12.2 服务器需要 Java 8

```bash
# 为 1.20.4 服务器设置 Java 21
cd /path/to/1.20.4-server
sdk use java 21.0.1-tem
java -jar server.jar

# 为 1.18.2 服务器设置 Java 17
cd /path/to/1.18.2-server
sdk use java 17.0.9-zulu
java -jar server.jar

# 为 1.12.2 服务器设置 Java 8
cd /path/to/1.12.2-server
sdk use java 8.0.392-amzn
java -jar server.jar
```

### 场景二：启动脚本中指定版本

创建启动脚本时可以指定 Java 版本：

```bash
#!/bin/bash
# start-1.20.4.sh

# 设置 Java 版本
export SDKMAN_DIR="$HOME/.sdkman"
source "$SDKMAN_DIR/bin/sdkman-init.sh"
sdk use java 21.0.1-tem

# 启动服务器
java -Xmx4G -Xms4G -jar server.jar nogui
```

## 常用命令

| 命令                             | 说明               |
|--------------------------------|------------------|
| `sdk list java`                | 查看所有可用的 Java 版本  |
| `sdk install java <version>`   | 安装指定版本的 Java     |
| `sdk use java <version>`       | 临时切换到指定版本        |
| `sdk default java <version>`   | 设置默认 Java 版本     |
| `sdk current java`             | 查看当前使用的 Java 版本  |
| `sdk uninstall java <version>` | 卸载指定版本的 Java     |
| `sdk upgrade java`             | 升级所有已安装的 Java 版本 |
| `sdk flush`                    | 清理缓存             |

## 注意事项

:::warning

1. 使用 `sdk use` 命令只在当前终端会话中生效
2. 如果需要在启动脚本中使用，必须先初始化 SDKMAN 环境

:::

:::danger

不要在使用 SDKMAN 管理 Java 的同时手动修改 `JAVA_HOME` 环境变量，这可能导致冲突。

:::

## 故障排除

### 命令找不到

如果提示 `sdk: command not found`：

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### 版本切换不生效

确保在正确的终端会话中执行命令，或使用 `sdk default` 设置全局默认版本。

### 网络问题

如果下载速度慢，可以尝试：

```bash
# 使用国内镜像的 JDK 发行版 (如 Dragonwell)
sdk install java 21.0.1-albba
```
