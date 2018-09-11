---
title: 基础用法
order: 0
---

通过`data`属性指定渲染的数据，该属性的格式如下:

1. `label` 节点渲染的文案
2. `children` 节点的子节点，如果存在会在节点前面渲染展开箭头（空数组也会渲染），否则不会渲染箭头
3. `key` 节点的`key`，在整棵树中唯一。如果你需要操作节点的展开/选中情况，需要添加该属性，否则组件内部会分配一个
唯一的id
4. `disabled` 是否禁用节点

你可以通过`expandedKeys`指定哪些节点展开，当你展开子节点时，需要指定父节点也展开

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
        key: '2',
        children: [
            {
                label: 'Second floor-2.1',
                children: [
                    {
                        label: 'Third floor-2.1.1',
                        key: '2-1' 
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

<Tree data={{ data }} expandedKeys={{ ['2', '2-1'] }} />
```
