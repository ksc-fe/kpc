---
title: 基本用法
order: 0
---

上面是一个简单的`Table`，通过`data`属性设置表格展示的数据，通过`scheme`属性或者`TableColumn`
组件定义表格结构，详见”定义表格结构“说明

```vdt
import {Table, TableColumn} from 'kpc/components/table';

const scheme = {a: '表头1', b: '表头2'};
const data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];

<div>
    <Table scheme={{ scheme }} data={{ data }} resizable ref="__test" />
    <Table data={{ data }} resizable>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
```

```vue-data
data() {
    return {
        scheme: {a: '表头1', b: '表头2'},
        data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
    }
},
```
