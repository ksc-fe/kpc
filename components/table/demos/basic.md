---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

上面是一个简单的`Table`，通过`data`属性设置表格展示的数据，通过`scheme`属性或者`TableColumn`
组件定义表格结构，详见”定义表格结构“说明

## en-US

The above is a simple `Table`, you can specify the table data to be displayed through `data` property. you can define the table structure through `scheme` property or `TableColumn` component, for details, see "Defining Table Structure".

```vdt
import {Table, TableColumn} from 'kpc/components/table';

const scheme = {a: 'header 1', b: 'header 2'};
const data = [{a: 'first row', b: 'content 1'}, {a: 'second row', b: 'content 2'}];

<div>
    <Table scheme={{ scheme }} data={{ data }} resizable ref="__test" />
    <Table data={{ data }} resizable >
        <TableColumn key="a" title="header 1" />
        <TableColumn key="b" title="header 2" />
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
        scheme: {a: 'header 1', b: 'header 2'},
        data: [{a: 'first row', b: 'content 1'}, {a: 'second row', b: 'content 2'}],
    }
},
```
