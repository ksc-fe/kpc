---
title: 类型
order: 11
---

通过`type`设置表格的类型：`default` | `border` | `grid`

```vdt
import Table from 'kpc/components/table';

<div>
    <Table scheme={{ {a: '类型', b: '属性'} }}
        data={{ [{a: 'border类型', b: 'type="border"'}] }}
        type="border" 
    />
    <Table scheme={{ {a: '类型', b: '属性'} }}
        data={{ [{a: 'grid类型', b: 'type="grid"'}] }}
        type="grid" 
    />
</div>
```

```styl
.k-table
    margin-bottom 20px
```
