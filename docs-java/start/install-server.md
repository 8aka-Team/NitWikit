---
title: 安装 Mod 服务端
sidebar_position: 3
---

# 安装服务端

:::tip

该教程是为 Mod 服所编写的，插件和混合直接新建文件夹扔进去就完事

:::

全篇以 1.20.4 Mod 服务端安装为例子

如果你看不懂可以使用[笨蛋脚本](https://github.com/lilingfengdev/NitWiki-Script/releases/download/windows-latest/select-server.exe)，目前不支持 Fabric

## Forge

首先，来到 [Forge 官方网站](https://files.minecraftforge.net/net/minecraftforge/forge/)

![](_images/install/1.png)

在左边的 `Minecraft Version` 找到你需要的版本，然后下载下来

![](_images/install/2.png)

请选择 `Installer` ，左边右边都无所谓，打开后，你会来到一个广告窗口，点击最上面的 `SKIP`(没有出现就等一会)

![](_images/install/3.png)

然后你就成功下载了 Forge Installer，但还没有完!，继续

在浏览器中输入以下链接

```
https://bmclapi2.bangbang93.com/version/这里填你的MC版本/server
```

比如我 1.20.4 服务器应该是 `https://bmclapi2.bangbang93.com/version/1.20.4/server`

下载下来后，你需要将文件重命名为`minecraft_server.这里填你的MC版本.jar`，比如我1.20.4服务器应该是`minecraft_server.1.20.4.jar`，现在你的目录应该长这样

![](_images/install/4.png)

接着打开cmd，不会请查看[开启 cmd](launch-server.md#笨蛋脚本)，输入以下命令

````shell
java -jar forge-1.20.4-49.1.2-installer.jar(这里请改成你下载的文件名) --installServer
````

然后静待一会，直到控制台输出 `The server installed successfully` 就完成了!

## NeoForge

与Forge差不多，官网换[这个](https://neoforged.net/)

## Fabric

TODO
