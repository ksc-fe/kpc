---
title: 可拖拽
order: 6
---

添加`draggable`属性，可以实现节点拖拽功能，我们可以通过事件名`dragend`来监听拖拽完成事件，通过
`allowDrag`和`allowDrop`属性可以分别指定哪些节点可以拖拽和插入子节点，组件会在不满足的情况下分别
触发`denydrag`和`denydrop`事件来告知用户

```vdt
import {Tree, Input, Icon} from 'kpc';

<Tree 
    draggable
    ev-dragend={this.onDragEnd}
    allowDrag={this.allowDrag}
    allowDrop={this.allowDrop}
    ev-denydrag={this.onDenyDrag}
    ev-denydrop={this.onDenyDrop}
    v-model:data='data'
    v-model:expandedKeys="expandedKeys"
>
    <b:label args="[data, node]">
        <Icon v-if={data.type === 'file'} class="k-icon-paper" />
        <Icon v-else class="k-icon-folder" />
        {data.label}
    </b:label>
</Tree>
```

```styl
.k-tree-text .k-icon
    margin-right 8px
```

```ts
import {Message, TreeDataItem, TreeNode, TreeDragEndData, TreeMode} from 'kpc';

interface Props {
    data?: TreeDataItem<string>[]
    expandedKeys?: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    label: '总览',
                    key: 'summarization',
                    type: 'file',
                },
                {
                    label: '产品简介',
                    key: 'introduction',
                    type: 'file',
                },
                {
                    label: '技术实现',
                    key: 'implemention',
                    type: 'file',
                },
                {
                    label: '操作指南',
                    key: 'guide',
                    type: 'dir',
                    children: [
                        {
                            label: '产品安装',
                            key: 'installation',
                            type: 'file',
                        },
                    ]
                },
                {
                    label: '接入说明',
                    key: 'interaction',
                    type: 'dir',
                    children: [
                        {
                            label: '使用',
                            key: 'usage',
                            type: 'file',
                        },
                    ]
                },
                {
                    label: '禁用文件',
                    key: 'disabled',
                    type: 'file',
                    disabled: true,
                },
            ],
            expandedKeys: [],
        };
    }

    onDragEnd(data: TreeDragEndData<string>) {
        console.log(data);
    }

    allowDrag(node: TreeNode<string>) {
        return node.key !== 'summarization';
    }

    allowDrop(node: TreeNode<string>, srcNode: TreeNode<string>, mode: TreeMode) {
        // 能够将文件拖入文件夹，但是不能讲文件夹拖入文件夹
        if (mode === TreeMode.Inner) {
            // 文件拖入文件夹
            return srcNode.data.type === 'file' && node.data.type === 'dir';
        } else if (srcNode.data.type === 'dir' && node.parent) {
            // 此时插入模式是，前面或者后面插入
            // 如果拖动的是文件夹，但是目标节点存在父元素，代表目标节点也是文件夹，不能插入
            return false
        }

        return true;
    }

    onDenyDrag(node: TreeNode<string>) {
        Message.error(`Cannot drag node: ${node.data.label}.`);
    }

    onDenyDrop(node: TreeNode<string>) {
        Message.error(`Cannot drop to node: ${node.data.label}.`);
    }
}
```

