# 构建与打包

## 编译构建

与常规 `vue` 项目一样，只需要执行

``` bash
npm run build
```

即可完成编译与构建，代码最终会生成在 `dist` 目录中，但是这种目录结构还不是最终 APICloud 平台所需要的，要想生成 APICloud 平台所需要的[规范 widget 目录结构](https://docs.apicloud.com/Dev-Guide/widget-package-structure-manual)，运行以下命令

``` bash
npm run generate
```
即可生成 `widget` 目录，并且压缩生成 `widget.zip` 文件。

## 编译打包

在打包之前，需要将代码上传到 APICloud 平台，或者使用 Git/SVN 工具上传代码。
如果使用 Git/SVN 工具上传代码，则只需要上传 `widget` 目录即可，如果使用 APICloud 平台的控制台上传代码，上传 `widget.zip` 文件即可。

然后在 APICloud 平台的控制台`云编译`菜单下编译打包为 `Android` 或 `iOS` 应用安装包文件。