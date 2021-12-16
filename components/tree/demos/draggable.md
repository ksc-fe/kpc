---
title: 可拖拽
order: 6
---

添加`draggable`属性，可以实现节点拖拽功能，我们可以通过事件名`dragend`来监听拖拽完成事件，通过
`allowDrag`和`allowDrop`属性可以分别指定哪些节点可以拖拽和插入子节点，组件会在不满足的情况下分别
触发`denydrag`和`denydrop`事件来告知用户

```vdt
import {Tree, Input} from 'kpc';

<Tree 
    draggable
    ev-dragend={this.onDragEnd}
    allowDrag={this.allowDrag}
    allowDrop={this.allowDrop}
    ev-denydrag={this.onDenyDrag}
    ev-denydrop={this.onDenyDrop}
    v-model:data='data'
    v-model:expandedKeys="expandedKeys"
/>
```

```ts
import {Message, TreeDataItem, TreeNode} from 'kpc';

interface Props {
    data: TreeDataItem[]
    expandedKeys: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
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
                            disabled: true
                        }
                    ]
                }
            ],
            expandedKeys: ['2', '2-1'],
        };
    }

    onDragEnd(data: TreeDataItem[]) {
        console.log(data);
    }

    allowDrag(node: TreeNode) {
        return node.key !== '1-1-1';
    }

    allowDrop(node: TreeNode) {
        return node.key !== '1-1-1';
    }

    onDenyDrag(node: TreeNode) {
        Message.error(`Cannot drag node: ${node.data.label}.`);
    }

    onDenyDrop(node: TreeNode) {
        Message.error(`Cannot drop to node: ${node.data.label}.`);
    }
}
```

