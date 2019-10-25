import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [scheme]="{a: '偶数行背景变换'}" 
                [data]="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]" 
                [rowClassName]="rowClassName"
            ></k-table>
            <k-table [scheme]="{a: '偶数行背景变换'}" 
                [data]="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]" 
                [stripe]="true"
            ></k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    rowClassName = (value, index) => index % 2 === 0 ? 'odd' : 'even';
}