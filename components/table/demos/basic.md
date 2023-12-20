---
title: 基本用法
order: 0
---

一个简单的`Table`，通过`data`属性设置表格展示的数据，通过`TableColumn`
组件定义表格结构，详见”定义表格结构“说明

```vdt
import {Table, TableColumn} from 'kpc';

<Table data={this.get('data')} resizable>
    <TableColumn key="a" title="Title 1" minWidth={200}/>
    <TableColumn key="b" title="Title 2" minWidth={300} />
</Table>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data: [
                {a: 'Cell 1-1', b: 'Cell 1-2'},
                {a: 'Cell 2-1', b: 'Cell 2-2'}
            ]
        };
    }
}
```
