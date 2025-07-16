---
title: 准备
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 准备

在开始前,你需要准备一些软件

# 环境准备

<Tabs groupId="operating-systems">
<TabItem value="ubuntu" label="Ubuntu/Debian">

## Ubuntu/Debian系统准备

### 安装必需软件包
```bash
# 安装PHP和扩展
sudo apt install -y php8.1 php8.1-fpm php8.1-mysql php8.1-gd php8.1-mbstring php8.1-xml php8.1-curl php8.1-zip

# 安装MySQL/MariaDB
sudo apt install -y mysql-server
# 或安装MariaDB
# sudo apt install -y mariadb-server

# 安装Web服务器 (选择其一)
sudo apt install -y nginx
# sudo apt install -y apache2
```

</TabItem>
<TabItem value="centos" label="CentOS/Rocky Linux">

## CentOS/Rocky Linux系统准备

### 安装EPEL和Remi仓库
```bash
# EPEL仓库
sudo dnf install -y epel-release

# Remi仓库
sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm

# 国内服务器推荐使用这一条
sudo dnf install -y https://mirrors.tuna.tsinghua.edu.cn/remi/enterprise/remi-release-8.rpm
```

#### 安装PHP和相关软件包
```bash
# 启用PHP 8.1模块
sudo dnf module enable php:remi-8.1 -y

# 安装PHP和扩展
sudo dnf install -y php php-fpm php-mysqlnd php-gd php-mbstring php-xml php-curl php-zip

# 安装MySQL/MariaDB
sudo dnf install -y mysql-server
# 或安装MariaDB
# sudo dnf install -y mariadb-server

# 安装Web服务器
sudo dnf install -y nginx
```

### 配置防火墙
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

</TabItem>
<TabItem value="windows" label="Windows">

## Windows系统准备

### 使用XAMPP (推荐)

1. **下载XAMPP**
   - 访问 https://www.apachefriends.org/
   - 下载最新版本 (包含PHP 8.1)

2. **安装XAMPP**
   - 运行安装程序
   - 选择Apache、MySQL、PHP组件
   - 安装到默认路径 `C:\xampp`

3. **启动服务**
   - 打开XAMPP控制面板
   - 启动Apache和MySQL服务

4. **配置PHP**
   - 编辑 `C:\xampp\php\php.ini`
   - 取消注释并启用必需扩展：
   ```ini
   extension=gd
   extension=mbstring
   extension=mysqli
   extension=pdo_mysql
   extension=xml
   extension=curl
   ```

### 手动安装

1. **安装PHP**
   - 下载PHP 8.1 from https://windows.php.net/
   - 解压到 `C:\php`
   - 配置环境变量

2. **安装MySQL**
   - 下载MySQL Community Server
   - 按向导安装配置

3. **安装Web服务器**
   - IIS：通过Windows功能启用
   - 或下载Apache for Windows

</TabItem>
<TabItem value="shared" label="共享主机">

## 共享主机准备

### 确认主机要求
- PHP 7.4+ (推荐 8.1)
- MySQL 5.7+ 或 MariaDB 10.2+
- 至少 100MB 存储空间
- 支持 .htaccess (Apache) 或 URL重写

### 检查PHP扩展
创建 `phpinfo.php` 文件检查：
```php
<?php phpinfo(); ?>
```

确认以下扩展已启用：
- gd
- mbstring 
- mysql/mysqli
- pdo
- xml

</TabItem>
</Tabs>

## 启动和启用服务
```bash
sudo systemctl enable --now php-fpm
sudo systemctl enable --now mysql
sudo systemctl enable --now nginx
```

## 配置SELinux (如果启用)
```bash
# 允许Web服务器连接数据库
sudo setsebool -P httpd_can_network_connect_db 1

# 允许Web服务器连接网络
sudo setsebool -P httpd_can_network_connect 1
```

当然你可以选择直接关闭(推荐)

```bash
sed -i "s#=enforcing#=disabled#g" /etc/selinux/config
```

## 配置数据库
```bash
# 安全配置MySQL
sudo mysql_secure_installation

# 创建数据库和用户
sudo mysql -u root -p
```

然后初始化数据库

```sql
CREATE DATABASE namelessmc;
CREATE USER 'namelessmc'@'localhost' IDENTIFIED BY '改密码'; 
GRANT ALL PRIVILEGES ON namelessmc.* TO 'namelessmc'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## 配置PHP

打开 `php.ini`,重要配置项：

```ini
max_execution_time = 300
memory_limit = 256M 
upload_max_filesize = 20M
post_max_size = 20M
```
