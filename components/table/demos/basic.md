---
title: 基本用法
order: 0
---

上面是一个简单的Table
`data`：可以设置表格展示的数据，类型`Array`，默认`[]`

```vdt
import Table from 'kpc/components/table';
var scheme = {a: '表头1', b: '表头2'};
var data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];

<div>
    <Table scheme={{scheme}} data={{data}}/>
</div>
```







