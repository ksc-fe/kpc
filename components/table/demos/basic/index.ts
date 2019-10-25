import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [scheme]="scheme" [data]="data" [resizable]="true" #__test></k-table>
            <k-table [data]="data" [resizable]="true">
                <k-table-column key="a" title="表头1"></k-table-column>
                <k-table-column key="b" title="表头2"></k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;
}