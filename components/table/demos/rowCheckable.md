---
title: 
    zh-CN: 整行选中
    en-US: Whole rows selected
order: 4
---

## zh-CN

当行可选时，默认点击该行的任意区域都可选中或取消选中，但我们可以通过将`rowCheckbable`设为`false`
来关闭这一特性。

> 选中的数据默认会在每一行的元素上有`k-checked`样式名

## en-US

When row can be selected, clicking the any area of the row that can be selected or canceled by default, but we can close this features through setting the `rowCheckbable` to `false`.

> The selected data will add `k-checked` style name to each of row element by default.

```vdt
import Table from 'kpc/components/table';

<div class='no-data-template'>
    <Table scheme={{ {a: 'click the whole row to unselect it', b: 'B'} }}
        data={{ [{a: 'A', b: 'B'}, {a: 'A', b: 'click me the whole row is unselected '}] }}
        rowCheckable={{ false }}
    />
    <Table scheme={{ {a: 'click the whole row to select it', b: 'B'} }} 
        data={{ [{a: 'A', b: 'any location is OK ~'}, {a: 'A', b: 'click me the whole row is selected'}] }}
    />
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
    .k-checked
        background-color #f4f8fb
```







