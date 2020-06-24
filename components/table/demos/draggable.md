---
title: 行可拖动
order: 26
---

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Button, ButtonGroup} from 'kpc/components/button';

<Table fixHeader="300"
    data={{ self.get('data') }}
    ref="table"
    rowKey={{ item => item.name }}
    draggable
>
    <TableColumn title="Name" key="name"/>
    <TableColumn title="IP" key="ip" />
    <TableColumn title="Operation" key="op">
        <b:template params="data, index">
            <a ev-click={{ self._remove.bind(self, index) }}>Remove</a> 
        </b:template>
    </TableColumn>
</Table>
```

```js
import {range} from 'kpc/components/utils';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        window.i = this;
        return {
            data: range(1, 100).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
        }
    }

    _remove(index) {
        const data = this.get('data').slice(0);
        data.splice(index, 1);
        this.set('data', data);
    }
}
```
