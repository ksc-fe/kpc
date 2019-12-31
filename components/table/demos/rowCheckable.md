---
title: 整行选中
order: 4
---

当行可选时，默认点击该行的任意区域都可选中或取消选中，但我们可以通过将`rowCheckable`设为`false`
来关闭这一特性。

> 选中的数据默认会在每一行的元素上有`k-checked`样式名

```vdt
import Table from 'kpc/components/table';

<div class='no-data-template'>
    <Table scheme={{ {a: '点击整行不选中', b: 'B'} }}
        data={{ [{a: 'A', b: 'B'}, {a: 'A', b: '点我不会选中整行'}] }}
        rowCheckable={{ false }}
    />
    <Table scheme={{ {a: '点击整行选中', b: 'B'} }} 
        data={{ [{a: 'A', b: '任何位置都可以哦～'}, {a: 'A', b: '点我会选中整行'}] }}
    />
</div>
```

```styl
.k-table
    margin-bottom 20px
    .k-checked
        background-color #f4f8fb
```







