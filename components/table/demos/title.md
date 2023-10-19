---
title: 自定义title内容
order: 2
---

给表格定义复杂的表头内容，只需要通过`TableColumn` `title`扩展点传入自定义内容即可

```vdt
import {Table, TableColumn, Tooltip, Icon} from 'kpc';

<Table data={this.get('data')}>
    <TableColumn key="a"
        group={[{label: 'test', value: ''}]}
        sortable
    >
        <b:title>
            <span title="自定义表头内容" class="title">自定义表头内容</span>
            <Tooltip content="tooltip content">
                <Icon class="k-icon-question" />
            </Tooltip>
        </b:title>
    </TableColumn>
    <TableColumn key="b" title="表头2" />
</Table>
```

```styl
.k-table
    .title
        margin-right 8px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data: [
                {a: '第一行', b: '哈哈2'},
                {a: '第二行', b: '哈哈2'},
            ]
        };
    }
}
```
