---
title: Visual C++ 运行库
sidebar_position: 3
---

# Visual C++ 运行库

我的世界基岩版由于使用微软开发的 Visual C++ 编写，需要依赖 Visual C++ 运行库（vc运行库）才能正常运行。在玩家的电脑上，由于 Windows 系统会自动为游戏补全这些运行库，所以玩家下载好基岩版之后就可以直接开始游戏。

但是在基岩版的服务器软件BDS这边情况就有所不同了。BDS 只是一个可执行文件，它并不具备自己补全 vc 运行库的功能，需要手动进行安装，否则就会报错“缺少vmruntimexxx.dll”。你需要为服务器安装至少 [Visual C++ Redistributable for Visual Studio 2015-2022](https://aka.ms/vs/17/release/vc_redist.x64.exe) 这个运行库才行。

有时一些辅助软件也会依赖这个运行库，例如LeviLamina在缺少运行库时会报错“Error code: 1114 动态裢接库（DLL）初始化例程失败。”，安装这个运行库也可以解决问题。

你也可以使用[常用VC运行库合集](https://cloud.wujiyan.cc/f/D0DIW/MSVBCRT.AIO.2024.08.16.exe)来快速安装