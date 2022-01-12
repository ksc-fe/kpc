---
title: 筛选
order: 4 
---

指定`filterable`支持筛选，组件会同时对节点的`label`和`key`进行筛选，你也可以通过`filter`属性来自定义筛选函数

```vdt
import {TreeSelect} from 'kpc';

<TreeSelect
    v-model="value"
    data={this.get('data')}
    filterable
/>
```

```ts
interface Props {
    value?: string
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            value: '',
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
        }
    }
}
```
