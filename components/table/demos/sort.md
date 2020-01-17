---
title: 排序
order: 17
---

通过`sort`属性来指定当前表格的排序方式。它的数据格式如下：

`{ key: '当前排序的列的key', type: '当前排序方式（desc: 降序，asc: 升序）' }`

当该列可排序时，只需要在定义表格结构的`scheme`或者`TableColumn`中加入`sortable`并且取值为`true`即可

当排序方式改变时，可以监听默认事件`$change:sort`来执行自定义排序逻辑

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<div class='no-data-template'>
    <Table scheme={{ self.get('scheme') }} 
        data={{ self.get('data') }} 
        sort={{ self.get('sort') }}
        ev-$change:sort={{ self._onSort }}
    />
    <Table data={{ self.get('data') }} 
        sort={{ self.get('sort') }}
        ev-$change:sort={{ self._onSort }}
    >
        <TableColumn title='姓名' key='name' sortable />
        <TableColumn title='年龄' key='age' sortable />
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    .k-table
        flex 1
        margin-left: 10px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [{name: 'aa', age: 1}, {name: 'cc', age: 5}, {name: 'bb', age: 9}],
            scheme: {
                name: {
                    title: '姓名',
                    sortable: true
                },
                age: {
                    title: '年龄',
                    sortable: true
                }
            },
            sort: {}
        }
    }

    _onSort(c, sort) {
        console.log(sort);
        const data = this.get('data').slice(0);
        data.sort((a, b) => {
            return sort.type === 'desc' ? 
                (a[sort.key] > b[sort.key] ? -1 : 1) : 
                (a[sort.key] > b[sort.key] ? 1 : -1);
        });
        this.set({data, sort});
    }
}
```

```vue-methods
_onSort(c, sort) {
    console.log(sort);
    const data = this.data.slice(0);
    data.sort((a, b) => {
        return sort.type === 'desc' ? 
            (a[sort.key] > b[sort.key] ? -1 : 1) : 
            (a[sort.key] > b[sort.key] ? 1 : -1);
    });
    this.data = data;
    this.sort = sort;
}
```
