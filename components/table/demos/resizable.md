---
title: 表头是否可拖动
order: 20
---

`resizable`：表头是否可拖动，类型`Boolean`，`false`(默认)。`Table`支持持久化存储列宽信息，只需要通过
`widthStoreKey`指定保存到`localStorage`中的`key`就可以了，这样下次渲染`Table`时会使用上次的列宽信息
进行渲染

> `widthStoreKey`必须在当前域名下唯一

```vdt
import {Table, TableColumn} from 'kpc';

const {data} = this.get();

<Table 
    data={data}
    resizable
    minColWidth={100}
    type="grid"
    widthStoreKey="resizableTable"
>
    <TableColumn key="a" title="通过minColWidth控制最小宽度100px" width="50%" />
    <TableColumn key="none" title="隐藏列" class="hidden" />
    <TableColumn key="b" title="单独设置最小宽度300px" width="10%" minWidth={300} />
    <TableColumn key="c" title="标题" width="40%" />
</Table>
```

```styl
.hidden
    display none
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [{a: 'A', b: 'B', c: 'C'}, {a: 'A', b: 'B', c: 'C'}]
        }
    }
}
```
