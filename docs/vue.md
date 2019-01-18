---
title: Vue中使用
order: 1
sidebar: doc
---

使kpc运行在Vue框架中，我们只需要引入Vue兼容层[intact-vue][1]即可

# 语法说明

intact-vue从底层vNode上做了intact到vue的兼容，文档中针对intact的例子，
我们只需要做以下写法上的转换即可

| 类别 | intact写法 | vue写法 |
| --- | --- | --- |
| 事件 | `ev-click` | `@click` |
| 事件回调传参 | `ev-click={{ self.onClick.bind(self, data) }}` | `@click="onClick(data)"` |
| 属性 | `name={{ self.get('name') }}` | `:name="name"` |
| block | `<b:header>header</b:header>` | `<template slot="header">header</template>` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | vue不支持`parent`引用父组件中定义的模板，你需要直接拷贝父组件定义的模板 |
| 带参数的block | `<Transfer><b:label params="data"><div>{{ data.name }}</div></b:label></Transfer>` | `<Transfer><div slot="label" slot-scope="data">{{ data.name }}</div></Transfer>` |
| 双向绑定任意属性 `@since intact-vue@0.3.7` | `v-model:name="name"` | `:name.sync="name"` |

## 不支持的特性

1. 不支持事件的.native修饰符
    ```vue
    <Button @click.native="click">default</Button>
    ```
2. 多余的属性不会被自动添加到组件渲染的DOM上，而是被直接忽略
3. ~~不支持scoped style，因为KPC组件渲染不会添加data-v-id~~ `@since v0.8.0 支持`
    ```vue
    <style scoped> .k-btn { color: red;  } </style>
    ```
4. 不支持 [Multiple values](https://vuejs.org/v2/guide/class-and-style.html#Multiple-Values) style
    ```vue
    <Button v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></Button>
    ```
5. 不要在KPC组件上直接做动画，如果要动画，可以包一层div
    ```vue
    <transition name="fade">
        <Button v-if="show">default</Button>
    </transition>
    ```
    可以包一层div
    ```vue
    <transition name="fade">
        <div v-if="show">
            <Button>default</Button>
        </div>
    </transition>
    ```

另外当需要在js中使用`h()`方法创建vNode，然后作为属性传给kpc组件时，需要使用`Intact.normalize()`
方法将vNode包起来

> 如果是作为子元素`children`，则没有必要`normalize`，因为兼容层默认会normalize子元素

```vue
<template>
    <Badge :text="text">{{ children }}</Badge>
</template>
<script>
import Intact from 'intact';
import Badge from 'kpc/components/badge';

export default {
    components: {
        Badge
    },
    data() {
        const h = this.$createElement;
        return {
            // 作为属性，需要normalize
            text: Intact.normalize(h('div', null, 'test')),
            // 作为子元素，没有必要normalize
            children: h('div', null, 'test')
        }
    }
}
</script>
```

> `Table`组件的`scheme`属性中`template`字段返回的vNode无需`normalize`，因为组件内部做了兼容，
> 不过多次调用`normalize`也没有问题。

# Vue CLI 3 

推荐使用`@vue/cli@3.3.0`及以上的版本进行项目初始化

## 安装并初始化

```shell
npm install -g @vue/cli
vue create hello-world
cd hello-word
npm install kpc -S
```

## 新增配置文件`vue.config.js`

在项目根目录下创建`vue.config.js`文件，内容如下：

```js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'kpc': 'kpc/@css',
                'intact$': 'intact-vue',
            }
        },
    }
}
```

然后就可以引入kpc组件使用了

## 引入主题文件

如果你需要引入主题文件，需要安装`stylus`和`stylus-loader`

### 安装

```shell
npm install stylus stylus-loader -D
```

### 修改`vue.config.js`

kpc需要指向`kpc/@stylus`，下面以内置的主题`ksyun`为例

```js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'kpc': 'kpc/@stylus',
                'intact$': 'intact-vue',
            }
        },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: [
                        {
                            loader: 'stylus-loader',
                            options: {
                                'include css': true,
                                'resolve url': true,
                                'import': '~kpc/styles/themes/ksyun/index.styl'
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```

> `@vue/cli@3.0`版本如果报找不到`babel-types`的错误，可以安装`babel-types`重启项目即可

# Vue CLI 2

## 安装并初始化

```shell
npm install -g vue-cli
vue init webpack hello-world
cd hello-world
npm install kpc -S
```

## 修改`build/webpack.base.conf.js`

添加`alias`配置

```diff
--- a/build/webpack.base.conf.js
+++ b/build/webpack.base.conf.js
@@ -27,6 +27,8 @@ module.exports = {
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
+      'kpc': 'kpc/@css',
+      'intact$': 'intact-vue',
     }
   },
```

## 引入主题文件

如果你需要引入主题文件，需要安装`stylus` `stylus-loader`

```shell
npm install stylus stylus-loader -D
```

修改`build/webpack.base.conf.js`

```diff
--- a/build/webpack.base.conf.js
+++ b/build/webpack.base.conf.js
@@ -27,7 +27,7 @@ module.exports = {
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
-      'kpc': 'kpc/@css',
+      'kpc': 'kpc/@stylus',
       'intact$': 'intact-vue',
     }
   },
```

修改`build/utils.js`

```diff
--- a/build/utils.js
+++ b/build/utils.js
@@ -62,7 +62,11 @@ exports.cssLoaders = function (options) {
     sass: generateLoaders('sass', { indentedSyntax: true }),
     scss: generateLoaders('sass'),
     stylus: generateLoaders('stylus'),
-    styl: generateLoaders('stylus')
+    styl: generateLoaders('stylus', {
+      'include css': true,
+      'resolve url': true,
+      'import': '~kpc/styles/themes/ksyun/index.styl',
+    })
   }
 }
```

# 全量引入

全量引入使用vue提供的`use`方法，一次性注册所有组件

```js
import Vue from 'vue';
import Kpc from 'kpc';

Vue.use(Kpc);
```

> Vue不能使用`Switch`作为组件名，所以所有的组件命名为`KComponent`形式，例如：`KButton`，
> 全量安装后，你可以在模板中使用`KButton`或者`k-button`作为元素名

# 按需引入

按需引入只需要在用到该组件才引入，可以最小化减小打包文件的体积

```vue
<template>
    <Button @click="hello">Hello World</Button>
</template>
<script>
import Button from 'kpc/components/button';
import Message from 'kpc/components/message';

export default {
    components: {
        Button
    },

    methods: {
        hello() {
            Message.success('Welcome to kpc world!');
        }
    }
}
</script>
```

[1]: https://github.com/Javey/intact-vue
