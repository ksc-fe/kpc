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
            a: {
                title: '通过minColWidth控制最小宽度100px',
                width: '50%',
            },
            b: {
                title: '单独设置最小宽度300px',
                minWidth: 300
            },
            c: {
                title: '标题',
                width: '40%',
            }
        } }} 
        data={{ data }}
        resizable
        minColWidth={{ 100 }}
    />
</div>
```








