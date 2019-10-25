import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button type="primary" (click)="_export($event)">导出表格</k-button>
            <k-button type="primary" (click)="_exportData($event)">导出自定义数据</k-button>
            <k-table [data]="data" #table>
                <k-table-column title="定义该列单元格内容" key="a">
                    <ng-template #template let-data="args[0]">
                        <a>{{ data.a }}</a>
                    </ng-template>
                </k-table-column>
                <k-table-column title="普通文本" key="b"></k-table-column>
                <k-table-column title="自定义导出文本" key="c">
                    <ng-template #template let-data="args[0]">
                        <div [attr.data-text]="'自定义导出文本:' + data.c">
                            {{ data.c }}
                        </div>
                    </ng-template>
                </k-table-column>
                <k-table-column title="操作" key="op" [ignore]="true" align="right">
                    <ng-template #template let-data="args[0]">
                        <a>删除</a> 
                    </ng-template>
                </k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('table', {static: false}) table;

    private data = [
        {
            "a": "第一行",
            "b": "哈哈1",
            "c": "自定义1"
        },
        {
            "a": "第二行",
            "b": "哈哈2",
            "c": "自定义2"
        }
    ];

    _export() {
        this.table.exportTable();
    }
    
    _exportData() {
        this.table.exportTable([
            {a: '第一行', b: '哈哈1', c: '自定义1'}, 
            {a: '第二行', b: '哈哈2', c: '自定义2'},
            {a: '第三行', b: '哈哈3', c: '自定义3'}
        ]);
    }
}