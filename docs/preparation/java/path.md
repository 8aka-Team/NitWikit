---
title: 路径相关
sidebar_position: 3
---

# 路径相关

- 绝对路径 - 是从盘符开始的路径.

形如 `C:\windows\system32\cmd.exe`

- 相对路径 - 是从当前路径开始的路径。

要描述上述路径，只需输入 `system32\cmd.exe`。

实际上，严格的相对路径写法应为 `.\system32\cmd.exe`。

其中，.表示当前路径，在通道情况下可以省略，只有在特殊的情况下不能省略。

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

>  也许，使用你制作的服务端的用户才思敏捷，不能独立解决 “怎么说找不到java” 等宇宙终极问题。

相对路径是从当前路径开始的路径。

![](_images/path-1.png)

如图所示，将 “**zulu-21**” 放进服务端文件夹，接着在启动脚本写入：

```bash
.\zulu-21\bin\java.exe -jar server.jar
```

就会使用这个目录下 zulu-21。这样就将 Java “打包” 进服务端了。

其中，.表示当前路径，在通道情况下可以省略，只有在特殊的情况下不能省略。

另外，可以用 ".." 表示当前所处的文件夹上一级文件夹的绝对路径。

但是我很少见到在 Minecraft 服务器的启动脚本中使用它，有需要可以自行研究。
