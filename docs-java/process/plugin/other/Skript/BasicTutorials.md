---
title: 基础教程
sidebar_position: 2
---

# 基础教程

## 了解 "八大类"

所有的脚本都是由以下八中类型的语法构成：

### Events - 事件

什么是事件？ 谁在某地做了某事，最简单的三要素构成了事件。

在 Bukkit 服务器中，事件是系统或玩家行为触发的特定情况或变化。

插件可以通过监听这些事件来扩展服务器的功能或改变其默认行为。

在 SK 中，事件往往作为触发器，**定义了何时以及如何触发脚本中的事件处理逻辑**。

举例：

```skript
on death of player:
    #玩家死亡时
on click:
    #玩家点击时
```

此处的 `on death of player` 和 `on click` 为 Events - 事件

### Conditions - 条件

条件语句用于判断某个表达式的结果，根据结果来执行不同的代码块。

在 SK 中常与事件一起使用，**用于判断是否应该执行特定的效果或操作**。

举例：

```skript
on join:
    if player has permission "admin":
        # 管理员权限时执行
        send "管理你好!" to player
    else:
        # 无管理权限时执行
        send "玩家你好!" to player
```

此处的 `has permission "admin"` 为 Conditions - 条件

### Effects - 效果

效果可以是修改游戏模式、发送消息、移动玩家等任何能够改变游戏世界的动作。

在 SK 中效果是脚本中实际执行的操作或指令，用于**改变游戏结果或执行动作**

举例：

```skript
on consume:
    # 玩家吃东西时
    set player's health to 20
    # 设置玩家的生命值为20
on player jump:
    # 玩家跳跃时
    teleport player to world "nether"
    # 将玩家传送到名为"nether"的世界
```

此处的 `set player's health to` 和 `teleport player to` 为 Effects - 效果。

### Expressions - 表达式

表达式是计算值或引用数据的语句。它们可以返回各种类型的结果。如数字、字符串、列表等。

在 SK 中一般配合条件判断，用于**在脚本中传递和处理数据**。

举例：

```skript
on join:
    # 玩家加入时
    set `{playerIP::%player%}` to ip of player
    set `{playername::%player%}` to name of player
    # 将玩家的名字存储到变量`{playerName}``{playerIP}`中
    broadcast "玩家名字为: %`{playerName%，IP为：`{playerIP::%player%}`}`!"
    # 广播玩家的名字和 IP
```

此处的 `name of` 和 `ip of` 为 Expressions - 表达式。

### Types - 类型

类型定义了变量、参数和返回值的数据种类。在 Skript 中，虽然不像某些编程语言那样严格区分类型，但理解不同类型的值（如字符串、数字、列表等）对于编写正确的脚本至关重要。

```skript
on bed enter:
    # 玩家进入床时
    if world of player is world "world":
        # 如果世界为 "world"
        send "玩家 %player% 已进入睡眠" to all players
        # 发送消息
```

此处的 `"world"` 为 Types - 类型。（注意，此处的 `"world"` 是包含引号的内容，指的是具体的世界名）

### Functions - 功能

功能是封装了特定逻辑的代码块，可以在脚本中多次调用，常用的功能是计算、向量等类型的。

在 SK 中，作用主要是**快捷计算、指定类型（如世界、颜色、玩家类型）等**

举例：

```skript
on elytra boost:
    # 鞘翅加速时（skbee拓展）
    set `{_vector1}` to vector(0, 1, 0)
    # 设置局部变量为向量（向上）
	push player `{_vector1}`
    # 以设定向量推动玩家向上
```

此处的 `world(xxx)` 和 `vector(0, 1, 0)` 为 Functions - 功能。

### Sections - 部分

部分是指脚本中按功能或逻辑组织的代码块。它们可以是事件处理器、条件判断、循环体等，通常用于将相关代码组织在一起，以便更好地管理和维护。

举例：

```skript
on tool break:
    # 当工具用坏时
    if player is op:
        # 如果玩家是管理员
        give player 1 of diamand
        # 给玩家一个钻石
    else:
        # 另一种情况（如果玩家不是管理）
        send "哦不你失去了你的工具" to player
        # 发消息给玩家
```

此处的 `if ...` 和 `else` 为 Sections - 部分。

### Structures - 结构

结构是控制脚本执行流程的语言元素，如循环、条件判断等。它们允许开发者根据特定的条件或逻辑来执行或跳过代码块，从而实现复杂的脚本逻辑。

举例：

```skript
options:
    servername: myserver
    # option 中定义 `{@xxx}` 的值
function welcome(msg: text,p: player):
    broadcast `{_msg}`
    # 广播消息
    message "欢迎 %`{_p}`% 来到`{@servername}`服务器！"
    # 定义了 welcome(参数1:type, 参数2:type)，使用option中的变量 `{@servername}`
on join:
    bcd("欢迎玩家加入游戏",player)
```

此处的 `options` 和 `function` 为 Structures - 结构。

通过合理使用这八大类语法，你可以编写出功能强大、易于维护的 Skript 脚本，为 Minecraft 服务器增添丰富的功能和玩法。

## 入门

Skript 仍然是编程语言，所有的编程语言都必须在拥有理论基础的情况下多实践。

### 缩进

在 Skript 中 如果一行代码以 ":" 结尾 那么下一行需要进行缩进操作，如果没有就不需要进行缩进。

