---
title: 隐藏列
order: 31
---

通过`TableColumn`的`hidden`属性配置隐藏列

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <Table data={this.get('data')} resizable>
        <TableColumn key="a" title="Title 1" minWidth={200}/>
        <TableColumn key="b" title="Title 2" minWidth={300} hidden/>
        <TableColumn key="c" title="Title 3"/>
    </Table>
    <p>无数据展示</p>
    <Table data={this.get('data2')} resizable>
        <TableColumn key="a" title="Title 1" hidden />
        <TableColumn key="b" title="Title 2" />
        <TableColumn key="c" title="Title 3"/>
    </Table>
    <Table data={this.get('data2')} resizable checkType="none">
        <TableColumn key="a" title="Title 1" hidden />
        <TableColumn key="b" title="Title 2" />
        <TableColumn key="c" title="Title 3" hidden />
        <TableColumn key="d" title="Title 4"/>
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
            data: [
                {a: 'Cell 1-1', b: 'Cell 1-2', c: 'cell 1-3'},
                {a: 'Cell 2-1', b: 'Cell 2-2', c: 'cell 2-3'}
            ],
            data2: []
        };
    }
}
```
