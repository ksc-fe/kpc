---
title: 隐藏表头
order: 29
---

添加`hideHeader`属性，即可隐藏表头

```vdt
import {Table, TableColumn, Switch} from 'kpc';

<div>
    <p>hideHeader: <Switch v-model="hideHeader" /></p>
    <Table data={this.get('data')} resizable hideHeader={this.get('hideHeader')}>
        <TableColumn key="a" title="Title 1" />
        <TableColumn key="b" title="Title 2" />
    </Table>
</div>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data: [
                {a: 'Cell 1-1', b: 'Cell 1-2'},
                {a: 'Cell 2-1', b: 'Cell 2-2'}
            ],
            hideHeader: true,
        };
    }
}
```
