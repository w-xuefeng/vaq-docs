# Build and package

## Build

Same as regular 'Vue' items，just execute

``` bash
npm run build
```

the code will be generated in the `dist` directory，However, this directory structure is not required by the ultimate apicloud platform. To generate [the standard widget directory structure](https://docs.apicloud.com/Dev-Guide/widget-package-structure-manual) needed by apicloud platform，run the following command

``` bash
npm run generate
```
The `widget` directory can be generated and the `widget.zip` file can be compressed.

## package

Before packaging, you need to upload the code to the apicloud platform, or use Git/SVN tool to upload the code.
If you use Git/SVN tool to upload code, you only need to upload the `widget` directory. If you use apicloud platform console to upload code, you can upload the `widget.zip` file.

Then compile and package it into `Android` or `iOS` application installation package file under the `cloud compilation （云编译）` menu on the console of apicloud platform.