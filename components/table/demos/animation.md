---
title: 动效
order: 20
---

一个简单的`Table`，点击按钮，即可查看新增表格的动效。

```vdt
import {Table, TableColumn, Button} from 'kpc';

<div>
    <Button type="primary" ev-click={this.addRow}>增加一行</Button>
    <Button type="primary" ev-click={this.removeRow}>删除一行</Button>
    <Button type="primary" ev-click={this.toggleColumn}>
        <template v-if={this.get('isShow')}>删除</template>
        <template v-else>增加</template>
        一列
    </Button>
    <Table data={this.get('data')} resizable rowKey={row => row.a}>
        <TableColumn key="a" title="Title 1" />
        <TableColumn v-if={this.get('isShow')} key="b" title="Title 2"/>
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

interface Props {
    data: any[]
    num: number
    isShow: boolean
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    a: 'Cell 1-1', 
                    b: 'Cell 1-2', 
                    c: 'Cell 1-3'
                },
                {
                    a: 'Cell 2-1', 
                    b: 'Cell 2-2', 
                    c: 'Cell 2-3'
                }
            ],
            num: 3,
            isShow: false,
        }
    }
            
    @bind
    addRow() {
        const num = this.get('num');
        const data = this.get('data').slice();
        data.push({
            a: `Cell ${num}-1`, 
            b: `Cell ${num}-2`, 
            c: `Cell ${num}-3`
        });
        this.set({
            data,
            num: num + 1
        });
    }

    @bind
    removeRow() {
        const data = this.get('data').slice();
        data.shift();
        this.set({data});
    }

    @bind
    toggleColumn() {
        this.set('isShow', !this.get('isShow'));
    }
}
```
