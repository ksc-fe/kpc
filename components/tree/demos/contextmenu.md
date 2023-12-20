---
title: 右键菜单
order: 4
---

利用`label`扩展点，配合`Dropdown`的`contextmenu`触发方式，可以实现右键菜单来操作节点增删

> 当鼠标移动到菜单上时，节点的hover样式将会丢失，但是菜单弹出时，`Dropdown`会给触发元素添加`.k-dropdown-open`的类名，
> 可以用`:has`选择器来添加hover样式。如本例所示

```vdt
import {Tree, Dropdown, DropdownMenu, DropdownItem} from 'kpc';

<div>
    <Tree ref="tree" 
        data={this.get('data')}
        v-model:expandedKeys="expandedKeys"
    >
        <b:label args="[data, node, index]">
            <Dropdown trigger="contextmenu" disabled={data.disabled}>
                <div>{data.label}</div>
                <DropdownMenu>
                    <DropdownItem ev-select={this.appendNode.bind(this, data, node)}>Append</DropdownItem>
                    <DropdownItem ev-select={this.removeNode.bind(this, data, node, index)}>Remove</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </b:label>
    </Tree>
</div>
```

```styl
// 鼠标移动到弹出菜单上，依然展示hover样式
.k-tree-text:has(.k-dropdown-open)
    background: #f3f5f6
```

```ts
import {bind, Tree, TreeDataItem, TreeNode} from 'kpc';

interface Props {
    data: TreeDataItem<string | number>[]
    expandedKeys?: (string | number)[]
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
            ],
            expandedKeys: ['2', '2-1'],
        };
    }

    appendNode(data: TreeDataItem<string | number>, node: TreeNode<string | number>) {
        const children = data.children || (data.children = []);
        children.push({
            label: 'Appended node',
            key: uniqueId++,
        });
        this.set('data', [...this.get('data')]);
        // expand the node
        (this.refs.tree as Tree).expand(node.key);
    }

    removeNode(data: TreeDataItem<string | number>, node: TreeNode<string | number>, index: number) {
        const children = node.parent ? node.parent.data.children! : this.get('data');
        children.splice(index, 1);
        this.set('data', [...this.get('data')]);
    }
}
```
