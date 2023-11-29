---
title: 默认展开所有节点
order: 7
---

给组件添加`defaultExpandAll`属性，可以默认展开所有节点

> `@before v3.1.0` 仅限首次渲染`Tree`时生效，后续添加节点不会默认展开
> `@since v3.1.0` 当首次渲染时，如果不存在`data`或者`data`为空数组，则待接收到新的`data`后，展开所有节点

```vdt
import {Tree, Button} from 'kpc';

<div class="wrapper">
    <Tree
        defaultExpandAll
        data={this.get('data')}
    />
    <Tree
        defaultExpandAll
        data={this.get('delayData')}
    />
    <Button ev-click={this.load}>加载数据</Button>
</div>
```

```styl
.wrapper
    display flex
    gap 18px
```

```ts
import {bind, TreeDataItem} from 'kpc';

interface Props {
    data: TreeDataItem<string>[]
    delayData?: TreeDataItem<string>[]
}

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

            delayData: undefined
        }
    }

    @bind
    load() {
        this.set('delayData', this.get('data'));
    }
}
```
