---
title: 构建插件
sidebar_position: 6
---

# 构建插件

## 概述

在开始构建插件之前,让我们先了解一些基础知识:

### 什么是构建?
构建就是将源代码转换成可以运行的插件(jar文件)的过程。就像把散落的零件组装成一个完整的机器一样。

### 构建工具选择
目前主流的构建工具有两种:
- **Maven**: 更传统,配置简单,学习曲线平缓
- **Gradle**: 更现代,功能强大,但配置相对复杂

**如何选择?**
- 如果你是新手,建议使用 Maven
- 如果项目本身使用 Gradle,就继续用 Gradle
- 如果你需要更灵活的构建配置,可以选择 Gradle

### 构建方式选择
有三种主要的构建方式:
1. **IDEA**: 最推荐的方式,图形界面操作,适合所有人
2. **终端**: 命令行操作,适合熟悉命令行的用户
3. **GitHub Actions**: 自动构建,适合需要频繁更新的项目

## 查看和理解源码

在开始构建之前,我们需要先了解项目结构:

### 1. 识别构建工具
- 如果在源码目录下看到 `pom.xml` 文件 → 使用 Maven
- 如果在源码目录下看到 `build.gradle` 文件 → 使用 Gradle
- 如果在源码目录下看到 `gradlew` 或 `gradlew.bat` → 使用 Gradle Wrapper

### 2. 了解项目结构
```
项目根目录
├── src/                    # 源代码目录
│   ├── main/java          # Java 代码
│   └── main/resources     # 配置文件
├── pom.xml                # Maven 配置文件
└── build.gradle           # Gradle 配置文件
```

### 3. 检查依赖配置
- Maven: 查看 `pom.xml` 中的 `<dependencies>` 部分
- Gradle: 查看 `build.gradle` 中的 `dependencies` 块

## 使用 IDEA 构建(推荐方式)

IDEA 是最友好的构建方式,特别适合新手。

