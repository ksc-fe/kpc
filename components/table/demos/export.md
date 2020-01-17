---
title: 导出表格
order: 22
---

调用`Table`的`exportTable([data, [filename]])`方法，可以导出当前表格内容成`csv`格式。导出的文本
默认为当前单元格下的`textContent`内容，当需要自定义导出文本时，我们可以给单元格首个`Element`元素
添加`data-text`属性来指定。另外如果给当前列设置`ignore`属性，则会忽略该列内容，例如：本例中我们
忽略”操作“栏内容

1. `data` 要导出的数据，默认为当前表格的数据
2. `filename` 下载的文件名，默认为`table`

> 对于合并了表头和单元格的表格，不支持导出（csv格式文件不能合并单元格）

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Button} from 'kpc/components/button';

<div>
    <Button type="primary" ev-click={{ self._export }}>导出表格</Button>
    <Button type="primary" ev-click={{ self._exportData }}>导出自定义数据</Button>
    <Table data={{ self.get('data') }} ref="table">
        <TableColumn title="定义该列单元格内容" key="a">
            <b:template params="data">
                <a>{{ data.a }}</a>
            </b:template>
        </TableColumn>
        <TableColumn title="普通文本" key="b" />
        <TableColumn title="自定义导出文本" key="c">
            <b:template params="data">
                <div data-text={{ '自定义导出文本:' + data.c }}>
                    {{ data.c }}
                </div>
            </b:template>
        </TableColumn>
        <TableColumn title="操作" key="op" ignore align="right">
            <b:template params="data">
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

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {a: '第一行', b: '哈哈1', c: '自定义1'}, 
                {a: '第二行', b: '哈哈2', c: '自定义2'}
            ],
        }
    }

    _export() {
        this.refs.table.exportTable();
    }

    _exportData() {
        this.refs.table.exportTable([
            {a: '第一行', b: '哈哈1', c: '自定义1'}, 
            {a: '第二行', b: '哈哈2', c: '自定义2'},
            {a: '第三行', b: '哈哈3', c: '自定义3'}
        ]);
    }
}
```
