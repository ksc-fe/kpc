import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table [scheme]="scheme" [data]="data"></k-table>
            <k-table [scheme]="scheme" [data]="data" [noDataTemplate]="tip"></k-table>
            <k-table [scheme]="scheme" [data]="data">
                <ng-template #no_data>
                    <div style="color: red">没有数据</div>
                </ng-template>
            </k-table>
            <ng-template #tip>
                <div>这里没有数据(自定义版本)</div>
            </ng-template>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private scheme = {a: '表头1', b: '表头2'};
    private data = [];
}