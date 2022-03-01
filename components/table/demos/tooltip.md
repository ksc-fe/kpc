---
title: 行提示 
order: 23
---

通过`tooltip`扩展点，可以定义表格行的提示信息，通过`tooltipPosition`属性可以定义提示信息的弹出位置，
通过`tooltipContainer`指定提示层元素插入的位置。
组件会将当前行的数据和索引传入该扩展点

```vdt
import {Table, TableColumn} from 'kpc';

<Table 
    data={[
        {a: '第一行', b: '哈哈1'}, 
        {a: '第二行', b: '哈哈2'},
        {a: '第三行', b: '哈哈3'}
    ]}
>
    <b:tooltip args="[data, index]">
        <div>{data.a}</div>
    </b:tooltip>
    <TableColumn key="a" title="表头1" />
    <TableColumn key="b" title="表头2" />
</Table>
```
