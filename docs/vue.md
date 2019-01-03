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

# 配置`webpack.config.js`

和在intact中使用的配置类似，只需要设置`alias`让`intact`库指向`intact-vue`兼容层

```js
module.exports = {
    ...
    resolve: {
        alias: {
            'intact$': 'intact-vue',
        }
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
