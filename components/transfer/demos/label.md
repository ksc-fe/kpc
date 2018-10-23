---
title: 自定义渲染列表
order: 1
---

通过`label`属性，可以自定义列表渲染逻辑。此时如果你需要启动列表过滤功能`filterable`，
需要通过`filter`属性，指定自定义过滤函数。

全选和`filterable`一起作用时，交互逻辑如下：

1. 左侧未过滤，全选则选中所有非`disabled`的选项
2. 左侧已过滤，全选则选中当前过滤出的非`disabled`的选项
3. 左侧先全选，再过滤，过滤掉的选项保持选中状态


```vdt
import Transfer from 'kpc/components/transfer';

<Transfer data={{ self.get('data') }} 
    filter={{ self.filter }}
    filterable
    keyName="name"
    ref="__test"
>
    <b:label params="data, index, type">
        <div>
            <div>{{ data.name }}</div>
            <p>{{ data.desc }} | {{ data.ip }}</p>
        </div>
    </b:label>
</Transfer>
```

```styl
.k-item
    p
        margin 0
        font-size 12px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {name: '主机名0', desc: '前端服务器0', ip: '192.168.1.0'},
                {name: '主机名1', desc: '前端服务器1', ip: '192.168.1.1'},
                {name: '主机名2', desc: '前端服务器2', ip: '192.168.1.2'},
                {name: '主机名3', desc: '前端服务器3', ip: '192.168.1.3', disabled: true},
                {name: '主机名4', desc: '前端服务器4', ip: '192.168.1.4'},
            ]
        }
    }

    filter(data, keywords) {
        return data.name.includes(keywords) || 
            data.desc.includes(keywords) ||
            data.ip.includes(keywords);
    }
}
```

```vue
<template>
    <Transfer :data="data" :filter="filter" filterable keyName="name">
        <div slot="label" slot-scope="data, index, type">
            <div>{{ data.name }}</div>
            <p>{{ data.desc }} | {{ data.ip }}</p>
        </div>
    </Transfer>
</template>

<script>
import Transfer from 'kpc/components/transfer';

export default {
    data() {
        return {
            data: [
                {name: '主机名0', desc: '前端服务器0', ip: '192.168.1.0'},
                {name: '主机名1', desc: '前端服务器1', ip: '192.168.1.1'},
                {name: '主机名2', desc: '前端服务器2', ip: '192.168.1.2'},
                {name: '主机名3', desc: '前端服务器3', ip: '192.168.1.3', disabled: true},
                {name: '主机名4', desc: '前端服务器4', ip: '192.168.1.4'},
            ]
        }
    },

    components: {Transfer},

    methods: {
        filter(data, keywords) {
            return data.name.includes(keywords) || 
                data.desc.includes(keywords) ||
                data.ip.includes(keywords);
        }
    }
}
</script>
```
