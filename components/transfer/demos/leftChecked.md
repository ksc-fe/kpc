---
title: 
    zh-CN: 控制选择项
    en-US: Control selection
order: 2
---

## zh-CN

通过`leftChecked`属性，我们可以控制左侧已选项，`rightChecked`同理

> `leftChecked`数组为`data`中每一项的同一引用

## en-US

We can control the options on the left by `leftChecked` property, and the `rightChecked` property is same.

> `leftChecked` array is same reference in each item of `data`

```vdt
import Transfer from 'kpc/components/transfer';

<div>
    <Transfer data={{ self.get('data') }} 
        v-model:leftChecked='checked'
    />
    <p>You checked left side: {{ JSON.stringify(self.get('checked')) }}</p>
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
            checked: [data[0], data[2]]
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
        checked: [data[0], data[2]]
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
        checked: [data[0], data[2]]
    };
}
```
