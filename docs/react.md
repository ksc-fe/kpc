---
title: React中使用
order: 1.2
sidebar: doc
---

# 准备工作

在学习使用kpc之前，假设你已经掌握了以下知识：

1. [webpack][2] + [babel][3]
2. [React][4]

# 安装

```shell
npm install kpc-react -S
```

# CDN

通过[cdn.jsdelivr.net/npm/kpc/dist/](https://cdn.jsdelivr.net/npm/kpc/dist/)可以直接引入最新版kpc，建议使用锁定版本地址，
例如：[cdn.jsdelivr.net/npm/kpc@0.5.14/dist/](https://cdn.jsdelivr.net/npm/kpc@1.0.0/dist/)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>kpc-demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/kpc/dist/kpc.css" />
    <!-- 将上述kpc.css替换成ksyun.css，可以使用ksyun主题 -->
    <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/kpc/dist/ksyun.css" /> -->
</head>
<body>
    <div id="app"></div>

    <script src="//cdn.jsdelivr.net/npm/react/umd/react.development.js"></script>
    <script src="//cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js"></script>
    <script src="//cdn.jsdelivr.net/npm/babel-standalone/babel.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/kpc/dist/kpc.react.js"></script>

    <script type="text/babel">
        const {Button, Message} = Kpc;

        class Demo extends React.Component {
            hello() {
                Message.success('Welcome to the world of Kpc and React!');
            }

            render() {
                return <Button onClick={this.hello.bind(this)}>test</Button>
            }
        }

        ReactDOM.render(<Demo />, document.getElementById('app'));
    </script>
</body>
</html>
```

# Create React App

> 示例版本为`create-react-app@2.1.3`，不同版本可能存在些许差异

## 安装和初始化

```shell
npx create-react-app hello-world
cd hello-world
npm install kpc-react -S
```

## 修改主题

如果你需要修改主题，修改主题之前，我们需要弹出项目的配置文件

```shell
npm run eject
```

并且需要安装`stylus`和`stylus-loader`

```shell
npm install stylus stylus-loader -D
```

然后修改配置文件`config/webpack.config.js`，让kpc指向`kpc-react/@stylus`目录，并且加入`stylus-loader`

```diff
--- a/config/webpack.config.js
+++ b/config/webpack.config.js
@@ -102,13 +102,15 @@ module.exports = function(webpackEnv) {
         },
       },
     ].filter(Boolean);
-    if (preProcessor) {
+    if (typeof preProcessor === 'string') {
       loaders.push({
         loader: require.resolve(preProcessor),
         options: {
           sourceMap: isEnvProduction && shouldUseSourceMap,
         },
       });
+    } else if (typeof preProcessor === 'object') {
+      loaders.push(preProcessor);
     }
     return loaders;
   };
@@ -265,7 +267,7 @@ module.exports = function(webpackEnv) {
         // Support React Native Web
         // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
         'react-native': 'react-native-web',
+        'kpc-react': 'kpc-react/@stylus',
       },
       plugins: [
@@ -448,6 +450,22 @@ module.exports = function(webpackEnv) {
                 'sass-loader'
               ),
             },
+            {
+              test: /\.styl$/,
+              use: getStyleLoaders(
+                {
+                  importLoaders: 2,
+                },
+                {
+                  loader: 'stylus-loader',
+                  options: {
+                    'include css': true,
+                    'resolve url': true,
+                    'import': '~kpc-react/@stylus/styles/themes/ksyun/index.styl',
+                  },
+                }
+              ),
+            },
             // "file" loader makes sure those assets get served by WebpackDevServer.
             // When you `import` an asset, you get its (virtual) filename.
             // In production, they would get copied to the `build` folder.
```

> 如果主题没有生效，请检查`resolve.alias['kpc-react']`是否指向了`kpc-react/@stylus`

## 不 Eject 进行主题修改

> 在开发中，有时候你并不想将全部配置文件暴露出来，此时可以使用[craco](https://github.com/gsoft-inc/craco)来覆盖配置。

首先安装stylus和stylus-loader

```bash
npm install stylus stylus-loader -D
```

安装[craco](https://github.com/gsoft-inc/craco)

```bash
npm install @craco/craco -D
```

更新`package.json`文件来使用 craco CLI

```diff
/* package.json */

"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

