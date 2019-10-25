import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-table [data]="data">
            <k-table-column key="a"
                [group]="[{label: 'test', value: ''}]"
                [sortable]="true"
            >
                <ng-template #title>
                    <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                    <k-tooltip content="tooltip content">
                        <i class="ion-ios-help-outline c-middle"></i>
                    </k-tooltip>
                </ng-template>
            </k-table-column>
            <k-table-column key="b" title="表头2"></k-table-column>
        </k-table>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];
}