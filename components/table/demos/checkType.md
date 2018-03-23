---
title: 选择框的类型
order: 0
---

`checkType`：设置选择框的类型，类型`String`，`checkbox`多选框(默认)/`radio`单选框/`none`无选框

```vdt
import Table from 'kpc/components/table';
var scheme = {a: '表头'};
var data1 = [{a: '多选框'}];
var data2 = [{a: '单选框'}];
var data3 = [{a: '无选框'}];

<div class='no-data-template'>
    <Table scheme={{scheme}} data={{data1}} />
    <Table scheme={{scheme}} data={{data2}} checkType='radio'/>
    <Table scheme={{scheme}} data={{data3}} checkType='none'/>
</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px
```







