---
title: 快速开始
order: 0
---

# 准备工作

在学习使用kpc之前，假设你已经掌握了一下知识：

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

## 引入单文件构建版

如果你的项目没有使用webpack来构建，可以引入单文件构建版。将`kpc.css`和`kpc.js`在html文件中引入。
此时所有组件都在`KPC`命名空间下，例如`KPC.Button` `KPC.Table`等

```html
```

## 使用源码编译

使用源码的好处是，我们可以非常方便地定制主题，因为可以在编译时改变主题文件定义的变量。
详见[主题定制]()

1. 安装

kpc运行时依赖intact@^2.2.0，但使用源码引入时，需要安装编译依赖

```bash
npm install intact kpc --save

# 内网git
npm install intact 'git+http://newgit.op.ksyun.com/ksyun-fe/kpc.git#v4.0' --save
```

安装编译依赖，其中`babel-preset-stage-0`可以支持最新js语法，
`babel-plugin-transform-decorators-legacy`支持装饰器语法，源码模板使用`vdt`，css使用`stylus`
编写，所以需要`vdt-loader`和`stylus-loader`，`autoprefixer`来提高css浏览器兼容性


```bash
npm install webpack babel-core babel-loader \
    babel-plugin-transform-decorators-legacy \
    babel-preset-env \
    babel-preset-stage-0 \
    babel-plugin-transform-runtime \
    css-loader style-loader stylus stylus-loader \
    autoprefixer postcss-loader \
    vdt vdt-loader --save-dev
```

2. 配置`.babelrc`

在`.babelrc`中加入如下内容

```json
{
    "presets": ["env", "stage-0"],
    "plugins": [
        "transform-runtime",
        "transform-decorators-legacy"
    ]
}
```

3. 配置webpack

`webpack.config.js`文件加入如下内容

```js
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                // 排除所有node_modules模块，除了kpc
                exclude: [/node_modules(?!([\/\\]kpc))/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        }
                    }
                ]
            },
            // 编译vdt
            {
                test: /\.vdt$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true, 
                        }
                    },
                    {
                        loader: 'vdt-loader',
                        options: {
                            delimiters: ['{{', '}}'],
                            skipWhitespace: true,
                        }
                    }
                ]
            },
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
    },
}
```

