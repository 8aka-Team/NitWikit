---
title: bat/shell 脚本
sidebar_position: 6
---

# bat/shell 脚本

此页面将介绍关于脚本本身常用的一些技巧。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## pause - 暂停

<Tabs queryString="pause">
  <TabItem value="windows" label="Windows">

    在脚本的最后加上 `pause`，让你可以看到 bat 的输出，避免黑窗口一闪而过的情况。

    ```batch
    java -jar paper.jar
    pause
    ```

  </TabItem>

  <TabItem value="linux" label="Linux">

    ```shell
    java -jar paper.jar
    ```

  </TabItem>

</Tabs>

## 通配符

使用通配符来匹配服务端核心，这样每次更新核心就不需要更改脚本内容或者重命名文件的名字了。

<Tabs queryString="pause">
  <TabItem value="windows" label="Windows">

    ```batch
    java -jar *.jar
    java -jar paper-*.jar
    java -jar leaf-*.jar
    ```

  </TabItem>

  <TabItem value="linux" label="Linux">

    TODO

  </TabItem>

</Tabs>

## @echo off - TODO

TODO

## 自动重启

当服务器崩溃或关闭时，使用脚本实现自动重启：

<Tabs queryString="auto-reload">
  <TabItem value="windows" label="Windows">

    ```batch
    @echo off
    :start
    java -Xmx4G -Xms1G -jar server.jar nogui
    echo 服务器已关闭，5秒后重启...
    timeout /t 5
    goto start
    ```

  </TabItem>

  <TabItem value="linux" label="Linux">

    ```bash
    #!/bin/bash
    while true; do
        java -Xmx4G -Xms1G -jar server.jar nogui
        echo "服务器已关闭，5秒后重启..."
        sleep 5
    done
    ```

  </TabItem>
</Tabs>

## set - 模块化内容

使用变量拆分脚本内容，不再堆在同一行，使得内容更清晰，也方便修改。

<Tabs queryString="set">
  <TabItem value="windows" label="Windows">

    ```batch title="示例脚本"
    @echo off
    set JAVA_OPTS=-Xmx4G -Xms1G -XX:+UseG1GC
    set SERVER_JAR=paper-*.jar
    set ADDITIONAL_ARGS=nogui

    java %JAVA_OPTS% -jar %SERVER_JAR% %ADDITIONAL_ARGS%
    ```

  </TabItem>

  <TabItem value="linux" label="Linux">

    TODO

  </TabItem>
</Tabs>
