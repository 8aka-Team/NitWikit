---
title: Command.yml
sidebar_position: 6
---

# Command.yml 介绍

commands.yml 是一个配置文件，用于为 CraftBukkit 服务器定义自定义命令和命令方块覆盖。

命令覆盖系统可强制服务器对特定命令方块使用 Mojang 提供的命令，而别名系统允许管理员定义自定义命令并强制使用特定版本的命令。

## 命令覆盖系统

Bukkit 在默认情况下提供了一个命令覆盖系统。

### 优先级

Aliases(自定义命令)＞ Plugin Commands(插件命令)＞ Bukkit Commands(Bukkit 命令)＞ Mojang Commands(Mojang 命令)。

Aliases(定义命令)：具有最高优先级，会覆盖所有命令。这意味着如果存在与某个命令匹配的别名，服务器将优先执行该别名所定义的命令。

Plugin Commands(插件命令)：如果没有找到匹配的命令，服务器会查找匹配的插件命令并使用它。

Bukkit Commands(Bukkit 命令)：如果没有找到匹配的插件命令，服务器将使用 Bukkit 提供的内置命令。

Mojang Commands(Mojang 命令)：如果没有找到匹配的 Bukkit 命令，作为最后一个回退选项，服务器将使用 Mojang 提供的内置命令。

每个 fallback 都有相应的权限控制，除插件命令外，Bukkit 命令的权限为 `bukkit.command.*`，Mojang 命令的权限为 `minecraft.command.*`

## Command.yml 内容

```yaml
command-block-overrides: []

aliases:
    icanhasbukkit:
    - "version $1-"
```

### 关于 command-block-overrides 部分

表明当前没有对命令方块的覆盖进行设置。
这个部分的作用是控制命令方块覆盖功能。在 Bukkit 的历史中，曾提供过一些与 Minecraft 原本不同版本的命令。通过这个设置，可以强制服务器专门为命令方块使用 Mojang 提供的版本的命令 (MC 原版命令)。
而在命令方块之外使用的命令，将按照正常情况使用 Bukkit(或插件)版本的命令。

**命令覆盖：**

当你需要命令方块执行 Mojang 命令 (MC 原版命令) 而不是被插件覆盖的命令覆盖时，您可以将这个命令加入到 `command-block-overrides` 中，以下使用 give 命令举例 :

```yaml
command-block-overrides:
    - "give"
```

当在 Essentitals 插件加载时在命令方块中的实现效果将会是 `minecraft:give` 而不是 `essentials:give`

当你需要命令方块执行大量 Mojang 命令 (MC 原版命令) 而不被插件等覆盖时，您可以将这个命令加入到 `command-block-overrides` 中，以下指令会覆盖命令方块中所有的命令使用 MC 原版命令 :

```yaml
command-block-overrides:
    - "*"
```

#### 关于 aliases 部分

在这个配置中，定义了一个自定义命令为 `icanhasbukkit` 。
对应的命令为"version $1-"，这意味着当玩家输入 `icanhasbukkit` 这个命令时，实际上会执行 `version $1-` 这个命令

**自定义命令：**

这一部分允许您为服务器上的命令定义自定义命令。从本质上讲，自定义命令允许您创建可以同时执行多个功能的自定义命令。这是一个强大的工具，允许您为服务器玩家定义更容易记住的命令。

<!--markdownlint-disable line-length-->

