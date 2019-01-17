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
            <div v-else-if={{ a }}>test</div>
            <div v-else>aaa</div>
        </b:label>
    </Tree>
</div>
```

```styl
.wrapper
    width 300px
.k-btns
    float right
.k-node > .k-label:after
    display table
    clear both
    content ''
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
