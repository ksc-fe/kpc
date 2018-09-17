---
title: 列固定
order: 8.2
---

`fixHeader`：设置表头固定，类型`Boolean` | `Number`，默认：`false`

1. 如果取值为`Boolean`，`false`表示不固定表头，`true`表示固定高度，但需要自己定义表格高度
2. 如果取值为`Number`，则表示，当表格超出该高度时即展示滚动条，并固定表头

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

<Table data={{ data }}>
    <TableColumn fixed="left" key="name" title="Name" width="200" />
    <TableColumn key="column1" title="Column1" width="300" />
    <TableColumn key="column2" title="Column2" width="300" />
    <TableColumn key="column3" title="Column3" width="300" />
    <TableColumn key="column4" title="Column4" width="300" />
    <TableColumn fixed="right" key="action" title="Action" width="200">
        <b:template args="data">
            <a>action</a>
        </b:template>
    </TableColumn>
</Table>
```
