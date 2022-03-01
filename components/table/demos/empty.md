---
title: 自定义无内容时的展示信息
order: 16
---

当`data`为空数组`[]`时, 通过`empty`扩展点，来定义无数据是展示的内容

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <Table data={[]}>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
    <Table data={undefined}>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
        <b:empty>
            <div style="color: red">没有数据</div>
        </b:empty>
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 10px
```
