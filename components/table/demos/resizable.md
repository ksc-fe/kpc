---
title: 表头是否可拖动
order: 0
---

`resizable`：表头是否可拖动，类型`Boolean`，`false`(默认)

```vdt
import Table from 'kpc/components/table';
var scheme1 = {a: '默认不可拖拽', b: '表头B'};
var scheme2 = {a: '设置为可拖拽', b: '表头B'};
var data1 = [{a: 'A', b: 'B'}, {a: 'A', b: 'B'}];


<div class='no-data-template'>
    <Table scheme={{ scheme1 }} data={{ data1 }} />
    <Table scheme={{ scheme2 }} data={{ data1 }} resizable={{ true }}/>

</div>
```








