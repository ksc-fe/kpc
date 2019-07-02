---
title: 表头吸顶
order: 8.1
---

`stickHeader`：设置表头是否当表格滚动超出规定高度时，将表头固定在页面顶部，类型`Boolean` | `Number`，默认：`false`

1. 如果取值为`Boolean`，`false`表示不吸顶，`true`表示吸顶，此时等价于`0`，表示固定的位置的`top`为`0`
2. 如果取值为`Number`，用来指定固定的位置距离视窗顶部的距离，例如本例中，固定在`top = 50px`的地方

> 表头吸顶后会`fixed`，此时`document.body`不要出现横向滚动条，否则横向滚动后，表格体位置而表头位置不会变

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<Table data={{ [
    {name: 'Javey', sex: 'male'},
    {name: 'Lisa', sex: 'female'}
] }} stickHeader="87" resizable>
    <TableColumn title="姓名" key="name">
        <b:template params="data">
            {{ data.name }}
        </b:template>
    </TableColumn>
    <TableColumn title="性别" key="sex">
        <b:template params="data">
            {{ data.sex }}
        </b:template>
    </TableColumn>
</Table>
```
