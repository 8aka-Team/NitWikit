---
title: 账户数据互通
sidebar_position: 4
---

# 账户数据互通

## 全局链接

:::tip

你也可以在官方网站找到有关如何链接的说明和信息：[https://link.geysermc.org/](https://link.geysermc.org/)

:::

GlobalLink 是 Geyser 提供的链接服务器,用于链接基岩版和Java版的账户.链接完后将会在**所有**启用全局链接的服务器上生效

:::warning

链接后保留的是 Java 玩家的数据,除非你重新取消链接,否则对应基岩版玩家的数据将无法访问

如果你忘记执行此操作，你可以取消链接，将所有内容转移过去，然后重新链接。

**全局链接需要正版验证服务器**

:::

要链接你的账户，你需要执行以下操作：

1. 使用你的Java和Bedrock账户加入GlobalLinkServer  
   (IP: `link.geysermc.org`，Java端口: `25565`，Bedrock端口: `19132`)
2. 在Java **或** Bedrock账户上键入`/linkaccount`开始链接过程
3. 你将收到一个带有随机数字的消息，你需要在未开始链接过程的账户上输入该数字。
4. 在另一个账户上键入`/linkaccount <收到的随机数字>`输入随机数字
5. 你应该在Bedrock和Java账户上都被踢出服务器，并收到成功链接你的账户的消息。

要取消全局链接的账户链接，请在Java或Bedrock上加入GlobalLinkServer(如上所述进行链接),并使用`/unlinkaccount`命令。

默认情况下，每个运行Floodgate 的服务器应该已启用全局链接，但如果你禁用了它，你可以通过打开Floodgate配置:

```yml
# 玩家链接配置
player-link:
  # 是否启用链接系统。关闭此选项将阻止玩家使用链接功能，即使他们已经链接。
  enabled: true
  # 是否使用全局链接。全局链接使用中央服务器请求链接
  # 账户，允许人们链接一次，无处不在（在启用全局链接的服务器上）。
  enable-global-linking: true
```

保存配置并重新启动服务器后，你应该可以使用全局链接。

如果你不想使用全局链接，可以在 Floodgate 配置中禁用`enable-global-linking`。

## 本地链接

你还可以在服务器上设置本地链接数据库。本地链接可以与全局链接同时使用。本地数据库中的链接条目将**覆盖**全局链接服务器中的条目。

请注意，如果你有代理（BungeeCord或Velocity），则只需在代理上执行以下步骤。

1. 下载链接数据库扩展之一: [这里](https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/fix-weird-via-issue/)。
   选择合适的扩展名：如果你已经有数据库或想要有多代理设置，请选择`mysql`。否则选择`sqlite`。完整名称应为
   `floodgate-*type*-database.jar`。
2. 将刚下载的数据库扩展jar文件复制到floodgate插件文件夹中（例如`/plugins/floodgate/`）。
3. 在Floodgate的`player-link`部分中启用`enable-own-linking`。
4. 在`player-link`部分中将`type`设置为你的数据库类型（目前只能是`mysql`或`sqlite`）
5. 重新启动服务器

如果你选择了`mysql`，则应在Floodgate数据文件夹内生成一个新的数据库数据文件夹。你可以在其中输入数据库凭据。完成后，请再次重新启动服务器。

就是这样。你可以按照键入`/linkaccount`时收到的说明来链接你的账户。

### ForcePlayerLink

通过本地链接自动链接同名的基岩版和 Java 版玩家

[注意事项]

- 不要使用允许基岩版绕过的登录插件
- 一定要启动 own-linking 关闭 global-linking