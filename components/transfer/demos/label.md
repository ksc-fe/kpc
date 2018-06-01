---
title: 自定义渲染列表
order: 1
---

通过`label`属性，可以自定义列表渲染逻辑。此时如果你需要启动列表过滤功能`filterable`，
需要通过`filter`属性，指定自定义过滤函数。

```vdt
import Transfer from 'kpc/components/transfer';

<Transfer data={{ self.get('data') }} 
    label={{ (data, index, type) => {
        return <div>
            <div>{{ data.name }}</div>
            <p>{{ data.desc }} | {{ data.ip }}</p>
        </div>
    } }}
    filter={{ (data, keywords) => {
        return data.name.includes(keywords) || 
            data.desc.includes(keywords) ||
            data.ip.includes(keywords);
    } }}
    filterable
/>
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
}
```

```vue
<template>
    <Transfer :data="data" :filter="filter" filterable>
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
