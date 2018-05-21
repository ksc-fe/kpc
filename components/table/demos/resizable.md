---
title: 表头是否可拖动
order: 12
---

`resizable`：表头是否可拖动，类型`Boolean`，`false`(默认)

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