在项目根目录下创建`craco.config.js`文件

```
my-app
├── node_modules
├── craco.config.js
└── package.json
```

编辑`craco.config.js`文件，新增以下内容：

```javascript
module.exports = {
  webpack: {
    alias: {
      'kpc-react': 'kpc-react/@stylus',
    },
    configure: (webpackConfig, { env, paths }) => {
      const stylusLoader = {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              'include css': true,
              'resolve url': true,
              import: [
                '~kpc-react/@stylus/styles/themes/ksyun/index.styl',
              ],
            },
          },
        ],
      };
      let oneOf = webpackConfig.module.rules.find((rule) => rule.oneOf)
        .oneOf;
      oneOf.splice(oneOf.length - 1, 0, stylusLoader);
      return webpackConfig;
    },
  },
};
```

**注意：** 此时的配置将样式通过style的模式引入，在部署时，可能需要抽取为css文件，可以通过以下步骤来实现。

安装`mini-css-extract-plugin`

```bash
npm install mini-css-extract-plugin -D
```

```diff
/* craco.config.js */

+ const MiniCssExtractPlugin = require('mini-css-extract-plugin');

configure: (webpackConfig, { env, paths }) => {
+      const isEnvProduction = env === 'production';
       const stylusLoader = {
         test: /\.styl$/,
         use: [
-          'style-loader',
           {
             loader: 'css-loader',
            ...

+ if (isEnvProduction) {
+         stylusLoader.use.unshift({
+           loader: MiniCssExtractPlugin.loader,
+           options: paths.publicUrlOrPath.startsWith('.')
+             ? { publicPath: '../../' }
+             : {},
+         });
+       } else {
+         stylusLoader.use.unshift('style-loader');
+       }
      let oneOf = webpackConfig.module.rules.find((rule) => rule.oneOf)
        .oneOf;
```


# 使用

```js
import React from 'react';
import {Button, Message} from 'kpc-react';

class App extends React.Component {
    hello() {
        Message.success('Welcome to kpc world!');
    }
    render() {
        return <Button onClick={this.hello}>Hello World</Button>
    }
}
```

# 语法说明

文档中语法从`Vdt`到`React的转换规则如下：

| 类别 | intact写法 | react写法 | 说明 |
| --- | --- | --- | --- |
| 事件 | `ev-click` | `onClick` | 保留React事件命名风格，`on` + 事件名首字母大写 |
| 默认事件 | `ev-$change:value` | `on$change-value` | React属性名不支持冒号(:)，改为连字符(-)即可 |
| 事件回调传参 | `ev-click={{ self.onClick.bind(self, data) }}` | `onClick={this.onClick.bind(this, data)}` | - |
| 属性 | `name={{ self.get('name') }}` | `name={this.state.name}` | - |
| block | `<Dialog><b:header><div>header</div></b:header></Dialog>` | `<Dialog b-header={<div>header</div>} />` | `b:header`block对应React的属性`b-header` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | 不支持引用父组件定义的内容 | - |
| 带参数的block | `<Transfer><b:label params="data"><div>{{ data.name }}</div></b:label></Transfer>` | `<Transfer b-label={(data) => <div>{data.name}</div>} />` | `b-lablel`属性值为函数 |
| 双向绑定任意属性 `@since intact-vue@0.3.7` | `v-model:name="name"` | `on$change-name={(c, v) => this.setState({name: v})} name={this.state.name}` | React不支持`v-model`语法糖，改为属性和事件的方式即可 |

另外当需要将vNode作为属性传给kpc组件时，需要使用`Intact.normalize()`方法处理vNode

> 如果是作为子元素`children`，则没有必要`normalize`，因为组件默认会normalize子元素

```js
import React from 'react';
import Intact from 'intact';
import {Badge} from 'kpc-react';

class App extends React.Component {
    render() {
        return (
            // 作为属性，需要normalize
            <Badge text={Intact.normalize(<i>test</i>)}>
                <div>test</div>
            </Badge>
        )
    }
}
```

> `Table`组件的`scheme`属性中`template`字段返回的vNode无需`normalize`，因为组件内部做了兼容，
> 不过多次调用`normalize`也没有问题。

[1]: https://github.com/ksc-fe/intact-react
[2]: https://webpack.js.org/
[3]: https://babeljs.io/
[4]: https://reactjs.org/
