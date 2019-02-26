---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---
## zh-CN

穿梭框基本用法，支持Shift进行多选。可以使用`v-model`来进行选择的值的双向绑定。

> 你需要给每一行数据指定`key`，默认会取数据项中的值，没有则会取`label`值。你也可以通过
> `keyName`属性来指定取哪个值当做`key`

> `value`选中的值为原始数据`data`数组中的同一引用

## en-US

The basic usage of transfer supports Shift for multiple selection. you can use `v-model` to make  a two-way binding of selected values

> You need to specify `key` to each row of data,it will take the value of data item by default, otherwise it will take the ` label ` value. you can also specify which value as `key` by `keyName` property.

> The `value` selected value is same reference in the original data array.

```vdt
import Transfer from 'kpc/components/transfer';

<div>
    <Transfer data={{ self.get('data') }} v-model="value" ref="__test" />
    <p>You selected: {{ JSON.stringify(self.get('value')) }}</p>
</div>
```

```js
const data = [
    {label: 'Host Name 0', key: 0},
    {label: 'Host Name 1', key: 1, disabled: true},
    {label: 'Host Name 2', key: 2},
    {label: 'Host Name 3', key: 3, disabled: true},
    {label: 'Host Name 4', key: 4},
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
    const data = [
        {label: 'Host Name 0', key: 0},
        {label: 'Host Name 1', key: 1, disabled: true},
        {label: 'Host Name 2', key: 2},
        {label: 'Host Name 3', key: 3, disabled: true},
        {label: 'Host Name 4', key: 4},
    ];
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
    const data = [
        {label: 'Host Name 0', key: 0},
        {label: 'Host Name 1', key: 1, disabled: true},
        {label: 'Host Name 2', key: 2},
        {label: 'Host Name 3', key: 3, disabled: true},
        {label: 'Host Name 4', key: 4},
    ];
    this.state = {
        data: data,
        value: [
            data[0],
            data[1]
        ]
    };
}
```