| **修饰语**             | **描述**                                                                                                                                                                                                                                                                                                                                                        | **例子**       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `$<argument number>`   | 在一个命令结构中，当存在多个参数输入时，`$<argument number>` 可以根据给定的参数编号来获取对应的输入值。例如在 `say $1 $2 $3` 这个命令中，`$1`代表第一个输入的参数，`$2` 代表第二个输入的参数，`$3` 代表第三个输入的参数。如果执行该命令时输入 `say word1 word2 word3` ，那么`$1` 将被替换为 `word1`，`$2`将被替换为 `word2`，`$3` 将被替换为 `word3`。          | `say $1 $2 $3` |
| `$<argument number>-`  | 在命令执行过程中，此表达式可以获取从指定参数位置开始及之后的所有参数值。例如在 `say $1-` 中，如果输入`say phrase1 phrase2 phrase3`，那么 `$1-` 将代表 `phrase1 phrase2 phrase3` 这个完整的参数序列。                                                                                                                                                            | `say $1-`     |
| `$$<argument number>`  | 在命令设计中，这种形式强调特定位置的参数的必要性。例如 `say $1`，如果执行命令时没有为第一个位置提供参数值，那么该命令将不会被触发执行。只有当有输入值对应到第一个位置时，例如`say something`，这里 `$1` 将被替换为 `something`，命令才会正常执行。                                                                                                              | `say $$1`      |
| `$$<argument number>-` | 与前面的解释类似，但涉及到一个参数范围。例如在 `say $1-` 中，如果输入 `say onlyword`，由于只有一个参数且该参数对应第一个位置，但是这里要求起始参数必须有值且后面还有其他参数才满足条件，所以这个命令不会执行。而如果输入 `say start second third`，从第一个参数 `start` 开始到后面的参数都有值，满足条件，此时 `$1-` 将代表 `start second third` 这个参数序列。 | `say $$1-`     |
| \                      | 在一些命令语法中，某些字符被赋予了特定的功能含义，比如 `$` 通常用于参数引用。但当我们希望这个字符不作为特殊功能字符，而仅仅作为普通字符出现时，就可以使用 `\` 进行转义。例如在`say $100` 中，`$` 使得 `““` 失去了参数引用的特殊含义，而仅作为字符出现                                                                                                           | `say \$100`    |

| **场景**                             | **描述**                                                                                                                                                                              | **命令用法**                                                                                        | **示例配置**                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 添加运行 /version 命令的替代方法     | 通过注册一个名为 `icanhasbukkit` 的自定义命令，在使用该自定义命令时会执行 version 命令，从而提供了一种运行 /version 命令的替代方式。                                                  | 输入 `/icanhasbukkit`                                                                               | aliases:<br/> icanhasbukkit:<br/> \- "version"                                              |
| 删除命令                             | 注册一个名为 `summon` 的自定义命令并将其映射到空列表，以此告诉服务器取消注册该命令，防止其存在和发挥作用。                                                                            | 无特定命令输入示例，因为目的是删除命令                                                              | aliases:<br/> summon:<br/> \- \[\]                                                          |
| 重命名 /version 命令                 | 注册一个名为 `icanhasversion` 的自定义命令来执行 version 命令，同时创建一个名为 “version” 的自定义命令并映射到空列表以删除原有的 /version 命令。                                      | 输入 `/icanhasversion`                                                                              | aliases:<br/> icanhasversion:<br/> \- "bukkit:version"<br/> version:<br/> \- \[\]           |
| 需要参数                             | 创建一个名为 `givedirt` 的自定义命令，该自定义命令需要提供一个参数(这里是玩家的名字)才能成功运行。                                                                                  | 输入 `/givedirt <player>`，其中 `<player>` 为玩家名称                                               | aliases:<br/> givedirt:<br/> \- "give $$1 minecraft:dirt`                                   |
| 运行多个命令                         | 创建一个名为 `givedirtmsg` 的自定义命令，该自定义命令会在成功运行前执行两个需要参数的命令。                                                                                           | 输入 `/givedirtmsg <player>`，其中 `<player>` 为玩家名称                                            | aliases:<br/> givedirtmsg:<br/> \- "give $$1 minecraft:dirt"<br/> \- "say Gave dirt to $$1" |
| 使用插件提供的命令                   | 通过自定义命令覆盖内置的 `/time` 命令，使用插件 ScrapBukkit 提供的版本。                                                                                                              | 输入 `/time <set\|add> <value>`                                                                     | aliases:<br/> time:<br/> \- "scrapbukkit:time $1\-"                                         |
| 使用 Mojang 提供的命令               | 通过自定义命令覆盖内置的 `/time` 命令，使用 Mojang 提供的版本。                                                                                                                       | 输入 `/time <set\|add> <value>`                                                                     | aliases:<br/> time:<br/> \- "minecraft:time $1\-"                                           |
| 使用 Bukkit 提供的命令               | 通过自定义命令覆盖内置的 `/time` 命令，使用 Bukkit 提供的版本。                                                                                                                       | 输入 `/time <set\|add> <value>`                                                                     | aliases:<br/> time:<br/> \- "bukkit:time $1\-"                                              |
| 接受所有参数                         | 创建一个名为 `broadcast` 的自定义命令，该自定义命令将执行 `say` 命令并接受传递给它的任何参数。                                                                                        | 输入 `/broadcast <message>`，其中 `<message>` 为要广播的消息。                                          | aliases:<br/> broadcast:<br/> \- "say $$1\-"                                                |
| 需要第一个参数，同时使第二个参数可选 | 覆盖内置的 `ban` 命令，这个自定义命令需要第一个参数(这里是玩家的名字)，同时支持可选的封禁理由。当使用该自定义命令时，玩家将被封禁，并广播一条消息通知服务器上的其他人有人被封禁了。 | 输入 `/ban <player> [optional reason]`，其中 `<player>` 为玩家名称，`[optional reason]` 为可选的封禁理由 | aliases:<br/> ban:<br/> \- "bukkit:ban $$1 $2\-"<br/> \- "say Banned $$1\. Reason: $2\-"    |
| 在命令中使用$符号                    | 创建一个名为 `dollar` 的自定义命令，该自定义命令会向服务器广播消息 “That will be 200，thanks！'' 由于字符用于表示参数，所以在创建自定义命令时需要用反斜杠(\\)对其进行转义。         | 输入 `/dollar`                                                                                      | aliases:<br/> dollar:<br/> \- "say That will be \\$200， thanks\!"                           |

<!--markdownlint-enable line-length-->