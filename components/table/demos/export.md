---
title: 导出表格
order: 22
---

调用`Table`的`exportTable([data, [filename]])`方法，可以导出当前表格内容成`csv`格式。导出的文本
默认为当前单元格下的`textContent`内容，当需要自定义导出文本时，我们可以给`TableColumn`指定`exportCell`
函数来返回要导出的单元格内容。当需要自定义导出标题时，我们可以给当前列`TableColumn`组件添加`exportTitle`
属性来指定。另外如果给当前列设置`ignore`属性，则会忽略该列内容，例如：本例中我们忽略”操作“栏内容

1. `data` 要导出的数据，默认为当前表格的数据
2. `filename` 下载的文件名，默认为`table`

> 对于合并了表头和单元格的表格，不支持导出（csv格式文件不能合并单元格）

```vdt
import {Table, TableColumn} from 'kpc';
import {Button} from 'kpc';

<div>
    <Button type="primary" ev-click={this.exportTable}>导出表格</Button>
    <Button type="primary" ev-click={this.exportData}>导出自定义数据</Button>
    <Table data={this.get('data')} ref="table">
        <TableColumn title="定义该列单元格内容" key="a">
            <b:template args="[data]">
                <a>{data.a}</a>
            </b:template>
        </TableColumn>
        <TableColumn title="普通文本" key="b" />
        <TableColumn title="自定义导出文本" key="c"
            exportTitle="自定义导出标题"
            exportCell={(data, index) => '自定义导出文本:' + data.c} 
        >
            <b:template args="[data]">
                {data.c}
            </b:template>
        </TableColumn>
        <TableColumn title="操作" key="op" ignore align="right">
            <b:template args="[data]">
                <a>删除</a> 
            </b:template>
        </TableColumn>
    </Table>
</div>
```

```styl
.k-btn
    margin 0 16px 16px 0
```

```ts
import {bind} from 'kpc';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [
                {a: '第一行', b: '哈哈1', c: '自定义1'}, 
                {a: '第二行', b: '哈哈2', c: '自定义2'}
            ],
        }
    }

    @bind
    exportTable() {
        this.refs.table.exportTable();
    }

    @bind
    exportData() {
        this.refs.table.exportTable([
            {a: '第一行', b: '哈哈1', c: '自定义1'}, 
            {a: '第二行', b: '哈哈2', c: '自定义2'},
            {a: '第三行', b: '哈哈3', c: '自定义3'}
        ]);
    }
}
```
