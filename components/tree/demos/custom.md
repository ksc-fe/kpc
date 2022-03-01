---
title: 自定义节点内容
order: 2
---

通过`label`扩展点，可以自定义节点的内容。该扩展点会传入两个参数：

1. `data` 节点的原始数据
2. `node` 节点对象（组件内部会将节点数据映射成节点对象，该对象上有一些属性和方法）

`node`对象具有如下方法用来操作节点：

1. `append(data)` 追加子节点，`data`可以是单个对象或者对象数组
2. `remove()` 移除该节点

组件默认会生成一个`root`节点对象，你可以通过它往根节点追加子节点

```vdt
import {Tree, Button, ButtonGroup} from 'kpc';

const data = this.get('data');

<div class="wrapper">
    <ButtonGroup class="root-btns">
        <Button icon size="small" ev-click={this.appendToRoot}>+</Button>
    </ButtonGroup>
    <Tree data={data} ref="tree" checkbox selectable={false}>
        <b:label args="[data, node, index]">
            <div class="text">{data.label}</div>
            <ButtonGroup v-if={!data.disabled}>
                <Button icon size="small" ev-click={this.append.bind(this, data, node, index)}>+</Button>
                <Button icon size="small" ev-click={this.remove.bind(this, data, node, index)}>-</Button>
            </ButtonGroup>
        </b:label>
    </Tree>
</div>
```

```styl
.wrapper
    width 300px
.root-btns
    display flex
    justify-content flex-end
    margin-right 26px
.k-tree-text
    display flex
    .text
        flex 1
```

```ts
import {bind, TreeDataItem, TreeNode} from 'kpc';

interface Props {
    data: TreeDataItem<string | number>[]
}

let uniqueId = 0;
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
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
                                    label: 'Third floor-2.1.1',
                                    key: 'floor-2.1.1',
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
            ],
        }
    }

    @bind
    append(data: TreeDataItem<string | number>, node: TreeNode<string>, index: number, e: Event) {
        e.stopPropagation();

        const children = data.children || (data.children = []);
        children.push({
            label: 'Appended node',
            key: uniqueId++,
        });
        this.set({data: [
            ...this.get('data')
        ]});

        // expand the node
        this.refs.tree.expand(node.key);
    }

    @bind
    remove(data: TreeDataItem<string>, node: TreeNode<string>, index: number, e: Event) {
        e.stopPropagation();

        const children = node.parent ? node.parent.data.children : this.get('data');
        children!.splice(index, 1);
        this.set({data: [
            ...this.get('data'),
        ]});
    }

    @bind
    appendToRoot() {
        const data = this.get('data');
        this.set({data: [
            ...data,
            {
                label: 'Appended root node',
                key: uniqueId++,
            }
        ]});
    }
}
```
