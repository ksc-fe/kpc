---
title: 自定义单元格内容
order: 1
---

通过`TableColumn`的`template`扩展点，可以定义单元格内容。
组件会当前行数据`data`以及索引`index`作为数组传入该扩展点

> 该扩展点有个别名`default`，所以Vue下也可以不用指定`slot`的名称

```vdt
import {Table, TableColumn} from 'kpc';

<Table data={this.get('data')}>
    <TableColumn title='定义该列单元格内容' key='a'>
        <b:template args="[data, index]">
            <a>{data.a}</a>
        </b:template>
    </TableColumn>
    <TableColumn title='key形式' key='b' />
    <TableColumn title='key为一个路径字符串' key='c.c1' />
    <TableColumn title='没有这个key，则返回空' key='d.d1' />
</Table>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data: [
                {
                    a: '虚拟DOM',
                    b: '获取到了item.b',
                    c: {c1: 'item.c.c1'}
                }
            ]
        };
    }
}
```
