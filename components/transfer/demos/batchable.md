---
title: 支持全选/清空
order: 2
---

当和`filterable`一起使用时，交互逻辑如下：

1. 左侧未过滤，全选则选中所有非`disabled`的选项
2. 左侧已过滤，全选则选中当前过滤出的非`disabled`的选项
3. 左侧先全选，再过滤，过滤掉的选项保持选中状态
4. 右侧清空会全部清空，不受`filter`影响

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

