---
title: 表头固定
order: 8
---

`fixHeader`：设置表头固定，类型`Boolean` | `Number`，默认：`false`

1. 如果取值为`Boolean`，`false`表示不固定表头，`true`表示固定高度，但需要自己定义表格高度
2. 如果取值为`Number`，则表示，当表格超出该高度时即展示滚动条，并固定表头

```vdt
import Table from 'kpc/components/table';

const data1 = [{a: '表头固定，但内容没有超出最高高度'}];
const data2 = [{a: '表头固定啦'}, {a: '下拉'}, {a: 'yeah!'}];

<div class="wrapper">
    <Table scheme={{ {a: '100px'} }} data={{ data1 }} fixHeader="100" />
    <Table scheme={{ {a: '100px' } }} data={{ data2 }} fixHeader="100" />
</div>
```

```styl
.wrapper
    display flex
.k-table-wrapper
    margin-left: 20px
```
