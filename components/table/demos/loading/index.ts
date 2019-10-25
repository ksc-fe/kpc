import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table 
                [data]="[
                    {a: '第一行', b: '哈哈1'}, 
                    {a: '第二行', b: '哈哈2'},
                    {a: '第三行', b: '哈哈3'}
                ]"
                [loading]="!!loading"
            >
                <k-table-column key="a" title="表头1"></k-table-column>
                <k-table-column key="b" title="表头2"></k-table-column>
            </k-table>
            切换loading状态: <k-switch [(value)]="loading"></k-switch>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private loading;
}