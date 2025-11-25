---
title: 排序
order: 17
---

通过`sort`属性来指定当前表格的排序方式。它的数据格式如下：

`{ key: '当前排序的列的key', type: '当前排序方式（desc: 降序，asc: 升序）' }`

当该列可排序时，只需要在`TableColumn`中加入`sortable`即可

当排序方式改变时，可以监听默认事件`$change:sort`来执行自定义排序逻辑

```vdt
import {Table, TableColumn} from 'kpc';

<Table data={this.get('data')} 
    sort={this.get('sort')}
    ev-$change:sort={this._onSort}
    rowKey={item => item.name}
    resizable
>
    <TableColumn title='姓名' key='name' sortable />
    <TableColumn title='年龄' key='age' sortable />
</Table>
```

```ts
import {bind, TableSortValue} from 'kpc';

interface Props {
    data: DataItem[]    
    sort: TableSortValue
}

type DataItem = {
    name: string
    age: number
}

const oData: DataItem[] = [
    {name: 'aa', age: 1},
    {name: 'cc', age: 5},
    {name: 'bb', age: 9}
];

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: oData,
            sort: {}
        }
    }

    @bind
    _onSort(sort: TableSortValue<'name' | 'age'> | undefined) {
        console.log(sort);
        const data = oData.slice(0);
        if (sort!.type) {
            data.sort((a, b) => {
                return sort!.type === 'desc' ? 
                    (a[sort!.key!] > b[sort!.key!] ? -1 : 1) : 
                    (a[sort!.key!] > b[sort!.key!] ? 1 : -1);
            });
        }
        this.set({data, sort: sort!});
    }
}
```

```vue-methods
_onSort(sort?: TableSortValue<'name' | 'age'>) {
    console.log(sort);
    const data = this.data.slice(0);
    data.sort((a, b) => {
        return sort!.type === 'desc' ? 
            (a[sort!.key!] > b[sort!.key!] ? -1 : 1) : 
            (a[sort!.key!] > b[sort!.key!] ? 1 : -1);
    });
    this.data = data;
    this.sort = sort;
}
```
