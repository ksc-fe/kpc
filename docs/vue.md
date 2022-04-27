---
title: Vue3.0中使用
order: 1.1
sidebar: doc
---

# 安装

## Npm 

```shell
npm install @king-design/vue -S
```

## Yarn

```shell
yarn add @king-design/vue
```

# 使用

## 全量引入

全量引入使用vue提供的`use`方法，一次性注册所有组件

```js
import {createApp} from 'vue';
import {install} from '@king-design/vue/install';

const app = createApp({
    template: '<Button>Hello</Button>'
});

app.use(install);
```

## 按需引入

按需引入只需要在用到该组件才引入，可以最大化减小打包文件的体积

```vue
<template>
    <Button @click="hello">Hello World</Button>
</template>
<script>
import {Button, Message} from '@king-design/vue';

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

# 注意事项

1. 不要在KPC组件上直接做动画，如果要动画，可以包一层div

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
import {normalize, Badge} from '@king-design/vue';

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
