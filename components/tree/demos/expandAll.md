---
title: 默认展开所有节点
order: 7
---

给组件添加`defaultExpandAll`属性，可以默认展开所有节点

> 仅限首次渲染`Tree`时生效，后续添加节点不会默认展开

```vdt
import {Tree} from 'kpc';

<Tree
    defaultExpandAll
    data={this.get('data')}
/>
```

```ts
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
            ]
        }
    }
}
```
