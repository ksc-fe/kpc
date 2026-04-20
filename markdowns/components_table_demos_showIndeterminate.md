---
title: 取消表头半选中状态
order: 28
---

通过`showIndeterminate`属性可以控制`Table`展示是否支持半选中状态

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <Table 
        data={this.get('data')} 
        resizable 
        ref="__test" 
        showIndeterminate={false}
        checkedKeys={[0]}
    >
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
        }
    }
}
```
