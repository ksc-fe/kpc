---
title: 自定义节点内容
order: 2
---

```vdt
import Tree from 'kpc/components/tree';
import {Button, ButtonGroup} from 'kpc/components/button';

const data = self.get('data');

<div class="wrapper">
    <div class="c-clearfix">
        <ButtonGroup>
            <Button icon size="small" ev-click={{ self._appendToRoot }}>+</Button>
        </ButtonGroup>
    </div>
    <Tree data={{ data }} ref="tree" checkbox>
        <b:label params="data, node">
            <span class="k-text">{{ data.label }}</span>
            <ButtonGroup v-if={{ !data.disabled }}>
                <Button icon size="small" ev-click={{ self._append.bind(self, node) }}>+</Button>
                <Button icon size="small" ev-click={{ self._remove.bind(self, node) }}>-</Button>
            </ButtonGroup>
        </b:label>
    </Tree>
</div>
```

```styl
.wrapper
    width 300px
.k-btns
    float right
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
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

    _append(node) {
        node.append({
            label: 'Appended node',
        });
    }

    _remove(node) {
        node.remove();
    }

    _appendToRoot() {
        this.refs.tree.root.append({
            label: 'Appended root node'
        });
    }
}
```
