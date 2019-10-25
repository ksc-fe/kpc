import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class="wrapper">
            <k-table [data]="data">
                <k-table-column key="a" title="表头1"></k-table-column>
                <k-table-column key="b" title="表头2"></k-table-column>
            </k-table>
            <k-spin [overlay]="true"></k-spin>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private data = [
        {
            "a": "第一行",
            "b": "哈哈2"
        },
        {
            "a": "第二行",
            "b": "哈哈2"
        },
        {
            "a": "第三行",
            "b": "哈哈3"
        }
    ];
}