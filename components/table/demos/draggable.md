---
title: 行可拖动
order: 26
---

给`Table`添加`draggable`属性，则可实现行拖动排序，拖动开始和结束会分别触发事件`dragstart`和`dragend`

```vdt
import {Table, TableColumn, Button, ButtonGroup} from 'kpc';

<Table fixHeader="300"
    data={this.get('data')}
    ref="table"
    rowKey={item => item.name}
    ev-dragend={this._onDragEnd}
    draggable
>
    <TableColumn title="Name" key="name" />
    <TableColumn title="IP" key="ip" />
    <TableColumn title="Operation" key="op">
        <b:template args="[data, index]">
            <a ev-click={this._remove.bind(this, index)}>Remove</a> 
        </b:template>
    </TableColumn>
</Table>
```

```ts
import {range, bind} from 'kpc';
import {Message, TableRowKey} from 'kpc';

interface Props {
    data: DataItem[]
}

type DataItem = {
    name: string
    ip: string
}

const data: DataItem[] = range(1, 20).map(item => {
    return {
        name: 'name ' + item,
        ip: '127.0.0.' + item
    };
});

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: data 
        }
    }

    @bind
    _remove(index: number) {
        const data = this.get('data').slice(0);
        data.splice(index, 1);
        this.set('data', data);
    }

    @bind
    _onDragEnd({key, from, to}: {key: TableRowKey, from: number, to: number}) {
        Message.success(`Drag ${key} from ${from} to ${to}.`);
        // change the data
        const data = this.get('data').slice(0);
        const row = data.splice(from, 1);
        data.splice(to, 0, row[0]);
        this.set('data', data);
    }
}
```

```vue-data
data() {
    return {
        data
    }
},
```

```react-methods
constructor(props) {
    super(props);
    this.state = {
        data
    };
    this._remove = this._remove.bind(this);
    this._onDragEnd = this._onDragEnd.bind(this);
}
```

```angular-properties
private data = data;
```
