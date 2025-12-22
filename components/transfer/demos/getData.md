---
title: 获取已选择的数据
order: 8
---

通过`getData()`方法可以获取已选择的节点的数据。

通过`getCheckedData([model])`方法可以获取选中的节点的数据。当`model`为`left`时，返回
左边选中的节点的数据，当`model`为`right`时，返回右边选中的节点的数据。

```vdt
import {Transfer, Button} from 'kpc';

<div>
    <Button ev-click={this.getData}>get data</Button>
    <Button ev-click={this.getCheckedData.bind(this, 'left')}>get left checked data</Button>
    <Button ev-click={this.getCheckedData.bind(this, 'right')}>get right checked data</Button>
    <br />
    <br />
    <Transfer data={this.get('data')} v-model="value" ref="transfer" />
    <p>You selected: {JSON.stringify(this.get('value'))}</p>
</div>
```

```styl
.k-btn
    margin-right 16px
```

```ts
import {bind} from 'kpc';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [
                {label: '主机名0', key: 0},
                {label: '主机名1', key: 1, disabled: true},
                {label: '主机名2', key: 2},
                {label: '主机名3', key: 3, disabled: true},
                {label: '主机名4', key: 4},
            ],
            value: [0, 1]
        }
    }

    @bind
    getCheckedData(model: string) {
        console.log(this.refs.transfer.getCheckedData(model));
    }

    @bind
    getData() {
        console.log(this.refs.transfer.getData());
    }
}
```
