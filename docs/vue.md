---
title: Vue中使用
order: 1
---

kpc同时兼容intact和vue框架，我们只需要引入vue兼容层`intact-vue`即可。

# 语法说明

intact-vue从底层vNode上做了intact到vue的兼容，文档中针对intact的例子，
我们只需要做以下写法上的转化即可

| 类别 | intact写法 | vue写法 |
| --- | --- | --- |
| 事件 | `ev-click` | `@click` |
| 事件回调传参 | `ev-click={{ self.onClick.bind(self, data) }}` | `@click="onClick(data)"` |
| 属性 | `name={{ self.get('name') }}` | `:name="name"` |
| block | `<b:header>header</b:header>` | `<template slot="header">header</template>` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | 不支持 |
| 模板传递 | `<Transfer label={{ (data) => <div>{{ data.name }}</div> }} />` | `<Transfer><div slot="label" slot-scope="data">{{ data.name }}</div></Transfer>` |

另外当需要在js中使用`h()`方法创建vNode时，需要使用`Intact.normalize()`方法将vNode包起来

```vue
<template>
    <Button>{{ template }}</Button>
</template>
<script>
import Intact from 'intact';
import Button from 'kpc/components/Button';

export default {
    components: {
        Button
    },
    data() {
        const h = this.$createElement;
        return {
            template: Intact.normalize(h('div', null, 'test'))
        }
    }
}
</script>
```

> `Table`组件的`scheme`属性中`template`字段返回的vNode无需`normalize`，因为组件内部做了兼容，
> 不过多次调用`normalize`也没有问题。

# 安装依赖

```shell
npm install intact intact-vue kpc --save

```

# 配置`webpack.config.js`

和在intact中使用的配置类似，只需要设置`alias`让`intact`库指向`intact-vue`兼容层

```js
module.exports = {
    ...
    resolve: {
        alias: {
            'intact$': 'intact-vue/src/index.js',
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
