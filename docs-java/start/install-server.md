---
title: 安装 Mod 服务端
sidebar_position: 3
---

# 安装服务端

:::tip

该教程是为**纯 Mod 服**所编写的，如果你正在使用插件或混合端，那么就不需要安装服务端这一步，直接前往下一篇教程 [开启服务端](launch-server.md)

:::

全篇以 1.20.4 Mod 服务端安装为例子，如果看不懂可以使用[笨蛋脚本](https://script.8aka.org/mod-installer) **(目前支持
Forge/NeoForge/Fabric)**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="install">
<TabItem value="forge" label="Forge">

## Installer （安装器）下载

首先，来到 [Forge 官方网站](https://files.minecraftforge.net/net/minecraftforge/forge/)
或国内下载镜像 [MCSL](https://sync.mcsl.com.cn/core/Forge)

![](_images/install/1.png)

在左边的 `Minecraft Version` 找到你需要的版本，然后点击。

![](_images/install/2.png)

请选择 `Installer` ，左边右边都无所谓，打开后，你会来到一个广告窗口，点击最上面的 `SKIP`(没有出现就等一会，如果网站始终无法正常加载，请换用上文提到的国内下载镜像 **MCSL** )

![](_images/install/3.png)

然后你就成功下载了 `Forge Installer`。然而由于 MC 的 eula 限制，Forge Installer 不会内含 Minecraft 服务端本体，所以现在我们需要去单独下载一个 `Minecraft server` 本体。

## Minecraft server （原版端）下载

### 使用国内镜像 BMCLAPI

在浏览器中输入链接 `https://bmclapi2.bangbang93.com/version/这里填你的MC版本/server`

比如 1.20.4 服务器应该是 `https://bmclapi2.bangbang93.com/version/1.20.4/server`

下载下来后，你需要将文件重命名为 `minecraft_server.这里填你的MC版本.jar` ，

比如 1.20.4 服务器应该是 `minecraft_server.1.20.4.jar` ，现在你的目录应该长这样

![](_images/install/4.png)

### 从 MOJANG 官方下载

首先前往对应版本的发行页面

在浏览器中输入链接 `https://www.minecraft.net/en-us/article/minecraft-java-edition-版本号（点替换成横杠）`

比如 1.20.4 版本应该是 `https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-4`

如果页面出现404（提示oops... we couldn't find that page），证明该教程的链接格式可能过时。你可以在搜索引擎中搜索“download minecraft server 你要下载的版本号”，然后应该就能搜索到对应的发行版页面了。

随后你将来到该版本的发行说明页面。文章的最后一个小标题是“GET THE RELEASE”，如果没有找到这个小标题，可以使用浏览器的搜索功能。

在这个小标题下，点击 **Minecraft server jar** 超链接即可开始下载可用于 Forge 安装的原版端。

### 从官方启动器下载

首先打开你的官方启动器并登录你的正版帐号，随后在左侧选中 MINECRAFT: Java Edition，在顶部选中配置，新配置，进入新建配置的页面。

随后在版本一栏选中自己想要的服务端版本，再点击下拉菜单上方靠右的“服务器”，即可跳转到浏览器下载服务端。下载好后，直接关闭官启中的新建配置页面即可，无需点击右下角的安装按钮。

## 执行安装

接着打开 cmd，不会请查看[开启 cmd](launch-server.md#笨蛋脚本)，输入以下命令

````shell
java -jar <你下载的安装器的文件名> --installServer
````

然后静待一会，直到控制台输出 `The server installed successfully` 就完成了!此时你应该会看到当前文件夹中出现了一个名为`forge-游戏版本号-forge版本号.jar`的文件，**这就是你此后开服时需要执行的可执行文件**。

我们建议你现在将文件`forge-游戏版本号-forge版本号-installer.jar`（安装器文件）和`minecraft_server.游戏版本号.jar`移至其他文件夹或放入回收站，以防在后续准备开服时引发混淆。也不要直接永久删除这两个文件，因为一旦后续需要重新安装时就会用到它们。

</TabItem>
<TabItem value="neoforge" label="NeoForge">

与 Forge 差不多，官网换[NeoForge 官网](https://neoforged.net/)

</TabItem>
<TabItem value="fabric" label="Fabric">

首先前往 Fabric 的 [官网](https://fabricmc.net/) 或者 [下载镜像](https://sync.mcsl.com.cn/core/Fabric)

然后点击中间那个蓝色的下载按钮，Fabric 有两种下载方案

## 方法 1

进入新页面后点击中间的蓝色下载按钮，此时你会下载一个安装器

点击 **服务端** 然后依次根据提示进行安装，注意选择空文件夹

全部选择完毕后点击安装，等待安装结束

结束后一定一定要点击 **下载服务端** 以便下载原版服务端(模组服务端都需要这玩意)，

如果你懒得配置启动脚本也可以点击 **生成** 按钮让它给你生成一个临时的。

## 方法 2

回到刚才的网页去点击下方的 `Minecraft Server`

依次根据提示进行安装，或者使用底下的安装命令进行快捷安装(限 Linux 用户)

下载完成后拖进空文件夹，随后新建脚本文件将启动命令复制到同一文件夹下，

双击启动服务器，等待后续安装，出现 `Done` 等语句后视为安装成功

## Fabric API

安装完服务端核心后还需要安装 Fabric API,[在这下载](https://modrinth.com/mod/fabric-api),下载完后放进 `mods` 文件夹即可

</TabItem>
<TabItem value="quilt" label="Quilt">

与 Fabric 差不多,官网换成这个 [QuiltMC](https://quiltmc.org/en/install/)

安装完后还需要安装 [Quilt Standard Library](https://modrinth.com/mod/qsl),下载完后放进 `mods` 文件夹即可

</TabItem>
<TabItem value="ignite" label="Ignite">

适用于 Paper 的 Mod 框架(**这不是混合端**),目前在用的主要有 CraftEngine

首先前往 [GitHub](https://github.com/vectrix-space/ignite/releases) 下载 Ignite,放到服务端根目录

然后更改启动参数,比如:

```shell
java -Xms2G -Xmx2G -jar 核心名.jar
```

改为

```shell
java -Xms2G -Xmx2G  -Dignite.locator=paper -Dignite.paper.jar=核心名.jar -jar ignite.jar
```

即可安装 Ignite,安装 Ignite 的 mod 可以放到 `mods` 文件夹下

:::tip

安装的 Mod 仅限于支持 Ignite 的 Mod,Forge 和 Fabric 等的 mod 不可以加载

:::

</TabItem>
</Tabs>
