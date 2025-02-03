---
title: MCPEServer 核心介绍
sidebar_position: 1
---

## 什么是 MCPEServer

mcpeserver是一个用Golang编写的Minecraft服务器启动器。
它利用Minecraft安卓APK文件中的内置服务器组件来运行一个原生的基岩版（Bedrock）服务器。
该项目已经标记为“已弃用”，建议使用官方的BDS（Bedrock Dedicated Server）。

## 支持版本

- **服务器核心版本**：当前发布的版本支持Minecraft 1.6.0作为服务器核心。
- **客户端版本**：所有1.6.x版本的客户端都可以连接到该服务器。

## 特点

- **自动补全命令**：支持命令行自动补全功能。
- **完整的基岩版服务器功能**：支持Minecraft基岩版的所有功能和特性。
- **基于Systemd的服务**：可以作为Systemd服务运行，便于管理。
- **基于DBus的接口**：支持DBus接口，便于与其他系统组件交互。
- **配置灵活**：提供详细的服务器配置文件，用户可以自定义服务器的各种设置，例如世界名称、端口、最大玩家数等。
- **易于安装和管理**：提供了针对Arch Linux的安装指南，其他Linux发行版也可以参考相关文档进行安装。
- **支持Xbox Live成就**：玩家可以在服务器上获得Xbox Live成就，就像在Minecraft Realms中一样。

## 链接

- [Github链接](https://github.com/codehz/mcpeserver)


