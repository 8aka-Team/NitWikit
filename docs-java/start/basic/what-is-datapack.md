---
sidebar_position: 6
---

# 什么是数据包？

数据包是从Minecraft逻辑结构层面修改我的世界，他可以添加或覆盖游戏中几乎一切的元素。一定程度下可以代替Mod，但它并不会改变原版的内容。

其功能可用于覆盖或添加新的函数、进度、战利品表、物品修饰器、配方、结构、标签、维度、世界生成等

# 数据包的存放位置

数据包是存放于我的世界存档目录下 `world/datapacks` 它既可以是文件夹亦可以是压缩包。当你加入时数据包将为该世界启用。


# 数据包注意事项

数据包是存在加载顺序的，在数据包各个功能同一个分类下不同的加载顺序会导致不同的结果也就是不同的覆盖产生。这个顺序存储在 `world/level.dat` 。您可以通过单人创建存档时调整数据包的位置决定数据包的加载顺序

您可以通过 `/datapack` 查看已经加载或未加载的数据包

# 相关资源下载

**常见数据包的下载**：

:::

| 名称                                                      | 介绍                                    |
|-----------------------------------------------------------|-----------------------------------------|
| [PlanetMinecraft](https://www.planetminecraft.com/data-packs/) | 比较老牌的我的世界资源网站了，东西比较全   |
| [Modrinth](https://modrinth.com/datapacks)          | 新兴的我的世界资源平台，东西比较全 |
| [PlanetMinecraft](https://www.9minecraft.net/category/minecraft-data-packs/) | 比较老牌的我的世界资源网站了，界面不太符合中国习惯，不太推荐|

**数据包工具及扩展资源**：

:::

| 名称                                                      | 介绍                                    |
|-----------------------------------------------------------|-----------------------------------------|
| [Datapack Upgrader](https://misode.github.io/upgrader/) | 自动升级数据包版本，未测试    |
| [Datapack Map](https://map.jacobsjo.eu/)          | 查看世界生成数据包对应种子的地图 |
| [Datapack Maker](https://misode.github.io/) | 数据包生成器，适用于大部分环境 |
| [vanilla tweaks](https://vanillatweaks.net/picker/datapacks/) | 常用数据包的结合体，可以集成下载 |
| [MCCreator](https://mcreator.net/about) | 生成/制作初级数据包的不二之选，推荐 |


# 数据包结构

```c
数据包名
├─pack.mcmeta // 用于识别数据包及存储数据包信息。
├─pack.png // 数据包的图片（可选）。
├─data
│  ├─advancements
│  │  └─特定进度名.json
│  │     ├─display // 进度的显示信息
│  │     │  ├─title // 进度标题
│  │     │  ├─description // 进度描述
│  │     │  ├─icon // 进度图标
│  │     ├─criteria // 进度达成条件
│  │     │  └─特定条件名.json
│  │     │     ├─trigger // 触发条件类型
│  │     │     └─conditions // 具体的条件参数
│  ├─loot_tables
│  │  └─特定物品或实体的战利品表.json
│  │     ├─pools // 战利品池列表
│  │     │  └─特定战利品池.json
│  │     │     ├─rolls // 战利品生成次数
│  │     │     ├─entries // 战利品条目
│  │     │     │  └─特定条目.json
│  │     │     │     ├─type // 条目类型，如 item、loot_table 等
│  │     │     │     ├─name // 物品或战利品表名称
│  │     │     │     └─functions // 可选的函数列表，用于修改战利品
│  │     │     │        └─特定函数.json
│  │     │     │           ├─function // 函数类型，如 set_nbt、enchant_with_levels 等
│  │     │     │           └─arguments // 函数参数
│  ├─recipes
│  │  └─特定合成配方.json
│  │     ├─type // 合成配方类型，如 crafting_shaped、crafting_shapeless 等
│  │     ├─group // 合成组名（可选）
│  │     ├─ingredients // 合成所需的材料列表
│  │     │  └─特定材料.json
│  │     │     ├─item // 物品名称
│  │     │     └─count // 物品数量（可选）
│  │     └─result // 合成结果
│  │        ├─item // 合成后的物品名称
│  │        └─count // 合成后的物品数量（可选）
│  ├─tags
│  │  ├─blocks
│  │  │  └─特定方块标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 方块名称列表
│  │  ├─fluids
│  │  │  └─特定流体标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 流体名称列表
│  │  ├─items
│  │  │  └─特定物品标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 物品名称列表
│  │  ├─entity_types
│  │  │  └─特定实体类型标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 实体类型名称列表
│  │  ├─functions
│  │  │  └─特定函数标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 函数名称列表
│  │  ├─predicates
│  │  │  └─特定谓词标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 谓词名称列表
│  │  ├─damage_types
│  │  │  └─特定伤害类型标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 伤害类型名称列表
│  │  ├─enchantments
│  │  │  └─特定附魔标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 附魔名称列表
│  │  ├─game_events
│  │  │  └─特定游戏事件标签.json
│  │  │     ├─replace // 是否替换已有标签（可选）
│  │  │     └─values // 游戏事件名称列表
│  │  └─其他可能的标签类型
│  │     └─特定标签.json
│  │        ├─replace // 是否替换已有标签（可选）
│  │        └─values // 对应名称列表
│  ├─functions
│  │  └─特定函数文件.mcfunction
│  │     ├─各种命令语句 // 可以是游戏中的各种命令，用于实现特定的逻辑
│  ├─predicates
│  │  └─特定谓词.json
│  │     ├─condition // 谓词条件
│  │     │  ├─特定条件类型.json
│  │     │  │  └─参数 // 根据条件类型而定
│  │     └─result // 谓词结果，通常是布尔值
│  ├─dimension_types
│  │  └─特定维度类型.json
│  │     ├─effects // 维度效果列表
│  │     │  └─特定效果.json
│  │     │     ├─特定效果类型 // 如 fog_color、ambient_light 等
│  │     │     └─值 // 根据效果类型而定
│  │     └─parameters // 维度类型参数
│  │        └─特定参数.json
│  │           ├─名称 // 参数名称
│  │           └─值 // 参数值
│  ├─worldgen
│  │  ├─biome
│  │  │  └─特定生物群系.json
│  │  │     ├─features // 生物群系特征列表
│  │  │     │  └─特定特征.json
│  │  │     │     ├─特定特征类型 // 如 lake、flower 等
│  │  │     │     └─参数 // 根据特征类型而定
│  │  │     ├─properties // 生物群系属性
│  │  │     │  └─特定属性.json
│  │  │     │     ├─名称 // 属性名称
│  │  │     │     └─值 // 属性值
│  │  ├─configured_carver
│  │  │  └─特定雕刻器.json
│  │  │     ├─type // 雕刻器类型
│  │  │     ├─biomes // 适用的生物群系列表
│  │  │     └─parameters // 雕刻器参数
│  │  │        └─特定参数.json
│  │  │           ├─名称 // 参数名称
│  │  │           └─值 // 参数值
│  │  ├─configured_feature
│  │  │  └─特定配置特征.json
│  │  │     ├─type // 特征类型
│  │  │     ├─placement // 放置规则
│  │  │     │  └─特定放置规则.json
│  │  │     │     ├─规则类型 // 如 height_range、on_ground 等
│  │  │     │     └─参数 // 根据规则类型而定
│  │  │     └─parameters // 特征参数
│  │  │        └─特定参数.json
│  │  │           ├─名称 // 参数名称
│  │  │           └─值 // 参数值
│  │  ├─configured_structure_feature
│  │  │  └─特定配置结构特征.json
│  │  │     ├─type // 结构特征类型
│  │  │     ├─placement // 放置规则
│  │  │     │  └─特定放置规则.json
│  │  │     │     ├─规则类型 // 如 surface_rule、biome_filter 等
│  │  │     │     └─参数 // 根据规则类型而定
│  │  │     └─parameters // 结构特征参数
│  │  │        └─特定参数.json
│  │  │           ├─名称 // 参数名称
│  │  │           └─值 // 参数值
│  │  ├─noise
│  │  │  └─特定噪声设置.json
│  │  │     ├─noise_type // 噪声类型
│  │  │     ├─parameters // 噪声参数
│  │  │     │  └─特定参数.json
│  │  │     │     ├─名称 // 参数名称
│  │  │     │     └─值 // 参数值
│  │  └─processor_list
│  │     └─特定处理器列表.json
│  │        ├─processors // 处理器列表
│  │        │  └─特定处理器.json
│  │        │     ├─type // 处理器类型
│  │        │     └─parameters // 处理器参数
│  │        │        └─特定参数.json
│  │        │           ├─名称 // 参数名称
│  │        │           └─值 // 参数值
│  └─其他可能的子文件夹，具体取决于数据包的功能需求。

```

# 数据包的编写

太多了，详情请参阅 [Minecraft Wiki](https://minecraft.fandom.com/wiki/Data_pack)