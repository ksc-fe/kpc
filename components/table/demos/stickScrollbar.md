---
title: 横向滚动条吸底
order: 8.2
---

`stickScrollbar`：当出现横向滚动条时，设置是否当表格底部没有滚动到视窗中时，将横向滚动条固定在页面底部，类型`Boolean` | `Number`，默认：`false`

1. 如果取值为`Boolean`，`false`表示不吸底，`true`表示吸底，此时等价于`0`，表示固定的位置的`bottom`为`0`
2. 如果取值为`Number`，用来指定固定位置距离视窗底部的距离

```vdt
import {Table, TableColumn} from 'kpc/components/table';

const data = [
    {name: 'John'},
    {name: 'Tom'},
    {name: 'Javey'},
].map(item => {
    for (let i = 0; i < 4; i++) {
        item[`column${i + 1}`] = 'test';
    }
    return item;
});

<Table data={{ data }} resizable stickScrollbar>
    <TableColumn key="name" title="Name" width="200" />
    <TableColumn key="column1" title="Column1" width="300" />
    <TableColumn key="column2" title="Column2" width="300" />
    <TableColumn key="column3" title="Column3" width="300" />
    <TableColumn key="column4" title="Column4" width="300" />
    <TableColumn key="action" title="Action" width="200">
        <b:template params="data">
            <a>action</a>
        </b:template>
    </TableColumn>
</Table>
```

```vue-data
data() {
    return {
        data: [
            {name: 'John'},
            {name: 'Tom'},
            {name: 'Javey'},
        ].map(item => {
            for (let i = 0; i < 4; i++) {
                item[`column${i + 1}`] = 'test';
            }
            return item;
        })
    }
},
```
