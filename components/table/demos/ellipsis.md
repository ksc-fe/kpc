---
title: 超长省略
order: 34
---

通过设置`TableColumn`的`ellipsis`属性，可以指定列超长省略

```vdt
import {Table, TableColumn} from 'kpc';

<Table data={this.get('data')} resizable>
    <TableColumn key="a" title="Title 1" minWidth={200} ellipsis/>
    <TableColumn key="b" title="Title 2" minWidth={300} />
</Table>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data: [
                {a: '测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长', b: 'Cell 1-2'},
                {a: 'Cell 2-1', b: 'Cell 2-2'}
            ]
        };
    }
}
```
