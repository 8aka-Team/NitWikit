---
title: 使用 GitHub Actions
sidebar_position: 6
---

# 使用 GitHub Actions

## 什么是 GitHub Actions？
GitHub Actions 是 GitHub 提供的自动化工具，可以自动执行构建、测试和部署等任务。使用它可以让你的插件在每次代码更新时自动构建。

## 配置步骤

### 1. 创建工作流文件
在项目根目录创建 `.github/workflows/build.yml` 文件：

#### Maven项目模板
```yaml
name: Build Plugin

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  release:
    types: [ created ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up JDK
      uses: actions/setup-java@v2
      with:
        java-version: '8'
        distribution: 'adopt'
        
    - name: Build with Maven
      run: mvn -B package
      
    - name: Upload artifact
      uses: actions/upload-artifact@v2
      with:
        name: Plugin
        path: target/*.jar
        
    - name: Upload to release
      if: github.event_name == 'release'
      uses: softprops/action-gh-release@v1
      with:
        files: target/*.jar
```

#### Gradle项目模板
```yaml
name: Build Plugin

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  release:
    types: [ created ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up JDK
      uses: actions/setup-java@v2
      with:
        java-version: '8'
        distribution: 'adopt'
        
    - name: Build with Gradle
      run: ./gradlew build
      
    - name: Upload artifact
      uses: actions/upload-artifact@v2
      with:
        name: Plugin
        path: build/libs/*.jar
        
    - name: Upload to release
      if: github.event_name == 'release'
      uses: softprops/action-gh-release@v1
      with:
        files: build/libs/*.jar
```

### 2. 配置说明

1. **触发条件**：
   ```yaml
   on:
     push:
       branches: [ main ]  # 推送到main分支时触发
     pull_request:
       branches: [ main ]  # PR到main分支时触发
     release:
       types: [ created ]  # 创建新版本时触发
   ```

2. **构建环境**：
   ```yaml
   runs-on: ubuntu-latest  # 使用最新的Ubuntu系统
   ```

3. **Java配置**：
   ```yaml
   - name: Set up JDK
     uses: actions/setup-java@v2
     with:
       java-version: '8'   # 使用Java 8
       distribution: 'adopt'  # 使用AdoptOpenJDK
   ```

## 使用方法

### 1. 自动构建
- 每次推送代码到main分支时自动构建
- 每次创建Pull Request时自动构建
- 构建结果可在Actions页面查看

### 2. 发布新版本
1. 在GitHub上点击"Create release"
2. 填写版本号和说明
3. 发布后自动构建并附加到发布页面

### 3. 下载构建结果
1. 进入Actions页面
2. 选择最新的构建
3. 在Artifacts中下载jar文件

## 进阶配置

### 1. 缓存依赖
```yaml
- name: Cache Maven packages
  uses: actions/cache@v2
  with:
    path: ~/.m2
    key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}
```

### 2. 多版本测试
```yaml
strategy:
  matrix:
    java: [ '8', '11', '16' ]
steps:
  - uses: actions/setup-java@v2
    with:
      java-version: ${{ matrix.java }}
```

### 3. 自动更新依赖
```yaml
- name: Update dependencies
  uses: renovatebot/renovate@v24
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
```

## 常见问题

### 1. 构建失败
1. 检查Actions日志
2. 确认JDK版本正确
3. 验证所有依赖可访问

### 2. 文件未上传
1. 检查文件路径是否正确
2. 确认构建产物存在
3. 验证上传步骤配置

### 3. 权限问题
1. 检查仓库设置
2. 确认Token权限
3. 验证工作流权限
