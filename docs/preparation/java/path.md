---
title: 路径相关
sidebar_position: 4
---

# 路径相关

- 绝对路径 - 是从盘符开始的路径.

形如 `C:\windows\system32\cmd.exe`

- 相对路径 - 是从当前路径开始的路径。

要描述上述路径，只需输入 `system32\cmd.exe`。
实际上，严格的相对路径写法应为 `.\system32\cmd.exe`。

## 绝对路径

例如，当你机器上安装了多个 Java（假设为 zulu 8 和 zulu 21）。

你想在启动 服务器A 时使用 zulu 8，启动 服务器B 时使用 zulu 21。

那么最简单直接的办法就是 `"Java路径" -jar server.jar`。

比如：

```bash
"C:\Program Files\Zulu\zulu-8\bin\java.exe" -jar server.jar
```

```bash
"C:\Program Files\Zulu\zulu-21\bin\java.exe" -jar server.jar
```

## 相对路径

也许，使用你制作的服务端的用户才思敏捷，不能独立解决 “怎么说找不到java” 等宇宙终极问题。





