---
title: 基础用法
order: 0
---

穿梭框基本用法，支持Shift进行多选。可以使用`v-model`来进行选择的值的双向绑定。

> 你需要给每一行数据指定`key`，默认会取数据项中的`key`值，没有则会取`label`值。你也可以通过
> `keyName`属性来指定取哪个值当做`key`

> `value`选中的值为原始数据`data`数组中的同一引用。`@since v1.0.0` `value`中的数据不一定是`data`
> 中的同一引用，而是通过`key`去判断是否是同一数据。

```vdt
import Transfer from 'kpc/components/transfer';

<div>
    <Transfer data={{ self.get('data') }} v-model="value" ref="__test" />
    <p>You selected: {{ JSON.stringify(self.get('value')) }}</p>
</div>
```

```js
const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: data,
            value: [
                data[0],
                data[1]
            ]
        }
    }
}
```

```vue-data
data() {
    return {
        data: data,
        value: [
            data[0],
            data[1]
        ]
    }
},
```

```react-methods
constructor(props) {
    super(props);
    this.state = {
        data: data,
        value: [
            data[0],
            data[1]
        ]
    };
}
```