### 1. 导入项目
1. 打开 IDEA
2. 选择 "Open" 或 "Get from VCS"(如果从 GitHub 克隆)![image](https://github.com/user-attachments/assets/1ce19e32-dffd-45d2-9b31-887692d7baf0)
3. 选择或输入项目路径
4. ![image](https://github.com/user-attachments/assets/eda05fa1-8830-4de7-a2c1-4ee8eddc21e8)

5. 等待 IDEA 导入完成

### 2. 处理依赖问题
如果遇到依赖下载失败:
1. 添加国内镜像源(推荐阿里云)
2. 确保网络连接正常
3. 必要时配置代理

### 3. 执行构建
1. **Maven 项目**:
   - 打开右侧 Maven 工具窗口
   - 点击 `clean`(清理旧文件)
   - 点击 `package`(打包)
     ![image](https://github.com/user-attachments/assets/996e072f-c3cb-4dc0-8002-5741fdc82d8c)
     ![image](https://github.com/user-attachments/assets/64e94828-2273-4acb-9258-3608e3c6d046)
   - 在 `target` 文件夹找到生成的 jar 文件

2. **Gradle 项目**:
   - 打开右侧 Gradle 工具窗口
   - 点击 `clean`(清理旧文件)
   - 点击 `build`(构建)
     ![image](https://github.com/user-attachments/assets/86aa0306-61e4-4008-87b0-f4917ecff4a3)
     ![image](https://github.com/user-attachments/assets/57734018-0dd1-4ce6-91dd-e9a27a0c9555)
   - 在 `build/libs` 文件夹找到生成的 jar 文件

## 使用终端构建

在某些情况下,你可能需要使用终端构建:
- 服务器环境下没有图形界面
- 需要编写自动化脚本
- IDEA 出现问题时的备选方案

### Maven 命令
```bash
# 进入项目目录
cd 项目路径

# 执行构建
mvn clean package
```

### Gradle 命令
```bash
# 进入项目目录
cd 项目路径

# Windows
gradlew.bat clean build

# Linux/macOS
./gradlew clean build
```

## 使用 GitHub Actions 自动构建

GitHub Actions 是 GitHub 提供的自动化工具。简单来说,它就像一个机器人,可以帮你自动完成构建工作。每当你更新代码时,它都会自动帮你构建新的插件文件。

### 适用场景
- 需要频繁更新插件
- 多人协作开发
- 想要自动化发布流程
- 不想每次都手动构建

### 配置步骤

1. **创建工作流文件**
   - 在你的项目中创建这个目录: `.github/workflows/`
   - 在该目录下创建文件: `build.yml`
   - 可以直接在 GitHub 网站上操作:
     1. 打开你的项目
     2. 点击 "Actions" 标签
     3. 点击 "New workflow"
     4. 选择 "set up a workflow yourself"

2. **配置构建流程**
   将以下内容复制到 `build.yml` 文件中:
   ```yaml
   # 工作流名称
   name: Build Plugin
   
   # 触发条件
   on:
     push:
       branches: [ main ]    # 当推送代码到 main 分支时触发
     pull_request:
       branches: [ main ]    # 当有人提交 pull request 到 main 分支时触发
     release:
       types: [created]      # 当创建新的发布版本时触发
   
   # 具体任务
   jobs:
     build:
       runs-on: ubuntu-latest    # 使用 Ubuntu 系统运行
       
       steps:
       # 第一步：下载代码
       - name: 下载代码
         uses: actions/checkout@v3
       
       # 第二步：设置 Java 环境
       - name: 设置 Java
         uses: actions/setup-java@v3
         with:
           java-version: '17'    # 使用 Java 17，可以根据需要修改
           distribution: 'temurin'
           
       # 第三步：构建项目
       - name: 使用 Maven 构建
         run: mvn clean package    # 如果是 Maven 项目使用这个
         # 如果是 Gradle 项目，使用：
         # run: ./gradlew build
         
       # 第四步：上传构建文件
       - name: 上传构建文件
         uses: actions/upload-artifact@v3
         with:
           name: Plugin    # 文件名
           path: target/*.jar    # Maven项目用这个路径
           # Gradle项目用：build/libs/*.jar
   ```

3. **添加自动发布配置**
   如果你想在发布新版本时自动附加构建文件,需要在 `build.yml` 文件的最后添加以下内容:
   ```yaml
   # 第五步：发布版本（只在创建新版本时运行）
   - name: 发布版本
     if: startsWith(github.ref, 'refs/tags/')    # 当创建新标签时触发
     uses: softprops/action-gh-release@v1
     with:
       files: target/*.jar    # Maven项目用这个
       # Gradle项目用：build/libs/*.jar
     env:
       GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # 使用 GitHub 自动提供的 token
   ```

   **配置说明:**
   - `if: startsWith(github.ref, 'refs/tags/')`: 表示只在创建新标签(tag)时才执行这一步
   - `files`: 指定要上传的文件
   - `GITHUB_TOKEN`: GitHub 会自动提供这个 token,用于验证权限

### 发布新版本的完整步骤

1. **准备发布**
   - 确保代码已经完成修改并测试
   - 确保所有更改都已提交到 GitHub

2. **创建新版本**
   1. 打开你的 GitHub 项目页面
   2. 点击右侧的 "Releases"
   3. 点击 "Create a new release"
   4. 在 "Choose a tag" 中输入版本号(例如: `v1.0.0`)
      - 如果标签不存在,会自动创建
      - 版本号建议使用 `v` 开头,如 `v1.0.0`, `v1.0.1`
   5. 在 "Release title" 中输入版本标题
   6. 在描述框中详细写明:
      - 新增了什么功能
      - 修复了什么问题
      - 有什么重要变化
   7. 如果是测试版本,可以勾选 "This is a pre-release"
   8. 点击 "Publish release" 发布

3. **等待自动构建**
   1. 发布后,GitHub Actions 会自动开始构建
   2. 点击项目顶部的 "Actions" 标签查看进度
   3. 等待构建完成(通常需要 3-5 分钟)

4. **确认发布结果**
   1. 返回 "Releases" 页面
   2. 找到你刚才发布的版本
   3. 检查是否已自动添加了构建好的插件文件
   4. 文件名通常是 `项目名-版本号.jar`

5. **处理可能的问题**
   如果构建文件没有自动添加到发布页面:
   - 检查 Actions 页面的构建日志
   - 确认 `build.yml` 文件配置正确
   - 验证文件路径是否正确:
     - Maven: `target/*.jar`
     - Gradle: `build/libs/*.jar`
   - 检查仓库的 Actions 权限设置

### 发布版本的注意事项

1. **版本号规范**
   - 建议遵循语义化版本规范(Semantic Versioning)
   - 格式: `主版本号.次版本号.修订号`
   - 例如: `v1.0.0`, `v1.1.0`, `v1.1.1`

2. **更新说明的写法**
   - 使用清晰的分类,如:
     ```
     新增功能:
     - 添加了xxx功能
     - 新增了xxx选项
     
     问题修复:
     - 修复了xxx问题
     - 解决了xxx错误
     
     其他改动:
     - 优化了xxx性能
     - 更新了xxx依赖
     ```

3. **测试版本**
   - 如果是测试版本,建议:
     1. 在版本号后加上 `-beta` 或 `-alpha`
     2. 勾选 "This is a pre-release"
     3. 在说明中注明这是测试版本

4. **文件检查**
   - 发布完成后检查:
     1. 文件是否成功上传
     2. 文件大小是否正常
     3. 文件是否可以下载

### 使用方法

1. **日常使用**
   - 直接推送代码到 GitHub
   - GitHub Actions 会自动开始构建
   - 在 Actions 页面可以看到构建过程
   - 构建完成后可以下载生成的文件

2. **发布新版本**
   1. 在 GitHub 项目页面点击 "Releases"
   2. 点击 "Create a new release"
   3. 填写版本号(如 v1.0.0)
   4. 填写更新说明
   5. 点击 "Publish release"
   6. 等待自动构建完成
   7. 构建好的插件文件会自动添加到发布页面

### 查看构建结果

1. **查看构建过程**
   - 点击项目的 "Actions" 标签
   - 查看最新的构建记录
   - 如果有红色 ❌ 表示失败
   - 如果有绿色 ✅ 表示成功

2. **下载构建文件**
   - 点击成功的构建记录
   - 在页面底部找到 "Artifacts" 部分
   - 点击 "Plugin" 下载构建好的文件

### 常见问题

1. **构建失败**
   - 检查 Actions 日志中的错误信息
   - 确认 Java 版本是否正确
   - 验证构建命令是否正确(Maven/Gradle)

2. **找不到构建文件**
   - 检查文件路径是否正确
   - Maven: `target/*.jar`
   - Gradle: `build/libs/*.jar`

3. **权限问题**
   - 确保仓库启用了 Actions 功能
   - 检查仓库的 Actions 权限设置
   - 必要时联系仓库管理员

## 常见问题解决

### 1. 构建失败
- 检查依赖配置是否正确
- 确保 Java 版本匹配
- 查看错误日志定位问题

### 2. 依赖下载慢
- 配置国内镜像源
- 使用代理加速
- 检查网络连接

### 3. 版本兼容
- 确保 Java 版本正确
- 检查插件 API 版本
- 验证依赖版本兼容性

## 小贴士
1. 始终保持项目结构清晰
2. 定期清理构建文件(clean)
3. 保存好构建配置文件
4. 记录常用的构建命令
5. 建议使用版本控制(Git)管理代码
