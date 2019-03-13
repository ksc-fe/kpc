---
title: 
    zh-CN: 定义表格结构
    en-US: Defining the table structure
order: 1
---

## zh-CN

定义表格结构有两种形式：

1. 通过`TableColumn`组件定义 
2. 通过`scheme`属性定义

`TableColumn`的详细说明，见下文属性说明，`scheme`属性值的结构与之相对应

> 对于简单的表格，默认会使用`key`去取`data`中的数据，例如本例中，`key`为`a`的列，默认会取
> `data`中对应`key`为`a`的数据进行展示，`key`支持路径取值，例如：`a.b.0`。当然我们也可以
> 通过`template`属性指定复杂内容

> 为了保证列顺序正确，`key`不要以数字开头

> `@since v0.5.6` 也可以通过`template`block定义单元格内容

## en-US

There are two ways for defining the table structure:

1. defined by the `TableColumn` component
2. defined by the `scheme` property

For details, `TableColumn` description , see properties description below, its properties correspond to the `scheme` property structure.

> The simple table use `key` to fetch the data in the `data` by default, for example,in the present embodiment,the `key` as a `a` column, it will take the corresponding `key` in `data` as the `a` displayed  data by default . `key` support path value, for example:`a.b.0`. of course,we can also specify the complex content by `template` property.

> In order to ensure the correct order，the `key` don't start with a number 

> `@since v0.5.6`, You can also define the cell content by `template` block

```vdt
import {Table, TableColumn} from 'kpc/components/table';

const data = [{a: 'Virtual DOM', b: 'get the item.b', c: {c1: 'item.c.c1'}}];
const scheme = {
    a: {
        title: 'define the column cell content',
        template: function(item) {
           return <a>{{ item.a }}</a>
        }
    },
    b: 'key form',
    'c.c1': 'key is a path string',
    'd.d1': 'if no key，return empty',
};

<div>
    <Table scheme={{ scheme }} data={{ data }} />
    <Table data={{ data }}>
        <TableColumn 
            title='define the column cell content'
            template={{ function(item) {
                return <a>{{ item.a }}</a>
            } }} 
            key='a'
        />
        <TableColumn title='key form' key='b' />
        <TableColumn title='key is a path string' key='c.c1' />
        <TableColumn title='if no key，return empty' key='d.d1' />
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
            title='define the column cell content'
            key='a'
        >
            <a slot-scope="item">{{ item.a }}</a>
        </TableColumn>
        <TableColumn title='key form' key='b' />
        <TableColumn title='key is a path string' key='c.c1' />
        <TableColumn title='if no key，return empty' key='d.d1' />
    </Table>
</div>
```

```vue-data
data() {
    return {
        scheme: {
            a: {
                title: 'define the column cell content',
                template: function(item) {
                    return <a>{item.a}</a>
                }
            },
            b: 'key form',
            'c.c1': 'key is a path string',
            'd.d1': 'if no key，return empty', 
        },
        data: [{a: 'Virtual DOM', b: 'get the item.b', c: {c1: 'item.c.c1'}}]
    }
}
```

```jsx
import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class extends React.Component {
    render() {
        const data = [{a: 'Virtual DOM', b: 'get the item.b', c: {c1: 'item.c.c1'}}];
        const scheme = {
            a: {
                title: 'define the column cell content',
                template: function(item) {
                   return <a>{item.a}</a>
                }
            },
            b: 'key form',
            'c.c1': 'key is a path string',
            'd.d1': 'if no key，return empty',
        };
    
        return (
            <div>
                <Table scheme={scheme} data={data} />
                <Table data={data}>
                    <TableColumn 
                        title='define the column cell content'
                        template={(item) => {
                            return <a>{item.a}</a>
                        }}
                        key='a'
                    />
                    <TableColumn title='key form' key='b' />
                    <TableColumn title='key is a path string' key='c.c1' />
                    <TableColumn title='if no key，return empty' key='d.d1' />
                </Table>
            </div>
        )
    }
}
```
