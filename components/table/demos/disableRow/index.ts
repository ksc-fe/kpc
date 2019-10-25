import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-table [scheme]="{a: '奇数行不可点击'}"
            [data]="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]"
            [disableRow]="disableRow"
        ></k-table>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    disableRow = (data, index) => index % 2 !== 0;
}