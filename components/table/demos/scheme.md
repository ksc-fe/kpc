---
title: 定义表格结构
order: 1
---

定义表格结构有两种形式：

1. 通过`TableColumn`组件定义 
2. 通过`scheme`属性定义

`TableColumn`详细说明，见下文属性说明，`scheme`属性值的结构与之相对应

> 对于简单的表格，默认会使用`key`去取`data`中的数据，例如本例中，`key`为`a`的列，默认会取
> `data`中对应`key`为`a`的数据进行展示，`key`支持路径取值，例如：`a.b.0`。当然我们也可以
> 通过`template`属性指定复杂内容

> 为了保证列顺序正确，`key`不要以数字开头

> `@since v0.5.6` 也可以通过`template`block定义单元格内容

```vdt
import {Table, TableColumn} from 'kpc/components/table';

const data = [{a: '虚拟DOM', b: '获取到了item.b', c: {c1: 'item.c.c1'}}];
const scheme = {
    a: {
        title: '定义该列单元格内容',
        template: function(item) {
           return <a>{{ item.a }}</a>
        }
    },
    b: 'key形式',
    'c.c1': 'key为一个路径字符串',
    'd.d1': '没有这个key，则返回空',
};

<div>
    <Table scheme={{ scheme }} data={{ data }} />
    <Table data={{ data }}>
        <TableColumn 
            title='定义该列单元格内容'
            template={{ function(item) {
                return <a>{{ item.a }}</a>
            } }} 
            key='a'
        />
        <TableColumn title='key形式' key='b' />
        <TableColumn title='key为一个路径字符串' key='c.c1' />
        <TableColumn title='没有这个key，则返回空' key='d.d1' />
    </Table>
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
```

```vue-template
<div>
    <Table :scheme="scheme" :data="data" />
    <Table :data="data">
        <TableColumn 
            title='定义该列单元格内容'
            key='a'
        >
            <a slot-scope="item">{{ item.a }}</a>
        </TableColumn>
        <TableColumn title='key形式' key='b' />
        <TableColumn title='key为一个路径字符串' key='c.c1' />
        <TableColumn title='没有这个key，则返回空' key='d.d1' />
    </Table>
</div>
```

```vue-data
data() {
    return {
        scheme: {
            a: {
                title: '定义该列单元格内容',
                template: function(item) {
                    return <a>{item.a}</a>
                }
            },
            b: 'key形式',
            'c.c1': 'key为一个路径字符串',
            'd.d1': '没有这个key，则返回空', 
        },
        data: [{a: '虚拟DOM', b: '获取到了item.b', c: {c1: 'item.c.c1'}}]
    }
}
```

```jsx
import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class extends React.Component {
    render() {
        const data = [{a: '虚拟DOM', b: '获取到了item.b', c: {c1: 'item.c.c1'}}];
        const scheme = {
            a: {
                title: '定义该列单元格内容',
                template: function(item) {
                   return <a>{item.a}</a>
                }
            },
            b: 'key形式',
            'c.c1': 'key为一个路径字符串',
            'd.d1': '没有这个key，则返回空',
        };
    
        return (
            <div>
                <Table scheme={scheme} data={data} />
                <Table data={data}>
                    <TableColumn 
                        title='定义该列单元格内容'
                        template={(item) => {
                            return <a>{item.a}</a>
                        }}
                        key='a'
                    />
                    <TableColumn title='key形式' key='b' />
                    <TableColumn title='key为一个路径字符串' key='c.c1' />
                    <TableColumn title='没有这个key，则返回空' key='d.d1' />
                </Table>
            </div>
        )
    }
}
```
