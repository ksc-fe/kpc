---
title: 滚动到某一行
order: 25 
---

`Table`提供了两个函数，用于滚动到指定的行：`scrollToRowByIndex`和`scrollToRowByKey`，分别通过索引或者`rowKey`
指定滚动到的行

> 需要`fixHeader`固定表头才能生效

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Button, ButtonGroup} from 'kpc/components/button';

<div class="wrapper">
    <ButtonGroup>
        <Button ev-click={{ self.scrollToRowByIndex }}>Scroll to the 20th row</Button>
        <Button ev-click={{ self.scrollToRowByKey }}>Scroll to the "name 25" row</Button>
    </ButtonGroup>
    <Table fixHeader="300"
        data={{ self.get('data') }}
        ref="table"
        rowKey={{ item => item.name }}
    >
        <TableColumn title="Name" key="name" fixed="left" />
        <TableColumn title="IP" key="ip" />
        <TableColumn title="Operation" key="op" fixed="right">
            <b:template params="data">
                <a>Remove</a> 
            </b:template>
        </TableColumn>
    </Table>
</div>
```

```styl
.k-btns
    margin-bottom 16px
```

```js
import {range} from 'kpc/components/utils';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: range(1, 100).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
        }
    }

    scrollToRowByIndex() {
        this.refs.table.scrollToRowByIndex(19);
    }

    scrollToRowByKey() {
        this.refs.table.scrollToRowByKey('name 25');
    }
}
```
