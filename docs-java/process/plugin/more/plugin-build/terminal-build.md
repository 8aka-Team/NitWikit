---
title: 使用终端
sidebar_position: 5
---

# 使用终端

## 环境准备

### 1. 安装JDK
1. **Windows**：
   - 从[JDK选择](https://nitwikit.8aka.org/preparation/java/choose-and-download-and-install-java)选择并下载jdk
   - 按照提示完成安装
   - 配置[环境变量](https://nitwikit.8aka.org/preparation/java/environment)
   - 验证安装：
     1. 按 `Win + R`，输入 `cmd` 打开终端
     2. 输入 `java -version`
     3. 如果看到类似下面的输出，说明安装成功：
        ```bash
        java version "1.8.0_301"
        Java(TM) SE Runtime Environment (build 1.8.0_301-b09)
        Java HotSpot(TM) 64-Bit Server VM (build 25.301-b09, mixed mode)
        ```

2. **Linux**：
   ```bash
   # Ubuntu/Debian系统
   sudo apt update                    # 更新软件源
   sudo apt install openjdk-8-jdk     # 安装JDK 8
   
   # CentOS系统
   sudo yum install java-1.8.0-openjdk-devel
   
   # 验证安装
   java -version
   ```

### 2. 安装构建工具

1. **Maven**：
   - **Windows**：
     1. 访问[Maven官网](https://maven.apache.org/download.cgi)下载最新版本
     2. 下载 `apache-maven-x.x.x-bin.zip`（x.x.x是版本号）
     3. 解压到合适位置（建议：`C:\Program Files\Apache\maven`）
     4. 配置[环境变量](https://nitwikit.8aka.org/preparation/java/environment)：
        - 新建系统变量 `MAVEN_HOME`，值为Maven解压目录
        - 在 `Path` 变量末尾添加 `;%MAVEN_HOME%\bin`
     5. 验证安装：
        ```bash
        mvn -version
        ```
   
   - **Linux**：
     ```bash
     # Ubuntu/Debian系统
     sudo apt install maven
     
     # CentOS系统
     sudo yum install maven
     
     # 验证安装
     mvn -version
     ```

2. **Gradle**（可选，如果项目使用Gradle）：
   - **Windows**：
     1. 访问[Gradle官网](https://gradle.org/releases/)下载最新版本
     2. 下载 `gradle-x.x.x-bin.zip`（x.x.x是版本号）
     3. 解压到合适位置（建议：`C:\Program Files\Gradle`）
     4. 配置环境变量：
        - 新建系统变量 `GRADLE_HOME`，值为Gradle解压目录
        - 在 `Path` 变量末尾添加 `;%GRADLE_HOME%\bin`
     5. 验证安装：
        ```bash
        gradle -version
        ```
   
   - **Linux**：
     ```bash
     # 使用SDKMAN安装（推荐）
     curl -s "https://get.sdkman.io" | bash     # 安装SDKMAN
     source "$HOME/.sdkman/bin/sdkman-init.sh"  # 初始化SDKMAN
     sdk install gradle                         # 安装Gradle
     
     # 验证安装
     gradle -version
     ```

## Maven构建步骤

### 1. 进入项目目录
```bash
# Windows示例（如果项目在D盘的minecraft文件夹）
D:
cd minecraft\plugins\MyPlugin

# Linux/macOS示例
cd ~/minecraft/plugins/MyPlugin

# 验证是否在正确目录
dir                  # Windows
ls                   # Linux/macOS
```
确保你能看到 `pom.xml` 文件在当前目录。

### 2. 清理旧文件
```bash
mvn clean
```
这个命令会：
- 删除 `target` 目录及其所有内容
- 清理之前的构建结果
- 为新的构建做准备

### 3. 打包项目
```bash
# 方式1：常规打包（包含测试）
mvn package

# 方式2：跳过测试打包（更快）
mvn package -DskipTests
```
在打包过程中你会看到：
- 下载依赖的进度
- 编译代码的信息
- 运行测试的结果（如果没有跳过测试）
- 最后显示 `BUILD SUCCESS` 表示构建成功

### 4. 找到构建结果
```bash
# Windows
dir target
# 或
explorer target

# Linux/macOS
ls -l target
```
jar文件通常命名为：`项目名-版本号.jar`

## Gradle构建步骤

### 1. 使用Gradle Wrapper（推荐）
Wrapper是项目专用的Gradle启动器，不需要本地安装Gradle。

```bash
# Windows系统
# 如果是第一次运行，可能需要下载Gradle
gradlew.bat clean build

# Linux/macOS系统
chmod +x ./gradlew              # 给予执行权限
./gradlew clean build          # 清理并构建
```

### 2. 使用全局Gradle
如果项目没有Wrapper或者你想使用本地安装的Gradle：
```bash
gradle clean build
```

### 3. 找到构建结果
```bash
# Windows
dir build\libs
# 或
explorer build\libs

# Linux/macOS
ls -l build/libs
```

## 常见问题解决

### 1. 依赖下载失败
如果看到类似 `Could not resolve dependency` 的错误：

1. **配置镜像源**：
   参考[配置镜像源](./mirror-config.md)文档进行配置。

2. **手动下载依赖**：
   ```bash
   # Maven项目
   mvn dependency:get -DgroupId=组ID -DartifactId=项目ID -Dversion=版本号
   # 示例：下载Paper API
   mvn dependency:get -DgroupId=io.papermc.paper -DartifactId=paper-api -Dversion=1.19.4-R0.1-SNAPSHOT

   # Gradle项目
   gradle --refresh-dependencies
   ```

### 2. 内存不足
如果看到 `OutOfMemoryError` 错误：

1. **Maven项目**：
   ```bash
   # Windows（在cmd中运行）
   set MAVEN_OPTS=-Xmx512m
   # 如果512m不够，可以设置更大，如-Xmx1024m

   # Linux/macOS
   export MAVEN_OPTS="-Xmx512m"
   ```

2. **Gradle项目**：
   ```bash
   # Windows
   set GRADLE_OPTS=-Xmx512m

   # Linux/macOS
   export GRADLE_OPTS="-Xmx512m"
   ```

### 3. 编码问题
如果看到 `编码GBK的不可映射字符` 等错误：

1. **Maven项目**：
   ```bash
   # 在运行时指定编码
   mvn -Dfile.encoding=UTF-8 clean package
   ```

2. **Gradle项目**：
   在 `build.gradle` 中添加：
   ```groovy
   tasks.withType(JavaCompile) {
       options.encoding = 'UTF-8'
   }
   ```

### 4. 其他常见错误
1. **找不到JAVA_HOME**：
   - 检查环境变量是否正确设置
   - 重新打开终端让环境变量生效

2. **找不到mvn/gradle命令**：
   - 检查环境变量是否正确设置
   - 确认安装路径是否正确
   - 尝试重新安装构建工具

3. **构建失败但没有明显错误**：
   ```bash
   # Maven项目，使用debug模式构建
   mvn clean package -X
   
   # Gradle项目，使用debug模式构建
   gradle clean build --debug
   
