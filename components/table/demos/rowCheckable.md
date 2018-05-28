---
title: 整行选中
order: 4
---

当行可选时，默认点击该行的任意区域都可选中或取消选中，但我们可以通过将`rowCheckbable`设为`false`
来关闭这一特性。

> 选中的数据默认会在每一行的元素上有`k-checked`样式名

```vdt
import Table from 'kpc/components/table';

const scheme1 = {a: '不整行选中', b: 'B'};
const scheme2 = {a: '整行选中', b: 'B'};
const data1 = [{a: 'A', b: 'B'}, {a: 'A', b: '点我不会选中整行'}];
const data2 = [{a: 'A', b: '任何位置都可以哦～'}, {a: 'A', b: '点我会选中整行'}];


<div class='no-data-template'>
    <Table scheme={{ scheme1 }} data={{ data1 }} rowCheckable={{ false }}/>
    <Table scheme={{ scheme2 }} data={{ data2 }} />
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
    .k-checked
        background-color #f4f8fb
```







