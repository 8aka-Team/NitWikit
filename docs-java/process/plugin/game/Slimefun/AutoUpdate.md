---
title: 自动更新
sidebar_position: 2
---

# 自动更新

<!--markdownlint-disable ol-prefix-->

1. 修改附属的配置

将**所有附属插件**的更新关闭

以 Bump 附属为例：

```yaml title="plugins/Bump/config.yml"
options:
  auto-update: false
```

将 auto-update 设置为 false

2. 安装 GuizhanLibPlugin 插件

地址：https://builds.guizhanss.com/ybw0014/GuizhanLibPlugin/master

3. 修改 GuizhanLibPlugin 的更新配置

将 auto-update 设置为 true

将 location 设置为 cn

(建议)将 lang 设置为 zh_CN

下方配置供你参考

```yaml title="plugins/GuizhanLibPlugin/config.yml"
# Whether to enable auto update module (see updater.yml for details)
# 是否开启自动更新模块(详见 updater.yml)
auto-update: true

# Universal Updater Settings
# 统一更新设置
updater:

  # The website used for auto update
  # 自动更新所使用的服务器
  # Available options: global， cn
  # 可用选项: global， cn
  # global - (Default) The website is deployed by Cloudflare Pages. https://builds.guizhanss.com/
  # global - (默认)使用 Cloudflare Pages 部署到全球范围的站点。 https://builds.guizhanss.com/
  # cn - The website is a mirror website deployed by Tencent Cloud in China mainland. https://builds.guizhanss.cn/
  # cn - 在中国大陆使用腾讯云搭建的镜像站点。 https://builds.guizhanss.cn/
  location: cn

  # en_US， zh_CN
  lang: zh_CN

# Whether to print debug messages in console.
# 是否在控制台输出调试信息。
debug: false
```

<!--markdownlint-enable ol-prefix-->
