---
title: 类型
order: 19
---

通过`type`设置表格的类型：`default` | `border` | `grid`

```vdt
import Table from 'kpc/components/table';

<div>
    <Table scheme={{ {a: '类型', b: '属性'} }}
        data={{ self.get('data1') }}
        type="border" 
    />
    <Table scheme={{ {a: '类型', b: '属性'} }}
        data={{ self.get('data2') }}
        type="grid" 
    />
</div>
```

```styl
.k-table
    margin-bottom 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data1: [{a: 'border类型', b: 'type="border"'}],
            data2: [{a: 'grid类型', b: 'type="grid"'}] 
        }
    }
}
```
