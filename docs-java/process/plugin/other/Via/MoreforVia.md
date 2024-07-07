---
sidebar_position: 5
---

# Via进阶

学会更多关于via的知识

## AxSmithing

在 1.20 中，sb mojang 在锻造台上添加了一个新的 UI(也就是添加了锻造模板)，如果你的 1.16-1.19 服务器运行 ViaBackwards，那么 1.20+ 玩家将无法打开锻造台，同样的事情在 1.20+ 服务器和 1.16-1.19 客户端上也是如此。 该插件还使 1.7-1.15 客户端能够打开锻造台。( 您可以恢复到旧的 1.16-1.19 锻造台，不需要下界升级锻造模板)

 [下载地址](https://github.com/ViaVersionAddons/AxSmithing)

## ViaChatFixer

在 Minecraft 1.11 中，最大消息长度已从 100 个字符增加到 256 个字符。因此，如果您的服务器低于 1.11、1.11 及更高版本 玩家的聊天消息将被剪成 100 个字符。

此插件解决了这个问题，因此 1.11 及更高版本的玩家将能够发送长达 256 个字符的更长的聊天消息。

[下载地址](https://github.com/ViaVersionAddons/ViaChatFixer)

## ViaPotions

这个插件可以为极老版本翻译投掷的药水(由于本项目已经停更，所以不能翻译全部药水)

[项目地址](https://github.com/NotTolerable/ViaPotions)，需要自行构建

## ViaBackwards-Plus

这个**材质包**(这不是插件)的功能就是在低版本显示高版本物品的材质(支持1.16.5+)

:::note

注意，这需要**客户端模组** Chime 才能正常工作

这个 Minecraft 包通过 ViaBackwards 插件增强了游戏体验，允许玩家使用较旧的客户端连接到较新的服务器。该包需要 Chime mod 才能工作，这有助于通过自定义名称或自定义 NBT 数据来识别物品，并为它们分配正确的模型和纹理。这个包最好的部分是，如果你在它上面放一个另一个资源包，它会从中加载纹理！

:::

使用教程:

1.在服务端安装资源包([下载地址](https://github.com/ViaVersionAddons/ViaBackwards-Plus))，你可以选择与你的已有资源包合并
2.在客户端安装模组Chime([下载地址](https://modrinth.com/mod/chime))，然后连接到服务器!!!

## ViaAprilFools

这个插件允许愚人节版本加入服务器

:::danger

这插件实测压根没用

:::

[下载地址](https://github.com/malloryhayr/ViaAprilFoolsPaper)

## AutoViaUpdater

这个插件可以自动帮你更新Via，从而帮您摆脱了服务端玩家骚扰

功能:

* 与 Minecraft 1.8 及更高版本兼容 Spigot/Velocity/Bungeecord，包括最新版本。
* 自动从 Jenkins 下载 ViaVersion、ViaBackwards、ViaRewind 和 ViaRewind-Legacy-Support 的成功版本及其开发版本。
* config.yml允许您指定要更新的 Via 以及是否使用每个插件的开发版本。
* /updatevias 命令强制更新检查器对所有 Via！（autoviaupdater.admin 权限！

[下载地址](https://www.spigotmc.org/resources/autoviaupdater.109331/)
