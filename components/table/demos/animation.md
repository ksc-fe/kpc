---
title: 动效
order: 20
---

上面是一个简单的`Table`，点击按钮，即可查看新增表格的动效。

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Button} from 'kpc/components/button';
const {data, num, isShow} = this.get();

<div>
    <Button type="primary" ev-click={this.addRow}>增加一行</Button>
    <Button type="primary" ev-click={this.addColumn}>增加一列</Button>
    <Table data={data} resizable>
        <TableColumn key="a" title="Title 1" />
        {isShow && <TableColumn key="b" title="Title 2"/>}
        <TableColumn key="c" title="Title 3" />
    </Table>
</div>
```

```styl
.k-btn
    margin-right 20px
.k-table, .k-btn
    margin-bottom 20px
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [{a: 'Cell 1-1', b: 'Cell 1-2', c: 'Cell 1-3'}, {a: 'Cell 2-1', b: 'Cell 2-2', c: 'Cell 2-3'}],
            num: 3,
            isShow: false,
        }
    }
            
    @bind
    addRow() {
      let {data, num} = this.get();
      data.push({a: `Cell ${num}-1`, b: `Cell ${num}-2`, c: `Cell ${num}-3`});
      this.set({
        data: data,
        num: ++num
      });
    }

    @bind
    addColumn() {
      let {isShow} = this.get();
      this.set({
        isShow: true,
      });
    }
}
```
