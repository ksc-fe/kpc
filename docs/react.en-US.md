---
title: Use in React
order: 1.1
sidebar: doc-en
---

When we want to use kpc in React framework, we only need to import React compatibility layer [intact-react][1].

# Grammar conversion

For the example of Intact in the document, we only need to to the following conversion.

| Category | Intact | React | Description |
| --- | --- | --- | --- |
| event | `ev-click` | `onClick` | Remain the event naming style of React: `on` + first letter capitalized event name |
| default event | `ev-$change:value` | `on$change-value` | React doesn't support colon (:) in property name, so change colon to hyphen (-) |
| event callback with parameters | `ev-click={{ self.onClick.bind(self, data) }}` | `onClick={this.onClick.bind(this, data)}` | - |
| property | `name={{ self.get('name') }}` | `name={this.state.name}` | - |
| block | `<Dialog><b:header><div>header</div></b:header></Dialog>` | `<Dialog b-header={<div>header</div>} />` | `b:header` corresponds to the property of React `b-header` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | not supported in React | - |
| block with parameters | `<Transfer><b:label params="data"><div>{{ data.name }}</div></b:label></Transfer>` | `<Transfer b-label={(data) => <div>{data.name}</div>} />` | the value of `b-lablel` is a function |
| two-way bind any property `@since intact-vue@0.3.7` | `v-model:name="name"` | `on$change-name={(c, v) => this.setState({name: v})} name={this.state.name}` | React does not support `v-model`, it can be changed to property and event |

In addition, when you need to pass the vNode as a property to the kpc component, you need to use 
the `Intact.normalize()` method to process the vNode.

> If it is a child element `children`, it is not necessary `normalize` because the compatibility layer 
> will normalize all children elements by default.

```js
import React from 'react';
import Intact from 'intact';
import Badge from 'kpc/components/badge';

class App extends React.Component {
    render() {
        return (
            // as a property, need to normalize it
            <Badge text={Intact.normalize(<div>test</div>)}>
                <div>test</div>
            </Badge>
        )
    }
}
```

> The vNode returned by the filed of `template` in the `scheme` property of `Table` component 
> doesn't need normalizing, because the component has do it internally, but there are no problems 
> calling `normalize` method multiple times.

# Create React App

> The sample version is `create-react-app@2.1.3`, there may be some differences between different versions.

## Installation an initialization

```shell
npx create-react-app hello-world
cd hello-world
npm install kpc -S
```

## Configuration

Before modifying the configuration, we need eject the configuration file of the project.

```shell
npm run eject
```

Then modify the configuration file `config/webpack.config.js`.

```diff
--- a/config/webpack.config.js
+++ b/config/webpack.config.js
@@ -265,6 +265,8 @@ module.exports = function(webpackEnv) {
         // Support React Native Web
         // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
         'react-native': 'react-native-web',
+        'kpc': 'kpc/@css',
+        'intact$': 'intact-react',
       },
       plugins: [
         // Adds support for installing with Plug'n'Play, leading to faster installs and adding
```

## Import theme file

If you want to modify the theme, you need to install `stylus` and `stylus-loader`.

```shell
npm install stylus stylus-loader -D
```

Then modify the configuration file `config/webpack.config.js`, let kpc point to `kpc/@stylus` directory, 
and add `stylus-loader`.

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
-        'kpc': 'kpc/@css',
+        'kpc': 'kpc/@stylus',
         'intact$': 'intact-react',
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

## Usage

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

[1]: https://github.com/ksc-fe/intact-react
