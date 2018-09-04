---
title: 基础用法
order: 0
---

```vdt
import Tree from 'kpc/components/tree';

const data = [
    {
        label: 'First floor-1',
        children: [
            {
                label: 'Second floor-1.1',
                children: [
                    {
                        label: 'Third floor-1.1.1'
                    }
                ]
            }
        ]
    },
    {
        label: 'First floor-2',
        children: [
            {
                label: 'Second floor-2.1',
                children: [
                    {
                        label: 'Third floor-2.1.1'
                    },
                    {
                        label: 'Third floor-2.1.2'
                    }
                ]
            },
            {
                label: 'Second floor-2.2',
                children: [
                    {
                        label: 'Third floor-2.2.1'
                    }
                ]
            }
        ]
    }
];

<Tree data={{ data }} />
```
