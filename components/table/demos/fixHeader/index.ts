import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class="wrapper">
            <k-table [scheme]="{a: '100px'}" 
                [data]="[{a: '表头固定，但内容没有超出最高高度'}]"
                fixHeader="100"
            ></k-table>
            <k-table [scheme]="{a: '100px' }" 
                [data]="[{a: '表头固定啦'}, {a: '下拉'}, {a: 'yeah!'}]"
                fixHeader="100" 
            ></k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }