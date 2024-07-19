---
title: config.yml
sidebar_position: 4
---

```
# 原MCBBS PCD小组 秋风残叶 搬运并汉化
# 请加QQ群476731621来获得更多插件信息，并一起调戏可爱的200斤喜塔腊尔晴同学
# 时间仓促 能力不足 翻译的注释可能有不尽人意的地方 敬请见谅
# CMI Spigot发布地址：https://www.spigotmc.org/resources/3742/
# CMI 曾经的MCBBS发布页面（无法访问）：https://www.mcbbs.net/thread-791419-1-1.html
# 本配置文件适配版本CMI 9.7.0.6 Translated with ❤ for MCBBS
# 愿寒冬早日褪去，春意早日到来！

#############################################################################################
##
##   请注意：旧版本CMI和CMILib插件存在严重安全漏洞，玩家可以通过漏洞卡OP！
##   请立刻停止使用旧版本插件！并更新CMI至9.6.9.6版本以上，CMILib更新至1.4.4.4版本以上！
##
#############################################################################################

# 语言文件
Language: CN
# 是否自动从GitHub下载语言文件
# 如果你使用的是 EN 英文语言文件，或者你自己编辑过你的语言文件，建议设置为false
# 鉴于国内网络实际情况，不建议开启此项
LanguageDownload: false
Economy:
  # 启用 CMI 经济系统
  # 如果检测到安装了前置 CMIInjector 那么这个设置项将会自动开启
  # 如果没有自动开启请手动开启
  Enabled: true
  # 玩家需要手动点击聊天栏消息来确认金钱支付吗
  Confirmation: false
  # 是否记录玩家之间的所有交易
  LogEnabled: false
  log:
    Unknown: true
    Transfer: true
  # 支票系统
  Cheque:
    # 玩家可以自己制作的“支票”限额最大值，设置为0则无限制
    MaxValue: 1.0E8
    # 设置为 true 玩家必须手持纸才能创建支票
    Paper: true
    # 设置为 true 玩家必须有权限 cmi.command.cheque.withdraw 才能取现支票
    Permission: false
    # 是否允许创造模式玩家使用支票
    # 如果你开了创建模式服务器，请保持此项为false，否则玩家有可能胡乱复制支票物品
    InCreative: false
    # 是否识别“老版本”的支票？此类支票物品并不包含支票的元数据
    # 安全起见，请保持为false
    AcceptNotEncoded: false
  PaymentWithShorts:
    # 开启此项，玩家在输入金钱数字的时候可以使用字母简写来代替大额数字，比如10k代表10000
    # 又或者 10.2k 代表 10200
    Allow: true
    # 字母代表的大额数字
    # 注意每个大额数字只能使用单字母表示
    values:
    - k-1000
    - m-1000000
    - b-1000000000
    - t-1000000000000
    - q-1000000000000000
  BalTop:
    # 玩家金钱排行榜上不会显示下列玩家的金钱数量，适合把OP添加到这里
    Exclude:
    - Notch
    # 开启此项，金钱排行榜上的数字会以字母缩写表示，比如 12.5M 可指代 12501234
    DisplayWithShorts: false
    # 玩家金钱排行榜上不会显示名称以下列内容开头的玩家
    # 某些插件（例如Towny）可能会使用一些以towny开头的假玩家名字
    ExcludeStartingWith:
    - town_
    - town-
    - towny_
    - towny-
    - debt-
    - debt_
    # 开启此项，一些“假玩家”的金钱也会包括进金钱排行榜里
    # 类似Towny等一些插件可能会有一些假玩家机制
    IncludeFakes: false
    # 设置为0或负数可禁用
    # 至少多少天不上线的玩家将被排除出baltop金钱排行榜列表
    ExcludeInactive: 0
  Global:
    # 玩家初始金钱
    StartingAmount: 100.0
    # 玩家拥有最小金钱，如果需要的话可以设置为负数
    MinimalAmount: 0.0
    # 玩家拥有的最多金钱，设置为-1可取消限制
    MaximumAmount: 1.0E8
    # 玩家单次进行金钱交易的最小金额变动
    # 此机制可以防止一些熊孩子多次发送超小额金钱来刷屏
    MinimalPay: 0.5
    # 是否允许玩家使用分数来表示交易金额
    # 若关闭此项则玩家必须使用普通数字来进行交易
    Fractions: true
    # 金钱符号
    CurrencySymbol: €
    # 金钱显示格式
    MoneyFormat: '###,##0.00'
    # 长数字会变成字母缩写，比如 12305122 会缩写成 12.3m
    UseShortNumbers: false
    # 大额数字缩写缩减小数位数，例如1.23k缩写为1k
    shortNumbersFormat: '###,##0.0'
    # 大额数字缩写（西方使用的是三位一组，k为一千，m为一百万，中国使用的是四位一组，如下所示）
    ShortNumbersSuffixes:
    - ''
    - 万-10000
    - 亿-100000000
    - 兆-1000000000000
    - 吉-10000000000000000
    # 是否使用西式计数显示法，使用圆点.代替逗号,来作为每三位数字的占位符，例如 1,000,000.00 会写成 1.000.000,00
    SwitchPlaces: false
    # 显示金钱时金钱数字和金钱符号的顺序
    Placing: '[money][symbol]'
FileSave:
  # 当你的服务器存储数据出现问题时，设置为true来开启异步存储玩家信息
  Async: false
InteractiveCommands:
  # 若木牌上绑定有可交互的指令，识别指令的正则
  # 如果不想对正则做任何限制请使用: (\[([a-zA-Z0-9]+)\])
  SignRegex: (\[ic:([a-zA-Z0-9]+)\])
  # 木牌可交互指令列表按照什么排序？设置为true按照距离你的距离排序，反之按照字母顺序。
  SortByDistance: true
Optimizations:
  # 若禁用此项，将不再在开服时尝试deop掉一些“假OP” ,同时自定义指令中的 asFakeOp! 也不再生效
  UseFakeOperator: false
  # 若禁用此项，插件将不再检查自定义指令中可能产生的死循环问题（建议保持为true）
  InfiniteLoopDetection: true
  # 如果开启此项，任何向控制台输出的信息将除去所有颜色代码
  # 不建议开启此项
  MonochromeConsole: false
  # 若玩家刚进服，是否给予玩家一个无敌状态，数字为持续的秒数
  # 设置为 0 则禁用此功能
  # 最大允许设置为60秒
  ImmortalityOnJoin: 3
  # 如果服务器还没做好，请开启“正在制作”模式
  Maintenance: false
  # 若开启了“正在制作”模式，将自动踢出全部玩家（拥有权限 cmi.command.maintenance.bypass 的玩家除外）
  MaintenanceAutoKick: true
  # 若开启了“正在制作”模式，是否在游戏内显示一个bossbar消息来提示玩家 
  MaintenanceBossBar: true
  # 禁用原版Minecraft的队伍（Team）机制
  # 如果开启此项，玩家发光颜色、玩家互相推挤、玩家头顶名字下方的悬浮字将完全不可用（这些都是原版的Team机制）
  # 一些第三方插件（比如头顶悬浮称号插件TAB）使用的是原版Team机制，若开启此项则第三方插件会受到影响
  # 除非你遇到了一些和Team相关的bug，否则不建议开启
  DisableTeamManagement: false
  ArmorStands:
    # 若开启此项, 若玩家没有建筑权限，是否阻止玩家操纵盔甲架
    # 此设置项可以防止一些没有建筑权限的玩家通过“放置假方块”的手段来操作盔甲架
    CheckBlockPlace: false
    Templates:
      # 设置为true，只有拥有权限 cmi.command.armorstand.template.[templatename] 的玩家才有权限配置盔甲架模板
      SpecificPermission: false
  AutoDownload:
    # 如果你没有 GeoIP.dat 的话，服务器启动时会自动下载，然后你需要再次重启来让它生效
    GeoIp: false
    # 如果你没有 GeoLiteCity.dat 的话，服务器启动时会自动下载，然后你需要再次重启来让它生效
    GeoLiteCity: false
  # 若开启此项，右键点击头颅方块时可以在actionbar看到头颅的玩家ID
  ShowSkullOwner: true
  # 若开启此项，右键点击蜂巢方块可以在actionbar看到蜂巢信息
  ShowBeeHiveInformation: true
  # 制作木牌电梯的第一行内容，大小写敏感
  ElevatorIndicator: '[电梯]'
  SignEdit:
    # 第一行是如下内容的木牌无法使用 /cmi se 编辑
    BlackList:
    - '[商店]'
    - '[快捷商店]'
    - '[QuickShop]'
    - '[Lockette]'
    - '[Private]'
    - '[More Users]'
    - '[Everyone]'
    - '[AdminShop]'
    - '[ChestShop]'
    - '[CMIElevator]'
  # 如果下面这行文字出现在木牌电梯的第二行, 玩家会被直接传送到相应木牌的正前方（而不是继续保留玩家之前的XZ坐标位置）
  ElevatorStaticIndicator: '[*]'
  # 本插件各种地方的时间显示格式, 例如邮件，封禁时间等等
  LongDateFormat2: dd/MM/yy HH:mm:ss
  # 本插件某些地方的时间显示简略格式, 例如GUI等等
  ShortDateFormat: dd/MM/yy
  # 是否存储玩家出售手持物品的数据？
  SellLog: true
  # 如果设置为 true 大小写不同的两个玩家，第二个玩家将被拒绝进服
  # 比如第一天玩家 AndyYu168 进了服，第二天玩家 aNdYyu168 尝试进服时会被拒绝
  # 建议设置为 true 来避免大小写bug
  PreventDifferentCapitalizationNames: true
  # 使用指令时开启玩家名字模糊识别，适合ID比较复杂的玩家
  # 开启此项后，在指令中使用在线玩家名时可只写上一部分名字
  # 比如/cmi heal rip 可以用于同时治疗在线玩家Zrips,Kriped等等，只要名字带rip都有效
  PartialPlayerName: false
  # 承上一个设置项，如果你想要让玩家名字模糊识别这一机制优先考虑在线玩家则开启此项
  # 若开启此项，一些名字相似但是离线的玩家会被指令排除在外
  # 开启此项后若想识别离线玩家，可在玩家模糊名后面加上 -exa- 尾缀, 比如 luuk-exa- 则返回的均为名字类似luuk的离线玩家列表
  PrioritizeOnlinePlayers: false
  # 设置为 true，指令帮助菜单里的条目将按照字母顺序排列
  # 设置为 false，将按照优先级排列
  CommandSorting: true
  # 默认情况下插件不支持 Rcon 指令，除非你已经做了万全的安全保障，并有使用远程控制台指令（Remote Console Commands, Rcon指令）的需求，那么才可以开启此项
  AllowRconCommands: false
  # 如果输入本插件指令时不小心打错，成了不存在的指令，按照该指令与正确指令的相似百分比来触发正确指令
  # 例如不小心打错了: /cmi spawnmb 该指令与正确指令/cmi spawnmob 有 87.5% 的相似度
  # 设置为 0 禁用此特性
  SimilarCommandChecker: 75
  # 设置为 true, 如果玩家不小心打错指令，错误的指令将完全不会执行
  # 但是指令错误提示仍会显示
  SimilarCommandPrevention: false
  # 设置为 true, 指令帮助里以/cmi开头的指令都会以简写展示，比如 /cmi back 会显示为 /back
  # 请注意：该功能只和展示指令有关，至于简写的指令能不能用，必须另行设置！
  RemoveLabel: false
  # 设置为 true，所有玩家把鼠标悬停在错误提示上可查看自己缺失的权限
  # 设置为 false，只有拥有 cmi.permisiononerror 权限的玩家可以这么做
  PermisionOnError: false
  # 设置为 true, 每次玩家执行自己没有权限的指令时，控制台上也会显示提示
  PermisionInConsole: true
  Teleport:
    # 设置为 true，当将要传送到的目标位置不安全时, 插件会尝试让玩家下落，如果玩家没有下落, 则会将玩家传送至原传送点上面的地方
    # 设置为 false，只有目标地点上方会被检测，并让玩家传送过去
    SafeLocationDownThenUp: false
    # 玩家传送后有几秒无敌时间
    # 设置为 0 则关闭
    # 最大60秒
    Invulnerability: 5
    # 设置为 true，玩家任何的传送都会传送回主城
    # 此设置就是为了防止玩家胡乱传送
    # 除非有特殊需求否则不建议开启
    ToSpawnBefore: false
    # 设置为 true ，你可以使用传送指令 /cmi tp [传送对象] [传送地点]
    # 设置为 false, 指令则为 /cmi tp [传送地点] [传送对象]
    SwitchPlaces: true
    CurrentLoc:
      # 只对 tpa, tpahere 和 tpaall 有效
      # 设置为 true ，玩家将会被传送至目标玩家当前的位置
      # 设置为 false ，玩家将会被传送至发起传送请求时目标玩家所在位置（目标玩家可能已经不在那了）
      tpa: true
      # 承上一个设置项，但只对 tpahere 生效
      tpahere: true
    # jump 指令跳至的默认距离，拥有权限 cmi.command.jump.[距离] 权限的玩家无视此限制
    JumpDefault: 50
    Tpa:
      # 玩家接受 tpa 或者 tpahere 请求的默认时间秒，超时则请求传送失效
      Time: 60
      # 若即将传送，传送之前的延迟时间
      Warmup: 3
      # 若即将传送，玩家是否可以移动
      Move: false
      # 若玩家拒绝了传送请求，多少秒内不会再次收到相同玩家的传送请求
      Block: 120
      # 玩家允许的最大传送范围，若两个玩家距离超过这一距离，则传送会失败
      # 设置为 0 可禁用
      # 若设置为任意正数，处在不同世界的玩家之间的传送请求必然会失败
      # 有以下权限的玩家 cmi.command.tpa.max.[最大距离] 可无视此设定
      MaxDistance: 0
    TpaHere:
      # 玩家允许的最大传送范围，若两个玩家距离超过这一距离，则传送会失败
      # 设置为 0 可禁用
      # 若设置为任意正数，处在不同世界的玩家之间的传送请求必然会失败
      # 有以下权限的玩家 cmi.command.tpahere.max.[最大距离] 可无视此设定
      MaxDistance: 0
    Tp:
      # 即将传送到“不安全区域”时的延迟时间
      Bypass: 15
    # 设置为true，在发送 tpa 或者 tpahere 请求时会显示接受或者拒绝按钮
    DenyConfirm: true
    BlackListedItems:
      # 是否启用“当玩家背包内有违禁物品时禁止传送”. 有此权限的玩家无视此限制 cmi.teleport.bypassblacklist
      Enabled: false
      # 哪些情况会检查违禁物品
      EnabledFor:
        tp: true
        tpa: true
        tpahere: true
        warp: true
        home: true
        spawn: true
      # 违禁物品和数量，不写数量的话默认是至少1个
      # 请使用英文冒号隔开物品名和数量例如 IronOre:5 只允许携带4个及以下铁矿石的玩家传送, 铁矿石达到5个及以上禁止传送
      List:
      - Diamond
      - DiamondBlock
      - DiamondOre
      - ironore:5
    # 如果玩家距离上一次记录的地点太近（距离格数低于下面这个值），/back将不会触发
    BackMinDistance: 5
    # 设置为 false ，back指令将不会应用于使用WorldEdit的指南针造成的传送
    # 设置为 true ，则会应用于任何传送
    BackWithWE: true
    # 不能使用/back指令的世界
    BackBlackList:
    - TeztWorldz
  Hat:
    Block:
      # 如果设置为true，如果物品上有lore，则不能被/hat戴在头上
      # 此限制对头盔类物品没有效果
      WithLore: false
      # 启用此项，将不允许把除了头盔以外的玩意戴在头上
      NoneHatItems: true
      # 若开启此项，对于不是头盔且上面还有附魔的物品将被禁止戴在头上
      # 此机制为了防止玩家把附魔神器放在头上
      NoneHatEnchanted: true
    Allow:
      # 启用此项，将允许玩家将怪物的头颅戴在头上
      # 禁用此项，则只有拥有权限cmi.inventoryhat的玩家可以戴
      MobHeads: true
    # 允许戴在头上的方块白名单，以下方块无视上述限制
    WhiteList:
    - bedrock
  helpop:
    # 设置为 true 玩家发送求助信息后只会看到已经发送成功的反馈，而不会看到求助信息本身
    feedbackMessage: true
  IP:
    # 设置为 true, 玩家的登录IP会被记录
    # 建议开启
    Record: true
    # 玩家登录后多少秒，其IP会被记录
    # 这个适合一些离线服务器（先让玩家登录，后记录IP）
    # 这个值最好设置的比登录插件（如Authme）允许登录的时间小
    delay: 30
  # 使用指令 /cmi maxhp 可以使你的最大血量加到的限制
  MaxHp: 200
  # 设置为 true, 玩家的游戏时间将从玩家统计数据里提取，而非从 CMI 插件用户数据文件中提取
  # 如果你的服是已经开了很久的老服，启用这个可以获得更精确的玩家游戏时间
  PlayTimeFromStats: true
  # 玩家的游戏时间排名列表是否自动刷新
  PlayTimeAutoUpdater: true
  # 设置为 true, 服务器加载时将会同时加载玩家游戏时间排行榜
  PreloadTopPlaytime: false
  # 想使用本插件自带的玩家游戏时间记录功能？
  # 启用这项, 玩家在线每小时会记录一次游戏时间
  CMIPlayTimeTracking: false
  # 以下玩家将被排除在玩家游戏时间排行榜之外
  PlaytimeTopExclude:
  - Some
  - Names
  - Here
  # 玩家离线多少天以后，他的名字会被排除出玩家游戏时间排行榜之外
  # 设置为 0 禁用
  PlaytimeTopOffline: 0
  ItemName:
    # 黑名单物品的设置详参 ItemRenaming.list 部分

    # 设置为 true ，若物品被指令 /itemname 改名，其NBT数据会加上一条 'ModifiedName' 的布尔值来标示其为改过名的物品
    MarkChanged: false
  ItemLore:
    # 能给物品添加的lore最长是多少（不含颜色代码）
    # 设置为 0 则无此限制
    MaxLength: 64
    # itemname指令将会无视此物品
    TypeBlackList:
    - gold_nugget
    # 设置为 true ，若物品被相关指令修改lore，其NBT数据会加上一条 'ModifiedLore' 的布尔值来标示其为改过lore的物品
    MarkChanged: false
  OnDurabilityLoss:
    # 当玩家手持的物品（工具/护甲）耐久度低于设置的百分比时，是否提醒玩家？
    # 玩家必须拥有此权限才行 cmi.informDurability
    Tools:
      Use: true
      Percentage: 10
    Armor:
      Use: true
      Percentage: 10
  OnLimitedItemUse:
    # 提示物品剩余的使用次数
    Inform: true
  # 是否禁用世界区块检查的提示消息
  DisableWorldChunkCheckInfo: false
  # 怪物和动物不能上船？
  PreventEntityBoatEnter:
    Monsters: false
    Animals: false
    Villagers: false
  # 阻止床在地狱和末地爆炸  
  PreventBedExplosion:
    Nether: false
    TheEnd: false
  # 如果玩家跑到地狱世界基岩顶部，也就是128格上方，是否把他传送下来
  PreventPlayersOnNetherRoof: false
  # 地狱顶部的高度，设置为0则为原版Minecraft的默认高度，也就是128格
  netherRoofHeight: 0
  # 如果玩家使用鞘翅飞到了基岩高度（0格）以下，是否将其传送上来
  PreventPlayersBelowBedrock: false
  PreventIronGolem:
    # 启用此项，铁傀儡死亡时将不掉落虞美人
    Roses: false
  # 启用此项，钓鱼竿将不能将实体拉向你
  PreventHook: false
  Commands:
    # 设置为 true 如果玩家执行 /cmi 但未指定具体指令，会显示所有指令列表
    # 设置为 false 只会返回 '指令未找到' 的错误提示
    ShowMainHelpPage: true
    Near:
      # near指令使用模糊距离而非精确距离
      # 例如附近玩家距离你 123m 只会显示 ~100m
      Approximate: true
      # 默认的/near生效距离
      DefaultDistance: 200
      Invisibility:
        # 开启此项，有隐身药水效果的玩家不会列进near列表里
        Hide: false
        # 承上一个设置项
        # 是否只显示隐身玩家的位置而混淆掉玩家真实名称？
        # 玩家真实名称不会被显示, 显示的是被&k颜色代码混淆掉的 8 个字符，避免玩家通过字符数量猜出玩家名字
        Obfuscate: false
      # 设置为 true, 玩家可以点击其它玩家名称 然后指令 /cmi point [location] 便会自动执行来显示到达该玩家的粒子路线
      PointTo: true
      # 执行指令 /near 以后可以看到多少行内容
      Count: 10
    lastonline:
      # 当使用指令lastonline时，按照玩家“已经下线过多少秒”的不同等级，显示不同的额外信息
      Timers:
        Time1: 3600
        Time2: 86400
        Time3: 604800
        Time4: 2592000
    Inv:
      # 哪些玩家不能被使用指令打开背包
      # 这个设置项是针对“有权限开别人背包的非OP”玩家的，OP无视此限制
      #（汉化者注：无聊的设置项...）
      BlackList:
      - Zrips
      # 启用此项，不在线的玩家不能被翻背包
      DisableOffline: false
    Clear:
      # 设置为 true, 为了避免误操作 /cmi clear 需要二次确认才能执行
      Confirmation: true
      # 在清空背包物品之前需要检测的NBT路径列表，每一行都必须以NBT:打头，这个设置是为以后的CMI更新弄的
      Exclude:
      - NBT:ItemJoin Name
      - NBT:ItemJoin.Name
    List:
      # 按照升序或者降序排列玩家在list列表的顺序
      ASCOrder: true
  Multicraft:
    # 完全禁止指令 /list 的使用
    DisableList: false
PlaytimeRewards:
  # 启用玩家在线时间奖励
  Enabled: false
  # 设置为true，玩家处于AFK离开状态时不计入在线时间奖励
  # 请注意，若Afk.StopPlayTime设置为true则该设置项将不生效
  # 因为Afk.StopPlayTime本身就会停止AFK时间计数
  ExcludeAfk: false
  # 每多少分钟提醒玩家领取在线奖励
  RewardInform: 15
  # 你想在列表里展示多少件在线奖品
  # 最好设置小一点，列出玩家在线时间远远达不到的那种奖励毫无意义
  OneTimeAmount: 2
  # 设置为 true 玩家只有拥有权限 cmi.prewards.[name] 才能获得在线奖励
  RequiresPermission: false
Sleeping:
  Speedup:
    # 设置为true，玩家睡觉时可加速夜晚进度
    # 进入睡眠的玩家越多，夜晚加速越快
    Enabled: true
    # 此机制生效的世界
    # 请务必注意：生效的世界必须是NORMAL类型的世界，也就是说地狱和末地不能设置，同时全服只能设置唯一一个世界
    # 设置为 [] 则所有合适的NORMAL世界都会被包含在内
    Worlds: []
    # 设置为 true 时间只在 13000 到 24000 ticks 才会加速（也就是晚上）
    # 设置为 false 时间在全天均可加速（包括雷暴天气）
    OnlyDurringNight: true
    # 夜晚加速信息显示方式: none, title, bossbar
    InfoType: title
    # 设置为 true, 在AFK离开模式的玩家不计入夜晚加速玩家计算之中
    ExcludeAfk: true
    # 基础夜晚速度，设置的越大，玩家睡觉时夜晚进度越快
    BaseSpeed: 100
    # 夜晚进度的最小速度 
    MinSpeed: 5
    # 只有大于这个数量的玩家进入睡眠，夜晚加速才会开始
    # 可有两种表示方法，具体数字代表具体入睡玩家数量，若为百分数则表示全服在线玩家多少百分比入睡
    MinBeforeSpeeding: 50%
    # 设置为 true，仍然没有入睡的玩家会收到催促提示
    Inform: true
    # 玩家开始入睡多少秒后开始出现催促提示
    InformDelay: 30
Compass:
  # 用bossbar显示动态方位
  # 仅限 1.9+ 服务器
  BossBar: false
  # 需要手持指南针才能显示动态方位
  RequireCompass: false
  # 启用此项，将默认使用追溯指针（recovery compass）作为手持显示bossbar的指南针
  RecoveryAsRegular: false
  # 需要将追溯指针拿在手上才能在bossbar上看到死亡地点
  RequireRecoveryCompass: false
  # 动态方位更新的频率（毫秒）
  UpdateInterval: 200
  # 长度可以自己决定，但请务必注意八个方向之间等长
  Shape: '------------SW-------------W-------------NW-------------N-------------NE-------------E-------------SE-------------S-'
  Color: '&7'
  ShowHome: true
  Home: ۩
  ShowSpawn: true
  Spawn: ⤋
  ShowDeath: true
  Death: ☠
  ShowCompassTarget: true
  CompassTarget: ꖴ
  # 仅限 1.16+ 服务器
  # 当指南针方向改变时，设置bossbar颜色随之改变
  Gradient:
    Use: true
    SouthColor: white
    WestColor: orange
    NorthColor: vulcan
    EastColor: bitter_lemon
ExploitPatcher:
  # 启用此项，将阻止玩家将附魔之瓶扔向传送门从而完成复制bug
  PreventExpPortals: true
  # 启用此项，将阻止玩家在床上时执行指令，此机制和某些bug触发有关
  # 默认是关闭的，但建议开启
  NoCommandsInBed: false
  # 由于“超多页面的成书”与许多bug有关，建议开启此项
  # 设置为 true 玩家将不能再创作超多页面的成书
  # 玩家可创建成书页面与权限 cmi.book.pages.<最大书页数> 有关，默认可创建20页
  LimitBooks: true
  # 启用此项，将完全阻止掉落物通过末地传送门和末地折跃门
  BlockEndPortalItemTransfers: true
  # 启用此项，当玩家使用pweather指令自定义天气至雨天，但全局世界天气为晴天时，他将无法使用三叉戟
  Riptide: true
  Placeholders:
    blocked:
      # 默认情况下，为了防止潜在的安全问题，PlaceholderAPI变量 %checkitem_...% 是禁用的
      # 如果你确实因为这个特性遇到了问题，才建议设置此项为false，否则不建议动
      checkItem: true
Vault:
  # 如果vault无法获得正确的玩家金钱数据或者玩家组数据，请关掉下面两项
  Money: true
  Group: true
Worth:
  # 包含下列lore的物品不可以使用 /cmi sell 出售
  # 可使用彩色代码
  BadLore:
  - 禁止出售 
  # 设置为true，任何一个有自定义名称的物品都不能用 /cmi sell 指令出售
  CustomNameBlocking: false
  # 设置为true，任何一个有自定义lore的物品都不能用 /cmi sell 指令出售
  LoreBlocking: false
  # 设置为true，耐久度不满的物品不能出售
  RequireFullDurability: false
  # 设置为true，耐久度不满的物品将按照其剩余的耐久度折价出售. 若某物品只剩下30%耐久，其回收价格也会砍掉七成
  # 本设置项与上面那条冲突，不要同时开启
  DevalueByDurability: false
  # 自动生成物品回收价格
  AutoGenerate:
    # 合成产物物品的价值相对于原材料物品价值总和，是否设置溢价（以百分比计算）
    # 假设一根木棍价值0.1金币，钻石价值44金币，那么钻石锄（2木棍+2钻石）的价格应该是88.2金币，但如果设置了2%的溢价，其价格会变成89.96金币
    # 可以设置为负数
    PriceIncrease: 0
BossBar:
  # 启用或禁用 bossbar 血条显示血量，仅适用于 1.9+ 
  # 只有拥有权限cmi.bossbar.hpbar的玩家才能看到此血量
  # 玩家权限的检测1分钟才会执行一次，以避免卡顿
  HpBarEnabled: true
  # 不显示bossbar的实体名称
  HpBarBlackList:
  - Ender_dragon
Ban:
  # 设置为true，当玩家被封禁，玩家将收到来自 CMI 的提示语，而非MC原版的提示语
  OverrideLoginMessage: false
ReSpawn:
  # 玩家重生后有多少秒时间是无敌的
  # 这个设置可以防止玩家刚重生就又被砍死
  # 设置为 0 可关闭此设置
  # 最大可设置为60秒
  Immortality: 3
  # 如果你想让第三方插件处理玩家重生，请设置此项为false并重载插件
  Enabled: true
  Global:
    # 世界重生优先顺序（仅适用于不在Specific列表里的世界）
    # 可重生的地点: 重生锚anchor, 主城spawn, 床的位置bedLocation, 家的位置homeLocation, 原版世界重生点worldSpawn, warp![地标名]
    # 主城spawn可以使用/cmi setspawn设置位置，需首先将RespawnLocation设置为true
    # warp![warName] 可设置为可传送的地标, 使用此法传送至地标无视权限限制
    # bedLocation 的设置需要玩家与床交互, BedInteraction 需要设置为 false 且玩家需要权限 cmi.bedhome 才能设置床为重生点
    # homeLocation 是玩家设置的家，默认名字是Home, 若玩家并没有设置家，则列表中按顺序第一个作为重生位置
    # worldSpawn 是Minecraft原版世界重生点, 这个是该世界自带的属性，与CMI无关
    # anchor 的设置需要玩家和重生锚交互，该设置默认仅在地狱生效，默认情况下，其他世界的重生点应该是床
    PriorityOrder:
    - anchor
    - bedLocation
    - spawn
    - homeLocation
    - worldSpawn
  # 给特定世界设置重生点
  # 如果你想使用第三方插件（如Multiverse-core）处理重生，请把world: 及下面的内容全都删掉
  Specific:
    world:
    - anchor
    - bedLocation
    - spawn
    - homeLocation
    - worldSpawn
    world_nether:
    - anchor
    - bedLocation
    - spawn
    - homeLocation
    - worldSpawn
    world_the_end:
    - anchor
    - bedLocation
    - spawn
    - homeLocation
    - worldSpawn
Afk:
  # 启用AFK离开系统
  Enabled: false
  # 玩家处在离开状态时显示title消息
  TitleMessage: true
  # 玩家处在离开状态时显示subtitle消息
  SubTitleMessage: true
  # 当玩家一直在原地跳，同样算作离开
  # 此设置为了避免玩家使用活塞挂机，或者流水挂机
  PreventJumping: true
  # 当玩家处于离开状态时，免疫伤害
  PreventDamage: true
  # 插件每过多少秒会检查玩家是否处于离开状态
  CheckInterval: 10
  # 设置为 true, 玩家处于离开状态期间不算作游戏时间（playtime）
  StopPlayTime: false
  # 当玩家多少秒没移动以后，进入离开状态
  # 玩家需要权限 cmi.command.afk.auto 来自动进入离开状态
  AutoAfkIn: 300
  # 当玩家自动进入离开状态后执行的控制台指令
  AutoAfkCmds:
  - cmi broadcast !&6[playerDisplayName] &e刚刚离开了
  # 当玩家手动输入 /cmi afk 并进入离开状态时执行的控制台指令
  ManualAfkCmds:
  - cmi broadcast !&6[playerDisplayName] &e刚刚离开了
  # 当玩家退出离开状态后执行的控制台指令
  AfkLeaveCmds:
  - cmi broadcast !&6[playerDisplayName] &e回来了
  # 玩家停止移动多少秒后自动踢出玩家
  # 也就是说，玩家停止移动以后，经过AutoAfkIn的时间加上AutoKickIn的时间，将会被踢出
  # 设置为 -1 则不踢出
  # 有该权限的玩家不会被踢出 cmi.command.afk.kickbypass
  # 也可以给玩家这个权限 cmi.command.afk.kickOutIn.[秒数] 来自定义玩家的被踢限时，此权限优先级更高
  AutoKickIn: -1
  # 经过多少秒后会再一次执行踢出指令
  RepeatingAutoKickInterval: 300
  # 设置为 true, 每过 RepeatingAutoKickInterval 的时间，插件就会执行自动踢出一次
  RepeatKickCommand: false
  # 当玩家被踢出时，执行的控制台指令
  # 如果玩家没有被踢出，那么这个指令每过 RepeatingAutoKickInterval 时间就会重复触发一次
  AutoKickCmds:
  - cmi kick [playerName] &e你因为 [time] 没有移动而被踢出
  # 禁用离开状态的世界
  DisabledWorlds:
  - oneTestWorld
  - secondTestWorld
  # 玩家与方块交互则退出离开状态
  DisableOnInteract: true
  # 防止玩家使用“鼠标连点器”等挂机脚本来重复与某一方块或物品交互来避免进入离开状态
  SmartInteractCheck: true
  # 防止玩家使用“挂机池”等能让玩家重复进行规律性运动的东西来避免进入离开状态
  AntiAfkMachines: true
  # 启用此项，处于AFK离开状态的玩家将不能被鱼钩移动位置
  PreventHook: true
  # 【此功能尚在开发】玩家处于离开状态时不会被其他玩家推挤移动位置
  # 请注意此机制为推挤后会自动归位，而非完全不可交互
  PreventPushing: false
  # 玩家点击背包内物品则退出离开状态
  DisableOnInventoryClick: true
  # 玩家扔出物品则退出离开状态
  DisableOnitemDrop: true
  # 玩家使用指令则退出离开状态
  DisableOnCommand: true
  # 玩家发公共聊天则退出离开状态
  DisableOnPublicChat: true
  # 玩家发私聊则退出离开状态
  DisableOnPrivateChat: true
  # 玩家移动则退出离开状态
  DisableOnMove: true
  # 玩家移动游戏视角则退出离开状态
  DisableOnLookAround: false
  # 玩家甩杆钓鱼则退出离开状态
  DisableFishing: false
  # 玩家捡起物品则退出离开状态，不建议开启
  DisableItemPickup: false
  PreventMobSpawning:
    # 当玩家正处于离开状态时，是否阻止怪物在其周围生成
    Enabled: false
    # 防止怪物自然生成
    Natural: false
    # 防止怪物从刷怪笼生成
    Spawners: true
    # 防止铁傀儡生成
    VillageDefence: true
  # 当玩家正处于离开状态时，是否阻止其捡起经验球
  # 请注意，由于原版Minecraft的奇葩处理经验球的机制，本机制的运行原理是：将经验球设置为0exp，并让其被玩家吸收
  # 也就是说经验球还是能捡起的，但经验是 0
  DisableExpPickup: false
Holograms:
  # 多少毫秒检测一次是否有玩家进入悬浮字触发显示范围
  # 设置的大一些可减少服务器负担
  CheckInterval: 2000
  Defaults:
    # 默认可以看到悬浮字的范围半径
    viewRange: 16
    # 悬浮字默认更新时间间隔
    updateRange: 8
    updateInterval: 0.0
    # 悬浮字翻页时间间隔
    # 如果设置为 0 或者负数，则悬浮字不会翻页
    pageChangeInterval: 0.0
    # 是否让悬浮字从开始的位置一行一行往上垒
    # 设置为 false，则为一行一行往下排
    placeUp: true
Votifier:
  # 启用投票计数系统
  CountVotes: true
  # 同一个 IP 地址的玩家24小时内最多可投的票数
  # 设置为 0 则无限制
  MaxVotesInADay: 0
  # 两次投票之间的最小冷却时间秒
  # 其实每个投票设置中已经包含了各自的冷却时间，此设置项为总限制
  GeneralCooldown: 0
  # 设置为false，则玩家投票后不执行 CommandsOnVote 里的指令
  PerformCommands: true
  # 当玩家投票，执行的控制台指令
  # [serviceName] 变量可用于显示IP
  CommandsOnVote:
  - cmi broadcast !&6[playerDisplayName] &e投了票
  - cmi give [playerName] diamond
  # 当玩家获得大量票数，是否获得相应奖励，设置为 false 则无奖励
  ExtraRewardsEnabled: false
  # 当玩家获得大量票数，所获得的相应奖励
  ExtraRewards:
    '10':
    - cmi heal [playerName]
    - cmi money give [playerName] 100
    '100':
    - cmi heal [playerName]
    - cmi money give [playerName] 1000
    - cmi give [playerName] diamond 32
  # 下列玩家不会被列在高票列表中
  ExcludeList:
  - None
Ranks:
  # 汉化者注：严谨起见，Ranks在本配置文件中翻译为“等级”，但很多用户认为翻译为“军衔”更好
  # 设置为 true 将按照玩家的权限来确定玩家当前的级别，更高权重的级别将会覆盖低权重的级别
  # 也就是说，假如玩家当前是第一等级，但是却拥有第三等级的权限，一样按照第三等级对待
  # 一般来说，你可以使用指令 /cmi setrank 来调整玩家的等级，但若开启了权限识别等级，在你操作玩家等级之前还需要先动权限才行
  PermissionCheck: false
  # 每隔多少分钟CMI会重新计算玩家现有等级
  # 设置为0禁用
  Recalculation: 0
  AutoRankUp:
    # 插件每过多少秒会检查可能升级的玩家
    # 设置为0或者负数停止检查升级
    Delay: 60
    # 【此功能尚在开发】设置为 true，检查玩家升级将异步进行
    # 如果你遇到和此设置项相关的问题，请关闭此项并携报错至GitHub反馈
    Async: false
    # 插件每过多少秒会检查每一个可能升级的玩家
    # 这个和上面那个不同，此设置是为了避免同一时间有两个玩家一起升级
    # 请把这个设置的和上面那个一样，或者设置的比上面那个大
    PlayerDelay: 120
    # 显示升级进度条
    progressBar: true
  # 设置为 true, command /cmi ranklist 只会显示你当前级别树的主轴，至于级别树的“分叉”则不会显示
  # 设置为 false, 无论“主轴”还是“分叉”都会显示
  ListSamePathOnly: false
  EffectUp: GColumn
  # 设置为 true 所有和时间有关的等级需求都会用小时来表示，比如 '50 小时' 而不是 '2 天 2 小时'
  OnlyHours: false
  # 如果上面那项设置为 true 是否把“分钟”添加为后缀，比如你可以显示为 '5 小时 30 分钟' 而不是 5.5小时'
  includeMinutes: true
Signs:
  # 当玩家在木牌上输入内容可能会触发某些东西时（比如：颜色变化）
  # 每多少毫秒检测一次？尽量设置的大一些以减少服务器负担
  CheckInterval: 3000
  # 木牌第一行写有以下内容时，Shift+右键点击修改内容机制不生效
  # 这是为了避免此机制与某些其它插件冲突（比如QuickShop商店等）
  editBlackList:
  - '[QuickShop]'
Skins:
  # 当玩家进服且没有设置皮肤时，直接按照他的ID应用皮肤
  AutoApply: false
  # 设置为true，当玩家脱下皮肤，则皮肤变成史蒂夫
  # 设置为false则玩家皮肤变成原正版ID显示的皮肤
  SteveOnOff: true
  # 玩家需要权限才能换肤 cmi.command.skin.perm.[皮肤名]
  RequireSpecificPerm: false
  # 多长时间（分钟）从MOJANG的服务器更新一次皮肤数据
  # 请注意，你每分钟最多发送一次请求, 所以最好设置的大一些
  # 比如设置为1小时，则玩家更换皮肤后最迟1小时后可以生效
  # 只有玩家主动换肤或者玩家刚刚进服才能触发这个更新
  SkinUpdateTimer: 1320
  # 间隔多长时间（分钟）给MOJANG的服务器发送一次请求
  SkinRequestFrequency: 10
Alert:
  # 当使用指令给玩家发出提示（Alert）时，这个提示持续多长时间（分钟），默认24小时
  Timer: 1440
Notes:
  # 启用后，某些被设置了上线提醒的玩家上线后, 管理员会看到关于此玩家的信息
  ShowOnAlertEvent: true
GroundClean:
  # 地面上掉落的物品，有哪些不会被清除？
  WhiteList:
  - itemType
# 汉化者注：此处的Chat聊天相关设置项已被挪至CMI/Settings/Chat.yml
Command:
  CommandFilter:
    Duplicate:
      # 阻止玩家短时间内发送大量相同或相似的指令，有此权限的玩家无视此限制 cmi.commandfilter.bypass
      Use: false
      # 两条指令中有百分之多少的字符相似则判定为“相同的指令”
      Percentage: 80
      # 你只能每隔多少秒才能发送相同的指令
      Interval: 5
      # 若一个指令还在冷却中，你最多能重复执行此指令多少次？
      MinAmount: 2
      # 以下指令使用不受限制
      WhiteList:
      - msg
      - tell
      - login
      - register
  Spy:
    # 玩家只有进服后多少秒后才能进入指令偷窥模式
    # 这个设置为了防止恶意玩家强登OP号在被踢出之前就偷窥到玩家的指令
    # 请务必设置的比登录插件允许输入密码的限时要长
    DelayForTrigger: 60
    # 下列指令不会被指令偷窥监控到（出于隐私保护）
    BlackListed:
    - register
    - login
    - l
    # 没有权限 cmi.security.admin 的玩家将只能偷窥到如下几个指令的使用
    CommandList:
    - cmi spawn
    - cmi tp
    - cmi tpa
    - cmi heal
    - cmi feed
    - cmi fly
  Notes:
    # 玩家便签会被保存多少天
    ExpiresIn: 30
  Mail:
    # 玩家邮件会被保存多少天
    ExpiresIn: 30
    # 群发给所有玩家的邮件将发给前 x 天上过线的玩家
    mailAllDays: 7
    # 每个玩家最多可以保存的邮件数量
    # 如果达到此限额，老的邮件将会被强制删除
    MaxMails: 50
DisplayName:
  # 如果你安装了能改变玩家名的第三方插件, 设置为 false
  Change: true
  # 玩家展示在聊天中的名称. 如果只设置为{nickName}那么玩家如果有昵称将会显示昵称，如果没有昵称将会显示玩家的真名
  # 可用变量 : {prefix} {suffix}
  # 支持PlaceholderAPI变量
  Format: '{nickName}'
  # 合法昵称正则
  # 默认只有字母数字可用
  # 若你想允许任何语种的字母，请用 [^\p{L}0-9\-\_]
  ValidNicknameRegex: '[^a-zA-Z0-9\-\_]'
NickName:
  # 禁止玩家将昵称改为下列内容
  # 如果使用英文，请全部用小写
  # 有此权限的玩家无视此限制 cmi.command.nick.bypassblacklist
  # 如果某些玩家已经在使用被限制的昵称了，想保留其昵称需要权限 cmi.command.nick.bypassinuse
  BlackList:
  - admin
  - op
  - 服主
  - 腐竹
  - 管理员
  - 腐竹他爸
  # 昵称最短多少字符？有此权限玩家无视限制 cmi.command.nick.bypass.length
  MinLength: 4
  # 昵称最长多少字符？有此权限玩家无视限制 cmi.command.nick.bypass.length
  MaxLength: 16
  # 强制在昵称前面加一个符号标志来提醒别人这不是真名，变量为 {nicknameprefix}
  Prefix: '~'
  # 设置为 true, 仅当昵称和本名不一样的时候才会强制在前面加符号
  PrefixWhenDifferent: false
  TabComplete:
    # 设置为 true, 在线玩家的昵称也会被列入tab补全
    ReplaceReal: true
    # 设置为 true, tab补全昵称时将在其上方标注玩家真名，ReplaceReal 设置项必须首先开启 (汉化者注：此处作者笔误为ReplaceName)
    IncludeReal: false
Dye:
  # 设置为 true ，染色皮革装备会绑定给它染色的玩家，其他玩家不可使用
  BoundToPlayer: false
# 登录时，有权限 cmi.versioncheck 的玩家可查看插件是否有更新
ShowNewVersion: true
Spawners:
  # 如果你的服在处理刷怪笼时遇到不少bug, 把这个设置为 true 来完全禁止刷怪笼的使用
  # 该设置将禁止刷怪笼放置，破坏，修改等
  FullDisable: false
  Break:
    # 玩家挖掘刷怪笼时掉落刷怪笼本身
    # 玩家必须使用带精准采集的镐子且必须有权限 cmi.dropspawner 
    # 如果玩家同时有 cmi.dropspawner.nosilk 权限，那么玩家连精准采集都不需要了
    Enabled: false
    # 设置为 true, 玩家需要对应生物的相应权限才能挖掘并获得相应刷怪笼
    # 例如: 玩家需要权限 cmi.dropspawner.pig 才能挖掉并获得猪的刷怪笼
    RequiresExactPermission: false
    # 设置为 false, 如果挖刷怪笼掉落了刷怪笼则不会掉落经验
    # 设置为 true， 只有挖掉落刷怪笼才会掉落经验
    DropExp: false
    # 精准采集附魔必须达到多少级才能获得刷怪笼
    SilkTouchLevel: 1
    # 刷怪笼被挖掉以后掉落的几率，0到100
    BaseDropChance: 100
  Place:
    # 放置刷怪笼相关设置
    # 如果启用，玩家需要相应权限才能放置刷怪笼
    # 如果禁用，CMI将不会干涉刷怪笼的放置
    Enabled: true
    # 设置为 true, 玩家需要特定权限才能放置刷怪笼
    RequiresPermission: false
    # 上面那项 RequiresPermission 必须设置为 true
    # 例如: 玩家必须拥有 cmi.placespawner.pig 才能放置猪刷怪笼, 或者 cmi.placespawner.zombie 才能放置僵尸刷怪笼
    # 如果此项设置为 false, 那么玩家只要拥有基础权限 cmi.placespawner 就能放置任何刷怪笼
    RequiresExactPermission: false
  Interact:
    # 设置为 true, 玩家必须拥有相应权限才能用刷怪蛋修改刷怪笼
    # 比如玩家必须拥有权限 cmi.egginteract.pig 才能使用猪刷怪蛋修改刷怪笼
    EggRequiresPermission: false
  # 设置为 true, 当刷怪笼被TNT炸毁时有几率掉落它自身
  TnTExplosionDrop:
    use: false
    # 掉落几率
    Chance: 30
  # 设置为 true, 当刷怪笼被苦力怕炸毁时有几率掉落它自身
  CreeperExplosionDrop:
    use: false
    Chance: 30
  Charges:
    # 启用此项，玩家将按照不同的分组来获得“刷怪笼能量”，相关权限 cmi.spawners.charge.[组名] 
    # 玩家能挖掘的刷怪笼数量将被限制
    # StartingCharge 代表当玩家第一次进服时能获得多少“刷怪笼能量”
    # MaxCharge 代表玩家最多拥有多少刷怪笼能量
    # Cooldown 代表每过多长时间玩家会获得 1 刷怪笼能量
    # Bonus 不是必要的，它代表当玩家放置刷怪笼时，减少获得刷怪笼能量的时间多少秒
    # 有此权限玩家无视限制 cmi.spawners.charge.bypass
    Use: false
    # 设置为 true，当玩家耗尽刷怪笼能量时，挖掘刷怪笼永远不会掉落自身
    BreakWithoutCharge: false
    List:
      Noob:
        Use: false
        StartingCharge: 2
        MaxCharge: 5
        Cooldown: 3600
        Bonus: 10
      Advanced:
        Use: false
        StartingCharge: 3
        MaxCharge: 6
        Cooldown: 3000
        Bonus: 10
  Proximity:
    # 两个刷怪笼在放置时其间隔是否有要求？
    Use: false
    # 两个刷怪笼之间的最小距离，最大可设置为 16
    # 有此权限者无视此限制 cmi.spawners.proximity.bypass
    Range: 3
ItemRenaming:
  # 设置为true，玩家将不能把特定物品用铁砧命名为特定字符串
  # 有以下权限者无视此限制 cmi.anvil.itemrename.bypass
  Prevent: false
  # 设置为true 物品改名将完全被禁用, 无论是铁砧改名还是第三方插件改名
  # 有以下权限者无视此限制 cmi.anvil.itemrename.bypass
  GlobalDisable: false
  # 可给物品命名的最大长度（不含颜色代码）
  # 设置为 0 则无限制
  # 建议还是加上限制，名称过长的物品可能带来bug
  MaxLength: 64
  # 以下种类物品不得使用下列固定正则方式命名，例如不允许把刷怪笼通过命名来修改其生成生物种类，但仍然可以改成别的名字
  List:
  - mobspawner:([A-z]+ (?i)\w*spawner)
SpawnMob:
  # 使用指令生成怪物时一次最多生成多少怪物
  MaxQuantity: 25
  MaxPassengers: 10
Counter:
  # 玩家计数 /counter 的默认范围
  Range: 10
Mirror:
  # 镜像建筑的最大范围
  MaxRange: 50
  # 禁用此项，若进入镜像建造模式后，方块将只能放不能挖
  BreakDisabled: false
NetherPortal:
  # 完全禁止地狱门创建，有此权限者依然可以创建： cmi.netherportalbypass
  PreventCreation: false
  # 可创建地狱门的最大高度. 原版是 23
  # 这个设置可以用于限制主世界地狱门猪人刷怪塔的建造
  MaxHeight: 23
  # 可创建地狱门的最大宽度，原版是 23
  # 这个设置可以用于限制主世界地狱门猪人刷怪塔的建造
  MaxWidth: 23
Portals:
  # 每多少毫秒检测一次玩家进入了传送门与否
  # 设置的大一点可以减少服务器负担
  CheckInterval: 300
  # 每多少毫秒检测一次玩家进入传送门时的粒子效果出现情况
  CheckParticleInterval: 500
  Defaults:
    # 是否使用传送门就是为了执行指令？而非传送到某个目的地？
    # 这个设置项只影响新创建的传送门
    # 设置为true，新创建的传送门进入后只会触发指令，不会把你传送到任何地方
    # 每个传送门可以通过游戏内的GUI设置来重新调整
    PerformCommands: true
    # 执行的指令
    Commands:
    - cmi effect [playerName] blindness 2 1 -s
Animations:
  # 设置空手点击楼梯方块可以坐在上面，或者指针对准楼梯方块并执行指令可坐在上面
  # 需要权限 cmi.command.sit.stairs
  SitOnStairs: true
  # 设置楼梯/半砖/地毯为椅子
  StairsAsChairs: true
  SlabsAsChairs: true
  CarpetsAsChairs: false
  # 玩家坐在椅子上受到攻击时自动离开椅子
  RemoveFromChairOnDamage: true
  # 玩家需要快速双击才能坐在楼梯上
  DoubleClick: false
  # 如果上面的双击那一项开启，玩家两次点击之间间隔多少毫秒以内算是成功的“双击”
  # （汉化者吐槽：这作者简直细致到家了...）
  DoubleClickDelay: 200
  # 玩家只有在椅子方块多少格内才能点击坐上椅子
  ChairRange: 4
# 伤害控制，可能造成伤害的“伤害名”有: contact, entity_attack, entity_sweep_attack, projectile, suffocation, fall, fire, fire_tick, melting, lava, drowning, block_explosion, entity_explosion, void, lightning, suicide, starvation, poison, magic, wither, falling_block, thorns, dragon_breath, custom, fly_into_wall, hot_floor, cramming, 
# 以下内容的格式为 [权限关键词]:[伤害名]:[倍增倍数]
# 例如: nolavadamage:lava:0 代表有权限 cmi.damagecontrol.nolavadamage 的玩家完全无视岩浆伤害
# 如果倍增倍数设置为负数，玩家受到伤害后不但不会掉血反而会加血
# 如果玩家针对同一个伤害名有超过一个相关的伤害控制权限, 那么列表里最后一个权限将会生效
DamageControl:
- nowalldamage:fly_into_wall:1
- lowermagmacubedamage:hot_floor:0.9
Totem:
  # 设置为 true，玩家死亡时背包里的不死图腾会自动生效，哪怕没有被拿在手上
  RemoveFromInventory: false
  Cooldown:
    # 设置为 true 玩家每过 X 秒才能使用一次不死图腾
    Use: false
    Time: 600
  Warmup:
    # 设置为 true 玩家使用不死图腾后将会延迟X秒才会生效
    # 请注意即便这个延时内玩家并没有死，不死图腾也会被消耗
    Use: false
    Time: 10
  # 当玩家拥有不死图腾又掉入虚空时, 他将被传送至重生点同时消耗不死图腾
  ProtectFromVoid: true
  Effects:
    # 不死图腾被使用后，作用的三个正面效果（再生/火焰抗性/伤害吸收）可以持续多少秒？. 设置为 0 则禁用
    Regeneration: 45
    FireResistance: 40
    Absorbtion: 5
Elytra:
  # cmi.elytra - 允许使用鞘翅
  # cmi.elytra.boost - 允许使用推进器推进鞘翅飞行
  # cmi.elytra.superboost - 允许使用超级推进器推进鞘翅飞行
  # cmi.elytra.speedometer - 允许看到速度显示
  Boost:
    # 推进器可提供的最大速度
    SpeedLimit: 200
    # 当玩家飞行超过上面的速度后，经验/物品将不会继续消耗
    SpeedLimitStop: false
    # 显示飞行速度
    SpeedDecimals: true
    # 每次使用推进器（boost），加速多少
    GeneralMultyplier: 0.1
    # 每次使用超级推进器（superboost），加速多少
    # 使用普通推进器时按住shift即可切换至超级推进器
    SuperMultyplier: 0.3
    # 鞘翅飞行默认是消耗经验，若把此项设置为true，将改为消耗物品
    UseItems: false
    # 消耗哪种物品？
    ConsumedItem: STONE
    # 每次鞘翅加速手里必须拿着的物品ID
    # 如果你不需要这个设置，想让玩家手里拿什么都可以，可设置为 AIR 
    # 但请注意AIR不代表空手，想要推进依然需要手里拿着某一物品并点击鼠标左键
    Item: FEATHER
    # 每次原地充能起飞手里必须拿着的物品ID
    # 如果你不需要这个设置，想让玩家手里拿什么都可以，可设置为 AIR 
    # 但请注意AIR不代表空手，想要起飞依然需要手里拿着某一物品并点击方块
    LaunchItem: FEATHER
    # 需要把要消耗的物品拿在手上，UseItems 需要设置为 false
    RequiresItem: true
    # 每次普通加速消耗的物品数量
    Amount: 1
    # 每次超级加速消耗的物品数量
    SuperAmount: 5
    # 飞行时显示粒子效果
    ShowParticles: true
  # 手持特定物品按住Shift原地充能飞起的时间秒  
  Launch:
    Time: 2
  # 对于1.13以上的服务器，玩家在飞行时是否禁用“激流”附魔加速？
  # 飞行加速合并激流附魔加速将会使玩家飞行速度快到难以控制，因此请考虑周全
  DisableRiptide: false
  Fix:
    # 当使用鞘翅飞行时，使用箭来加速不会伤到自己
    PreventSelfDamage: false
    # 当使用鞘翅飞行时，禁止使用火箭来加速
    PreventRocketUsage: false
# 飞行能量系统    
FlightCharge:
  # 默认情况下bossbar会显示剩余的飞行能量. 若设置为false，bossbar只在人为更改飞行能量时会显示，正常的飞行消耗不再显示
  ShowBossBar: true
  # 设置为 true, 每次玩家获得新的飞行能量或者下线重登后，其飞行模式都会自动开启
  # 设置为 false, 玩家必须使用 /cmi flyc 指令来手动开启飞行
  EnabledByDefault: true
  # 设置为 true, 如果玩家把游戏模式从 survival/adventure 调至 creative/spectator ，其飞行能量系统将被禁用
  # 反过来也一样，从 creative/spectator 调至 survival/adventure
  AutoSwitch: false
  # 1经验可以兑换多少飞行能量
  # 设置为 0 则禁用经验兑换
  ExpRechargeCost: 1.0
  # 1金钱可以兑换多少飞行能量
  # 设置为 0 则禁用金钱兑换
  MoneyRechargeRCost: 1.0
  # 一个玩家最多能拥有多少飞行能量？
  # 1飞行能量代表飞行一方快距离消耗的能量
  # 如果处在飞行状态的玩家悬浮在原地没有移动，则每秒扣除1飞行能量
  MaxChargeLevel: 1000
  # 如果处在飞行状态的玩家悬浮在原地没有移动，则每秒扣除飞行能量的倍增数是多少
  # 设置为 0 则禁用
  DeductOnIdling: 1.0
  # 如果设置的大于 0, 玩家在飞行时将会每秒都损失相应的飞行能量，而非按照飞行距离来计算损失能量
  # 设置为 0 可关闭此设定并按照飞行距离计算飞行能量损耗
  DeductOnlyForTime: 0.0
  AutoRecharge:
    # 若玩家使用/autorecharge指令开启了自动装填飞行能量，每次增加百分之多少飞行能量
    From: 10.0
    # 最大可自动装填多少飞行能量
    # 25 代表最大可装填 25% 的飞行能量
    Amount: 25.0
  # 设置玩家从高处摔下来时扣除的飞行能量
  # 只在玩家从3格以上高度摔下时有效
  # 例如，玩家从 10 格高的地方摔下, 那么 (10-3) * 2 = 14 飞行能量将被扣除
  # 设置为 0 来禁用
  DeductOnFallMulti: 2
  # 当玩家从 3 格以上高度摔落，是否产生摔落伤害
  # 无论玩家从多高摔下来，哪怕从200格高度摔下来，都会给他留1格血，不让他摔死（除非KillOnFall启用）
  # 如果在摔落过程中关闭飞行，则该机制失效，该摔死还摔死
  DamageOnFall: true
  # DamageOnFall 必须先开启
  # 如果玩家在飞行中途突然关闭飞行模式，是否让他受到伤害
  DamageOnToggle: false
  # DamageOnFall 必须先开启
  # 是否让他摔死
  KillOnFall: false
  # 如果此处设定了颜色，当玩家使用飞行能量开始飞行时会开始按照设定颜色发光
  # 设置为 'none' 则禁用发光
  GlowColor: none
Point:
  # 点命令触发的粒子效果 可用: fireworks_spark, crit, magic_crit, potion_swirl, potion_swirl_transparent, spell, instant_spell, witch_magic, note, portal, flying_glyph, flame, lava_pop, footstep, splash, particle_smoke, explosion_huge, explosion_large, explosion, void_fog, small_smoke, cloud, coloured_dust, snowball_break, waterdrip, lavadrip, snow_shovel, slime, heart, villager_thundercloud, happy_villager, large_smoke, water_bubble, water_wake, suspended, barrier, mob_appearance, end_rod, damage_indicator, sweep_attack, totem, spit, squid_ink, bubble_pop, current_down, bubble_column_up, nautilus, dolphin, water_splash, campfire_signal_smoke, campfire_cosy_smoke, sneeze, composter, flash, falling_lava, landing_lava, falling_water, dripping_honey, falling_honey, landing_honey, falling_nectar, soul_fire_flame, ash, crimson_spore, warped_spore, soul, dripping_obsidian_tear, falling_obsidian_tear, landing_obsidian_tear, reverse_portal, white_ash, light, falling_spore_blossom, spore_blossom_air, small_flame, snowflake, dripping_dripstone_lava, falling_dripstone_lava, dripping_dripstone_water, falling_dripstone_water, glow_squid_ink, glow, wax_on, wax_off, electric_spark, scrape, block_marker, sonic_boom, sculk_soul, sculk_charge_pop, 
  DefaultParticle: COLOURED_DUST
Messages:
  Login:
    # 设置为true，玩家登陆消息不会显示
    Disabled: false
    # 当全服玩家达到多少时，接下来进入的玩家就不会再显示登陆消息了
    # 设置为 -1 禁用
    AutoHideFrom: -1
    Custom:
      # 设置为true，会使用自定义登入消息，有权限cmi.messages.disablelogin 的玩家可不显示登入消息
      Use: false
      # 启用此项，若你在Bungee端安装了 CMIBungee 玩家切换子服时，本插件将尝试检测玩家去了哪个子服，并输出特定消息
      ServerSwitch: true
  Logout:
    # 设置为true，玩家退出消息不会显示
    Disabled: false
    # 当全服玩家达到多少时，接下来退出的玩家就不会再显示退出消息了
    # 设置为 -1 禁用
    AutoHideFrom: -1
    Custom:
      # 设置为true，会使用自定义退出消息，有权限cmi.messages.disablequit 的玩家可不显示退出消息
      Use: false
      # 启用此项，若你在Bungee端安装了 CMIBungee 玩家切换子服时，本插件将尝试检测玩家去了哪里，并输出特定消息
      ServerSwitch: true
  # 第一次进服显示消息    
  # 可用变量: [playername], [totalUsers], [onlinePlayers]
  FirstJoinMessage:
    Use: false
  # 启用此项，若玩家名称符合正则规则，则不显示登入/登出消息
  Filter:
    ForLogin: false
    ForLogout: false
    Regex:
    - b[a@][s\$][t\+][a@]rd
    - (c|k|ck|q)[o0](c|k|ck|q)[s\$]u(c|k|ck|q)[e3]r
    - mast(e|ur)b(8|ait|ate)
Books:
  # 使用/getbook指令获得成书时，默认作者是？
  DefaultAuthor: PCD
  # 设置为true则成书创建时会添加创建时间
  AddDate: false
# 玩家进服后哪一种自定义内容customText会被显示. 想禁用此功能可将名字设置为不存在的自定义内容customText
Motd: welcomeMessage
# 警告系统，Points代表此警告级别的点数，LifeTime代表这个点数维持的时间秒
# 当警告点数达到一定级别时，触发指令惩罚玩家
Warnings:
  Default:
    LifeTime: 86400
    Points: 1
    DefaultReason: '&7违反服务器规则'
  Categories:
    Swear:
      LifeTime: 86400
      Points: 3
      DefaultReason: '&7辱骂警告'
    Grief:
      LifeTime: 86400
      Points: 10
      DefaultReason: '&7熊服警告'
    Bug:
      LifeTime: 86400
      Points: 30
      DefaultReason: '&7利用bug'
    Cheat:
      LifeTime: 86400
      Points: 50
      DefaultReason: '&7作弊警告'
  Perform:
    '3':
    - cmi mute [playerName] 10m
    - cmi msg [playerName] !&c禁言 &710 &c分钟，原因：已被警告 &73 &c次
    '5':
    - cmi kick [playerName] &c踢出玩家，原因：已被警告 5 次
    '10':
    - cmi tempban [playerName] 5m &c封禁玩家，原因：已被警告 10 次
Spawn:
  # 强制玩家进服时出现在出生点
  SpawnOnJoin: false
  # 以下世界例外，玩家不会强制传送回出生点，而是传送到他们下线的地方
  IgnoredWorlds: []
  # 服务器主城, 也可使用指令 /cmi spawn 到达
  Main:
    World: None
    X: 0.0
    Y: 0.0
    Z: 0.0
    Pitch: 0.0
    Yaw: 0.0
    RespawnLocation: false
    Rng: 0
  # 玩家第一次进服的生成点
  FirstSpawn:
    Use: true
    World: None
    X: 0.0
    Y: 0.0
    Z: 0.0
    Pitch: 0.0
    Yaw: 0.0
Newbie:
  # 新玩家进服时获得的礼包
  Kit: Newbie
Kits:
  # 设置为 true, 礼包列表将会以 GUI 菜单显示，而非以聊天内容显示
  GUI: true
  # 设置为 true, 礼包选择GUI菜单的空白格子将被占位用的物品填满
  FillEmptyFields: true
  # 启用此项，若玩家有相应礼包权限，或者有 cmi.kit.[礼包名].preview 权限，或者 cmi.kit.[礼包名].* 权限，则可预览礼包内容
  KitPreview: true
  Buttons:
    Cooldown: Watch
    Usages: STONE_PLATE
    Money: GOLD_INGOT
    Exp: EXP_BOTTLE
    Desc: WOOL:13
    Back: Fence
  Complex:
    CloseButton:
      Use: true
      Slot: 9
      Material: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNjYmY5ODgzZGQzNTlmZGYyMzg1YzkwYTQ1OWQ3Mzc3NjUzODJlYzQxMTdiMDQ4OTVhYzRkYzRiNjBmYyJ9fX0=
      Commands:
      - closeinv!
    InfoButton:
      # 点击后会显示额外信息的按钮
      Use: false
      Slot: 1
      Material: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDZiYTYzMzQ0ZjQ5ZGQxYzRmNTQ4OGU5MjZiZjNkOWUyYjI5OTE2YTZjNTBkNjEwYmI0MGE1MjczZGM4YzgyIn19fQ==
      Commands:
      - closeinv!
Warps:
  # 设置为 true, 地标列表将会以 GUI 菜单显示，而非以聊天内容显示
  GUI: true
  # 创建新地标时自动打开GUI菜单
  GUIOnCreation: true
  # 地标名最小长度（老版本CMI插件此设置项错拼为MinLenght）
  MinLength: 4
  # 地标名最大长度（老版本CMI插件此设置项错拼为MaxLenght）
  MaxLength: 16
  # 每页显示几个地标？
  perPage: 50
  # 在地标列表里同时显示地标创建者
  showCreator: false
  # 设置为 true, 新建的地标默认必须要有权限才能传送
  requirePerm: false
  Complex:
    CloseButton:
      Use: true
      Slot: 9
      Material: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNjYmY5ODgzZGQzNTlmZGYyMzg1YzkwYTQ1OWQ3Mzc3NjUzODJlYzQxMTdiMDQ4OTVhYzRkYzRiNjBmYyJ9fX0=
      Commands:
      - closeinv!
    InfoButton:
      # 点击后会显示额外信息的按钮
      Use: false
      Slot: 1
      Material: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDZiYTYzMzQ0ZjQ5ZGQxYzRmNTQ4OGU5MjZiZjNkOWUyYjI5OTE2YTZjNTBkNjEwYmI0MGE1MjczZGM4YzgyIn19fQ==
      Commands:
      - closeinv!
DynamicViewRange:
  # 启用动态视野范围. 本功能尚在开发，可能导致CPU爆炸
  # 如果你不需要，最好不要开启
  Enabled: false
WorldLimits:
  # 设置为true,玩家的飞行模式和游戏模式还有上帝模式将随着世界切换而变化
  Enabled: false
  # 每个世界的默认游戏模式
  # 如果玩家有权限 cmi.worldlimit.gamemode.bypass ，那么这个设定对其不起作用
  # 可用游戏模式名: creative, survival, adventure, spectator, 
  Gamemode:
  - testworld:Survival
  # 如果玩家有权限 cmi.worldlimit.fly.bypass ，那么这个设定对其不起作用
  Fly:
  - testworld:False
  # 如果玩家有 cmi.worldlimit.elytra.bypass 权限，不会被限制使用鞘翅飞行
  # 如果该类玩家进入了限制鞘翅飞行的世界，其鞘翅会被强制卸下
  ElytraFlight:
  - worldName:False
  # 设置为 false, 只有拥有此权限 cmi.worldlimit.fly.aboveroof 可以飞到各世界飞行高度限制以上
  FlyAboveRoof: true
  # 各世界飞行高度限制
  FlyAboveRoofLimitations:
  - world-320
  - world_nether-128
  - world_the_end-256
  # 如果玩家有权限 cmi.worldlimit.god.bypass permission node，那么这个设定对其不起作用
  GodMode:
  - testWorld:False
  # 阻止某些世界里以某些原因生成怪物. 可用原因: NATURAL, JOCKEY, CHUNK_GEN, SPAWNER, EGG, SPAWNER_EGG, LIGHTNING, BUILD_SNOWMAN, BUILD_IRONGOLEM, BUILD_WITHER, VILLAGE_DEFENSE, VILLAGE_INVASION, BREEDING, SLIME_SPLIT, REINFORCEMENTS, NETHER_PORTAL, DISPENSE_EGG, INFECTION, CURED, OCELOT_BABY, SILVERFISH_BLOCK, MOUNT, TRAP, ENDER_PEARL, SHOULDER_ENTITY, CUSTOM, DEFAULT
  SpawnReasons:
    world:
    - None
    world_nether:
    - None
    world_the_end:
    - None
# 检查玩家是否改过名
CheckForNameChange:
  # 若玩家登录时，检测到玩家改名了，是否执行一条控制台指令
  PerformCommandsOnNewName: false
  # 执行的指令列表
  NameChangeCommands:
  - 'asConsole! cmi broadcast !&2[oldname] 改名了！现在ta的新名字是 [newname]'
inv:
  # 当玩家死亡时保存其背包物品
  SaveOnDeath: false
  # 设置为 true, 当玩家背包里什么都没有时将不会被保存
  IgnoreEmpty: false
  # 设置为 true ，玩家必须要有权限 cmi.saveinv 才能在死亡的时候保存背包
  RequiresPermission: false
  # 每个玩家最多能保存几个背包
  SavedInventories: 5
  restore:
    # 设置为 false 当玩家使用 /cmi invload 指令时，不加载保存的血量
    HP: true
    # 设置为 false 不加载保存的经验值
    XP: true
    # 设置为 false 不加载保存的饥饿度
    Food: true
    # 设置为 false 不加载保存的饱食度
    Saturation: true
    # 设置为 false 不加载保存的药水效果
    Potions: true
    # 设置为 false 不加载保存的背包物品
    Items: true
    # 不会保存的黑名单物品列表
    # 请注意，你也许需要把一种物品的所有颜色、变种都涵盖在内，例如羊毛、潜影箱等
    BlackListedItems:
    - ''
hunger:
  # 玩家可以拥有超过20饥饿值吗
  overide: false
heal:
  RemoveNegative:
    # 使用/heal治愈玩家时同时移除负面的药水效果吗
    use: true
    # 将会被移除的负面药水效果
    List:
    - blindness
    - confusion
    - harm
    - hunger
    - poison
    - slow
    - slow_digging
    - weakness
    - wither
Cuff:
  # 设置为 false 将允许被限制行为的玩家发聊天消息
  Mute: true
  AllowedCommands:
  - msg
  - r
  - tell
Mute:
  # 设置为 true, 禁言状态下的玩家不能私聊
  DenyPrivateMessages: true
Dispose:
  # 垃圾桶GUI有多少行？可设置 1-6
  UILines: 4
  # 拥有自定义模型和attachcommand物品绑定指令的物品（也许是游戏道具） 是否允许放入垃圾桶
  CustomModelData: true
  AttachedCommands: true
ItemRepair:
  RepairShare:
    # 启用此项，玩家将不能使用铁砧帮别人修理物品，他们只能自己修自己的物品
    # 拥有此权限者无视此限制 cmi.command.repair.repairshare.bypass
    ProtectNormalRepair: false
    # 启用此项，玩家将不能使用 CMI 的指令帮别的玩家修理物品. 他们只能自己修自己的物品
    ProtectCommandRepair: false
    # 当其他玩家捡起被修理的物品或在容器中点击被修理的物品，自动将物品耐久度变为这个数值（设置为 0 则禁用）
    Durability: 1
    # 设置为 true, 有此权限 cmi.command.repair 将无视修理保护，并且可以使用其他人修复的物品
    BypassWithRepairPermission: true
    # 当其他玩家拿起一件自己不能使用的物品时，物品上会自动添加一条lore来提示玩家不可使用（若为物品的主人使用则不会新加lore）
    AddLore: true
    # 设置为 true, 当玩家尝试使用不属于自己的物品时，取消使用事件，阻止玩家使用
    CancelEvent: true
    # 设置为 true, 当玩家不能使用他人修理的物品时会收到提示信息
    InformWithMessage: true
  Repair:
    # 以下自定义模型ID的物品不可使用指令 /repair 进行修理
    BlockedCustomDataID:
    - 298785423
    # 当修复物品需花费金钱时, 玩家需要点击聊天栏的提示语来二次确认
    Confirmation: true
    # 设置为 true, 使用指令 /cmi repair 修复物品需要花费金钱
    # 一般是谁执行指令谁掏钱
    # 如果指令是从控制台发出的, 那么由此物品的主人来掏钱
    CostsMoney: false
    # 修理物品的一般价格
    # 如果你开启了耐久度检测（下面），那么真实修理价格将会和物品耐久度挂钩
    BasePrice: 100.0
    # 修复物品的价格和物品的耐久度挂钩
    CheckDurability: true
    # 当上一设置项被启用，修复耐久度不全的物品，需要额外支付一笔溢价（百分比），溢价按照指令 /cmi setworth 里的物品价格来定
    # 此百分比设定范围 0 到100
    WorthPercentage: 10.0
    # 当上面的设置项被启用，修复包含附魔的物品，需要额外支付一笔溢价（百分比），溢价按照指令 /cmi setenchantworth 里的附魔价格来定
    # 此百分比设定范围 0 到100 
    # 若物品含有不止一个附魔，则多个附魔的溢价会被叠加
    enchantWorthPercentage: 10.0
Cooldowns:
  # 指令冷却，可以使用指令冷却来防止玩家快速刷指令
  # Heal:180 代表玩家两次使用 /heal 指令需间隔180秒
  # 如果间隔被设置为 -1 那么玩家将永远只能使用这个指令一次
  # 拥有权限 cmi.command.[指令].cooldownbypass 可以无视此限制
  # 请务必使用cmi指令全称，不要使用简写
  # ----------
  # 当然你也可以使用权限 cmi.cooldown.[指令].[冷却时长] （权限中指令之间的空格使用_表示）例如: cmi.cooldown.cmi_heal.30 将会给指令 /cmi heal 设置30秒冷却
  # 若是要给带变量的指令设置冷却, 需要在指令的末尾加一个额外的下划线 _ 例如 cmi.cooldown.cmi_heal_.30 
  # 请务必注意这种权限设置不是单独的，你需要在下面的List里先设置上相应的指令和时长！否则权限根本无效！
  # -----
  # 特殊的例子：若你想设置指令 "/cmi home" 但你并不想让玩家真的传送回家，而是允许玩家打开home的GUI列表，可在指令末尾加一个空格, 例如 "cmi home :10"
  Enabled: false
  List:
  - cmi heal:180
  - cmi feed:120
Combat:
  # 战斗模式会持续多长时间
  Timer: 15
  # 若启用这个，哪怕玩家处在安全区内，若其想要PVP，将允许打出伤害
  safeZoneDamage: false
  # 设置为 true, 被攻击者也会进入战斗模式，哪怕他没有还手
  # 设置为 false 只有攻击者会进入战斗模式
  IncludeVictim: true
  Player:
    # 设置为true, 进入战斗状态的玩家会终止fly飞行状态
    # 也就是说如果玩家此时正在飞行中，他会掉下来
    # 但需注意，若玩家有权限飞行且战斗模式中已设置允许使用指令，玩家依然可以使用指令恢复飞行
    # 若玩家有此权限 cmi.pvp.PFlyBypass 则不受限制
    DisableFlight: false
    # 设置为true，当进入战斗状态的玩家被强制终止飞行时，掉下来不会有掉落伤害（仅这一次）
    # 只在PVP中有效
    DisableFallDamage: false
    # 设置为true，玩家将看到bossbar显示还有多长时间战斗模式结束
    # 只在PVP中有效
    ShowBossBar: false
    # 当攻击玩家时，使用悬浮文字展示伤害数值
    ShowDamageNumbers: true
    DamageNumbersFormat: '&c⚔[damage]'
    # 正在上帝模式中的玩家无法进行PVP
    # 有此权限者无视该设置 cmi.pvp.godBypass 
    noGodDamage: false
    # 上方设定了上帝模式中的玩家无法攻击别人，若此机制触发，是否发消息提示管理
    noGodDamageInform: false
    # 设置为true，玩家战斗模式中只允许使用下列列表中的指令
    BlockCommands: false
    AllowedCommands:
    - msg
    - r
    - tell
    # 设置为 true，则上面的 AllowedCommands 白名单反转为黑名单，只有以上指令不可使用
    MakeBlackList: false
  Mob:
    # 设置为 true, 进入战斗状态的玩家会终止fly飞行状态
    # 若玩家有此权限 cmi.pvp.MFlyBypass 则不受限制
    DisableFlight: false
    # 设置为true，当进入战斗状态的玩家被强制终止飞行时，掉下来不会有掉落伤害（仅这一次）
    # 只在PVE中有效
    DisableFallDamage: false
    # 设置为true，玩家将看到bossbar显示还有多长时间战斗模式结束
    # 只在PVE中有效
    ShowBossBar: false
    # 设置为true，来自环境的伤害也会被计入伤害计算之中
    # 例如仙人掌、岩浆块、窒息、燃烧、摔落，等等
    IncludeEnvironment: true
    # 当攻击生物时，使用悬浮文字展示伤害数值
    ShowDamageNumbers: true
    DamageNumbersFormat: '&c⚔[damage]'
    # 上帝模式的玩家不能伤害生物
    # 有此权限 cmi.pve.godBypass permission 则无视限制
    noGodDamage: false
    # 当玩家处于上帝模式时，是否提醒玩家其不能伤害生物
    noGodDamageInform: false
    # 设置为true，玩家PVE战斗模式中只允许使用下列列表中的指令
    BlockCommands: false
    AllowedCommands:
    - msg
    - r
    - tell
    # 设置为 true，则上面的 AllowedCommands 白名单反转为黑名单，只有以上指令不可使用
    MakeBlackList: false
  Heads:
    Player:
      # 击杀玩家是否掉头
      Drop: false
      # 玩家掉落头颅的几率，范围是 0 到 100，可以使用小数比如 0.2
      # 100 几率代表百分百掉落头颅
      Percentage: 1.0
      # 当玩家尝试第二次杀死并获取同一玩家的头颅，减少其掉头概率
      # 注意，此设置项每次服务器重启都会重置
      LowerChanceOfterDrop: 50.0
      # 启用此项，当玩家被带有“抢夺”附魔的武器杀死，有更大几率掉头
      # 概率增幅按照原掉头几率的百分比来计算 % 
      # 例如玩家原本掉头几率为 1% ，若被附魔了抢夺3的武器（增幅 30%）杀死，则掉头几率变为1.3%
      # 只对玩家的头颅掉落几率有效
      # 你可以自由地添加等级, 直接新建新的行即可，比如：
      # Lvl33: 35.5
      LootBonus:
        Enabled: true
        Lvl1: 5.0
        Lvl2: 15.0
        Lvl3: 30.0
      # 生效的世界，设置为空则默认全部世界
      Worlds: []
    Mob:
      # 击杀各种生物是否掉落头颅
      # 请参照 customHeads.yml 来设置不同的生物掉落头颅几率
      Drop: false
      # 生效的世界，设置为空则默认全部世界
      Worlds: []
ShulkerBoxes:
  # 设置为 true, 玩家在战斗模式中无法打开潜影盒
  # 战斗模式的持续时间可在Combat设置项里设置
  PreventInCombat: true
  # 玩家打开一次潜影盒需要花多少钱，钱不够的玩家无法打开背包里的潜影盒
  # 设置为 0 可禁用
  # 拥有此权限者无视此付费： cmi.openshulker.free 
  CostToOpen: 0.0
Vanish:
  # 玩家默认的隐身后情况
  # 若玩家已经使用指令进行了隐身编辑（vanishedit）则不再有效
  Defaults:
    damageToEntity: false
    playerDamage: false
    itemPickup: false
    mobAggro: false
    interaction: false
    noisyChest: false
    informOnLeave: false
    informOnJoin: false
    nightVision: true
    bossbar: true
    afkcommands: false
    PrivateMessages: false
    relogDisable: false
    noMessages: false
    fakeJoinLeave: false
    mobSpawning: false
    stopPlaytime: true
    sleepIgnore: true
    joinVanished: false
    deathMessages: false
    hookPlayers: false
Player:
  Options:
    CloseButton:
      Use: true
      Slot: 9
      Material: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNjYmY5ODgzZGQzNTlmZGYyMzg1YzkwYTQ1OWQ3Mzc3NjUzODJlYzQxMTdiMDQ4OTVhYzRkYzRiNjBmYyJ9fX0=
      Commands:
      - closeinv!
    InfoButton:
      # 点击后会显示额外信息的按钮
      Use: false
      Slot: 1
      Material: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDZiYTYzMzQ0ZjQ5ZGQxYzRmNTQ4OGU5MjZiZjNkOWUyYjI5OTE2YTZjNTBkNjEwYmI0MGE1MjczZGM4YzgyIn19fQ==
      Commands:
      - closeinv!
    # 玩家各种按钮状态的默认值
    # 若玩家已经使用 /cmi options 来改变过按钮状态了，则这个设置不生效
    Defaults:
      # 下面五个按钮分别是：悬浮字可见，Shift更改木牌，不死图腾状态，bossbar指南针，聊天艾特音效
      visibleHolograms: true
      shiftSignEdit: true
      totemBossBar: true
      bassBarCompass: true
      tagSound: true
      # 聊天监视，强烈建议不要开启
      chatSpy: false
      # 指令监视，强烈建议不要开启
      cmdSpy: false
      # 木牌监视，强烈建议不要开启
      signSpy: false
      # 下面三个按钮分别是：接受私聊，接受tp传送，接受转账
      acceptingPM: true
      acceptingTPA: true
      acceptingMoney: true
      # 聊天气泡
      chatbubble: true
      pmSound: true
      # 使用/ride指令骑乘
      rideMe: true
      # PVE和PVP的伤害数值显示
      pveDamageNumbers: true
      pvpDamageNumbers: true
      InformDurability: true
    Icons:
      visibleHolograms: BLACK_STAINED_GLASS
      shiftSignEdit: OAK_SIGN
      totemBossBar: TOTEM_OF_UNDYING
      bassBarCompass: COMPASS
      tagSound: PAPER
      chatSpy: BUCKET
      cmdSpy: WATER_BUCKET
      signSpy: LAVA_BUCKET
      acceptingPM: MAP
      acceptingTPA: CLOCK
      acceptingMoney: KNOWLEDGE_BOOK
      chatbubble: LANTERN
      pmSound: STONE_BUTTON
      rideMe: SADDLE
      pveDamageNumbers: WOODEN_SWORD
      pvpDamageNumbers: DIAMOND_SWORD
      InformDurability: ANVIL
WarmUps:
  # 指令延迟，可以使用指令延迟来做到传送延迟等等
  # tp:5:false 代表玩家使用指令 /tp 需要过5秒才能生效
  # 后面的 false 不是必须的，其含义代表玩家在延迟过程中可以移动（true表示不能移动）
  # 如果你想应用在共用主指令的多个指令上（比如/warp lobby, /warp pvp...等等）只需在主指令后面加个空格，例如 'warp :5:false'
  # 如果你想应用在本插件的指令上, 请使用指令全称（比如cmi warp）而不是指令简写（比如warp）例如 'cmi warp:5false'
  # 拥有权限 cmi.command.[指令].warmupbypass 可以无视此限制
  # 有一点需要注意： cmi home 这个指令比较特殊，必须在home后面加一个空格，例如: - cmi home :5:false
  # 【正在开发的特性】: 在指令延迟末尾加上 GlyphHead ，当指令处于延迟中时会出现粒子效果，例如
  # - cmi warp :3:false:GlyphHead
  Enabled: false
  InformOnNoMove: true
  showCounterBarInfo: false
  showBossBarInfo: false
  List:
  - cmi tp :5:false
  - cmi back:3:true
  - cmi warp :3:false
  - cmi home :3:false
Jail:
  # 每过多少毫秒检查玩家是否逃出监狱范围
  # 设置的大一点可以减少服务器负担
  CheckInterval: 500
  # 如果把玩家关进监狱时没有指定时间，默认的时间是？
  DefaultTime: 300
  # 当玩家在监狱里时聊天可被多少半径的玩家听到
  # 设置为 0 则聊天没有范围限制
  # 设置为 -1 则禁止聊天
  ChatRange: 20
  # 设置为 true 监狱服刑时间包括离线时间
  # 设置为 false 只有在线时间算进服刑时间
  CountWhileOffline: false
  # 设置为 true 监狱服刑时间包括离开（AFK）时间
  # 设置为 false, 则不包括
  NoAfk: false
  # 当玩家正在监狱服刑，是否让其避免一切伤害
  PreventDamage: true
  # 当玩家正在监狱服刑，是否让其避免饥饿
  PreventHunger: true
  Commands:
    # 玩家入狱时触发的控制台指令
    OnJail:
    - ''
    # 玩家出狱时触发的控制台指令
    OnUnJail:
    - ''
  # 允许在监狱执行的指令  
  WhiteListedCmds:
  - cmi msg
  - cmi reply
  - register
  - l
  - login
scan:
  # 当服务器 Tps 大于这个阈值时才会调整物品扫描速度
  SoftCap: 19.0
  # 扫描速度，范围是 1 - 30
  DefaultSpeed: 15
  # 设置为 true, 当使用scan扫描物品而又不指定范围时，整个世界都会被扫描
  GlobalRangeByDefault: false
  # 扫描范围. 2 代表5x5=25 区块, 1 代表3x3=9 区块 0 代表你所站的区块
  DefaultRange: 2
  # 如果设置为true，被扫描到的容器内的物品将会被直接删除，用法: /scan id 7 purge
  EnablePurge: false
search:
  # 如果设置为true，被扫描到的玩家背包内的物品将会被直接删除，用法: /cmi search id 7 purge
  EnablePurge: false
lfix:
  # 当服务器 Tps 大于这个阈值时才会开启光照修复
  SoftCap: 19.0
  # 光照修复速度，可调整 1 到 100
  DefaultSpeed: 15
purge:
  # 当服务器开启时清空相应玩家数据，不建议开启！
  CleanOnStart: false
  # 当玩家不在线多少天后，其玩家数据会被清除
  OfflineDays: 90
  PlayerData:
    # 开启玩家世界数据清理？
    Enabled: true
    # 会从哪个文件夹清理数据？
    SourceFolder: world\playerdata
    # 如果设置为false，被清理的数据将会被移至备份文件夹
    # 如果设置为true，被清理的数据将直接删除
    DeleteFiles: false
    # 备份文件夹
    DestinationFolder: world\playerdata_backup
  PlayerStats:
    # 开启玩家状态数据清理
    Enabled: true
    # 会从哪个文件夹清理数据？
    SourceFolder: world\stats
    # 如果设置为false，被清理的数据将会被移至备份文件夹
    # 如果设置为true，被清理的数据将直接删除
    DeleteFiles: false
    # 备份文件夹
    DestinationFolder: world\stats_backup
  PlayerAdvancements:
    # 开启玩家进度数据清理
    Enabled: true
    # 会从哪个文件夹清理数据？
    SourceFolder: world\Advancements
    # 如果设置为false，被清理的数据将会被移至备份文件夹
    # 如果设置为true，被清理的数据将直接删除
    DeleteFiles: false
    # 备份文件夹
    DestinationFolder: world\Advancements_backup
  Essentials:
    # 开启Essentials玩家数据清理
    Enabled: false
    # 会从哪个文件夹清理数据？
    SourceFolder: plugins\Essentials\userdata
    # 如果设置为false，被清理的数据将会被移至备份文件夹
    # 如果设置为true，被清理的数据将直接删除
    DeleteFiles: false
    # 备份文件夹
    DestinationFolder: plugins\Essentials\userdata_backup
  LWC:
    # 开启LWC箱子锁数据清理
    Enabled: false
Selection:
  # 选择工具
  Tool: wooden_shovel
Time:
  # 一天四个时段对应的时间
  Day: '12:00'
  Night: '24:00'
  Morning: 06:00
  Dusk: '18:00'
  AutoTime:
    # 每过多少秒，世界的时间会和匹配真实时间来调整
    # 最好设置为60秒左右
    Interval: 60
    # 启用太阳自动平滑调整（默认）
    # 若不想显示平滑太阳变化，可在调整时间的指令末尾加上 -smooth
    Smooth: true
    # 时间调整速度
    # 100 代表太阳将会照100倍速度移动直至调整至正确时间
    SmoothSpeed: 100
    # 自动时间调整生效的世界
    Worlds:
    - ''
  # 自由设置MC中一天的时长
  TimeSpeed:
    # 时间单位是秒，游戏中的24小时对应现实时间1200秒
    world:
      Enabled: false
      # 白天的默认时间: 600秒， tick: 0 到 12000
      day: 600
      # 日落的默认时间: 90秒， tick: 12000 到 13800
      sunset: 90
      # 夜晚的默认时间: 420秒， tick: 13800 到 22200
      night: 420
      # 日出的默认时间: 90秒， tick: 22200 到 24000
      sunrise: 90
Enchanting:
  enchantLimits:
    # 附魔等级限制，如果设置为false，附魔将不再有限制
    Enabled: true
    MaxLevel:
      protection_fire: 4
      damage_all: 5
      arrow_fire: 1
      soul_speed: 3
      water_worker: 1
      arrow_knockback: 2
      loyalty: 3
      depth_strider: 3
      vanishing_curse: 1
      durability: 3
      knockback: 2
      luck: 3
      binding_curse: 1
      loot_bonus_blocks: 3
      protection_environmental: 4
      dig_speed: 5
      mending: 1
      frost_walker: 2
      lure: 3
      loot_bonus_mobs: 3
      piercing: 4
      protection_explosions: 4
      damage_undead: 5
      multishot: 1
      swift_sneak: 3
      fire_aspect: 2
      channeling: 1
      sweeping_edge: 3
      thorns: 3
      damage_arthropods: 5
      oxygen: 3
      riptide: 3
      silk_touch: 1
      quick_charge: 3
      protection_projectile: 4
      impaling: 5
      protection_fall: 4
      arrow_damage: 5
      arrow_infinite: 1
  # 设置为 true, 玩家需要权限 cmi.enchantments.[附魔名] 才能附魔的上
  RequireSpecificPermission: false
  # 启用此项，将只允许“合法的”附魔被运用在物品是
  # 有此权限的玩家无视此限制 cmi.command.enchant.bypassinvalid 
  EnforceValidEnchants: true
  # 设置为 true, 玩家需要权限 cmi.enchantments.[附魔名].[最大等级] 才能附魔的到最大等级附魔
  # 如果玩家有多个等级相关权限，等级大的权限将会生效
  # 若玩家有权限获得某种附魔，但没有指定等级，默认玩家可以附魔到 等级1
  PermissionLevelLimit: false
Scavenge:
  ItemBreak:
    # 回收附魔书时物品崩坏的几率
    # 可设置范围 0 - 100, 设置为 100 代表每次从工具中取回附魔书，物品必定崩坏
    # 请注意，如果物品没有附魔，强制取出附魔书将 100% 导致物品崩坏
    # 该设置允许玩家从物品中提取附魔
    # 若一个物品“崩坏”，将进入合成物返还流程
    Base: 8.0
    # 若物品含有很多附魔，按照附魔数量增加物品崩坏概率
    # 例如，基础概率 8% 附加概率 2 ，物品拥有3个附魔，那么崩坏概率是 8+(2*3)=14% 
    ForEachEnchant: 2.0
    # 按照附魔等级增加物品崩坏概率
    # 此概率与最大附魔等级和当前附魔等级有关
    # 例如，这里设置为 7.5, 那么如果附魔了一本最高等级的附魔书（比如抢夺3）失败时有 7.5% 几率导致物品崩坏
    # 但如果附魔的是 锋利2 （锋利附魔最大等级是锋利5）, 那么有 33% 几率失败后物品崩坏
    ForEachEnchantLevel: 2.0
    # 最高物品崩坏封顶几率
    # 任何失败几率不可能超过这一数值，以免造成100%物品崩坏的情况发生
    MaxBreakChance: 100.0
    # 若物品不是满耐久，则增加物品崩坏概率
    # 比如设置为 50 代表只剩下 1 耐久的物品，失败几率骤增 50%
    # 若为满耐久物品，则不会增加概率
    BreakDurabilityCheck: 50.0
    # 设置为 true, 返还合成材料时物品的耐久会纳入考虑
    # 例如，要返还合成材料的工具最大耐久是100，当前是 50, 那么只能取出一半合成材料
    # 这并不代表玩家一定能获得50%的合成材料，只是有50%合成材料进入了下一层计算路径（说人话：也就是还有继续扣的可能性）
    DurabilityCheck: true
    IngredientReturn:
      # 若提取附魔失败，返还合成材料的最大几率
      # 每个参与合成此物品的组成物都会被列入计算
      # 只有已存在数据库里的合成表才会被纳入计算
      Base: 25.0
  EnchantExtractionFail:
    # 提取附魔书的基础失败几率
    # 若附魔失败，玩家将有一定几率无法收回附魔书
    Base: 10.0
    # 根据附魔书等级来增加失败几率
    # 这个设置项与附魔的当前等级与此附魔的最大等级有关
    # 例如，这里设置为 75, 那么如果附魔了一本最高等级的附魔书（比如抢夺3）失败时有 75% 几率无法取回附魔书
    # 但如果附魔的是 锋利2 （锋利附魔最大等级是锋利5）, 那么有 30% 几率失败后无法取回附魔书
    # 类似 无限 这种最大附魔等级是1的附魔，直接按照最高失败几率来算
    ForEachLevel: 10.0
    # 最高失败封顶几率
    # 任何失败几率不可能超过这一数值，以免造成100%失败的情况发生
    MaxFailChance: 75.0
    LevelLower:
      # 如果附魔失败，有多大几率收回的附魔书降级
      # 如果是附魔等级为1的附魔书，则附魔失败后附魔书直接消失
      # 如果你不想让附魔失败后附魔书降级，设置此处为 100
      # 如果你想让附魔失败后附魔书100%降级，请设置 EnchantExtractionFail.Base 为 100，并设置此设置项也为 100
      Base: 50.0
      # 附魔书每升一级，附魔失败后降级几率增加百分之多少
      # 这说明更高等级的附魔书有更大几率失败后降级
      ForEachLevel: 5.0
      # 最高失败后降级封顶几率
      # 任何降级几率不可能超过这一数值
      MaxChance: 75.0
  Cost:
    # 取回附魔书需要花费金钱的几率，设置为 0 则完全免费
    Base: 100.0
    # 需要额外花费的金钱附加，和每个附魔的价格有关，可用此指令设置 /cmi setenchantworth 
    # 这个值用百分比表示，和附魔的价格和物品相关
    # 比如你设置了基础花费 100, 额外附加 5% 且你想要取回的是 锋利5 （价格1000） 而且手中物品的出售价格（worth）为 100, 那么你总共需要支付 155 来取出附魔：100+(1000*5%)+(100*5%) = 155
    Extra: 5.0
  # 不可进行组合物取出的物品材质
  BlackList:
  - diamond
  - ironingot
  - goldingot
  - coal
  - IRON_NUGGET
  - GOLD_NUGGET
  # 设置为 true, 以上黑名单反转为白名单，只有以上组合物材质可取出
  BlackToWhiteList: false
  # 设置为 false 当玩家打开取出菜单，他们将无法从地面上捡起物品
  AllowItemPickups: false
  # 当某些设置物品（比如剑）被回收附魔书之后，是否重置其修理消耗，这样玩家可以将其像新武器一样重新附魔，而不会显示无法附魔
  ResetRepairCost: true
BungeeCord:
  # BC模式，如果你遇到问题可将此处关闭
  # 若设置为 false 一些和跨服有关的机制（比如跨服传送门，跨服聊天等）将不可使用
  # 和BC无关的普通机制可以正常工作
  Enabled: true
  # 设置为 true ，来自BC全部子服玩家的ID都会被添加到TAB补全列表里
  NamesInTabComplete: false
  # 启用此项，当玩家使用 /back 指令时，将被传送回他来的那个子服务器，而不是在本服务器传送到上一个位置
  # 只有当玩家来到子服务器后没有进行任何新传送时，该设置项才会生效
  BackToPreviousServer: false
Recipes:
  Condense:
    # 启用此项，当尝试把物品组合为方块/或者方块分解为物品时，将检查合成配方表，如果玩家尝试的配方是“不可逆”的，将阻止玩家
    # 禁用此项，将无视这一检查
    # 建议启用此项，一旦禁用可能会出现一些不可预料的配方，比如工作台可以分解为4个木板
    RequireBackwards: true
    # 是否允许4个一样的物品进行合成，而无视上面那个设置项
    # 若开启此项而关闭上面那项RequireBackwards，那么4个木板合成工作台是允许的（即便反过来不行）
    4Sized: true
# 声音设置，若你想要完全禁用某种声音，只需设置为空""即可
Sounds:
  Enabled: true
  # 打开地标菜单
  WarpGuiOpen: entity_bat_takeoff:0.5:1
  # 传送至家
  TeleportHome: block_beacon_activate:2:1
  # 传送至地标
  TeleportWarp: entity_enderman_teleport:0.5:1
  # 传送失败
  TeleportFail: entity_villager_no:2:1
  # 私聊消息
  PrivateMessage: entity_endermite_death:2:1
  # 传送TPA请求
  TpaRequest: block_anvil_land:0.5:2
  # 新邮件
  MailNotification: entity_creeper_hurt:1:0.5
  # 电梯向上
  TeleportUp: entity_enderman_teleport:2:1
  # 电梯向下
  TeleportDown: entity_enderman_teleport:0.2:1
PotionEffects:
  # 设置为 true 哪怕玩家离线，玩家的药水效果依然会继续计时直至超时消失
  # 请注意玩家的药水效果只有玩家再登录时才会更新，所以当玩家处于离线状态时查询他的药水效果可能会返回错误的结果
  DeductWhileOffline: false

```