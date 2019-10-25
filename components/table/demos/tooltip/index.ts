import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-table 
            [data]="[
                {a: '第一行', b: '哈哈1'}, 
                {a: '第二行', b: '哈哈2'},
                {a: '第三行', b: '哈哈3'}
            ]"
        >
            <ng-template #tooltip let-data="args[0]" let-index="args[1]">
                <div>{{ data.a }}</div>
            </ng-template>
            <k-table-column key="a" title="表头1"></k-table-column>
            <k-table-column key="b" title="表头2"></k-table-column>
        </k-table>
    `,
})
export class AppDemoComponent { }