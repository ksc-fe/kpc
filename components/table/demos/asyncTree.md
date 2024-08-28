---
title: 树形表格异步加载
order: 33
---

添加`load`数据加载函数即可实现异步加载子节点功能，组件会传入当前节点对象作为参数，函数可以返回
数组或者异步返回数组作为当前异步加载的子节点。如果子节点还可以进一步展开，可以将`children`属性
设为空数组`[]`，否则不指定`children`则表示该节点为叶子节点。

组件默认遇到`children`为`[]`空数组的情况就会去进行异步加载，你可以通过`loaded`属性设为`true`来
标识该子节点已经加载完成，无需再次加载

> 组件在该行数据异步加载完成后，会往原始数据上自动添加`loaded=true`。你也可以手动指定某行数据
> `loaded=true`，这样即使组件发现该行数据`children`为空`[]`，也不会去加载了

```vdt
import {Table, TableColumn} from 'kpc';

<Table data={this.get('data')} rowKey={data => data.name} load={this.loadData}>
    <TableColumn key="name" title="Name" />
    <TableColumn key="size" title="Size">
        <b:template args="[data]">
            {data.size}MB
        </b:template>
    </TableColumn>
</Table>
```

```ts
import {bind} from 'kpc';
interface Props {
    data: NonNullable<any>
}
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    name: 'Audios', 
                    size: 12,
                    children: []
                },
                {
                    name: 'Images', 
                    size: 14,
                    children: []
                },
                {
                    name: 'doc.pdf', 
                    size: 18,
                },
            ]
        }
    }

    @bind
    loadData(node: any) {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                node.children = [
                    {name: 'child1', size: 17},
                    {name: 'child2', size: 15, loaded: true},
                ];
                this.set('data', [...this.get('data')]);

                resolve();
            }, 2000);
        });
    }
}
```
