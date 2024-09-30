---
sidebar_position: 2
---

# Vault

:::info

`SpigotMC` https://www.spigotmc.org/resources/vault.34315/

`Bukkit` https://dev.bukkit.org/projects/vault

`GitHub` https://github.com/LuckPerms/LuckPerms

`插件百科` https://github.com/milkbowl/Vault

:::

## 什么是Vault
```
Vault是一个Bukkit抽象库，为其他插件提供与权限、聊天和经济有关的接口，为插件们提供一套系统性的支持，对于以Vault作为前置的插件来说，它是各个插件之间的桥梁、合约。
```

人话：插件开发者要考虑的，你只管装上去就行了

### Vualt是不是经济插件
不是。

```
作为被依赖的前置，它可以为经济插件创建和管理虚拟经济系统，使其他插件能够提供Vault与各种经济插件交互，从而使它们能够共享相同的经济系统，其本身并不包含经济插件功能。
```

人话：Vault只是提供经济的插件的前置，本身并不提供经济功能，就是给众多经济系统提供了一个统一接口

想要经济可以看看 [这页](XConomy.md)