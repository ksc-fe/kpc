---
title: 表格分页
order: 30
---

给组件添加`pagination`属性即可开启分页功能，`pagination`支持`Pagination`组件的全部属性，当分页信息改变时
会触发`changePage`事件

> 需要给Table设置rowKey属性，否则选择的行翻页后依然会保留选中状态，因为不设置key，则使用索引当key，
> 只要当前选中的索引在下一页存在，则会依然选中

```vdt
import {Table, TableColumn, Switch} from 'kpc';

<Table data={this.get('data')}
    pagination
    ref="table"
    draggable
    rowKey={item => item.name}
    ev-page={this.onChangePage}
>
    <TableColumn title="Name" key="name" />
    <TableColumn title="IP" key="ip" />
</Table>
```

```ts
import {range, bind} from 'kpc/components/utils';

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

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data, 
        };
    }

    @bind
    onChangePage(data) {
        console.log(data);
    }
}
```
