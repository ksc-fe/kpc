---
title: table的类型
order: 11
---

`type`：设置表格的类型，类型`String`，`"default"`(默认)

```vdt
import Table from 'kpc/components/table';

var scheme = {a: '类型'};
var data1 = [{a: 'defalut'}];


<div class='no-data-template'>
    <Table scheme={{scheme}} data={{data1}} />
</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px
```







