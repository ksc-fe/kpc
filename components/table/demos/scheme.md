---
title: 定义表头信息
order: 1
---

第一种定义形式（传值）：`scheme`：定义表头信息，类型`Object`，默认`{}`
* ** `{key: value}` 说明：**

| 形式 | 描述 |
| --- | --- |
| key-{String} | 根据每一行的`item`，获取`key`属性；若`key`为一个连续获取的字符（即：`item.c.c1`）会逐级获取，若没获取到，则为`undefined`。 |
| key-{Object} | `key`只作为这个表头的`ID`，实际获取的值为`{Object}`内`template`的返回值。`{Object}`内的`title`为要展示的表头信息，`template`方法返回这列要展示的数据（参数接收：每一行的`item`）。 |

* PS：`template`可以返回一个具体的值，也可以返回一个虚拟DOM。
***
另一种定义形式（标签）：`<TableColumn></TableColumn>`
* ** `<TableColumn />`属性描述：**

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 表头信息 | `String` | `[]` |
| template | 当前列的返回数据（遵守`{key-value}`形式中的规则） | `Function` | `(data, index) { }` |
| key | 行的key值（遵守`{key-value}`形式中的规则） | `String` | `""` |
| width | 列宽 | `Number` | `undefined` |



```vdt
import Table, {TableColumn} from 'kpc/components/table';
var data = [{a: '虚拟DOM', b: '获取到了item.b', c: {c1: 'item.c.c1'}, e: '值形式'}];
var scheme = {
    a: {
        title: 'a只是个id',
        template: function(item) {
           return <a>{{item.a}}</a>
        }
    },
    b: 'key-{String}形式',
    'c.c1': 'key为一个连续获取的字符串',
    'd.d1': '没有这个key',
    e: {
        title: 'e也只是个id',
        template: function(item) {
           return item.e;
        }
    },
};


<div>
    <p>{key: value}形式:</p>
    <Table scheme={{scheme}} data={{data}} />
    <p>标签形式:</p>
    <Table data={{data}}>
      <TableColumn title='a' template={{ function(item) {
         return <a>{{item.a}}</a>
      } }} key=''></TableColumn>
      <TableColumn title='key为一个连续获取的字符' key='c.c1'></TableColumn>
      <TableColumn title='key为一个连续获取的字符' key='e'>
          <div>不生效</div>
      </TableColumn>
      <TableColumn title='这个宽度大一点400px' key='b' width='400'/>
    </Table>
</div>
```









