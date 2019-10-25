import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table [scheme]="{a: '点击整行不选中', b: 'B'}"
                [data]="[{a: 'A', b: 'B'}, {a: 'A', b: '点我不会选中整行'}]"
                [rowCheckable]="false"
            ></k-table>
            <k-table [scheme]="{a: '点击整行选中', b: 'B'}" 
                [data]="[{a: 'A', b: '任何位置都可以哦～'}, {a: 'A', b: '点我会选中整行'}]"
            ></k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }