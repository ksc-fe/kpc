---
title: 表头固定
order: 10
---

`fixHeader`：设置表头固定，类型`boolean` | `number`，默认：`false`

1. 如果取值为`boolean`，`false`表示不固定表头，`true`表示固定高度，`tbody`的高度自适应，但需要自己定义表格高度
2. 如果取值为`number`，则表示，当表格超出该高度时即展示滚动条，并固定表头

```vdt
import {Table, TableColumn} from 'kpc';

<div class="wrapper">
    <Table
        data={[{a: '表头固定，但内容没有超出最高高度'}]}
        fixHeader="100"
    >
        <TableColumn key="a" title="100px" />
    </Table>
    <Table data={this.get('data')} fixHeader="300">
        <TableColumn title="Name" key="name" fixed="left" />
        <TableColumn title="IP" key="ip" />
    </Table>
</div>
```

```styl
.wrapper
    display flex
    align-items flex-start
.k-table
    margin-left: 20px
    flex: 1
```

```ts
import {range, bind} from 'kpc/components/utils';

const data =  range(1, 100).map(item => {
    return {
        name: 'name ' + item,
        ip: '127.0.0.' + item
    };
});

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: data
        }
    }
}
```
