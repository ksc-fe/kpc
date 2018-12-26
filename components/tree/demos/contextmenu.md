---
title: 右键菜单
order: 4
---

绑定`rightclick:node`并利用`DropdownMenu`可以实现右键菜单来操作节点增删

```vdt
import Tree from 'kpc/components/tree';
import {DropdownMenu, DropdownItem} from 'kpc/components/dropdown';

<div>
    <Tree 
        data={{ [
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
        ] }}
        v-model:expandedKeys="expandedKeys"
        ev-rightclick:node={{ self._showMenu }}
    />
    <DropdownMenu v-model="show"
        of={{ self.get('event') }}
        position={{ {my: 'left+1 top', at: 'right bottom'} }}
    >
        <DropdownItem ev-select={{ self._appendNode }}>Append</DropdownItem>
        <DropdownItem ev-select={{ self._removeNode }}>Remove</DropdownItem>
    </DropdownMenu>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['2', '2-1'],
            show: false,
            event: null,
            node: null,
        };
    }

    _showMenu(node, e) {
        e.preventDefault();
        this.set({
            show: true, 
            event: e,
            node: node,
        });
    }

    _appendNode() {
        this.get('node').append({
            label: 'Appended node',
        });
    }

    _removeNode() {
        this.get('node').remove();
    }
}
```

```vue-methods
_showMenu(node, e) {
    e.preventDefault();
    this.show = true;
    this.event = e;
    this.node = node;
}
```
