---
title: 自定义title内容
order: 1.1
---

给表格定义复杂的内容有两种方式，这取决于你使用哪种表格结构定义方式：

1. `scheme`属性定义方式：直接传入`vNode`当做`title`属性
2. `TableColumn`组件定义方式：通过`title`扩展点传入自定义内容

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Tooltip} from 'kpc/components/tooltip';

const scheme = {
    a: {
        title: (
            <template>
                <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                <Tooltip content="tooltip content">
                    <i class="ion-ios-help-outline c-middle"></i>
                </Tooltip>
            </template>
        ), 
        group: [{label: 'test', value: ''}],
        sortable: true,
    },
    b: '表头2'
};
const data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];

<div>
    <Table scheme={{ scheme }} data={{ data }} />
    <Table data={{ data }}>
        <TableColumn key="a"
            group={{ [{label: 'test', value: ''}] }}
            sortable
        >
            <b:title>
                <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                <Tooltip content="tooltip content">
                    <i class="ion-ios-help-outline c-middle"></i>
                </Tooltip>
            </b:title>
        </TableColumn>
        <TableColumn key="b" title="表头2" />
    </Table>
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
    .title
        margin-right 8px
    .ion-ios-help-outline
        line-height 14px
```

```vue-data
data() {
    return {
        scheme: {
            a: {
                title: (
                    <div>
                        <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                        <Tooltip content="tooltip content">
                            <i class="ion-ios-help-outline c-middle"></i>
                        </Tooltip>
                    </div>
                ), 
                group: [{label: 'test', value: ''}],
                sortable: true,
            },
            b: '表头2'
        },
        data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
    }
}
```
