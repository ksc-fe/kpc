---
title: 复选框
order: 2
---

该组件添加`checkbox`属性即可展示带复选框的下拉树，此时组件最终的取值规则为：

1. 如果父节点已勾选，则获取父节点的取值
2. 如果父节点未勾选，则获取叶子节点取值

```vdt
import {TreeSelect} from 'kpc';

<TreeSelect
    v-model="values"
    checkbox
    data={this.get('data')}
/>
```

```ts
import {TreeDataItem} from 'kpc';

interface Props {
    values?: string[]
    data: TreeDataItem<string>[]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            values: [],
            data: [
                {
                    label: 'First floor-1',
                    key: '1',
                    children: [
                        {
                            label: 'Second floor-1.1',
                            key: '1.1',
                            children: [
                                {
                                    label: 'Third floor-1.1.1',
                                    key: '1.1.1'
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
                            key: '2.1',
                            children: [
                                {
                                    label: 'Third floor-2.1.1',
                                    key: '2.1.1' 
                                },
                                {
                                    label: 'Third floor-2.1.2',
                                    key: '2.1.2'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.2',
                            disabled: true,
                            key: '2.2',
                            children: [
                                {
                                    label: 'Third floor-2.2.1',
                                    key: '2.2.1'
                                }
                            ]
                        }
                    ]
                }
            ]
        } as Props;
    }
}
```
