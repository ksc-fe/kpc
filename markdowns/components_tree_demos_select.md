---
title: 多选
order: 1.1
---

添加`multiple`属性，可以支持节点多选，通过`getCheckedData()`方法，可以获取选中的节点数据

```vdt
import {Tree} from 'kpc';
import {Button} from 'kpc';

<div>
    <Button ev-click={this.getSelectedData}>get selected data</Button>
    <br />
    <br />
    <Tree data={this.get('data')} 
        ref="tree"
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
        multiple
    />
</div>
```

```styl
.k-btn
    margin-right 16px
```

```ts
import {bind} from 'kpc';

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
                    key: 'floor-2',
                    children: [
                        {
                            label: 'Second floor-2.1',
                            key: 'floor-2.1',
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
            selectedKeys: ['floor-2.1.1'],
            expandedKeys: ['floor-2', 'floor-2.1', 'floor-2.1.1']
        }
    }

    @bind
    getSelectedData() {
        console.log(this.refs.tree.getSelectedData());
    }
}
```
