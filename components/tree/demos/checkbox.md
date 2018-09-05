---
title: 带复选框
order: 1
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
                disabled: true,
                children: [
                    {
                        label: 'Third floor-2.2.1'
                    }
                ]
            }
        ]
    }
];

<Tree data={{ data }} checkbox />
```
