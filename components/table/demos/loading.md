---
title: 加载状态 
order: 13 
---

给`Table`添加`loading`属性，即可展示加载状态

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Switch} from 'kpc/components/switch';

<div>
    <Table 
        data={{ [
            {a: '第一行', b: '哈哈1'}, 
            {a: '第二行', b: '哈哈2'},
            {a: '第三行', b: '哈哈3'}
        ] }}
        loading={{ !!self.get('loading') }}
    >
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
    切换loading状态: <Switch v-model="loading"></Switch>
</div>
```

```styl
.k-table
    margin-bottom 20px
```
