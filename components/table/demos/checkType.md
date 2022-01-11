---
title: 选择框的类型
order: 3
---

通过`checkType`设置行选择类型，`checkbox`多选(默认) / `radio`单选 / `none`不可选

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <Table data={this.get('data1')} ref="__checkbox">
        <TableColumn key="a" title="Title" />
    </Table>
    <Table data={this.get('data2')} checkType="radio" ref="__radio">
        <TableColumn key="a" title="Title" />
    </Table>
    <Table data={this.get('data3')} checkType="none">
        <TableColumn key="a" title="Title" />
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
            data1: [{a: 'checkbox 1'}, {a: 'checkbox 2'}],
            data2: [{a: 'radio 1'}, {a: 'radio 2'}],
            data3: [{a: 'no check 1'}, {a: 'no check 2'}],
        }
    }
}
```
