---
title: 快速开始
order: 0
---

# 准备工作

在学习使用kpc之前，假设你已经掌握了以下知识：

1. webpack + babel
2. vue（如果将kpc用于vue项目）或者intact（如果将kpc用于intact项目）

# 使用脚手架

使用Yeoman以及generator-kscpm，可以快速初始化kpc项目

1. 安装yo和generator-kscpm

```shell
npm install -g yo generator-kscpm
```

2. 初始化kpc项目

kscpm提供了很多工程模板，用于初始化项目，页面以及组件等

```shell
yo kscpm # 列出所有可选工程模板
yo kscpm:intact # 使用kpc初始化intact项目
yo kscpm:vue # 使用kpc初始化vue项目

...
```

3. 启动项目

```shell
npm run dev
```

# 手动引入

## 单文件构建版

如果你的项目没有使用webpack来构建，可以引入单文件构建版。将`kpc.css`和`kpc.js`在html文件中引入。
此时所有组件都在`Kpc`命名空间下，例如`KPC.Button` `KPC.Table`等。

另外你也可以调用`Kpc.install`方法将组件放到全局空间下，此时为了避免命名冲突，
所有组件名前加上`K`作为前缀，例如`KButton` `KTable`等

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>kpc-demo</title>
    <link rel="stylesheet" type="text/css" href="node_modules/kpc/dist/kpc.css" />
</head>
<body>
    <div id="app"></div>

    <script type="text/javascript" src="node_modules/intact/dist/intact.js"></script>
    <script type="text/javascript" src="node_modules/kpc/dist/kpc.js"></script>
    <script type="text/javascript">
        Kpc.install();
        var Page = Intact.extend({
            template: '<KButton ev-click={self.hello}>Hello World</KButton>',
            hello: function() {
                KMessage.success('Welcome to kpc world!');
            }
        });
        Intact.mount(Page, document.getElementById('app'));
    </script>
</body>
</html>
```

> kpc样式需要加载字体文件，默认字体文件放在目录`./fonts`下，你可能需要根据实际情况修改该路径

## 多文件构建版

当项目使用webpack构建时，可以使用kpc的多文件构建版，此时可以做到按需加载，而非单文件全量引入。
多文件构建版样式css和字体，需要通过`css-loader & style-loader`和`file-loader`来引入

1. 安装依赖

```shell
npm install intact kpc --save

# 内网git
npm install intact 'git+http://newgit.op.ksyun.com/ksyun-fe/kpc.git#v4.0' --save

npm install css-loader style-loader file-loader --save-dev
```

2. 配置`webpack.config.js`

为了统一组件加载路径，我们可以加入`alias`设置。例如：`kpc/components/button`会指向
`kpc/@css/components/button`

```js
const path = require('path');

module.exports = {
    ...
    resolve: {
        alias: {
            // 让kpc组件指向多文件构建版本，可以统一组件加载路径
            'kpc/components': path.resolve(__dirname, './node_modules/kpc/@css/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ]
            },
            // 引入字体文件
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './fonts/',
                        }
                    }
                ]
            },
        ]
    }
}
```

3. 按需引入组件

在需要使用组件的地方，引入组件

```js
import {Button, ButtonGroup} from 'kpc/components/button';

<ButtonGroup>
    <Button>button1</Button>
    <Button>button2</Button>
</ButtonGroup>
```

## 多文件半构建版

所谓半构建版与构建版的区别是，样式使用的`stylus`而非编译后的css。当我们需要修改或者引入新主题时，
通过该版本，可以很方便地实现。详见[定制主题]()

由于使用`stylus`，所以与构建版在使用上唯一的区别是需要引入`stylus-loader`

1. 新增依赖

为了提供css兼容性，这里加入`autoprefixer`

```shell
npm install postcss-loader autoprefixer stylus-loader --save-dev
```

2. 修改`webpack.config.js`

将css加载配置修改为（通过`stylus-loader`的`import`配置，我们可以引入主题文件）：

```js
const path = require('path');

module.export = {
    ...
    resolve: {
        alias: {
            'kpc/components': path.resolve(__dirname, './node_modules/kpc/@stylus/components')
        }
    },
    module: {
        rules: [
            ...
            // 编译stylus
            {
                test: /\.(styl|css)$/,
                use: [
                    {
                        loader: 'css-loader', 
                        options: {
                            url: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: [
                                        'last 2 versions',
                                        'ie >= 9',
                                    ],
                                })
                            ],
                        }
                    },
                    {
                        loader: 'stylus-loader', 
                        options: {
                            'include css': true,
                            sourceMap: false,
                            // 使用import引入主题文件，详见定制主题
                            // 'import': path.resolve(__dirname, 'styles/themes/ksyun/index.styl'),
                        }
                    }
                ]
            }
        ]
    }
}
```
