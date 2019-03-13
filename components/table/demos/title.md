---
title: 
    zh-CN: 自定义title内容
    en-US: Custom title content
order: 1.1
---

## zh-CN

给表格定义复杂的内容有两种方式，这取决于你使用哪种表格结构定义方式：

1. `scheme`属性定义方式：直接传入`vNode`当做`title`属性
2. `TableColumn`组件定义方式：通过`title`扩展点传入自定义内容

## en-US

There are two ways to define the complex content for table, depending on which table structure you use to define it:

1. defined by `scheme` property: pass the `vNode` as `title` property.
2. defined by `TableColumn` component: pass the custom content by `title` block.

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Tooltip} from 'kpc/components/tooltip';

const scheme = {
    a: {
        title: (
            <template>
                <span title="customize the header content" class="c-middle title">customize the header content</span>
                <Tooltip content="tooltip content">
                    <i class="ion-ios-help-outline c-middle"></i>
                </Tooltip>
            </template>
        ), 
        group: [{label: 'test', value: ''}],
        sortable: true,
    },
    b: 'header 2'
};
const data = [{a: 'first row', b: 'content 1'}, {a: 'second row', b: 'content 2'}];

<div>
    <Table scheme={{ scheme }} data={{ data }} />
    <Table data={{ data }}>
        <TableColumn key="a"
            group={{ [{label: 'test', value: ''}] }}
            sortable
        >
            <b:title>
                <span title="customize the header content" class="c-middle title">customize the header content</span>
                <Tooltip content="tooltip content">
                    <i class="ion-ios-help-outline c-middle"></i>
                </Tooltip>
            </b:title>
        </TableColumn>
        <TableColumn key="b" title="header 2" />
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
                        <span title="customize the header content" class="c-middle title">customize the header content</span>
                        <Tooltip content="tooltip content">
                            <i class="ion-ios-help-outline c-middle"></i>
                        </Tooltip>
                    </div>
                ), 
                group: [{label: 'test', value: ''}],
                sortable: true,
            },
            b: 'header 2'
        },
        data: [{a: 'first row', b: 'content 1'}, {a: 'second row', b: 'content 2'}],
    }
}
```
