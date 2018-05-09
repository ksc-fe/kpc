---
title: 自定义无内容时的展示信息
order: 9
---

当data为`[]`时, 可设置`noDataTemplate`来展示你想展示的信息（默认为： /(ㄒoㄒ)/~~ 没有找到亲要的数据哦~）。
或者你也可以通过`no-data`扩展点，来定义内容

```vdt
import Table from 'kpc/components/table';

var scheme = {a: '表头1', b: '表头2'};
var data = [];
var tip = <div>这里没有数据(自定义版本)</div>;

<div class='no-data-template'>
    <Table scheme={{ scheme }} data={{ data }} />
    <Table scheme={{ scheme }} data={{ data }} noDataTemplate={{ tip }} />
    <Table scheme={{ scheme }} data={{ data }}>
        <b:no-data>
            <div style="color: red">没有数据</div>
        </b:no-data>
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    .k-table-wrapper
        margin-left: 10px
```







