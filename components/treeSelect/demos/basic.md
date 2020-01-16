---
title: 基础用法
order: 0
---

和`Tree`的`data`属性类似，唯一不同的是，所有节点必须存在唯一的`key`

通过`data`属性指定渲染的数据，该属性的格式如下:

1. `label` 节点渲染的文案，必填
2. `children` 节点的子节点，如果存在会在节点前面渲染展开箭头（空数组也会渲染），否则不会渲染箭头
3. `key` 节点的`key`，在整棵树中唯一，也是选中该节点时的取值。必填
4. `disabled` 是否禁用节点
5. `loaded` 节点的子节点是否已经加载完成，当节点做异步加载时，将不会对该节点调用`load`方法，详见“异步加载”

```vdt
import {TreeSelect} from 'kpc';

<TreeSelect data={{ [
    {
        label: 'First floor-1',
        key: '1',
        children: [
            {
                label: 'Second floor-1.1',
                key: '1.1',
                children: [
                    {
                        label: 'Third floor-1.1.1',
                        key: '1.1.1'
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
                key: '2.1',
                children: [
                    {
                        label: 'Third floor-2.1.1',
                        key: '2.1.1' 
                    },
                    {
                        label: 'Third floor-2.1.2',
                        key: '2.1.2'
                    }
                ]
            },
            {
                label: 'Second floor-2.2',
                disabled: true,
                key: '2.2',
                children: [
                    {
                        label: 'Third floor-2.2.1',
                        key: '2.2.1'
                    }
                ]
            }
        ]
    }
] }} />
```
