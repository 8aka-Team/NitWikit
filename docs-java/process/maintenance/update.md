---
title: 更新服务端区块版本
sidebar_position: 5
---

# 更新服务端区块版本

在某些时候我们需要更改服务端版本(比如 1.20 -> 1.21)，然后就会

```
[Configurations] Loading a newer configuration than is supported (31 > 30)! You may have to backup & delete the world config file to start the server.
```

当然，可爱的 Paper 为我们准备了区块版本升级/降级工具

:::tip

该工具不是万能的，你要是1.8直冲1.21，你不炸谁炸

:::

你只需要在启动参数最后加上`--forceUpgrade`就行了，像这样

```shell
java -Xms2G -Xmx2G -jar server.jar --nogui
```

改成这样

```shell
java -Xms2G -Xmx2G -jar server.jar --nogui --forceUpgrade
```

然后启动服务端，等待转换完成，**不要进入服务器或操作服务器**，这是非常危险的，可能会**直接废档**

转换完后，删掉`--forceUpgrade`在启动就可以了
