---
title: 可拖拽
order: 6
---

添加`draggable`属性，可以实现节点拖拽功能，我们可以通过事件名`dragend`来监听拖拽完成事件，通过
`allowDrag`和`allowDrop`属性可以分别指定哪些节点可以拖拽和插入子节点，组件会在不满足的情况下分别
触发`denydrag`和`denydrop`事件来告知用户

```vdt
import Tree from 'kpc/components/tree';
import Input from 'kpc/components/input';

<Tree 
    draggable
    ev-dragend={{ self._onDragEnd }}
    allowDrag={{ self._allowDrag }}
    allowDrop={{ self._allowDrop }}
    ev-denydrag={{ self._onDenyDrag }}
    ev-denydrop={{ self._onDenyDrop }}
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
                            label: 'This node can not be dragged and dropped.',
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
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['2', '2-1'],
        };
    }

    _onDragEnd(data) {
        console.log(data);
    }

    _allowDrag(node) {
        return node.key !== '1-1-1';
    }

    _allowDrop(node) {
        return node.key !== '1-1-1';
    }

    _onDenyDrag(node) {
        Message.error(node.data.label);
    }

    _onDenyDrop(node) {
        Message.error(node.data.label);
    }
}
```

