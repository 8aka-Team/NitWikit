---
title: 概述
sidebar_position: 2
---

# 概述

## 什么是构建？
构建就是将源代码转换成可以运行的插件（jar文件）的过程。就像把散落的零件组装成一个完整的机器一样。

## 选择合适的构建方式
根据你的情况，可以选择以下三种方式之一：

1. **使用 IDEA（推荐）**
   - 适合：新手，不熟悉命令行的用户
   - 优点：图形界面，操作直观
   - 缺点：需要安装 IDEA

2. **使用终端**
   - 适合：熟悉命令行的用户，服务器环境
   - 优点：轻量级，适合自动化
   - 缺点：需要记忆命令

3. **使用 GitHub Actions**
   - 适合：需要自动化发布的项目
   - 优点：全自动化，不需要本地构建
   - 缺点：需要了解 GitHub 相关知识

## 选择构建工具
项目可能使用以下两种构建工具之一：

1. **Maven**
   - 特点：配置简单，学习曲线平缓
   - 适合：新手，小型项目
   - 配置文件：`pom.xml`

2. **Gradle**
   - 特点：功能强大，配置灵活
   - 适合：大型项目，需要复杂构建逻辑
   - 配置文件：`build.gradle`

## 识别项目类型

### 如何识别？
在项目根目录下查看：

1. **如果看到 `pom.xml`**
   - 这是 Maven 项目
   - 构建产物在 `target` 目录
   - 使用 `mvn` 命令构建

2. **如果看到 `build.gradle`**
   - 这是 Gradle 项目
   - 构建产物在 `build/libs` 目录
   - 使用 `gradle` 命令构建

3. **如果看到 `gradlew` 或 `gradlew.bat`**
   - 这是带有 Gradle Wrapper 的 Gradle 项目
   - 特点：
     - 不需要安装 Gradle
     - 自动下载正确版本
     - 所有人使用相同版本

### 项目结构说明

#### Maven项目结构

```text
项目根目录
├── src/                                       # 源代码目录
│   ├── main/                                  # 主要代码目录
│   │   ├── java/                              # Java源代码
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── plugin/
│   │   │               ├── Main.java          # 插件主类
│   │   │               ├── commands/          # 命令类
│   │   │               ├── listeners/         # 监听器类
│   │   │               └── utils/             # 工具类
│   │   └── resources/                         # 资源文件目录
│   │       ├── plugin.yml                     # 插件配置文件
│   │       ├── config.yml                     # 插件默认配置
│   │       └── messages/                      # 语言文件
│   └── test/                                  # 测试代码目录
│       ├── java/                              # 测试源代码
│       └── resources/                         # 测试资源
├── target/                                    # 构建输出目录
├── pom.xml                                    # Maven项目配置文件
└── README.md                                  # 项目说明文件
```

#### Gradle项目结构

```text
项目根目录
├── src/                                       # 源代码目录
│   ├── main/                                  # 主要代码目录
│   │   ├── java/                              # Java源代码
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── plugin/
│   │   │               ├── Main.java          # 插件主类
│   │   │               ├── commands/          # 命令类
│   │   │               ├── listeners/         # 监听器类
│   │   │               └── utils/             # 工具类
│   │   ├── kotlin/                            # Kotlin源代码（如果使用）
│   │   └── resources/                         # 资源文件目录
│   │       ├── plugin.yml                     # 插件配置文件
│   │       ├── config.yml                     # 插件默认配置
│   │       └── messages/                      # 语言文件
│   └── test/                                  # 测试代码目录
│       ├── java/                              # 测试源代码
│       ├── kotlin/                            # Kotlin测试代码
│       └── resources/                         # 测试资源
├── build/                                     # 构建输出目录
│   └── libs/                                  # 构建产物（jar文件）
├── gradle/                                    # Gradle包装器目录
│   └── wrapper/
├── build.gradle                               # Gradle构建脚本
├── settings.gradle                            # Gradle设置文件
├── gradlew                                    # Gradle包装器脚本(Unix)
├── gradlew.bat                                # Gradle包装器脚本(Windows)
└── README.md                                  # 项目说明文件
```

### 重要文件说明

#### 1. 配置文件
- **plugin.yml**：插件的核心配置文件
  ```yaml
  name: MyPlugin            # 插件名称
  version: 1.0.0           # 插件版本
  main: com.example.plugin.Main  # 主类路径
  api-version: '1.19'      # API版本
  commands:                # 命令配置
    mycmd:
      description: 示例命令
      usage: /mycmd <参数>
  ```

- **config.yml**：插件的默认配置文件
  ```yaml
  settings:
    debug: false
    language: zh_CN
  features:
    feature1: true
    feature2: false
  ```

#### 2. 构建配置文件
- **Maven (pom.xml)**：
  ```xml
  <dependencies>
      <dependency>
          <groupId>io.papermc.paper</groupId>
          <artifactId>paper-api</artifactId>
          <version>1.19.4-R0.1-SNAPSHOT</version>
          <scope>provided</scope>
      </dependency>
  </dependencies>
  ```

- **Gradle (build.gradle)**：
  ```groovy
  dependencies {
      compileOnly 'io.papermc.paper:paper-api:1.19.4-R0.1-SNAPSHOT'
  }
  ```
