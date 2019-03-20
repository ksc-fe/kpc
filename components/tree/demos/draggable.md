---
title: 可拖拽
order: 6
---

给`Tree`指定`filter`函数，即可实现节点过滤功能，该函数返回`false`则表示过滤掉该项。你需要给`data`的每一项添加全局唯一的`key`
否则过滤时，会因为每次更新`key`不同而闪动

```vdt
import Tree from 'kpc/components/tree';
import Input from 'kpc/components/input';

<Tree 
    draggable
    data={{ [
        {
            label: 'First floor-1',
            key: '1',
            children: [
                {
                    label: 'Second floor-1.1',
                    key: '1-1',
                    children: [
                        {
                            label: 'Third floor-1.1.1',
                            key: '1-1-1'
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
                    key: '2-1',
                    children: [
                        {
                            label: 'Third floor-2.1.1',
                            key: '2-1-1' 
                        },
                        {
                            label: 'Third floor-2.1.2',
                            key: '2-1-2'
                        }
                    ]
                },
                {
                    label: 'Second floor-2.2',
                    key: '2-2',
                    children: [
                        {
                            label: 'Third floor-2.2.1',
                            key: '2-2-1'
                        }
                    ]
                },
                {
                    label: 'Second floor-2.3',
                    key: '2-3',
                    disabled: true,
                },
            ]
        }
    ] }}
    v-model:expandedKeys="expandedKeys"
/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['2', '2-1'],
        };
    }
}
```

