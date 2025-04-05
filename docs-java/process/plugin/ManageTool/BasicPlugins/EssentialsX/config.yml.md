---
title: config.yml
sidebar_position: 3
---

<!--markdownlint-disable line-length-->

```yaml title="plugins\Essentials\config.yml"
#-驿站忆行(185839426)
#-驿站忆行(185839426)
# |                       Notes                          | #
#-驿站忆行(185839426)
#-驿站忆行(185839426)

# This is the config file for EssentialsX.
# This config was generated for version 2.19.4.

# If you want to use special characters in this document， such as accented letters， you MUST save the file as UTF-8， not ANSI.
# If you receive an error when Essentials loads， ensure that:
#   - No tabs are present: YAML only allows spaces
#   - Indents are correct: YAML hierarchy is based entirely on indentation
#   - You have "escaped" all apostrophes in your text: If you want to write "don't"， for example， write "don''t" instead (note the doubled apostrophe)
#   - Text with symbols is enclosed in single or double quotation marks

# If you need help， you can join the EssentialsX community: https://essentialsx.net/community.html

############################################################
# +------------------------------------------------------+ #
# |                 Essentials (Global)                  | #
# +------------------------------------------------------+ #
############################################################

# OP名字的颜色代码，填写0~9或a~f其中的一个数字或字母，填写'none'来冻结该功能
# 在 1.16 中，你也可以在此处使用十六进制颜色代码。 (例如，#613e1d 是棕色的)。
ops-name-color: '4'

# 昵称的前缀符号，这样你能知道这不是他们真正的用户名.
nickname-prefix: '~'

# 设置最大昵称长度， 昵称前缀也包括在内.
max-nick-length: 15

# 不能在昵称中使用的短语列表。 你可以在此处包含正则表达式。
# 拥有essentials.nick.blacklist.bypass 的用户将能够绕过此过滤器。
nick-blacklist:
#- Notch
#- '^Dinnerbone'

# 启用此选项时，昵称长度检查将排除玩家名字的颜色代码所占字符.
# 即: "&6Notch" 占有7个字符 (而其中的两个就是颜色代码所占字符)，如果你设置的昵称字符超过了系统限定，请将该选项改为 true
ignore-colors-in-max-nick-length: false

# 启用此选项后，隐藏用户的显示名称将不会显示。 这样可以防止玩家
# 能够看到他们在消失时在线。
hide-displayname-in-vanish: true

# 如果你想用其他的插件来设置玩家名字，将其改为"false".
change-displayname: true

# 此选项将导致 Essentials 在 Tab 完成 Essentials 命令时显示玩家的显示名称而不是用户名。
change-tab-complete-name: false

# 启用此选项时，TAB玩家列表将使用显示名称更新。
# 上方 change-displayname (above) 必须为true.
#change-playerlist: true

# 添加前缀后缀(上面的"change-displayname"必须是true才有效)
# 如果你不设置该项，且essentialschat被安装了，其将会被默认为"true".
# 上方 change-displayname (above) 必须是 true
# 不要乱动该选项，除非你知道如何正确使用!
#add-prefix-suffix: false

# 启用此选项后，玩家前缀将显示在玩家列表中。
# 此功能仅适用于 Minecraft 1.8 及更高版本。
# 上方 change-playerlist 必须为 true
#add-prefix-in-playerlist: true

# When this option is enabled， player suffixes will be shown in the playerlist.
# This feature only works for Minecraft version 1.8 and higher.
# This value of change-playerlist has to be true
#add-suffix-in-playerlist: true  这段怎么跟上面一模一样 = =

# 是否开启安全传送功能
# 如果此项设置为true， 则会尝试传送玩家到最近的安全地点
# 如果设置为false， 将会取消传送并发送一则警告消息
teleport-safety: true

# 如果试图传送到不安全的位置，这会在没有警告的情况下强制禁用传送安全检查。
# teleport-safety 并且此选项需要设置为 true 以强制传送到危险位置。
force-disable-teleport-safety: false

# 如果玩家在创造、冒险或上帝模式中传送到不安全的位置； 他们不会被传送到
#安全位置。 如果你希望玩家一直被传送到安全位置，请将此选项设置为 true。
force-safe-teleport-location: false

# 如果玩家骑乘，传送将失败。 玩家是否应该在被传送之前下马？
# 如果设置为 true，Essentials 将在传送之前让这个玩家下马。
# 如果设置为 false，尝试的传送将被取消并发出警告。
teleport-passenger-dismount: true

# 传送功能的冷却时间(以秒为单位)，如/home， /tp， etc 等命令
teleport-cooldown: 0

# 传送延迟时间(以秒为单位)，在玩家被确实传送之前的时间.如果玩家在该时间内移动了或者受到攻击，传送将取消.
teleport-delay: 0

# 传送时无敌时间(以秒为单位)在玩家被确实传送之前的时间内，其他玩家不能攻击该玩家.
# 这同样可以阻止该玩家攻击其他玩家.
teleport-invulnerability: 4

# 是否让所有的传送都传到方块的中心； 其中 x 和 z 坐标小数变为 0.5
teleport-to-center: true

# 延迟，以秒为单位， 比如使用 /heal 或 /feed attempts. 驿站:heal命令是治愈玩家
heal-cooldown: 60

# 治疗玩家时是否移除药水效果？
remove-effects-on-heal: true

# 范围查询
# 该选项对于指令 /near 起效
# 设置下方的数字即为输入/near时可查询到的范围内的玩家.
near-radius: 200

# 禁止作弊命令/give， /item调出的物品黑名单列表.
# 例如 item-spawn-blacklist: 46，11，10  驿站觉得这功能没必要a
item-spawn-blacklist:

# Set this to true if you want permission based item spawn rules.
# Note: The blacklist above will be ignored then.
# Example permissions (these go in your permissions manager):
#  - essentials.itemspawn.item-all
#  - essentials.itemspawn.item-[itemname]
#  - essentials.itemspawn.item-[itemid]
#  - essentials.give.item-all
#  - essentials.give.item-[itemname]
#  - essentials.give.item-[itemid]
#  - essentials.unlimited.item-all
#  - essentials.unlimited.item-[itemname]
#  - essentials.unlimited.item-[itemid]
#  - essentials.unlimited.item-bucket # Unlimited liquid placing
#
# 查看更多信息，请访问 http://wiki.ess3.net/wiki/Command_Reference/ICheat#Item.2FGive
permission-based-item-spawn: false

# 使用/spawnmob命令一次性生成生物的最大数量.
spawnmob-limit: 10

# 使用 /lightning 时要通知用户吗？
warn-on-smite: true

# 如果背包满了，是否掉落物品?
drop-items-if-full: false

# 邮件提醒开关通知
# 是否提醒玩家有无新邮件(true为提醒，false为不提醒)
notify-no-new-mail: true

# 指定玩家每次收到邮件通知之间的持续时间(以秒为单位)。
# 对于有大量邮件流量的服务器很有用。
notify-player-of-mail-cooldown: 60

# 服务器公告 和 服务器规定，现在分别存储在 motd.txt 和 rules.txt 中设置.

# 当一个命令与其它插件冲突，Essentials基础插件会默认尝试强行让其它插件获得优先权.
# 如果一个命令在列表中，Essentials基础插件会尝试给默认的命令优先权.
# 通常哪一个插件将胜出的几率是随机的.
#
# 如果你有两个插件并且命令相同而且你希望使用essentials，那么你需要了解 命令别名(alias).
# essentials 插件的 'god' 命令 'god' 别名 'egod'.
# 查看 http://wiki.bukkit.org/Bukkit.yml#aliases 了解更多信息

overridden-commands:
#  - god
#  - info

# 命令黑名单，冻结的命令在服务器将完全不可使用.
# 当命令冲突时，在此禁用将无效果(如要禁用下面的某个指令，请将前方的 # 删去)
# 访问 http://wiki.bukkit.org/Commands.yml#aliases 查看如何关闭其他插件的命令.
disabled-commands:
#  - nick
#  - clear

# Essentials 是否应该显示详细的命令用法。
# 如果设置为 false，Essentials 会将所有使用情况折叠成一条使用消息。
verbose-command-usages: true

# 这些命令是当开启了/socialspy命令时可以看到的玩家私聊
# 你可以添加一些来自其他插件的命令
# 或者移除一些你不想看到的私聊命令
# 设置 - '*' 则为禁用所有指令.
socialspy-commands:
  - msg
  - w
  - r
  - mail
  - m
  - t
  - whisper
  - emsg
  - tell
  - er
  - reply
  - ereply
  - email
  - action
  - describe
  - eme
  - eaction
  - edescribe
  - etell
  - ewhisper
  - pm

# 来自禁言玩家的私人和公共消息是否应该出现在社交间谍中。
# 如果是这样，它们将与普通玩家发送的区别开来。
socialspy-listen-muted-players: true

# 社交间谍应该监视私人消息还是只监视上面列表中的命令。
# 如果为 false，social spy 将仅监视上面列表中的命令。
socialspy-messages: true

# 以下设置监听玩家何时对世界进行改变。
# 如果你使用其他插件来控制速度和飞行，你应该将这些设置为 false。

# 当玩家改变世界时，EssentialsX 是否应该重置他们的飞行？
# 如果玩家没有essentials.fly，这将禁用飞行。
world-change-fly-reset: true

# 当玩家改变世界时，我们是否应该根据他们的权限重置他们的速度？
# 如果没有essentials.speed，这会将玩家的速度重置为默认值。
# 如果玩家没有essentials.speed.bypass，这会将他们的速度重置为上面指定的最大值。
world-change-speed-reset: true

# 禁言命令
# 当玩家被禁言时，这些命令将被禁用。
# 使用 '*' 禁用每个命令。
# Essentials 默认情况下已禁用 Essentials 消息传递命令。
# 它只注意 root 命令，之后不注意 args(它眼里 /f chat 和 /f 一样)
mute-commands:
  - f
  - kittycannon
 # - '*'

# 如果你不想使用权限系统，你可以在下面定义一个“玩家权限”列表。
# 如果你使用受支持的权限系统，此列表无效。
# 如果你使用的是不受支持的权限系统，只需删除此部分即可。
# 白名单你希望默认给予玩家的命令和权限(其他一切都是操作)。
# 这些是没有“必需品”的权限。 部分。
#
# 要启用此功能，请将 use-bukkit-permissions 设置为 false。
player-commands:
  - afk
  - afk.auto
  - back
  - back.ondeath
  - balance
  - balance.others
  - balancetop
  - build
  - chat.color
  - chat.format
  - chat.shout
  - chat.question
  - clearinventory
  - compass
  - depth
  - delhome
  - getpos
  - geoip.show
  - help
  - helpop
  - home
  - home.others
  - ignore
  - info
  - itemdb
  - kit
  - kits.tools
  - list
  - mail
  - mail.send
  - me
  - motd
  - msg
  - msg.color
  - nick
  - near
  - pay
  - ping
  - protect
  - r
  - rules
  - realname
  - seen
  - sell
  - sethome
  - setxmpp
  - signs.create.protection
  - signs.create.trade
  - signs.break.protection
  - signs.break.trade
  - signs.use.balance
  - signs.use.buy
  - signs.use.disposal
  - signs.use.enchant
  - signs.use.free
  - signs.use.gamemode
  - signs.use.heal
  - signs.use.info
  - signs.use.kit
  - signs.use.mail
  - signs.use.protection
  - signs.use.repair
  - signs.use.sell
  - signs.use.time
  - signs.use.trade
  - signs.use.warp
  - signs.use.weather
  - spawn
  - suicide
  - time
  - tpa
  - tpaccept
  - tpahere
  - tpdeny
  - warp
  - warp.list
  - world
  - worth
  - xmpp

# 使用此选项强制基于op权限的权限处理程序，而不管检测到已安装的权限插件。
# 如果你想要自定义权限插件的基于超级权限的权限(使用通配符)，这很有用。
# 如果你希望通过上面的 `player-commands` 部分使用 EssentialsX 的内置权限，请将其设置为 false。
# 默认为true
use-bukkit-permissions: true

# 当该选项开启后 (例如. delay < 0) 则玩家使用过一次该项工具包以后
# 将从玩家的kit列表中删去该项可用工具包
skip-used-one-time-kits-from-kit-list: false

# 启用后，只要玩家的盔甲槽是空的，就会自动装备领取的kit包中的盔甲。
kit-auto-equip: false

# 确定 /createkit 命令的功能。
# 如果这是true，/createkit 将给用户一个带有kit代码的链接。
# 如果为 false，/createkit 将直接将该kit工具包添加到 kits.yml 配置文件中。
# 默认为false。
pastebin-createkit: false

# 确定 /createkit 是否会使用 NBT 项目序列化生成套件。
# 如果这是真的，/createkit 会将项目存储为 NBT； 否则，它将使用 Essentials 的人类可读项目格式。
# 通过使用 NBT 序列化，/createkit 可以存储具有复杂元数据的项目，例如具有自定义属性的潜影盒和武器。
# 警告：此选项仅适用于 1.15.2+ Paper 服务器，它将绕过来自其他插件(如 Magic)的任何自定义序列化程序。
# 警告：在启用此选项的情况下通过 /createkit 创建工具包时，你将无法使用这些工具包项目降级你的服务器。
# 此选项仅影响 /createkit - 你仍然可以使用 Essentials 的人类可读项目格式在 `kits.yml` 中手动创建套件。
# 默认为false。 应该是说，开启后kit可以存nbt的东西了
use-nbt-serialization-in-createkit: false

# Essentials 木牌控制
# 查看网页 http://wiki.ess3.net/wiki/Sign_Tutorial 可以了解如何使用这些.
# 移除#可以激活相应的木牌功能. 想禁用所有的木牌功能， 使用命令/remove 每个牌子.
# 当其他任何类型木牌启用时，木牌彩字支持将默认启用.
# 木牌彩字并不是真实的彩字， 是使用颜色代码实现， 当拥有木牌彩字权限时才会有效.

enabledSigns:
  #- color
  #- balance
  #- buy
  #- sell
  #- trade
  #- free
  #- warp
  #- kit
  #- mail
  #- enchant
  #- gamemode
  #- heal
  #- info
  #- spawnmob
  #- repair
  #- time
  #- weather
  #- anvil
  #- cartography
  #- disposal
  #- grindstone
  #- loom
  #- smithing
  #- workbench

# 玩家与牌子之间互动的时间间隔
# 数值用该在1-20之间，20将几乎没有间隔.
# 较小的数值可以有效减少延迟，但是可能会惹怒玩家
sign-use-per-second: 4

# 允许在 1.13 及更高版本的现有标志上使用项目 ID。
# 你不能在新标志上使用物品 ID，但这将允许玩家与标志进行交互
# 放在 1.13 之前。
allow-old-id-signs: false

# 标志名称列表 Essentials 不应保护。 此功能在以下情况下特别有用
# 另一个插件提供了 EssentialsX 提供的标志，但 Essentials 会覆盖。
# 例如，如果一个插件提供了一个 [kit] 标志，并且你希望使用他们的而不是
# Essentials 的，然后只需在下面添加工具包，Essentials 将不会保护它。
#
# 有关更多信息，请参阅 https://github.com/drtshock/Essentials/pull/699。
unprotected-sign-names:
  #- kit

# 当自动备份被取消时，使用批处理/bash 命令来备份.
# 服务器在执行备份命令前会先保存世界，并禁用
# 在备份期间保存以防止世界损坏或其他冲突。
# 也可以使用 /backup 手动触发备份。
backup:
# 以分钟为单位的间隔。
  interval: 30
# 如果为true，即使没有玩家在线，备份任务也会运行。
  always-run: false
# 除非你在此处添加有效的备份命令或脚本，否则此功能将毫无用处。
   # 使用 'save-all' 来简单地强制定期保存世界而无需备份。
   # 下面的示例命令使用 rdiff-backup: https://rdiff-backup.net/
   #command: 'rdiff-backup World1 备份/World1'

# 将此设置为 true 以启用每个 warp 的权限。 驿站:或者用权限组插件来给权限
per-warp-permission: false

# 当使用/list命令时，将玩家按组分类.
# 你可以隐藏或合并组，在下面设定/list的分类.
# 更加详细的说明和示例请查看wiki: http://wiki.ess3.net/wiki/List
list:
    # 列出需要合并的组
     #Staff：所有者管理员版主
    Admins: owner admin
    # 被限制的组，可以显示的玩家名字数量
     #builder：20
     # 隐藏的组
     #default: hidden
    # 没有组的玩家
    #Players: '*'

# 在使用昵称的玩家旁边显示 /list 中的真实ID。
real-names-on-list: false

# 控制台输出更多东西。
debug: false

# 设置所有消息的语言文件.
# 如果没有设置，将使用默认语言文件.
# 例如，使用中文语言文件，设置locale为zh，即可使用语言文件"messages_zh.properties"
# 不要忘记去除"#"
# 查看更多信息，请访问 http://wiki.ess3.net/wiki/Locale
#locale: en

# 当开启上帝模式的人离开服务器时关闭那人的上帝模式。
remove-god-on-disconnect: false

# 自动AFK   驿站:使用命令/afk 暂时离开
# 在此超时(以秒为单位)后，用户将被设置为 AFK。
# 此功能需要玩家拥有essentials.afk.auto 节点。
# 设置为 -1 表示没有超时。
auto-afk: 300

# 挂机太久就给老子踢啦！
# 在此超时(以秒为单位)后，用户将被踢出服务器。
#essentials.afk.kickexempt 节点覆盖此功能。
# 设置为 -1 表示没有超时。
auto-afk-kick: -1

# 将此设置为true，如果玩家是AFK，冻结玩家，如果玩家是AFK。
# 驿站:大概是说让挂机玩家不被生物打扰。
# 这也会为 AFK 玩家启用临时上帝模式。
# 玩家必须使用命令 /afk 离开 AFK 模式。
freeze-afk-players: false

# 当玩家AFK时，是否能够捡起物品
# 启用这个，当你不希望人们在暴民陷阱中闲置时。
disable-item-pickup-while-afk: false

# 此设置控制玩家是否在交互时自动退出afk模式。
# 当此设置为 false 时，玩家需要使用 /afk 命令手动取消 AFK。
cancel-afk-on-interact: true

# 玩家移动时会自动移除 afk 状态吗？
# 无论此设置如何，玩家都会在聊天/命令中从 AFK 中移除。
# 禁用它以减少服务器延迟。
cancel-afk-on-move: true

# 玩家发送聊天消息时是否自动移除 afk 状态？
cancel-afk-on-chat: true

# 当其他玩家睡觉时，是否忽略 AFK 玩家？
# 此设置为false时，如果有玩家在AFK，玩家将无法跳过夜晚。
# 拥有节点 Essentials.sleepingignored 权限的用户将始终被忽略。
sleep-ignores-afk-players: true

# 当其他玩家试图睡觉时，是否应该忽略消失的玩家？
# 当此设置为 false 时，如果消失的玩家没有睡觉，玩家将无法跳过夜晚。
# 拥有节点 Essentials.sleepingignored 权限的用户将始终被忽略。
sleep-ignores-vanished-player: true

# 设置玩家AFK时的列表名称。 默认情况下为 none，它指定 Essentials
# 不应干扰 AFK 玩家的列表名称。 none我改成了 挂机中
# 你可以使用颜色代码，使用 {USERNAME} 玩家的名称或 {PLAYER} 作为玩家的显示名称。
afk-list-name: "挂机中"

# 当玩家进入或退出AFK模式时，是否聊天栏通知其他玩家
# 发给整个服务器的人，还是只发给这个挂机的玩家?
# 当此设置为 false 时，只有准备挂机的玩家会收到afk通知
broadcast-afk-message: true

# 你可以在此处禁用 Minecraft 的死亡消息。
death-messages: true

# Essentials 应该如何处理拥有 Essentials.keepinv 权限的玩家
# 拥有消失诅咒附魔的物品或装备?
# 你可以将其设置为“keep”(保留项目)、“掉落”(删除项目)或“delete”(删除项目)。
# 默认为“keep”
vanishing-items-policy: keep

# Essentials 应该如何处理拥有 Essentials.keepinv 权限的玩家
#拥有绑定诅咒附魔的物品或装备?
# 你可以将其设置为“keep”(保留项目)、“drop”(删除项目)或“delete”(删除项目)。
# 默认为“keep”
binding-items-policy: keep

# 当玩家死亡时，他人会收到他的死亡坐标吗？
send-info-after-death: false

# 是否关闭加入、退出游戏的提示消息
# 当启用后， 具有对应权限的玩家加入、离开游戏将不会在公屏上显示消息
# 此外，拥有essentials.silentjoin.vanish 的人将在加入时消失。
allow-silent-join-quit: false

# 你可以在此处设置自定义加入和退出消息。 将此设置为“none”以使用默认的 Minecraft 消息，
# 或将此设置为 "" 以完全隐藏消息。

# 可用变量
# {PLAYER} - 玩家的显示名。(昵称)
# {USERNAME} - 玩家的用户名。(ID)
# {PREFIX} - 玩家的前缀
# {SUFFIX} - 玩家的后缀
# {ONLINE} - 在线玩家数量。
# {UNIQUE} - 加入服务器的唯一玩家数量。
# {UPTIME} - 服务器运行时间
custom-join-message: "&e[&a+&e]&6比驿站丑的 {USERNAME} 加入了游戏"
custom-quit-message: "&e[&c-&e]&6比驿站丑的 {USERNAME} 退出了游戏"

# 你可以在此处为新玩家(和更换ID的老玩家?)设置加入提示。
# 仅当用户之前加入并更改了用户名时才会使用此消息。
# 这将显示而不是 custom-join-message，因此如果你打算保持它们相似，请确保它们匹配。
# 将此设置为“none”以对每个连接使用上面的“custom-join-message”。

# 可用变量
# {PLAYER} - 玩家的显示名。(昵称)
# {USERNAME} - 玩家的用户名。(ID)
# {OLDUSERNAME} - 这个玩家旧的名字。
# {PREFIX} - 玩家的前缀
# {SUFFIX} - 玩家的后缀
# {ONLINE} - 在线玩家数量。
# {UNIQUE} - 加入服务器的唯一玩家数量。
# {UPTIME} - 服务器运行时间
custom-new-username-message: "&e[&a+&e]&6比驿站丑的新玩家 {USERNAME} 加入了游戏"

# Essentials 是否用语言文件中的“服务器已满”消息覆盖原版“服务器已满”的文本？
# 设置为 false 以保留原版消息。
use-custom-server-full-message: true

# 当玩家数量达到一定限制时，你可以禁用加入和退出消息。
# 当玩家人数低于此数字时，将始终显示加入/退出消息。
# 将此设置为 -1 以始终显示加入和退出消息，无论玩家人数如何。
hide-join-quit-messages-above: -1

# 禁用上帝模式的世界。
no-god-in-worlds:
#  - world_nether

# 设置为true，启用每个世界传送单独的权限.
# 支持 /world， /back， /tp[a|o][here|all]，但是不支持 warps.
# 给予玩家某个世界的传送权限 essentials.world.<worldname>
# 不包括 /home 命令， 下面有单独的设定.
world-teleport-permissions: false

# 若在使用/give或/item命令时如果没有填写数量.
# 如果这个数值设置小于1，那么给予最大叠加数量的物品
# 如果超大堆叠没有开启，那么数量大于正常堆叠数量(64)时，将给予1组以上物品.
default-stack-size: -1

# 超大堆叠允许玩家堆叠物品超过正常最大堆叠.
# 如果玩家拥有essentials.oversizedstacks权限，当使用 /give 或 /item时可以获得超大堆叠物品.
# 超大堆叠物品的上限是多少?
oversized-stacksize: 64

# 允许修理附魔盔甲和武器
# 如果设置为false，你仍然可以允许某些玩家修理.
# 使用essentials.repair.enchanted权限
repair-enchanted: true

# 在kits和物品生成时，允许 '不安全的' 附魔.
# 警告: 混乱结合和超过常规等级的附魔可能导致客户端，服务端或者插件崩溃.
unsafe-enchantments: false

# /tree 和 /bigtree 命令可以生成树的玩家的最大范围。
tree-command-range-limit: 300

# 是否想要essentials插件保留 /back 坐标在"teleport listener"?
# 如果你设置为true，一些插件可以获得传送坐标.
register-back-in-listener: false

# 玩家登录后，多少秒后可以造成攻击伤害
login-attack-delay: 5

# 设置最大飞行速度， 速度从 0.1 到 1.0 之间
max-fly-speed: 0.8

# 设置每分钟可以发送的最大邮件数量.
max-walk-speed: 0.8

#设置一分钟内可以发送的最大邮件量。
mails-per-minute: 1000

# 设置/tempban 可以临时封禁的最大时间.
# 设置为 -1 可禁用此功能， 另外 essentials.tempban.unlimited 权限可以覆盖此设置.
max-mute-time: -1

# 设置 /tempban 可以使用的最长时间(以秒为单位)。
# 设置为 -1 禁用，essentials.tempban.unlimited 可用于覆盖。
max-tempban-time: -1

# 更改默认的 /reply 功能。 这可以使用 /rtoggle 在每个玩家的基础上进行更改。
# 如果为真，/r 转到你最后发消息的人，否则第一个发消息给你的人。
# 如果为假，/r 转到最后一个给你发消息的人。
last-message-reply-recipient: true

# 如果为特定玩家启用了 last-message-reply-recipient，
# 这指定了持续时间，以秒为单位，需要经过
#reply-recipient 在收到消息时更新。
# 默认为 180(3 分钟)
last-message-reply-recipient-timeout: 180

# 更改默认的 /reply 功能。
# 如果为true，/reply 将不会检查你正在回复的人是否已经消失。
# 如果为 false，玩家将无法/回复因消失而无法再看到的玩家。
last-message-reply-vanished: false

# 切换是否左键单击带有牛奶桶的生物会将它们变成婴儿。
milk-bucket-easter-egg: true

# 切换是否应在加入时向玩家发送他们飞行状态是否开启
send-fly-enable-on-join: true

# 设置为 true 以启用 per-world 权限，以便使用 Essentials 命令为各个世界设置时间。
# 这适用于/time、/day、/eday、/night、/enight、/etime。
# 允许某人使用essentials.time.world.<worldname> 传送到一个世界。
world-time-permissions: false

# 为 Essentials 命令和外部命令指定冷却时间。
# 所有命令都不以正斜杠 (/) 开头。 代替 /msg，写 msg
#
# 支持通配符。 例如。
# - '*i*': 50
# 为所有包含字母 i 的命令添加 50 秒的冷却时间
#
# EssentialsX 通过使用插入符号启动命令来支持正则表达式 ^
# 例如，要针对以ban而不是banip开头的命令，将使用以下命令：
# '^ban([^ip])( .*)?': 60 # 60 秒 /ban 冷却时间。
# 注意：如果你有一个以 ^ 开头的命令，那么你可以使用反斜杠 (\) 对其进行转义。 例如 \^命令：123
command-cooldowns:
# feed: 100 # /feed 命令有 100 秒的冷却时间
# '*': 5 # 所有命令的冷却时间为 5 秒

# 命令冷却时间是否应该在服务器关闭后持续存在
command-cooldown-persistence: true

# NPC余额是否应该在余额排名功能中列出，例如/balancetop。
# NPC 余额可以包含 FactionsUUID 插件中的派系等功能。
npcs-in-balance-ranking: false

# 玩家潜行时允许批量买卖标志。 应该是 /sell 命令
# 当一个标志一次出售或购买一件物品并且玩家想要一次出售一堆时，这很有用。
allow-bulk-buy-sell: true

# 允许使用 /sell 命令出售具有自定义名称的物品。
# 这可能有助于防止玩家意外出售命名物品。
allow-selling-named-items: false

# 加入玩家的 MOTD 显示延迟，以毫秒为单位。
# 如果 MOTD 命令或权限被禁用，这将无效。
# 这也可以设置为 -1 以完全禁用加入 MOTD。
delay-motd: 0

# 默认情况下应启用其补充确认命令的命令列表。
# 默认为空，最新的有效命令列表见最新的源码config.yml。
default-enabled-confirm-commands:
#- 支付 pay
#- 清库存 clearinventory

# 当玩家从监狱中获释后，Essentials 应该将他们传送到哪里？
# 你可以设置为“返回”让他们传送到他们入狱前的位置，“产卵”让他们
# 传送生成，或“关闭”不让它们传送。
teleport-when-freed: back

# 是否只应在用户在线时计算入狱时间。
# 如果为真，被监禁的玩家的时间只会在他们在线时减少。
jail-online-time: false

# 设置超时时间，以秒为单位，玩家在请求被取消之前接受 tpa。
# 设置为 0 表示没有超时。
tpa-accept-cancellation: 120

# 任何玩家可以同时挂起的 tpa 请求的最大数量。
# 一旦超过此阈值，旧请求将立即超时。
# 默认为 5。
tpa-max-requests: 5

# 玩家可以直接把物品戴在头上。
allow-direct-hat: true

# 允许游戏内玩家在运行 /broadcastworld 时指定一个世界。
# 如果为 false，则在游戏中运行 /broadcastworld 将始终向玩家的当前世界发送消息。
# 这不会影响从控制台运行命令，这里总是需要一个世界。
allow-world-in-broadcastworld: true

# 认为水方块是“安全的”，因此允许玩家传送
# 使用 /home 或 /spawn 等命令到被占用的位置
# 按水块
is-water-safe: false

# usermap 是否应该在保存用户名之前尝试清理用户名？
# 如果你使用 Minecraft 中国，你应该只将其更改为 false。
safe-usermap-names: true

# 当命令块执行命令时，Essentials 是否应该输出日志？
# 示例：<x>，<y>，<z> 处的 CommandBlock 发出服务器命令：/<command>
log-command-block-commands: true

# 设置 /fireball 生成的射弹的最大速度。
max-projectile-speed: 8

# EssentialsX 是否应该检查更新？
# 如果设置为 true，EssentialsX 将在新版本可用时显示通知。
# 这使用了公共 GitHub API，不会发送或存储任何识别信息。
update-check: true

############################################################
# +------------------------------------------------------+ #
# |                        Homes                         | #
# +------------------------------------------------------+ #
############################################################

# # 允许玩家在白天设置他床所在的位置为家.
#此设置在 Minecraft 1.15+ 中无效，因为 Minecraft 将始终允许玩家在白天设置他们的床位。
update-bed-at-daytime: true

# 设置为 true 将给予玩家跨越世界传送回家的权限
# 这个设置只适用于'/home'命令.
# 对于其他传送命令，给予玩家多世界间传送的权限 essentials.world.<世界名称> 可以允许玩家跨世界传送
world-home-permissions: false

# 允许玩家拥有多个家.
# 玩家拥有多个家需要有essentials.sethome.multiple权限， 默认 'default' 下面.
# 定义不同权限的不同家的数量例如:essentials.sethome.multiple.vip
# 用有 essentials.sethome.multiple.unlimited 权限的玩家将不被此项设置所限制.
# 查看更多信息，请访问 http://wiki.ess3.net/wiki/Multihome
# Create the 'home-rank' below， and give the matching permission: essentials.sethome.multiple.<home-rank>
# For more information， visit http://wiki.ess3.net/wiki/Multihome
sethome-multiple:
  default: 3
  vip: 5
  staff: 10

# 在这个例子中，拥有 'essentials.sethome.multiple' 和 'essentials.sethome.multiple.vip' 的人将拥有 5 个家。
# 请记住，他们必须拥有两个权限节点才能设置多个家。

# 控制玩家是否需要“essentials.home.compass”权限才能指向
# 玩家第一个家的指南针。
#
# 将此保留为 false 将保留 Essentials 的原始行为，即始终
# 改变指南针的方向指向他们的第一个家。
compass-towards-home-perm: false

# 如果没有设置家，你想让玩家去出生点吗？
# 如果设置为false，玩家在没有设置家的情况下运行/home时不会被传送。
spawn-if-no-home: true

# 是否应该要求玩家确认他们试图覆盖的房屋？
confirm-home-overwrite: false

############################################################
# +------------------------------------------------------+ #
# |                       Economy                        | #
# +------------------------------------------------------+ #
############################################################

# 查看更多信息，请访问 http://wiki.ess3.net/wiki/Essentials_Economy

# 你可以使用 /setworth 命令控制出售给服务器的物品的价值。

# 定义新玩家开始的平衡(应该是说默认的钱)。 默认为 0。
starting-balance: 0

# 定义玩家每次使用命令时所要花的钱，空格由"-"代替，带有"example"的是例子.
# 一些命令例如/repair拥有独立的花费，可以在essentials wiki查看更多信息
command-costs:
  # /example costs $1000 PER USE
  #example: 1000
  # /kit tools costs $1500 PER USE
  #kit-tools: 1500

# 设置该项为一个你想使用的货币符号(该项请勿乱动)
# Remember， if you want to use special characters in this document，
# such as accented letters， you MUST save the file as UTF-8， not ANSI.
currency-symbol: '$'

# 启用此选项以使货币符号出现在金额的末尾而不是开头。
# 例如，欧元符号通常出现在当前金额之后。
currency-symbol-suffix: false

# 设置一个玩家所允许拥有的最大钱数.
# 这个数量最大为10万亿(1个1，13个0)，这是由于JAVA的限制.
max-money: 10000000000000

# 设置一个玩家所允许拥有的最小钱数 (必须大于最大金额的负数).
# 设置为0，将完全禁用透支/贷款.用户需要'essentials.eco.loan"权限，钱数才能低于0.
min-money: -10000

# 设置为true来记录所有玩家的交易记录(译注，仅记录Essentials所支持的交易命令和功能).
economy-log-enabled: false

# 启用此功能还可以通过 Vault 记录来自其他插件的所有事务。
# 这可能会导致经济日志快速填满，因此只能用于测试目的！
economy-log-update-enabled: false

# 在 /pay 中最低的可使用金额。
minimum-pay-amount: 0.001

# 启用此功能以阻止尝试/支付另一个忽略他们的用户的用户。
pay-excludes-ignore-list: false

# 余额小于或等于 $0 的用户是否应该显示在 balance-top 中。
# 设置为 false 将不会在 balance-top 中显示余额 <= 0 的人。
# 注意：重新加载配置后，你还必须运行“/baltop force”才能显示
show-zero-baltop: true

# 货币格式，不包括符号。 有关符号配置，请参阅currency-symbol-format-locale。
#
# "#，##0.00" 是大多数国家/地区显示货币的方式。
#currency-format: "#，##0.00"

# 格式化货币符号。 一些语言环境使用 ， 和 . 可以互换。
# 由于 Minecraft 字体渲染错误，某些格式无法在游戏中正确显示。
#
# For 1.234，50 use de-DE
# For 1，234.50 use en-US
# For 1'234，50 use fr-ch
#currency-symbol-format-locale: en-US

############################################################
# +------------------------------------------------------+ #
# |                         Help                         | #
# +------------------------------------------------------+ #
############################################################

# 是否设置输入"/help"时，显示其它插件的命令.
non-ess-in-help: true

# 隐藏没给出权限的插件.
# 你可以添加权限到对应玩家或用户组，使之对其显示.
# 个人权限设置是:essentials.help.<plugin>，任何人有essentials.*或'*'将能看到所有帮助.
# 如果下面的设置开启，你可以使用否定命令来移除权限，之后该插件的帮助将不会被看到.
hide-permissionless-help: true

############################################################
# +------------------------------------------------------+ #
# |                   EssentialsX Chat                   | #
# +------------------------------------------------------+ #
############################################################

# 你需要安装 EssentialsChat.jar！.还有，不推荐ess全家桶，用别的聊天插件吧
# 有关详细信息，请参阅 https://essentialsx.net/wiki/Module-Breakdown.html。

chat:

# 设置聊天半径，如果安装了EssentialsChat，这将设置玩家喊话的可见范围，以格为单位.设置为0则允许全图聊天.
# 注意开启了间谍模式(权限:essentials.chat.spy)的玩家将看到所有聊天内容，无视该设置.
# 拥有"essentials.chat.shout"权限的玩家可以忽视该设置，只要在聊天内容前面加上"!"符号即可(小写感叹号)；
# 或者拥有"essentials.chat.question"权限的玩家可以忽视该设置，只要在聊天内容前面加上"?"符号即可(小写问号)；
# 你可以添加使用上两行方法的花销，在上经济设置中的"command-costs"下添加"chat-shout"和"chat-question"的设置即可.
  radius: 0

  # 聊天格式，可以有两种，你可以定义所有聊天为标准格式.
  # 或者你可以给一个用户组特定的聊天格式，提供一些额外的变化.
  # 想了解更多的默认聊天格式的信息，请查看wiki: http://wiki.ess3.net/wiki/Chat_Formatting

  # 可用变量
# {MESSAGE} - 聊天消息的内容。
   # {USERNAME} - 发件人的用户名。
   # {DISPLAYNAME} - 发件人的显示名称。
   # {NICKNAME} - 发件人的 Essentials 昵称。 如果发件人没有昵称，则显示用户名。
   # {PREFIX} - 发件人的前缀，由权限插件提供。
   # {SUFFIX} - 发件人的后缀，由权限插件提供。
   # {GROUP} - 发件人的主要组名，由权限插件提供。
   # {WORLD} - 发送者当前世界的世界别名。 有关详细信息，请参阅下面的世界别名部分。
   # {WORLDNAME} - 发送者当前世界的全名。
   # {SHORTWORLDNAME} - 发送者当前世界的第一个字符。
   # {TEAMNAME} - 发件人的记分牌团队名称。
   # {TEAMPREFIX} - 发件人的记分牌团队前缀。
   # {TEAMSUFFIX} - 发件人的记分板球队后缀。

  format: '<{DISPLAYNAME}> {MESSAGE}'
  #format: '&7[{GROUP}]&r {DISPLAYNAME}&7:&r {MESSAGE}'
  #format: '&7{PREFIX}&r {DISPLAYNAME}&r &7{SUFFIX}&r: {MESSAGE}'

  group-formats:
# 默认值：'{WORLDNAME} {DISPLAYNAME}&7:&r {MESSAGE}'
   # 管理员：'{WORLDNAME} &c[{GROUP}]&r {DISPLAYNAME}&7:&c {MESSAGE}'

   # 如果你使用组格式，请确保删除“#”以允许读取设置。
   # 注意：组名区分大小写，因此你必须将它们与你的权限插件匹配。

   # 你可以使用权限来控制玩家是否可以在聊天消息中使用格式化代码。
   # 有关更多信息，请参阅 https://essentialsx.net/wiki/Color-Permissions.html。

   # 世界别名允许你用聊天格式中的不同名称替换世界名称。
   # 如果你使用世界别名，请确保删除开头的“#”以允许读取设置。
  world-aliases:
  #  plots: "&dP&r"
  #  creative: "&eC&r"

 # 是否默认让玩家进入喊叫模式。 (应该是说喊话)
  shout-default: false

# 玩家的喊叫模式是否应该持续重启。 (野兽前辈的喊叫模式嘛awa)
  persist-shout: false

# 是否应该启用聊天问题。
  question-enabled: true

############################################################
# +------------------------------------------------------+ #
# |                 EssentialsX Protect                  | #
# +------------------------------------------------------+ #
############################################################

# 你需要安装 EssentialsX Protect 才能使用此部分。
# 请参阅 https://essentialsx.net/wiki/Module-Breakdown.html 了解更多信息。

protect:

  # 总体的物理现象或行为的设置
  prevent:  # 阻止以下现象(译注:true就是阻止，false是允许，这里需要注意一下)
    lava-flow: false   # 阻止 岩浆的流动
    water-flow: false   # 阻止 水的流动
    water-bucket-flow: false   # 阻止 水桶水的流动
    fire-spread: true   # 阻止 火的传播
    lava-fire-spread: true   # 阻止 岩浆引起的火的传播
    lava-itemdamage: false   # 阻止 打火石产生火
    flint-fire: false   # 阻止 闪电引起的火的传播
    lightning-fire-spread: true   # 阻止 传送门的创造
    portal-creation: false   # 阻止 TNT的爆炸
    tnt-explosion: false   # 阻止 TNT对玩家造成伤害
    tnt-playerdamage: false   # 阻止 TNT矿车 爆炸
    tnt-itemdamage: false   #阻止 应该是物品损坏
    tnt-minecart-explosion: false   # 阻止 TNT矿车 爆炸
    tnt-minecart-playerdamage: false   # 阻止 TNT矿车 对玩家造成伤害
    tnt-minecart-itemdamage: false   #阻止 tnt-矿车-物品损坏 ???
    fireball-explosion: false   # 阻止 火球的爆炸(译注:恶魂发射的火球)
    fireball-fire: false   # 阻止 火球的燃烧
    fireball-playerdamage: false   # 阻止 火球对玩家造成伤害
    fireball-itemdamage: false   # 阻止 火球项目伤害 ???
    witherskull-explosion: false   # 阻止 凋零攻击的爆炸
    witherskull-playerdamage: false   # 阻止 凋零攻击对玩家照成伤害
    witherskull-itemdamage: false   #凋零骷髅头?物品伤害 ???
    wither-spawnexplosion: false   #阻止 凋零出生时的爆炸
    wither-blockreplace: false   # 阻止 凋零破坏方块
    creeper-explosion: false   #阻止 爬行者的爆炸
    creeper-playerdamage: false   #阻止 爬行者对玩家造成伤害
    creeper-itemdamage: false   #阻止 不知道什么玩意啊哈哈哈 ???
    creeper-blockdamage: false   #阻止 爬行者炸毁方块
    ender-crystal-explosion: false   #阻止 末影水晶破坏方块
    enderdragon-blockdamage: true   #阻止 末影龙破坏方块
    enderman-pickup: false   #阻止 末影人拾取方块
    villager-death: false   #阻止 村民被杀死
    bed-explosion: false   #阻止 床爆炸(应该是吧)
    respawn-anchor-explosion: false
    # 若改为true，怪物将不会跟随玩家
    # 具有权限"essentials.protect.entitytarget.bypass"的玩家将无视该项.
    entitytarget: false
    # 阻止 僵尸破门
    zombie-door-break: false
    # 防止掠夺者窃取方块
    ravager-thief: false
    # 防止羊吃掉草
    sheep-eat-grass: false
    # 防止某些转换。
    transformation:
      # 阻止苦力怕变闪电苦力怕
      charged-creeper: false
      # 阻止村民成为僵尸村民。
      zombie-villager: false
      # 阻止僵尸村民被治愈。
      villager: false
      # 防止村民被闪电击中时变成女巫。
      witch: false
      # 防止猪被闪电击中时变成僵尸猪人。
      zombie-pigman: false
      # 防止僵尸变成淹死成溺尸。
      drowned: false
      # 防止哞菇被闪电击中时变色。
      mooshroom: false
    # 防止生成生物。 如果缺少一个生物，你可以按照以下格式添加它。
    spawn:
      creeper: false   #阻止 爬行者     的生成
      skeleton: false   #阻止 骷髅       的生成
      spider: false   #阻止 蜘蛛       的生成
      giant: false   #阻止 巨型僵尸   的生成
      zombie: false   #阻止 僵尸       的生成
      slime: false   #阻止 史莱姆     的生成
      ghast: false   #阻止 恶魂       的生成
      pig_zombie: false   #阻止 僵尸猪人   的生成
      enderman: false   #阻止 末影人     的生成
      cave_spider: false   #阻止 洞穴蜘蛛   的生成
      silverfish: false   #阻止 蠹虫       的生成
      blaze: false   #阻止 烈焰人     的生成
      magma_cube: false   #阻止 岩浆史莱姆 的生成
      ender_dragon: false   #阻止 末影龙     的生成
      pig: false   #阻止 猪         的生成
      sheep: false   #阻止 羊         的生成
      cow: false   #阻止 牛         的生成
      chicken: false   #阻止 鸡         的生成
      squid: false   #阻止 乌贼       的生成
      wolf: false   #阻止 狼         的生成
      mushroom_cow: false   #阻止 哞菇       的生成
      snowman: false   #阻止 雪人       的生成
      ocelot: false   #阻止 豹猫       的生成
      iron_golem: false   #阻止 铁傀儡     的生成
      villager: false   #阻止 村民       的生成
      wither: false   #阻止 凋零       的生成
      bat: false   #阻止 蝙蝠       的生成
      witch: false   #阻止 女巫       的生成
      horse: false   #阻止 马         的生成
      phantom: false   #阻止 幻翼         的生成

  # 爬行者可以爆炸的最大高度，-1将允许它在任何位置爆炸.
  # 如果你想要彻底阻止它的爆炸的话，设置上面的prevent一栏中的creeper-explosion为true.
  creeper:
    max-height: -1

  # 取消几种默认的物理现象或行为(译注:伤害大多数对玩家而言，对怪物仍有效)
  disable:
    # 取消掉落伤害
    fall: false

    # 拥有"essentials.protect.pvp"权限的玩家将仍可以攻击其他玩家
    # 若设置为true，没有上述权限的玩家将无法攻击其他玩家
    pvp: false

    # 取消溺水和窒息的伤害
    # (分为两项，通常，你会想要设置两项为同样设置)
    drown: false
    suffocate: false

    # 取消岩浆伤害，但掉落岩浆中的物品将仍被烧成灰烬
    lavadmg: false

    # 取消弓箭伤害
    projectiles: false

    # 取消仙人掌伤害
    contactdmg: false

    # 取消火焰伤害
    firedmg: false

    # 取消被雷劈的伤害
    lightning: false

    # 取消"凋零"效果伤害
    wither: false

    # 禁用某些天气
    weather:
      storm: false
      thunder: false
      lightning: false

############################################################
# +------------------------------------------------------+ #
# |                EssentialsX AntiBuild                 | #
# +------------------------------------------------------+ #
############################################################

# 你需要安装 EssentialsX AntiBuild 才能使用此部分。
   # 请参阅 https://essentialsx.net/wiki/Module-Breakdown.html 和 http://wiki.ess3.net/wiki/AntiBuild 了解更多信息。

    # 玩家是否可以建造:
    # 设置为 true 可以禁用那些没有权限玩家的建造
    # 设置为 false 将使 EssentialsAntiBuild 从不阻止玩家建造
    build: true

    # 玩家是否可以使用物品(当玩家没有build权限的时候):
    # 设置为 true 可以禁用那些没有权限玩家的使用物品
    # 设置为 false 将使 EssentialsAntiBuild 从不阻止玩家使用物品
    use: true

    # 玩家无法建造时是否提示玩家
    warn-on-build-disallow: true

  # 当以下方块被放置或破坏，或物品被使用时会出现警告
  # 你加载了一次Essentials后，就可以在plugins/Essentials/items.csv中找到物品ID列表.
  alert:
    on-placement: LAVA，TNT，LAVA_BUCKET
    on-use: LAVA_BUCKET
    on-break:

  blacklist:

    # 阻止玩家放置以下方块
    placement: LAVA，TNT，LAVA_BUCKET

    # 阻止玩家使用以下物品
    usage: LAVA_BUCKET

    # 阻止玩家破坏以下方块
    break:

    # 阻止活塞推动以下方块
    piston:

    # 阻止发射器发射以下物品
    dispenser:

############################################################
# +------------------------------------------------------+ #
# |            EssentialsX Spawn + New Players           | #
# +------------------------------------------------------+ #
############################################################

# 你需要安装 EssentialsX Spawn 才能使此部分正常工作。
# 请参阅 https://essentialsx.net/wiki/Module-Breakdown.html 了解更多信息。

newbies:
  # 是否显示某玩家第一次进服时的欢迎信息
  # 若开启，编辑内容，{DISPLAYNAME}将自动转换为玩家名字.
  # 若取消，改为''
  #announce-format: ''
  announce-format: '&7[&b驿站&7]&a欢迎大傻蛋来服务器！'

  # 当我们第一次出生时，出现在哪个出生点？
  # 如果你想要使用世界自带的出生点，则设置为"none".
  spawnpoint: newbies

  # 是否想要玩家第一次进入服务器时赠送新手礼物? 设置为 ''禁用此功能.
  # 这个赠送不会花费金钱，也可以给予权限.
  #kit: ''
  kit: tools

# 我们应该使用什么优先级来处理重生？
# 将此设置为 none，如果你想要原版的重生。
# 设置为 lowest， 如果你想使用 Multiverse 处理重生.
# 设置为 high， 如果你想使用 EssentialsSpawn插件 处理重生.
# 设置为 highest， 如果你想强制使用 EssentialsSpawn插件 处理重生.
# 注意：只有在服务器重新启动后，更改才会生效。
respawn-listener-priority: high

# 我们应该使用什么优先级来处理加入服务器时的生成？
# 请参阅 respawn-listener-priority 以获取可能的值。
# 注意：更改此设置可能会影响或破坏 spawn-on-join 功能。
# 注意：只有在服务器重新启动后，更改才会生效。
spawn-join-listener-priority: high

# 当用户死亡时，他们应该在他们的第一个家或床上重生，而不是重生点？
respawn-at-home: false

# 当用户死亡时，他们应该在他们的床上重生而不是重生点吗？
# respawn-at-home(上图)的值必须为true
respawn-at-home-bed: true

# 当用户死亡时，Essentials Spawn 是否应该尊重用户的重生锚点？
respawn-at-anchor: false

# 将所有加入的玩家传送到出生点
spawn-on-join: false
# `guests` 的以下值表明组 `guests` 中的所有玩家在加入时都将被传送到出生点。
#spawn-on-join: 客人
# 下面的列表值表明，组 `guests` 和 `admin` 中的所有玩家在加入时都将被传送到出生点。
#spawn-on-join:
#- guests
#- admin

# 文件结尾 <-- 到此， 你已经完成了ESS的设置.

```
