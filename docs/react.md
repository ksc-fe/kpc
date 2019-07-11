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

```js
npm install kpc -S
```

# Create React App

> 示例版本为`create-react-app@2.1.3`，不同版本可能存在些许差异

## 安装和初始化

```shell
npx create-react-app hello-world
cd hello-world
npm install kpc -S
```

## 修改配置

修改配置之前，我们需要弹出项目的配置文件

```shell
npm run eject
```

然后修改配置文件`config/webpack.config.js`

```diff
--- a/config/webpack.config.js
+++ b/config/webpack.config.js
@@ -265,6 +265,8 @@ module.exports = function(webpackEnv) {
         // Support React Native Web
         // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
         'react-native': 'react-native-web',
+        // @since 1.0 推荐直接指向react编译包
+        'kpc': 'kpc/@react/@css',
+        // @before 1.0
+        // 'kpc': 'kpc/@css',
+        // 'intact$': 'intact-react',
       },
       plugins: [
         // Adds support for installing with Plug'n'Play, leading to faster installs and adding
```

## 修改主题

如果要修改主题，需要安装`stylus`和`stylus-loader`

```shell
npm install stylus stylus-loader -D
```

然后修改配置文件`config/webpack.config.js`，让kpc指向`kpc/@stylus`目录，并且加入`stylus-loader`

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
         // @since 1.0 推荐直接指向react编译包
-        'kpc': 'kpc/@react/@css',
+        'kpc': 'kpc/@react/@stylus',
         // @before 1.0
-        // 'kpc': 'kpc/@css',
+        // 'kpc': 'kpc/@stylus',
         // 'intact$': 'intact-react',

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
+                    'import': '~kpc/styles/themes/ksyun/index.styl',
+                  },
+                }
+              ),
+            },
             // "file" loader makes sure those assets get served by WebpackDevServer.
             // When you `import` an asset, you get its (virtual) filename.
             // In production, they would get copied to the `build` folder.
```

> 如果主题没有生效，请检查`resolve.alias.kpc`是否指向了`kpc/@stylus`

# 使用

```js
import React from 'react';
import {Button} from 'kpc/components/button';
import {Message} from 'kpc/components/message';

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

文档中针对intact的例子，我们只需要做以下写法上的转换即可

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

> 如果是作为子元素`children`，则没有必要`normalize`，因为兼容层默认会normalize子元素

```js
import React from 'react';
import Intact from 'intact';
import Badge from 'kpc/components/badge';

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
