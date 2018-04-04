---
title: 整行选中
order: 4
---

`rowCheckable`：是否点击整行任意位置后整行选中，类型`Boolean`，`true`(默认)
* 选中的数据默认会在每一行的元素上有`k-checked`样式

```vdt
import Table from 'kpc/components/table';

var scheme1 = {a: '不整行选中', b: 'B'};
var scheme2 = {a: '整行选中', b: 'B'};
var data1 = [{a: 'A', b: 'B'}, {a: 'A', b: '点我不会选中整行'}];
var data2 = [{a: 'A', b: '任何位置都可以哦～'}, {a: 'A', b: '点我会选中整行'}];


<div class='no-data-template'>
    <Table scheme={{ scheme1 }} data={{ data1 }} rowCheckable={{ false }}/>
    <Table scheme={{ scheme2 }} data={{ data2 }} />
</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px
       .k-checked
           background-color: #dfdfdf
```







