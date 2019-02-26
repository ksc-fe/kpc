---
title: 
    zh-CN: 自定义渲染列表
    en-US: Custom render list
order: 1
---

## zh-CN

通过`label`属性，可以自定义列表渲染逻辑。此时如果你需要启动列表过滤功能`filterable`，
需要通过`filter`属性，指定自定义过滤函数。

全选和`filterable`一起作用时，交互逻辑如下：

1. 左侧未过滤，全选则选中所有非`disabled`的选项
2. 左侧已过滤，全选则选中当前过滤出的非`disabled`的选项
3. 左侧先全选，再过滤，过滤掉的选项保持选中状态

## en-US

You can custom list rendering logic by `label` property. at this point, if you need to enable list filtering function (`filterable`), you can custom filter function by `filter` property.

When selecting all and `filterable` working together,the interaction logic is as follows:

1. Left unfiltered, it will select all non ` disabled ` options when selecting all.
2. Left filtered, it will select current filtered non ` disabled ` options when selecting all.
3. Select all on the left, then filter, and the filtered option remains selected state.

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
                {name: 'Host Name 0', desc: 'Front-end server 0', ip: '192.168.1.0'},
                {name: 'Host Name 1', desc: 'Front-end server 1', ip: '192.168.1.1'},
                {name: 'Host Name 2', desc: 'Front-end server 2', ip: '192.168.1.2'},
                {name: 'Host Name 3', desc: 'Front-end server 3', ip: '192.168.1.3', disabled: true},
                {name: 'Host Name 4', desc: 'Front-end server 4', ip: '192.168.1.4'},
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
