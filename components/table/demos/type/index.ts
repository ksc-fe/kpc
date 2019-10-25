import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [scheme]="{a: '类型', b: '属性'}"
                [data]="data1"
                type="border" 
            ></k-table>
            <k-table [scheme]="{a: '类型', b: '属性'}"
                [data]="data2"
                type="grid" 
            ></k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private data1 = [
        {
            "a": "border类型",
            "b": "type=\"border\""
        }
    ];
    private data2 = [
        {
            "a": "grid类型",
            "b": "type=\"grid\""
        }
    ];
}