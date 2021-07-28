---
title: 行高亮
order: 5
---

给`Table`添加`rowSelectable`属性，可以让表格点击行时高亮改行，你可以指定值为`multiple`来支持多行
高亮。类似`checkedKeys`，我们可以通过`selectedKeys`来绑定高亮行的`key`，当高亮的行改变时，组件也会
抛出`$change:selectedKeys`事件，我们可以通过`getSelectedData`来获取高亮行的数据

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<div>
    <Table data={this.get('data')} 
        rowSelectable
        ev-$change:selectedKeys={this.onSelectedKeysChanged}
        rowCheckable={false}
        ref="__test1"
    >
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
    <Table data={this.get('data')}
        rowSelectable="multiple"
        rowCheckable={false}
        ref="__test2"
    >
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
</div>
```

```styl
.k-table
    margin-bottom: 20px
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [{a: '第一行', b: '哈哈'}, {a: '第二行', b: '哈哈'}]
        };
    }

    @bind
    onSelectedKeysChanged() {
        console.log(this.refs.__test1.getSelectedData());
    }
}
```
