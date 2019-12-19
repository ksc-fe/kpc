import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-diagram>
            <k-d-tree-layout>
                <k-d-rectangle key="from" strokeStyle="dashed" height="100">
                    <div class="container">
                        <div>始发站</div>
                        <k-select [(value)]="from" [fluid]="true">
                            <k-option *ngFor="let value of cities; index as key" [value]="value.value">
                                {{ value.name }}
                            </k-option>
                        </k-select>
                    </div>
                </k-d-rectangle>
                <k-d-rectangle key="to" strokeStyle="dashed" height="100">
                    <div class="container">
                        <div>终点站</div>
                        <k-select [(value)]="to" [fluid]="true">
                            <k-option *ngFor="let value of cities; index as key" [value]="value.value">
                                {{ value.name }}
                            </k-option>
                        </k-select>
                    </div>
                </k-d-rectangle>
                <k-d-line from="from" to="to"></k-d-line>
            </k-d-tree-layout>
        </k-diagram>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private from = "";
    private to = "";
    private cities = [
        {
            "name": "北京",
            "value": "beijing"
        },
        {
            "name": "上海",
            "value": "shanghai"
        },
        {
            "name": "深圳",
            "value": "shenzhen"
        }
    ];
}