---
title: footer固定
order: 35
---

`fixFooter`：设置自定义footer固定，类型`boolean`，默认：`false`；
设置为`true`时表示固定高度，`tbody`的高度自适应，但需要自己定义表格高度


```vdt
import {Table, TableColumn} from 'kpc';

<div class="wrapper">
    <Table
        data={[{a: 'footer不固定'}, {a: '下拉'}, {a: 'yeah!'}, {a: '你好'}, {a: '我很好'}]}
    >
        <TableColumn key="a" title="footer不固定" />
        <b:footer>
            <span>自定义footer</span>
        </b:footer>
    </Table>
    <Table
        data={[{a: 'footer固定啦'}, {a: '下拉'}, {a: 'yeah!'}, {a: '你好'}, {a: '我很好'}]}
        fixFooter
    >
        <TableColumn key="a" title="footer固定" />
        <b:footer>
            <span>自定义footer</span>
        </b:footer>
    </Table>
    <Table
        data={[{a: 'footer固定啦'}, {a: '下拉'}, {a: 'yeah!'}, {a: '你好'}, {a: '我很好'}]}
        fixFooter
        fixHeader
    >
        <TableColumn key="a" title="footer，header同时固定" />
        <b:footer>
            <span>自定义footer</span>
        </b:footer>
    </Table>
</div>
```

```styl
.wrapper
    display flex
.k-table
    margin-left: 20px
    flex: 1
.k-table-wrapper
    height: 200px!important
```