缩进的方式可以选择两个/四个空格或者一个 Tab （Tab 虽然不是很规范但是真的很爽）。

### 文本编辑器

推荐使用 Vscode 安装 Skript 拓展。或者使用 [Skeditor](https://forums.skunity.com/resources/skeditor.1517/)高亮语法。

### Helloworld

在 `/plugins/Skripts/scripts` 目录下创建一个名为 `test.sk` 的文件，并打开粘贴以下代码。

```
on join:
    send "Hello World" to event-player
```

随后在权限账号或者后台输入 `/skript reload scripts` 即可完成重载。然后退出服务器并重新进入。

如果进入服务器时收到了 "Hello World" 的消息，那么证明脚本 `test.sk` 已经生效了。

### 查询语法

很好，想必你已经大概知道 Skript 是一款什么样的编程语言了。

想必你一定有一些想法，市面上可能找不到，而且因为你不会使用 Java 写插件所以难以实现。

前往 [skhub](https://skripthub.net/docs/) 或 [skunity](https://docs.skunity.com/syntax)查询 Skript 语法，现在开始构思你的插件吧。

### 如何使用语法

首先，最重要的是 Event（事件），这是所有逻辑的先决要素，我们在[skhub](https://skripthub.net/docs/) 或 [skunity](https://docs.skunity.com/syntax) 上，

在侧边栏中选中（Skript 和 Events），即可筛选 Skript 原生事件。此处以指令监听器为例：

在侧边栏中选中（Skript 和 Events）后，在搜索栏中输入 "on command"，得到以下结果。

![](_images/SkriptBasic1.png)

#### 语法

举一个例子，点击事件的语法是这样的：

```
[on] [(right|left)(| |-)][mouse(| |-)]click[ing] (with|using|holding) %itemtype% on %entitydata/itemtype%
```
##### `[xxx]`

表示这部分可以被省略，但省略后可能会导致意义改变，如此处 `on click:` 和 `on rightclick:` 意义不同，前者为所有类型的点击，而后者为右键。

##### `(x|y|z)`

表示这部分可以从 `x`、`y`、`z` 中选择一个值，`x`、`y`、`z` 可以是空格或者空（也就是左右可以直接连起来），

例如 `[mouse(| |-)]click` 代表着：`mouseclick` `mouse-click` `mouse click` 这三者有相同的含义。

##### `%type%`

表示这部分只能是固定的某种 type，如 `%itemtype%`，这部分可以勾选 [skhub](https://skripthub.net/docs/) 侧边栏 `Type` 获取。


#### 属性

是否可取消

我们要重点关注的是 `Event Values` 这一标签下所对应的内容:

1. "event-world"（"事件-世界"）
2. "event-commandsender"（"事件-指令发送者"）
3. "event-player"（"事件-玩家"）

利用这些，我们便可以获取到事件中的，“谁”和“某地”之类具体的信息。

我们看一个 "on command" 相关示例：

```skript
on command "/op":
    send "%event-world%" to console
    send "%event-commandsender%" to console
    send "%event-player%" to console
```

此时，任何执行者执行 "/op" 指令都会触发此监听。并将三个元素 "event-world" "event-commandsender" "event-player" 输出到后台。

如果是后台执行了 "/op" 指令时，因为后台并不存于任何一个世界，也没有名字。上述三个元素只会有 "event-commandsender" 存在并正常输出为 "console" 而其余不存在元素将全部输出为 `"<none>"`

相同地，你可以利用这样的方法，输出任何一个监听器下 "Event Values" 的元素值。

这种获取元素值的方法将在你需要使用任何从来没有接触过的监听器的时候，快速让你掌握监听器的基本信息。

### 最初的脚本

在这个板块中，请利用 [skhub](https://skripthub.net/docs/) 或 [skunity](https://docs.skunity.com/syntax)查询 Skript 语法，满足缩进等要求，尝试写一些最基础脚本吧~

#### 事件

在这一节中，我们学习如何选取如何选用合适的事件。因为事件是一切行为的触发器，需要事件发生了什么，在哪发生的，

才能够进一步进行操作，事件发生的顺序是:

`事件准备发生` > `监听器监听到` > `事件正式发生`。

##### 事件的取消

如果我们在监听器监听到后，加入取消事件这一环节。事件发生的顺序就变为了:

`事件准备发生` > `监听器监听到` > `取消事件` > `事件未发生`

我们就成功阻止了指令的发生，我们使用 `cancel event` 来达到这一点。

##### 事件优先级

要注意，事件的监听是有优先级的，其中有六个优先级，其中执行顺序为**从上到下**分别为：

|优先级| Priority|
-------- | -----
|最低| Lowest|
|低 |Low|
|正常（默认）|Normal|
|高 |High|
|最高 |Highest|
|监控 |Monitor|

:::warning[吐槽]

Bukkit 的事件就是这样的，所以 Skript 也继承了这个抽象名字，发生顺序为 `Lowest -> Low -> Normal -> High -> Highest -> Monitor`

没错，Lowest 的事件最先发生，如果一个插件事件优先级更高且这个事件没有被更低优先级的插件取消，那么更高优先级的事件将会覆盖更低优先级的结果。

我们来简单假设一个条件，我们想要写一个脚本禁止管理使用 tp 指令传送玩家到其他地方，我们会这样写：

```
on teleport with priority lowest:
    teleport cause is command
    #判断 tp 原因是否为指令 tp
    if player do not has permission "admin.tp":
        #取消没有被 tp 权限的玩家的传送
        cancel event
```

此时我们在常用的 `on teleport` 事件后加上优先级 `with priority lowest` （以最低优先级先发生并取消）

由此可见，Lowest 可以理解为 First，而 Highest 可以理解为 Last，更符合逻辑

:::

##### 事件选用

选用不合适的事件可能会导致逻辑混乱复杂，性能拉胯，臃肿等。所以在任何脚本编写之前应该充分考虑选用什么事件是合理的。

例如，我们想写一个脚本，检测玩家在 00:00 - 06:00 没有在床上睡觉，那么就每秒扣玩家 1 生命值。

查询 [skhub](https://skripthub.net/docs/) 或 [skunity](https://docs.skunity.com/syntax) ，根据直觉选择，与时间和睡觉有关系的事件可能有这些：

```
every 10 seconds:
at 00:00:
on bed enter:
on bed leave:
```

我们分别使用这些事件写以下几个脚本：

```
脚本1
every 1 second:
    loop all players:
        if loop-player is not sleeping:
            if time in world is between 00:00 and 6:00:
                remove 1 from health of loop-player
```

该脚本利用 `every %tiemspan%` 作为事件触发，本身也是周期循环。

可以发现，该循环使用 `every 1 second`，触发频率比较高，即使在白天这个事件循环仍在继续，

虽然整体任务不算复杂，但是如果遇到复杂判断时，高频率（尤其是 `every tick`）的事件是很低效的。

在这里，我们可以改写为：

```
脚本1改
every 1 second:
    if time in world is between 00:00 and 6:00:
        loop all players:
            if loop-player is not sleeping:
                remove 1 from health of loop-player
```

相对脚本 1，我们发现，在时间在 0 - 6 点之外的时候，我们不会 loop 和判断玩家睡眠，因为这本身是没有意义的。

仅仅只是交换两行代码顺序，就能起到提升性能的效果。（这里举例是非常轻量的例子，不足以产生任何性能问题）

```
脚本2
on bed leave:
    set {%player%::sleep} to false
on bed enter:
    set {%player%::sleep} to true

at 00:00 in world "world":
    while time in world is between 00:00 and 6:00:
        loop all players:
            if {%loop-player%::sleep} is false:
                remove 1 from health of loop-player
        wait 1 second

```

该脚本利用 `at time` 作为事件触发，也使用 `while` + `wait` 保持时间周期循环。使用 `bed leave` `bed enter` + 变量作为条件。

属于错误使用了监听事件，因为玩家是否在睡觉不需要我们自行使用事件判断，而是有直接的条件语法。

```
脚本2改
at 00:00 in world "world":
    while time in world is between 00:00 and 6:00:
        loop all players:
            if loop-player is not sleeping:
                remove 1 from health of loop-player
        wait 1 second
```

该脚本利用 `at time` 作为事件触发，使用 `while` + `wait` 保持时间周期循环，使用 `is not sleeping` 作为条件。

##### 练习

制作一个 Skript 脚本，用于在大厅使用，不会刷新怪物，玩家不会受伤也不可伤害，也不会掉饱食度。

普通玩家不可放置方块，或破坏方块，而有权限 `lobby.admin` 的玩家可以放置和破坏方块。

<details>
    <summary>参考写法，不唯一</summary>

不刷新怪物的事件建议去掉，直接设置**难度为和平**。

```
不推荐，即使这是有用的！
on spawn of any monster:
    cancel event
on food level change:
    cancel event
    #禁止饱食度变化
```

```skript
on damage of a player with priority lowest::
    cancel event
    #取消玩家伤害
on break with priority lowest::
    if player do not have permission "lobby.admin":
        #判断玩家权限
        cancel event
        #取消无权限玩家的方块破坏
on place with priority lowest::
    if player has permission "lobby.admin":
        stop
        #停止进一步对有权限玩家的逻辑，即什么也不做
    else:
        cancel event
        #取消没有权限玩家的方块放置行为
```

在这里，以下两种写法是等价的。

```
if player do not have permission "lobby.admin":
    cancel event
```

```
if player has permission "lobby.admin":
    xxx
else:
    cancel event
```

如果只需要判断是或不是，可以灵活选用更简洁的方法，简化为：

```
on place:
    player do not have permission "lobby.admin"
    cancel event
```

在这里省略了一个 if，因此后面也不需要跟上冒号 `:`，也无需重新换行，但注意，这只适用于只对没有权限的人进行取消，而对有权限的人没有任何限制时才可以这么写。

</details>

#### 条件

TODO

#### 练习 2 - /command、局部变量、运算练习

制作一个 Skript 脚本，用于简单的跨世界传送，输入 `/world xxx` 即可传送到对应世界，坐标对应为：`主世界:地狱:末地=8:1:8`，

即玩家在末地 `800, 100, 800` 传送到主世界坐标为 `800 100 800`，如果传送到地狱坐标为 `100 100 100`

<details>
    <summary>参考写法，不唯一</summary>

:::tip

1. `command /xxx` 后一定要使用 `trigger:` 否则指令将不会注册并报错。
2. `/xxx` 为 "指令"，第 n 个空格后的参数即为 `arg-n`，如此处的 `<world>` 为 `arg-1`
3. 参数类型可以查 [skhub](https://skripthub.net/docs/) 选择 `type` 为参数类型，万能参数可用 `string` / `text`。
4. 参数以 `<>` 引用起来时说明该参数为必要参数，如果输入时没有这个参数时会提示格式错误，如果这个参数是可以省略的，那么可以使用类似 `[<text>]` 的方法。

在这里，我们分析一下指令，应该是 `/world xxx` 中的 `xxx` 代表世界，所以我们选择 `/world <world>` 作为指令。

另外，我们可以发现，玩家输入的指令可能包括自己在的世界，这件事本身是没意义的，应该在最开始检查一次。

如果你是新手，很有可能会写出类似以下的脚本：

```
        if arg-1 is world "world_the_end":
            teleport player to location(player's x-coord / 8, player's y-coord, player's z-coord / 8, world "world_the_end")
        if arg-1 is world "world_nether":
            if player's world is "world_the_end":
                teleport player to location(player's x-coord / 8, player's y-coord, player's z-coord / 8, world "world_nether")
            if player's world is "world":
                teleport player to location(player's x-coord, player's y-coord, player's z-coord, world "world_nether")
        if arg-1 is world "world":
            if player's world is world "world_nether":
                teleport player to location(player's x-coord * 8, player's y-coord, player's z-coord * 8, world "world")
            else:
                teleport player to location(player's x-coord, player's y-coord, player's z-coord, world "world")
```

:::warning[为什么这是不好的]

1. 在这里，每行代码都过长了，非常不利于阅读。
2. 此想要调整不同世界的比例时，需要一个个调整参数，这不利于代码的维护。
3. 使用的 `if` 套在 `if` 后的情况比较多，在逻辑上可能会出现问题。

:::

所以，我们选择使用局部变量暂存玩家的坐标，并基于玩家所在世界及目标世界计算变量，

最后根据计算出的量直接使用 `teleport player to [location]` 传送即可。

```
command /world <world>:
    permission: command.world
    trigger:
        if arg-1 is player's world:
            send "[传送] 禁止套娃！"
            stop
            #取消玩家输入的世界是自己所在的世界时的原地tp
        else:
            set {_y} to player's y-coord
            #使用局部变量储存玩家的 y 坐标
            if player's world is "world_nether":
                #玩家在地狱时存储 x z 坐标存为 8 倍
                set {_x} to player's x-coord * 8
                set {_z} to player's z-coord * 8
            else:
                #玩家在其他世界时 x z 左边暂存
                set {_x} to player's x-coord
                set {_z} to player's z-coord
            if arg-1 is world "world_nether":
                #如果玩家从其他地方到地狱，将暂存的 x z 坐标除以 8
                set {_x} to {_x}/8
                set {_z} to {_z}/8
                teleport player to location({_x},{_y},{_z},world "world_nether")
                #传送到地狱
            else:
                teleport player to location({_x},{_y},{_z},world "%arg-1%")
                #传送到指令对应世界
```

</details>

#### 练习 3 -

<details>
    <summary>参考写法，不唯一</summary>

</details>

#### 练习 4 -

<details>
    <summary>参考写法，不唯一</summary>

</details>

#### 练习 5 -

<details>
    <summary>参考写法，不唯一</summary>

</details>

#### 练习 6 -

<details>
    <summary>参考写法，不唯一</summary>

</details>

### 最初的脚本编写思路 (by TUCAOEVER)

:::warning

后文为 TUCAOEVER 在 mcbbs 的教程未参考部分，没有进行任何格式化，TODO

:::
=


---

### Conditions(条件)

条件用于判断句：有没有，是不是。它的基本格式为 "if" + 条件。

这里我们和学习 Events 一样，我们先通过官方 Doc 找到所有的条件。

这里我们拿最常用的一个条件作示例，判断玩家是否有权限。

权限的英文是什么? "permission" 我们通过翻阅侧边栏可以得知与 "permission" 相关的只有 "Has Permission" 一条，官方对这个条件的解释为："Test whether a player has a certain permission."，翻译过来就是 "检测一个玩家是否拥有某一权限"。即我们所需要的：判断玩家是否有权限，那么我们又该如何使用呢 "Has Permssion" 条件呢?

在 "Has Permission" 下 "Patterns" 给了我们两种标准格式用法：
- `%players/console% (has|have) [the] permission[s] %texts%`
- `%players/console% (doesn't|does not|do not|don't) have [the] permission[s] %texts%`

针对这样的格式，我相信很多人可能一头雾水。了解如下几点，或许能帮助你更好的了解用法：
- "[]" 内可以省略
- "(...|...)" 内必须选择一项填写
- "%%" 内必须根据其所对应的类型进行填写

- `player has permission "player.op"`
- `player have the permissions "player.op"`
- `player have permissions "player.op"`

正如之前所说的：可以省略的地方，无论如何搭配，表达的意思都是一样的。

这也是 Skript 一大特点，并不需要非常严谨的语法。只要意思对，语法可以根据个人喜好进行选择。

同样我们还是举一个以 "on command" 监听器为核心的例子加深一下大家的理解：

```skript
on command "/op":
        event-commandsender is player
        if event-player has permission "player.op":
                send "true" to event-player
        else:
                cancel event
                send "false" to event-player
```

那么在玩家触发此监听器后，系统将会判断玩家是否有 "player.op" 权限。

如果有，指令将会正常进行，并发送 "true" 给玩家。

如果没有，指令执行事件将被强制取消，并发送 "false" 给玩家。

---

### Effects(效果)

与其说它是效果，不如称作行动。

我们把条件类的示例拿下来接着分析：

```skript
on command "/op":
        event-commandsender is "player"
        if event-player has permission "player.op":
                send "true" to event-player
        else:
                cancel event
                send "false" to event-player
```

我们把两个条件判断句替换为条件1和条件2，那么这段代码就可以理解为：
```
指令监听 "/op":
        事件-发送者类别 是 玩家
        条件1:
                send "true" to event-player # 发送消息给玩家
        条件2:
                cancel event # 取消事件
                send "false" to event-player # 发送消息给玩家
```

我们可以看到，条件判断结束后，代码并没有直接结束，而是分别执行行动。

如果我希望执行其他行动呢? 比如我想给一个玩家发送一个 Title 消息：

通过在官方 Doc 搜索，我们得知关于 Title 相关的 Effects 一共有两个：
- (EffResetTitle)[https://docs.skriptlang.org/docs.html?search=#EffResetTitle]
    "Resets the title of the player to the default values."
    "重置玩家的 Title 至默认值"
- (EffSendTitle)[https://docs.skriptlang.org/docs.html?search=#EffSendTitle]
    "Sends a title/subtitle to the given player(s) with optional fadein/stay/fadeout times."
    "发送 Title/Subtitle 至指定玩家 可自定义渐入和淡出的时间"

我们需要知道的是 #EffSendTitle 的用法。关于怎么用，这里本质上和学习Conditions(条件)一样，我们将注意点放在 "Patterns" 上。

``` skript
send title %text% [with subtitle %text%] [to %players%] [for %time span%] [with fade[(-| )]in %time span%] [(and|with) fade[(-| )]out %time span%]
send subtitle %text% [to %players%] [for %time span%] [with fade[(-| )]in %time span%] [(and|with) fade[(-| )]out %time span%]
```

按照我们提到的原则：
- "[]" 内可以省略
- "(...|...)" 内必须选择一项填写
- "%%" 内必须根据其所对应的类型进行填写

我们大致上认识到行动的基本用法，即：
`send title "..." with subtitle "..." to player for ... seconds with fade-in ... seconds and fade-out ... seconds`

将其带入进我们的伪代码：

```skript
指令监听 "/op":
        事件-发送者类别 是 玩家
        条件1:
                send "true" to event-player
                send title "Hello!" with subtitle "持续时间 5s 渐入未设置 淡出未设置" to event-player for 5 seconds
                wait 15 seconds
                send title "Hello!" with subtitle "持续时间 5s 渐入 5s 淡出未设置" to event-player for 5 seconds with fade-in 5 seconds
                wait 15 seconds
                send title "Hello!" with subtitle "持续时间 5s 渐入 5s 淡出 5s" to event-player for 5 seconds with fade-in 5 seconds and fade-out 5 seconds
        条件2:
                cancel event
                send "false" to event-player
```

通过以上三种方式，我们都能成功的发送了 Title 信息。

只要记住以上基本原则，所有的用法问题迎刃而解。

而学会读 "Patterns" 是初学者必备的技能，下文我将不会再提及如何使用 "Patterns" 查阅用法。

---

### Expressions(表达) & Types(类型)

有一天你心血来潮，想要调整玩家的最大血量。

调整血量，之前我们提过这属于动词 + 名词形式，这是属于 Effects(效果) 类。

但是实际上是这样么?

实际上并不是，所谓的 Effect(效果) 虽然都是 `动词 + 名词` 形式，但是对于 Effect(效果) 而言。

注重的是 `动词` 而非后面跟着的 `名词` 例如 `在玩家所在位置生成僵尸`。

Effect(效果) 所能提供的 只有 "生成"
通过查阅[官方文档](https://docs.skriptlang.org/docs.html?search=#EffSecSpawn)，我们知道生成的用法基本为：

```skript
(spawn|summon) %entity types% [%directions% %locations%]
(spawn|summon) %number% of %entity types% [%directions% %locations%]
```

但是除去这个词语，我们还剩 "在玩家所在位置" 和 "僵尸"。

这两个词我们又该怎么处理呢? 这时候我们就需要用到 Expressions(表达)。

位置的英文单词是 "Location" 我们在官方 Doc 查到了多种有关 "Location" 的表达
- https://docs.skriptlang.org/docs.html?search=#ExprLocation
- https://docs.skriptlang.org/docs.html?search=#ExprLocationOf
- https://docs.skriptlang.org/docs.html?search=#ExprLocationAt

我们需要什么呢? 我们需要 "玩家所在的位置"。相同地，通过查看官方的注释，我们知道我们需要的是 #ExprLocationOf (The location of a block or entity.)。

但是这只解决了我们 "所在位置" 的问题 并没有解决 "玩家" 和 "僵尸" 的问题。

我们可以看到 "所在位置"，Expressions(表达) 是没有主语的。

Skript 不同于其他语言，正如我在开头所展示的，相比较 Java 而言 Skript 更**注重的是语言而非编程**。

我们需要把这些零碎的东西组成句子，必不可少的是主语，次要的是宾语。

这时候我们就需要引入 Types(类型)，但凡你发现你的表达里缺少主语/宾语(对象)，来这里准没错：

https://docs.skriptlang.org/classes.html

通过翻译我们可以轻松知道玩家的英文以及僵尸的英文，分别为 "player"和"zombie"。

与之相对应的，我们分别在 Types(类别) 中找到：
- https://docs.skriptlang.org/docs.html?search=#player
- https://docs.skriptlang.org/docs.html?search=#entity

综合上面我们所获得的信息 我们获得了完整一行代码：

```spawn zombie at location of player```

---

WOW，恭喜你！看到这，你就可以开始尝试着写一些插件了。


## 例子

这里刚好有一个例子，不妨动动手，试一试。

- 在玩家破坏方块时 检查玩家是否有 "fundamental.break" 这个权限
- 如果有那就在让后台发送一条指令 "/broadcast %player% 破坏了方块"
- 如果没有那就取消这个事件 并 向这个玩家发送 "你不能破坏这个方块"

答案不唯一，仅供参考。

当然仅仅学这些并不够，为了做到能更快更灵活的使用各类语法，在闲暇的时候，把官方 Doc 提供的所有语法的注释都认真的看一遍是快速上手 Skript 的一种好办法。

---

你开始尝试着写一些有一些小功能的脚本了，但是难免的你会出现这样的问题：

你为玩家创建了很多变量，很多都是属于一个类型的。

比如你把所有人的游戏币数量都存在了 `{(玩家的名称)的游戏币数}` 这些变量内，你把所有人的点券数量都存在了 `{(玩家的名称)的点券数}` 这些变量内……

平时你单独去操作这些变量的时候，觉得也很容易。

但是假设突然有一次，由于回档需要补偿玩家损失。

你需要将所有玩家的 `{(玩家的名称)的游戏币数}` 变量都 +1000。

还好只有10个玩家数据，你可以一个一个调，就是浪费一点时间，倒还不成问题。

但是如果你有10000个玩家数据，如果你一个一个调，可能玩家都走完了，你也调不完。

你遇到了新的问题，如何存储并快速操作一类变量?

这时候你需要两样东西："数组"和"loop"。

### 数组

数组的基本格式为 `{变量名::变量名::变量名......}`。

我们带入实景，将用 `{(玩家的名称)的游戏币数}` 存储转为用 `{金币::(玩家的名称)}` 存储玩家的游戏币数量。

例如，服务器有 10000 个玩家，玩家名称为 1,2,3,......,10000，玩家游戏币数量为 100,200,300,......,1000000。

那么对应的 `{金币::1}` 就是：名为 "1" 玩家的游戏币数量 100。

如果我用输出语句输出 `{金币::1}` 至后台，那么很显然我会得到 100 这个数值。

同样的我用输出语句输出 `{金币::10000}` 至后台，我会得到 1000000 这个数值。

你可能会说，这不是和用 `{(玩家的名称)的游戏币数}` 一样么?

是的，确实。如果仅仅需要获得某一个玩家的游戏币数量，两者并没有什么区别。

但是，如果我将 `{金币::(玩家的名称)}` 中玩家的名称改为 "*" 即 ``{金币::*}``，这时候会产生什么样的效果呢?

``{金币::*}`` 将包含，所有 ``{金币::(玩家的名称)}`` 变量。

而这个，却是 `{(玩家的名称)的游戏币数量}` 怎么改也做不到的。

### Loop

利用数组我们知道了如何快速获取一类数据。

但是我们又该如何快速操作这一类数据呢? 这时候就需要引入我们的 Loop 结构。

Loop 即 循环结构，是 Skript 里非常常用的结构语句，主要用于操作数据量较大的一类变量。

以下是 Loop 的几大标准配合：

### Loop + 数组 结构

(To Be Added.)

### Loop + 次数 结构

(To Be Added.)

### Loop + Types(类型) 结构

(To Be Added.)

---

### 注册指令

说到现在，我们所有的代码，似乎都是基于监听器进行编写的。

我们都需要去触发监听器，才能执行我们的代码，那有没有什么办法可以主动触发我们的代码？
这时候我们就需要引入 Minecraft 插件最核心的功能，指令功能。

在 Java 里你可能需要这样注册一个指令。

```Java
@Override
public boolean onCommand(final CommandSender sender, Command cmd, String label, String[] arg)`{
        if (cmd.getName().equalsIgnoreCase("自定义指令"))`{
        代码段落
        }`
        return true;
}`
```

但是在 Skript 里你只需这样即可

```skript
command /自定义指令:
        trigger:
                代码段
```

你并不需要理解前者是什么意思，仅仅需要记住后者的格式即可。

如果我想注册一个 "/我学你马Java" 的指令，你只需这样：（编者注：不建议注册中文指令。）

```skript
command /我学你马Java:
        trigger:
                kill player
                send "不许说Java坏话" to player
```

通过测试，指令正常触发。

通过套公式，你可以创造成千上万的指令不成问题，但是实际上我们在使用一个插件的时候，并不是只有 `/...` 结构的指令存在，更多的是 `/... ... ...` 来构成一类指令。

那我们又该如何注册这样结构的指令呢? 非常简单，基本格式与上面几乎无异。

```skript
command /自定义指令 [<类型>] [<类型>] ...:
        trigger:
                代码段
```

本人写代码时常用的结构就是这样。

有人问 "类型" 有哪些，其实我也说不全，我常用的有这几种。（编者注，见本页 `了解八大类`。）

- "text" - 字符类型。什么是字符? 可以按照字面意思来理解，字词符号。
- "player" - 在线玩家。
- "offline player" - 离线玩家。
- "number" - 数字类型。
- "integer" - 整数类型。

那这些类型又有什么用处呢? 它实际上是对指令的参数的一种限制。

比如我创建如下指令：

```skript
command /hello [<player>]:
        trigger:
                代码段
```

可以看到，第一个空格的位置，我需要的参数类型为在线玩家。

那么我在执行这个指令的时候，必须在这个位置上填上一个在线玩家的名称。

同样的如果我把 `"[<player>]"` 换成 `"[<integer>]"`，我就需要在这个位置上填写一个整数。

如果我填了 "1.2"(小数/浮点数)，Skript 就会提示我，填写的参数类型错误。

为什么填写参数？那肯定是在代码段内需要使用这些输进来的参数。

那么我们在代码段里有该如何调用这些被我们输入进来的参数呢?

比如像是上面这个指令，它只有一个可以填参数的位置。那么在代码段内，它就是 `arg-1`，即`第一个参数`的意思。

我们只需要记住核心规则，它排在第几位，在代码段内，它就是 "arg-几"。

当然我在这块的了解并不是很深入，为了不把大家带上歪路，这里引用国外 Skript 原作者更为详细的指令注册的教程。

```skript
command /<指令名称> <参数>:
　　aliases:
　　executable by:
　　usage:
　　description:
　　permission:
　　permission message:
　　cooldown: <冷却时间>
　　cooldown message:
　　cooldown bypass:
　　cooldown storage: <变量>
　　trigger:
　　　　代码段
```

- 指令名称(必填)
    指令名称基本上是指令，您可以在指令名称中使用任何字符(空格字符除外)。
    当然如果在指令名称中使用空格字符，那么空格字符后的文本将成为参数。
    指令名称前的斜杠字符(/)是可选的(但这并不意味着您可以在执行指令时不带斜杠)。
- 参数(可选)
    可以通过将参数放在 "[]" 中来使其成为可选参数。
    - 类型参数
        可以通过使用规定的格式来限制参数的类型，例如: `<type = default value>`。
        - 类型为 "text/string" 的参数可以接受任何字符，但 "object" 类型不能用作于参数（编者注：原因大抵是无法输入 `object`）。
        - 类型可以是多个 (例如 number -> numbers entity -> entities)。通过这样的方法，可以使参数接受多个值。
        - "= default value" 这一部分是可选的，如果指令执行者未输入参数，系统将自动使用默认值。
        - 同样你也可以使用这样的方式设置参数默认值，例如: `<item = %player's tool%>`。

以下是一份指令示例:

`command /kill <entity types> [in [the] radius <number = 20>]:`

使用 `/kill zombies /kill creepers and animals in radius 100` 或 `/kill monsters in the radius 6` 都是可以的。

但是如果没有输入数值，系统将自动使用默认值，半径 20。
- Aliases
    子指令，指令的别名。如果需要创建多个子指令，请使用用逗号分隔。
    示例：（/alias1,alias2,/alias3）
- Executable By
    指定可以使用该指令的执行者。
    例如：console(后台), players(玩家), the console and players(后台和玩家)
- Usage
    执行者用法不正确时，将发送的消息。
- Description
    指令描述，其他插件可以获取/显示此信息。
- Permission
    执行指令所需要的权限。
- Permission Message
    执行者没有权限时的提示信息。
- Cooldown
    多长冷却时间后可以再次使用该指令，需要注意的是，关服时所有指令冷却时间将被重置。
- Cooldown Message
    冷却期间，提示信息。
- Cooldown Bypass
    无视冷却时间所需要的权限。
- Cooldown Storage
    存储冷却时间全局变量名称。

---

### Function 第一类结构

众所周知，一个复杂的插件，不免出现相似的代码段。

有时候你看着不舒服，想要缩减段落，却又无从下手。这时你就需要 Function 来帮忙了。

这里取 SUPERGUILDS 的一段代码做讲解。

```skript
file "plugins/SUPERGUILDS/%{_fileDir}%.yml" does not exists:
        create file "plugins/SUPERGUILDS/%{_fileDir}%.yml"
    yaml "plugins/SUPERGUILDS/%{_fileDir}%.yml" is not loaded:
        load yaml "plugins/SUPERGUILDS/%{_fileDir}%.yml" as "plugins/SUPERGUILDS/%{_fileDir}%.yml"
    set yaml value "%{_variableName}%" from "plugins/SUPERGUILDS/%{_fileDir}%.yml" to "%{_value}%"
    save yaml "plugins/SUPERGUILDS/%{_fileDir}%.yml"
```

可能你不知道这段代码的意思，简而言之，这段代码的功能是存储一些数据至一个 YAML 文件内。对于一个相对复杂的脚本，数据的存储是必不可少的，同样也会频繁出现在我们的代码中的。难道真的每一次需要存储数据的时候，都需要再去复制粘贴么？

对于一个初学者来说，无可厚非，就是多几行而已。但是对于一个老手来说，**复制粘贴不可取**。

首先对于一个 5000+ 以上的插件来说，你需要关注的东西很多：一个是代码优化，一个是代码可读性。

就拿 SUPERGUILDS 来说，它有 7000 多行。我所有的数据读取和存储都是通过方法完成，单一个数据写入方法我就使用了 100 多次，(也就是以上的代码)。如果我们把它都像上面一样全部展开，我的脚本将立即增加 600+ 行。但是我们在写脚本的时候真正需要的是这些么? 不，我们需要的是效果，是功能，不是数据处理的流程。

每次写入数据都需要白白多占 6 行，既不方便后期维护，又要因为要兼顾路径正确与否，浪费很多时间在查错上面，不划算。

Function 为你解决了这些难题，方法的注册和指令的注册有共同的地方，比如它们同样需要参数，结构一般为：

```skript
function 方法名(参数名:参数类型, 参数名:参数类型, ...):
        代码段落
```

(关于参数名以及参数类型的定义 可以在 "Command" 栏目下找到 此处不再赘述)
套用公式 我们可以把上面的代码段转换成方法段

```skript
function SG_writeFile(variableName: text, value: text, fileDir: text):
    file "plugins/SUPERGUILDS/%{_fileDir}%.yml" does not exists:
        create file "plugins/SUPERGUILDS/%{_fileDir}%.yml"
    yaml "plugins/SUPERGUILDS/%{_fileDir}%.yml" is not loaded:
        load yaml "plugins/SUPERGUILDS/%{_fileDir}%.yml" as "plugins/SUPERGUILDS/%{_fileDir}%.yml"
    set yaml value "%{_variableName}%" from "plugins/SUPERGUILDS/%{_fileDir}%.yml" to "%{_value}%"
    save yaml "plugins/SUPERGUILDS/%{_fileDir}%.yml"
```

若想将 "plugins/SUPERGUILDS/playerdata/玩家UUID.yml" 的 "Datas.Username" 设置为 "**EVER"

```skript
file "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml" does not exists:
        create file "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml"
    yaml "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml" is not loaded:
        load yaml "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml" as "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml"
    set yaml value "Datas.Username" from "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml" to "**EVER"
    save yaml "plugins/SUPERGUILDS/playerdata/%uuid of player%.yml"
```

代码即可转换为

```skript
SG_writeFile("Datas.Username", "**EVER", "playerdata/%uuid of player%")
```

**使用**方法的时候请勿画蛇添足在前面另加 "function"。

通过这样的方法我们大大减少了代码量，提高了开发效率。你以为 Function 就结束了？

其实不然，作为方法，很多的时候它并没有 "操作" 功能，更多的是 "整理/查找/判断" 功能。

上面我提到了使用 Function 写入了数据 那么有写入肯定需要读取 我们又该如何利用 Function 来缩短我们读取的代码呢?

---

### Function 的第二类结构

```skript
function 方法名(参数名:参数类型, 参数名:参数类型, ...) :: 输出参数类型:
        代码段落
        return 返回值
```

与我们之前提到的写入不同，此时在方法的第一行的末尾我们新增了 "输出参数类型"。

什么是输出? 就是代码执行完，我们会得到一个值，而输出即返回这个值。

什么是参数类型？这里举一个例子，我们知道 1+1=2，这是因为 1 是一个数字，2 也是一个数字，所以才有数字+数字=数字。

那“①+一”又等于什么呢? 在你的思维中，很可能会认为它们仍然是数字，你会觉得答案还是 2。

但是执行我们代码的是计算机，并不是“我们”。在大部分情况下，计算机所能识别的数字，只有阿拉伯数字 "1,2,3..."

而对于 "①,一..."，计算机只能识别它们中的一些字符，并不能利用这些字符进行加减运算。如果有个人突然问你一句水 + 苹果 = ? 你或许也没有一个准确的答案。

计算机更是这样。所以这时候就需要参数类型来规范我们运算中的这些值，以下是一份示例。

```skript
function SI_isSlotAvaliable(s: integer, z: integer) :: boolean:
    set {_m} to {_z} * 9 - 1
    {_s} is not between 0 and {_m}:
        return false
    return true

```

通过第一类 Function 的学习我们知道，这个方法可以放入两个参数，最终会返回一个参数类型为 boolean("布尔") 的值 即 "false/true"。

那么实际操作中我们就可以通过这样一段代码，判断给定的数值是否满足条件。满足将返回 "true" ，不满足将返回 "false"。

切记，对于 Skript，如果代码已经成功获得的最终值，那么方法代码将立即终止，也就是说，从返回成功的一行开始，后面所有代码将不再执行。

到此，所有基础教程已结束，谢谢大家赏脸看完。全文 11111 字，都是自己的一些干货，点个收藏，给点人气便是对我最大的支持。

请支持原作者 [TUCAOEVER](https://github.com/TUCAOEVER)。

### 编者 (氿月) 的主要改动

1. 在部分地方加上了注释。
2. 改动了已经失效的原文档链接。
3. 对整篇文章进行了重格式化，使之更符合现代汉语语法和 Markdown 语法，一定程度上增强了可读性。
4. 统一了文章中出现的部分译名，如 `command`，统一使用 `指令` 来指代。
