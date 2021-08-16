---
title: 右键菜单
order: 4
---

绑定`rightclick:node`并利用`DropdownMenu`可以实现右键菜单来操作节点增删

```vdt
import {Tree} from 'kpc/components/tree';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';

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

```ts
import {bind} from 'kpc/components/utils';

let uniqueId = 0;
export default class extends Component {
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

    appendNode(data, node) {
        const children = data.children || (data.children = []);
        children.push({
            label: 'Appended node',
            key: uniqueId++,
        });
        this.set('data', [...this.get('data')]);
        // expand the node
        this.refs.tree.expand(node.key);
    }

    removeNode(data, node, index) {
        const children = node.parent ? node.parent.data.children : this.get('data');
        children.splice(index, 1);
        this.set('data', [...this.get('data')]);
    }
}
```
