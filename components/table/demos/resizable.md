---
title: 表头是否可拖动
order: 12
---

`resizable`：表头是否可拖动，类型`Boolean`，`false`(默认)

> 你不能给所有列通过百分比指定宽度让所有列之和恰好等于100%，因为列拖动时会改变列宽，
> 此时可能会小于100%，导致会出现列拖不动的情况。所以应该留一下列不指定宽度，让它的宽度自适应

```vdt
import Table from 'kpc/components/table';

var data = [{a: 'A', b: 'B', c: 'C'}, {a: 'A', b: 'B', c: 'C'}];

<div class='no-data-template'>
    <Table 
        scheme={{ {
            a: '通过minColWidth控制最小宽度100px',
            b: {
                title: '单独设置最小宽度300px',
                minWidth: 300
            },
            c: {
                title: '标题'
            }
        } }} 
        data={{ data }}
        resizable
        minColWidth={{ 100 }}
    />
</div>
```








