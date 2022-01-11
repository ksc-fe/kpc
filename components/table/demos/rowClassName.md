---
title: 行样式
order: 7
---

`rowClassName`：给行添加样式，类型`Function`，默认：`function(value, index) {  }`，该函数返回的
字符串将被当做`className`添加到该行上

你也可以直接添加`stripe`属性，使相邻行展示不同的背景色

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <Table
        data={[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]} 
        rowClassName={(value, index) => index % 2 === 0 ? 'odd' : 'even'}
    >
        <TableColumn key="a" title="rowClassName" /> 
    </Table>
    <Table
        data={[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]} 
        stripe
    >
        <TableColumn key="a" title="stripe" /> 
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 20px
.even:not(:hover) td
    background #f9f9fc
```







