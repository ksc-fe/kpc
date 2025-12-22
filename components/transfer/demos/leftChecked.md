---
title: 控制选择项
order: 3
---

通过`leftCheckedKeys`属性，我们可以控制左侧已选项，`rightCheckedKeys`同理

```vdt
import {Transfer} from 'kpc';

<div>
    <Transfer data={this.get('data')} 
        v-model:leftCheckedKeys="checked"
    />
    <p>You checked left side: {JSON.stringify(this.get('checked'))}</p>
</div>
```

```ts
const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: data,
            checked: [0, 2]
        }
    }
}
```

```vue-data
data() {
    return {
        data: data,
        checked: [0, 2]
    }
},
```

```angular-properties
private data = data;
private checked = [0, 2];
```
