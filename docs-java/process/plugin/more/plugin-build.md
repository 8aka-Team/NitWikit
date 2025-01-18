---
title: 构建插件
sidebar_position: 6
---

# 构建插件

## 构建工具安装（使用idea请直接跳过此步骤）

### Gradle 安装方法 

#### Windows 系统下安装 Gradle
1. **下载 Gradle**
   - 访问 [Gradle 官网下载页面](https://gradle.org/releases/)
   - 下载最新的二进制版本（binary-only）zip 文件

2. **解压文件**
   - 将下载的 zip 文件解压到指定目录，如 `C:\Gradle`
   - 解压后的目录结构应类似：`C:\Gradle\gradle-x.x.x`

3. **配置环境变量**
   - 右键 "此电脑" → "属性" → "高级系统设置" → "环境变量"
   - 在系统变量中新建 `GRADLE_HOME`，值为解压目录（如 `C:\Gradle\gradle-x.x.x`）
   - 编辑系统变量 `Path`，添加 `%GRADLE_HOME%\bin`

4. **验证安装**
   - 打开命令提示符（cmd）
   - 输入 `gradle -v` 检查版本信息

#### macOS 系统下安装 Gradle
1. **使用 Homebrew 安装（推荐）**
   ```bash
   brew install gradle
   ```

2. **手动安装**
   - 下载 Gradle 二进制包
   - 解压到指定目录：
     ```bash
     mkdir /opt/gradle
     unzip -d /opt/gradle gradle-x.x.x-bin.zip
     ```
   - 配置环境变量，编辑 `~/.zshrc` 或 `~/.bash_profile`：
     ```bash
     export GRADLE_HOME=/opt/gradle/gradle-x.x.x
     export PATH=$PATH:$GRADLE_HOME/bin
     ```
   - 使环境变量生效：
     ```bash
     source ~/.zshrc  # 或 source ~/.bash_profile
     ```

#### Linux 系统下安装 Gradle
1. **使用包管理器（Ubuntu/Debian）**
   ```bash
   sudo apt update
   sudo apt install gradle
   ```

2. **手动安装**
   ```bash
   # 下载 Gradle
   wget https://services.gradle.org/distributions/gradle-x.x.x-bin.zip
   
   # 解压到 /opt/gradle
   sudo mkdir /opt/gradle
   sudo unzip -d /opt/gradle gradle-x.x.x-bin.zip
   
   # 配置环境变量
   echo 'export GRADLE_HOME=/opt/gradle/gradle-x.x.x' >> ~/.bashrc
   echo 'export PATH=$PATH:$GRADLE_HOME/bin' >> ~/.bashrc
   source ~/.bashrc
   ```

### Maven 安装方法

#### Windows 系统下安装 Maven
1. **下载 Maven**
   - 访问 [Maven 官网下载页面](https://maven.apache.org/download.cgi)
   - 下载最新的二进制版本（Binary zip archive）

2. **解压文件**
   - 将下载的 zip 文件解压到指定目录，如 `C:\Maven`
   - 解压后的目录结构应类似：`C:\Maven\apache-maven-x.x.x`

3. **配置环境变量**
   - 右键 "此电脑" → "属性" → "高级系统设置" → "环境变量"
   - 在系统变量中新建 `MAVEN_HOME`，值为解压目录
   - 编辑系统变量 `Path`，添加 `%MAVEN_HOME%\bin`

4. **验证安装**
   - 打开命令提示符（cmd）
   - 输入 `mvn -v` 检查版本信息

#### macOS 系统下安装 Maven
1. **使用 Homebrew 安装（推荐）**
   ```bash
   brew install maven
   ```

2. **手动安装**
   - 下载 Maven 二进制包
   - 解压到指定目录：
     ```bash
     sudo mkdir /opt/maven
     sudo tar xf apache-maven-*.tar.gz -C /opt/maven
     ```
   - 配置环境变量，编辑 `~/.zshrc` 或 `~/.bash_profile`：
     ```bash
     export MAVEN_HOME=/opt/maven/apache-maven-x.x.x
     export PATH=$PATH:$MAVEN_HOME/bin
     ```
   - 使环境变量生效：
     ```bash
     source ~/.zshrc  # 或 source ~/.bash_profile
     ```

#### Linux 系统下安装 Maven
1. **使用包管理器（Ubuntu/Debian）**
   ```bash
   sudo apt update
   sudo apt install maven
   ```

2. **手动安装**
   ```bash
   # 下载 Maven
   wget https://downloads.apache.org/maven/maven-3/3.x.x/binaries/apache-maven-3.x.x-bin.tar.gz
   
   # 解压到 /opt/maven
   sudo mkdir /opt/maven
   sudo tar xf apache-maven-*.tar.gz -C /opt/maven
   
   # 配置环境变量
   echo 'export MAVEN_HOME=/opt/maven/apache-maven-x.x.x' >> ~/.bashrc
   echo 'export PATH=$PATH:$MAVEN_HOME/bin' >> ~/.bashrc
   source ~/.bashrc
   ```

### 配置镜像源（可选但推荐）

#### Maven 配置国内镜像
1. 找到 Maven 的 `settings.xml` 文件：
   - Windows: `%USER_HOME%\.m2\settings.xml`
   - Linux/macOS: `~/.m2/settings.xml`

2. 添加阿里云镜像配置：
```xml
<mirrors>
    <mirror>
        <id>aliyun</id>
        <mirrorOf>central</mirrorOf>
        <name>阿里云公共仓库</name>
        <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
</mirrors>
```

#### Gradle 配置国内镜像
在项目的 `build.gradle` 文件中添加：
```groovy
repositories {
    maven {
        url 'https://maven.aliyun.com/repository/public'
    }
    mavenCentral()
}
```

## 终端

### Gradle 构建方法

1. **打开终端**
   - Windows: 按 `Win + R`，输入 `cmd` 打开命令提示符
   - macOS/Linux: 打开终端应用

2. **进入项目目录**
   ```bash
   cd 你的项目路径
   ```

3. **执行构建命令**
   - Windows:
     ```bash
     gradlew.bat clean build
     ```
   - macOS/Linux:
     ```bash
     ./gradlew clean build
     ```

4. **查找构建结果**
   - 构建完成后，插件 jar 文件将位于 `build/libs` 目录下
   - 通常文件名格式为 `项目名-版本号.jar`

注意事项：
- 首次运行可能需要下载 Gradle，请保持网络连接
- 如果遇到权限问题，Linux/macOS 用户可能需要执行：
  ```bash
  chmod +x ./gradlew
  ```
- 如果需要跳过测试，可以使用：
  ```bash
  ./gradlew clean build -x test
  ```

### Maven 构建方法

1. **确保安装了 Maven**
   - 检查是否安装：`mvn -version`
   - 如未安装，请先从 [Maven官网](https://maven.apache.org/download.cgi) 下载安装

2. **进入项目目录**
   ```bash
   cd 你的项目路径
   ```

3. **执行构建命令**
   ```bash
   mvn clean package
   ```

4. **查找构建结果**
   - 构建完成后，插件 jar 文件将位于 `target` 目录下
   - 通常文件名格式为 `项目名-版本号.jar`

注意事项：
- 首次运行会下载依赖，请保持网络连接
- 如果需要跳过测试，可以使用：
  ```bash
  mvn clean package -DskipTests
  ```
- 如果需要同时跳过测试编译，使用：
  ```bash
  mvn clean package -Dmaven.test.skip=true
  ```

常见问题解决：
1. **构建失败**
   - 检查 `pom.xml` 或 `build.gradle` 文件配置是否正确
   - 确保所有依赖都能正常下载
   - 查看错误信息，根据提示修复问题

2. **依赖下载慢**
   - 可以考虑使用国内镜像源
   - Maven: 修改 settings.xml
   - Gradle: 修改 build.gradle 中的 repositories

3. **Java 版本问题**
   - 确保使用了正确的 Java 版本
   - 检查 JAVA_HOME 环境变量是否正确设置

## IDEA

### IntelliJ IDEA 的下载与安装

1. 访问 [IntelliJ IDEA 官网](https://www.jetbrains.com/idea/download/) 下载
2. 选择社区版（Community Edition，免费）或旗舰版（Ultimate，付费）
3. 下载完成后运行安装程序，按照提示完成安装

### 使用 IDEA 构建插件

#### 从 GitHub 克隆项目
1. 打开 IDEA
2. 点击 "Get from VCS"（从版本控制获取）
![从VCS获取](https://docs.superiormc.cn/~gitbook/image?url=https%3A%2F%2F400373137-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFlP4xP4pRQ4Bt9AMcMkX%252Fuploads%252FxGCXbpHQGXg03LA6JZXG%252Fimage.png%3Falt%3Dmedia%26token%3D1a1d8928-c7c7-4b00-a278-d202b6c3cbbe&width=300&dpr=2&quality=100&sign=3cb698d8&sv=2)
3. 在 URL 栏输入 GitHub 项目地址
4. 点击 Clone 克隆项目

#### 等待项目初始化
- IDEA 会自动开始下载依赖并构建项目
- 如果没有自动开始，可以点击右侧 Maven 或 Gradle 工具栏进行构建
![构建项目](https://docs.superiormc.cn/~gitbook/image?url=https%3A%2F%2F400373137-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFlP4xP4pRQ4Bt9AMcMkX%252Fuploads%252FWFUJ1DWEdVunjScQZnCq%252FInked%25E5%25B1%258F%25E5%25B9%2595%25E6%2588%25AA%25E5%259B%25BE%25202023-04-08%2520183921.jpg%3Falt%3Dmedia%26token%3D235735c4-0634-4050-b47d-e7e91db96189&width=768&dpr=4&quality=100&sign=be40d02e&sv=2)
- 等待右下角进度条完成

#### 处理依赖问题
如果下载依赖出现问题，可以尝试以下解决方案：

1. **使用镜像源**
   - Maven: 参考上文的 Maven 镜像配置
   - Gradle: 参考上文的 Gradle 镜像配置

2. **使用代理**
   - 如果使用 Clash，需要开启 TUN 模式
   - 在 IDEA 设置中配置代理（Settings → HTTP Proxy）

#### 构建项目

1. **使用 Maven 构建**
   - 点击右侧 Maven 工具栏
   - 展开 Lifecycle
   - 依次点击 clean 和 package
   - 构建完成后在 target 目录找到生成的 jar 文件

2. **使用 Gradle 构建**
   - 点击右侧 Gradle 工具栏
   - 展开 build
   - 依次点击 clean 和 build
   - 构建完成后在 build/libs 目录找到生成的 jar 文件

3. **使用运行配置构建**
   - 点击顶部工具栏的 "添加配置"（Add Configuration）
   ![添加配置](https://docs.superiormc.cn/~gitbook/image?url=https%3A%2F%2F400373137-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFlP4xP4pRQ4Bt9AMcMkX%252Fuploads%252FTWIOOdAHWmGlYp4rpwm9%252F%25E5%25B1%258F%25E5%25B9%2595%25E6%2588%25AA%25E5%259B%25BE%25202023-04-08%2520185042.png%3Falt%3Dmedia%26token%3D5cda798d-2496-4b69-8758-5960a6cf6130&width=768&dpr=4&quality=100&sign=788ae3aa&sv=2)
   - 点击左上角 + 号
   - Maven 项目选择 Maven，Gradle 项目选择 Gradle
   - 在 Command line 中：
     - Maven 项目输入：`clean package`
     - Gradle 项目输入：`clean build`
   - 点击确定保存配置
   - 点击运行按钮开始构建
   - 打包完成![打包完成](https://docs.superiormc.cn/~gitbook/image?url=https%3A%2F%2F400373137-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFlP4xP4pRQ4Bt9AMcMkX%252Fuploads%252F0w62rEOPvZDt0ewH5os6%252F%25E5%25B1%258F%25E5%25B9%2595%25E6%2588%25AA%25E5%259B%25BE%25202023-04-08%2520185206.png%3Falt%3Dmedia%26token%3D80955d55-1bd9-4d9e-b0b2-c683342dc7d4&width=768&dpr=4&quality=100&sign=9a2a5dbf&sv=2)
   - 在 OutPut 中可以看到构建结果

### 添加本地依赖

如果项目需要本地 jar 包作为依赖，可以按照以下步骤操作：

#### Maven 项目
1. 在项目根目录创建 `libs` 文件夹
2. 将依赖的 jar 文件放入该文件夹
3. 在 `pom.xml` 中添加依赖：
```xml
<dependency>
    <groupId>插件组织名</groupId>
    <artifactId>插件名称</artifactId>
    <version>版本号</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/libs/插件文件名.jar</systemPath>
</dependency>
```

#### Gradle 项目
1. 在项目根目录创建 `libs` 文件夹
2. 将依赖的 jar 文件放入该文件夹
3. 在 `build.gradle` 中添加：
```groovy
dependencies {
    compileOnly fileTree(dir: 'libs', include: ['*.jar'])
}
```

### 常见问题解决

1. **项目导入失败**
   - 检查 JDK 版本是否正确
   - 确保网络连接正常
   - 尝试使用镜像源或代理

2. **构建失败**
   - 查看 IDEA 底部的 "Build" 或 "Problems" 窗口查看具体错误
   - 检查依赖配置是否正确
   - 确保所有本地依赖都已正确添加

3. **运行配置问题**
   - 确保选择了正确的构建工具（Maven/Gradle）
   - 检查命令行参数是否正确
   - 验证 JDK 配置是否正确

4. **依赖冲突**
   - 检查 `pom.xml` 或 `build.gradle` 中的依赖版本
   - 使用 IDEA 的依赖分析工具查看冲突
   - 必要时手动排除冲突的依赖

## GitHub Action

GitHub Action 可以帮助我们自动构建插件。每次推送代码或创建新的发布时，它都会自动构建并生成插件文件。

### 配置方法

1. 在项目根目录创建 `.github/workflows` 文件夹
2. 在该文件夹中创建 `build.yml` 文件（文件名可自定义）

#### Maven 项目配置
```yaml
name: Java CI with Maven

on:
  push:
    branches: [ "main" ]  # 可根据需要修改分支名
  pull_request:
    branches: [ "main" ]
  release:
    types: [created]  # 创建新的发布时触发

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK
      uses: actions/setup-java@v3
      with:
        java-version: '17'  # 根据项目需求修改 Java 版本
        distribution: 'temurin'
        cache: maven
        
    - name: Build with Maven
      run: mvn clean package
      
    - name: Upload artifact
      uses: actions/upload-artifact@v3
      with:
        name: Plugin-JAR
        path: target/*.jar
```

#### Gradle 项目配置
```yaml
name: Java CI with Gradle

on:
  push:
    branches: [ "main" ]  # 可根据需要修改分支名
  pull_request:
    branches: [ "main" ]
  release:
    types: [created]  # 创建新的发布时触发

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK
      uses: actions/setup-java@v3
      with:
        java-version: '17'  # 根据项目需求修改 Java 版本
        distribution: 'temurin'
        
    - name: Setup Gradle
      uses: gradle/gradle-build-action@v2
    
    - name: Execute Gradle build
      run: ./gradlew build
      
    - name: Upload artifact
      uses: actions/upload-artifact@v3
      with:
        name: Plugin-JAR
        path: build/libs/*.jar
```

### 自动发布配置

如果想在创建新的发布时自动上传构建的文件，可以添加以下步骤：

```yaml
    - name: Upload to release
      if: github.event_name == 'release'
      uses: softprops/action-gh-release@v1
      with:
        files: |
          target/*.jar    # Maven 项目
          build/libs/*.jar  # Gradle 项目
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 使用说明

1. **启用 GitHub Actions**
   - 在项目的 GitHub 页面中
   - 点击 "Actions" 标签页
   - 如果是第一次使用，需要点击 "I understand my workflows, go ahead and enable them"

2. **查看构建结果**
   - 在 Actions 标签页可以看到所有的构建记录
   - 点击具体的构建可以查看详细日志
   - 在 "Artifacts" 部分可以下载构建的文件

3. **创建发布**
   - 在 GitHub 仓库页面点击 "Releases"
   - 点击 "Create a new release"
   - 填写版本号和说明
   - 发布后会自动触发构建并上传文件

### 常见问题

1. **构建失败**
   - 检查 Action 日志中的错误信息
   - 确保 Java 版本配置正确
   - 验证项目的构建脚本（pom.xml/build.gradle）是否有误

2. **权限问题**
   - 确保仓库设置中已启用 Actions
   - 检查 GITHUB_TOKEN 权限设置
   - 必要时在仓库设置中配置 Actions 权限

3. **文件上传失败**
   - 检查构建输出路径是否正确
   - 确保文件名匹配规则正确
   - 验证 release 权限设置

4. **缓存问题**
   - 如果依赖下载过慢，可以启用缓存
   - Maven 项目默认启用缓存
   - Gradle 项目可以添加缓存配置：
     ```yaml
     - name: Cache Gradle packages
       uses: actions/cache@v3
       with:
         path: |
           ~/.gradle/caches
           ~/.gradle/wrapper
         key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
         restore-keys: |
           ${{ runner.os }}-gradle-
     ```
