---
title: 表头固定
order: 8
---

`fixHeader`：设置表头固定，类型`Boolean`，`false`(默认)

```vdt
import Table from 'kpc/components/table';
var data1 = [{a: 'false(默认)'}];
var data2 = [{a: '表头固定但是没有滚动条，展示不出效果'}];
var data3 = [{a: '表头固定啦'}, {a: '下拉'}, {a: 'yeah!'}];

<div class='no-data-template'>
    <Table scheme={{ {a: 'false'} }} data={{data1}} />
    <Table scheme={{ {a: 'true'} }} data={{data2}} fixHeader={{true}} />
    <Table scheme={{ {a: '100px' } }} data={{data3}} fixHeader='100' />
</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px
```







