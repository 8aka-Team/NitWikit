---
title: EndStone 插件安装教程
sidebar_position: 1
---

## 第一步、EndStone插件来源

目前插件来源：

### [MineBBS论坛](https://www.minebbs.com/resources/categories/bdserver.38/)（发展国内基岩版社区的你敢说没有？）

![201](./imgs/2-1.png)

### [pip源](https://pypi.org/search/?q=endstone) （EndStone绝大多数插件都在这里发布了）

![202](./imgs/2-2.png)

### [Bedrinth下载站](https://bedrinth.com/?platform=endstone) （除了pip外另一个比较知名的下载源，网速较慢，不太推荐）

![203](./imgs/2-3.png)

## 第二步、如何安装？

### 单文件安装

如果你在 MineBBS 上下载，或者其他人给你的一个EndStone插件，请看这里

:::tip
EndStone的插件一般文件是以 .whl 或者 .dll 为后缀的文件，有的插件作者为了易于分发或者安装插件会将上述内容和配置文件一起弄成压缩文件
:::

:::info
附带：什么是whl文件：

whl格式本质上是一个压缩包，里面包含了py文件，以及经过编译的pyd文件。

可以在不具备编译环境的情况下，选择合适自己的Python环境进行安装。

说白了，whl 就是Python的压缩包。

常玩 Java 版的话，你可以理解为它是 **Python版 的 .jar 文件**，只是运行环境由 *Java* 改为 *Python*（可以这么想吧）
:::

![204](./imgs/2-4.png)

#### 第一步、下载插件

在MineBBS以及其他论坛或者QQ群等渠道下载的文件，你可能会获得

- whl 文件
- 或者 zip一类 压缩包

压缩包请使用常用压缩软件打开备用

:::tip
打开压缩包推荐使用BandiZIP、360压缩、7z或者WinRAR等专业压缩文件
:::

#### 第二步、安装插件

关闭服务器（**别告诉我你不会，小心我【语言激动，已省略】**）

##### 如果是 whl 文件

1、打开 bedrock_server 文件夹，你会惊奇的发现：什么时候多了个plugins文件夹？！！

![205](./imgs/2-5.png)

2、打开 plugins 文件夹，将下载的 whl 插件文件拽入该文件夹中

3、启动！当CMD显示插件名称时说明插件已加载成功！

![206](./imgs/2-6.png)

4、如果你真不知道如何辨别插件是否加载，请在后台输入 `plugins` 指令

![207](./imgs/2-7.png)

##### 如果是压缩包文件

比如下面这个赖皮家伙（不是）

![208](./imgs/2-8.png)

教你三招：

1、按下 CTRL + A 全选，复制压缩包内的所有文件

2、打开 bedrock_server\plugins 后，粘贴

3、启动！享受插件便利！

![209](./imgs/2-9.png)

##### 插件配置

有的会在下载的压缩文件中提前准备好

![208](./imgs/2-8.png)

有的会在启动一次服务器后自动生成

![2010](./imgs/2-10.png)

编辑他们很简单，打开相应插件的文件夹，然后使用 VSCode 或者 Nodepad-- 一类编辑器对插件进行配置

:::danger
请注意插件配置的文件格式，并按照他们的规则去写！，如果插件有wiki一类请先看他们的wiki再编辑！
:::

### pip安装

在上面给的 pip渠道 上找到心仪的插件后，使用下面指令完成下载：

```cmd
pip install 插件名
```

![2011](./imgs/2-11.png)

然后重启服务器，插件会自动安装完毕啦~
