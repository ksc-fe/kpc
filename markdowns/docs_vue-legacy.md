---
title: Vue2.0中使用
order: 1.11
sidebar: doc
---

# 安装

## Npm 

```shell
npm install @king-design/vue-legacy -S
```

## Yarn

```shell
yarn add @king-design/vue-legacy
```

# 使用

## 全量引入

全量引入使用vue提供的`use`方法，一次性注册所有组件

```js
import Vue from 'vue';
import {install} from '@king-design/vue-legacy/install';

Vue.use(install);
```

> Vue不能使用`Switch`作为组件名，所以所有的组件命名为`KComponent`形式，例如：`KButton`，
> 全量安装后，你可以在模板中使用`KButton`或者`k-button`作为元素名

## 按需引入

按需引入只需要在用到该组件才引入，可以最大化减小打包文件的体积

```vue
<template>
    <Button @click="hello">Hello World</Button>
</template>
<script>
import {Button, Message} from '@king-design/vue-legacy';

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
## CDN引入

通过[https://cdn.jsdelivr.net/npm/@king-design/vue-legacy](https://cdn.jsdelivr.net/npm/@king-design/vue-legacy)可以直接引入最新版KingDesign，建议使用锁定版本地址，
例如：[https://cdn.jsdelivr.net/npm/@king-design/vue-legacy@3.7.0](https://cdn.jsdelivr.net/npm/@king-design/vue-legacy@3.7.0)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>kingdesign-vue-legacy</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
</head>
<body>
    <div id="app">
        <k-button type="primary" @click="hello">Hello world</k-button>
    </div>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@king-design/vue-legacy"></script>
    <script type="text/javascript">
        Vue.use(Kpc);
        new Vue({
            el: '#app',
            methods: {
                hello: function() {
                    this.$message.success('Welcome to kpc world!');
                    this.$notification.success({
                        title: 'test',
                        content: 'test notification'
                    })
                }
            }
        });
    </script>
</body>
</html>
```

# 注意事项

1. 不支持 [Multiple values](https://vuejs.org/v2/guide/class-and-style.html#Multiple-Values) style

    ```vue
    <Button v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></Button>
    ```

2. 不要在KPC组件上直接做动画，如果要动画，可以包一层div

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

另外当需要在js中使用`h()`方法创建vNode，然后作为属性传给KingDesign组件时，需要使用`normalize`处理vNode

```vue
<template>
    <Badge :text="text">
        <div>test</div>
    </Badge>
</template>
<script>
import {normalize, Badge} from '@king-design/vue-legacy';

export default {
    components: {
        Badge
    },
    data() {
        const h = this.$createElement;
        return {
            text: normalize(h('i', null, 'test')),
        }
    }
}
</script>
```
