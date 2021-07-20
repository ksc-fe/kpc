---
title: 类型
order: 19
---

通过`type`设置表格的类型：`default` | `border` | `grid`

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<div>
    <Table data={this.get('data1')} type="border">
        <TableColumn key="a" title="Type" />
        <TableColumn key="b" title="Value" />
    </Table>
    <Table data={this.get('data2')} type="grid">
        <TableColumn key="a" title="Type" />
        <TableColumn key="b" title="Value" />
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 20px
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data1: [{a: 'type', b: 'border'}],
            data2: [{a: 'type', b: 'grid'}] 
        }
    }
}
```
