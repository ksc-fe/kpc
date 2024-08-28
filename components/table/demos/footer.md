---
title: 自定义footer
order: 32
---


```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <Table data={this.get('data')} resizable>
        <TableColumn key="a" title="Title 1" minWidth={200}/>
        <TableColumn key="b" title="Title 2" minWidth={300}/>
        <b:footer>
            <div class="footer">自定义底部</div>
        </b:footer>
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
                {a: 'Cell 1-1', b: 'Cell 1-2'},
                {a: 'Cell 2-1', b: 'Cell 2-2'}
            ],
        };
    }
}
```
