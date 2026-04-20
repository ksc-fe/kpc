---
title: 行选中
order: 4
---

通过`checkedKeys`来控制哪些列被选中，默认他们的取值为行`key`组成的数组。通过`rowKey`函数为每一行
指定唯一的`key`，否则`key`和行号`index`等价

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <div class='tables'>
        <Table data={this.get('data1')} checkedKeys={[0]} checkType='radio'>
            <TableColumn key="a" title="Radio without rowKey" />
        </Table>
        <Table data={this.get('data2')} checkType='radio' rowKey={this.setRowKey} checkedKeys={['yes']}>
            <TableColumn key="text" title="Radio with rowKey" />
        </Table>
    </div>
    <div class='tables'>
        <Table data={this.get('data3')} checkedKeys={[0, 2]}>
            <TableColumn key="a" title="checkbox without rowKey" />
        </Table>
        <Table data={this.get('data2')} rowKey={this.setRowKey} checkedKeys={['yes']}>
            <TableColumn key="text" title="checkbox with rowKey" />
        </Table>
    </div>
</div>
```

```styl
.tables
    display: flex
    margin-bottom: 20px
    .k-table
        margin-left: 20px
```

```ts
interface Props {
    data1: DataItem1[]
    data2: DataItem2[]
    data3: DataItem1[]
}

type DataItem1 = {
    a: string
}

type DataItem2 = {
    text: string
    id: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data1: [{a: 'default checked by index'}, {a: 'unchecked'}],
            data2: [{text: 'default checked by rowKey', id: 'yes'}, {text: 'unchecked', id: 'no'}],
            data3: [{a: 'default checked by index'}, {a: 'unchecked'}, {a: 'default checked'}],
        }
    }

    setRowKey(value: DataItem2, index: number) {
        return value.id;
    }
}
```
