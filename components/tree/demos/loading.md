---
title: 异步加载
order: 1.2
---

添加`load`数据加载函数即可实现异步加载子节点功能，组件会传入当前节点对象作为参数，函数可以返回
数组或者异步返回数组作为当前异步加载的子节点。如果子节点还可以进一步展开，可以将`children`属性
设为空数组`[]`，否则不指定`children`则表示该节点为叶子节点。

组件默认遇到`children`为`[]`空数组的情况就会去进行异步加载，你可以通过`loaded`属性设为`true`来
标识该子节点已经加载完成，无需再次加载

> 组件在该节点数据异步加载完成后，会往原始数据上自动添加`loaded=true`。你也可以手动指定该节点数据
> `loaded=true`，这样即使组件发现该节点数据`children`为空`[]`，也不会去加载了

```vdt
import {Tree} from 'kpc';

<Tree data={this.get('data')} 
    checkbox
    load={this.loadData}
/>
```

```ts
import {bind, TreeProps, TreeNode} from 'kpc';

interface Props {
    data: NonNullable<TreeProps['data']>
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    label: 'parent',
                    children: [
                        {label: 'first child', children: []},
                        {label: 'last child', children: [], loaded: true},
                    ],
                },
            ],
        }
    }

    @bind
    loadData(node: TreeNode<never>) {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                node.data.children = [
                    {label: 'child1', children: []},
                    {label: 'child2'},
                ];
                this.set('data', [...this.get('data')]);

                resolve();
            }, 1000);
        });
    }
}
```
