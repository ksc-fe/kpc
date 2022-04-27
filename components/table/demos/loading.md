---
title: 加载状态 
order: 21
---

给`Table`添加`loading`属性，即可展示加载状态

```vdt
import {Table, TableColumn, Checkbox} from 'kpc';

<div>
    <Table 
        data={this.get('data')}
        loading={this.get('loading')}
    >
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
    <Checkbox v-model="loading">是否展示loading状态</Checkbox>
</div>
```

```styl
.k-table
    margin-bottom 20px
```

```ts
interface Props {
    loading?: boolean
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            loading: true,
            data: [
                {a: '第一行', b: '哈哈1'}, 
                {a: '第二行', b: '哈哈2'},
                {a: '第三行', b: '哈哈3'}
            ]
        };
    }
}
```
