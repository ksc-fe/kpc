---
title: 列固定
order: 8.3
---

给`TableColumn`或者`scheme`添加`fixed`属性，可以将列固定，其中`left`固定在左侧，`right`固定在右侧；
固定的列依然支持`resizable`表头拖动，`stickHeader`表头吸顶，以及`fixHeader`表头固定

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

<div>
    <Table data={{ data }} resizable stickHeader="50">
        <TableColumn fixed="left" key="name" title="Name" width="200" />
        <TableColumn key="column1" title="Column1" width="300" />
        <TableColumn key="column2" title="Column2" width="300" />
        <TableColumn key="column3" title="Column3" width="300" />
        <TableColumn key="column4" title="Column4" width="300" />
        <TableColumn fixed="right" key="action" title="Action" width="200">
            <b:template params="data">
                <a>action</a>
            </b:template>
        </TableColumn>
    </Table>
    <Table data={{ data }} fixHeader="100" resizable>
        <TableColumn fixed="left" key="name" title="Name" width="200" />
        <TableColumn key="column1" title="Column1" width="300" />
        <TableColumn key="column2" title="Column2" width="300" />
        <TableColumn key="column3" title="Column3" width="300" />
        <TableColumn key="column4" title="Column4" width="300" />
        <TableColumn fixed="right" key="action" title="Action" width="200">
            <b:template params="data">
                <a>action</a>
            </b:template>
        </TableColumn>
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 20px
```
