import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-select [(value)]="day" [filterable]="true">
            <k-option *ngFor="let value of data; index as key" [value]="value.value" [label]="value.label">
                <div>
                    <span>{{ value.label }}</span>
                    <span style="float: right; color: #ccc">{{ value.value }}</span>
                </div>
            </k-option>
        </k-select>
    `,
})
export class AppDemoComponent {
    private data = [
        {
            "label": "星期一",
            "value": "Monday"
        },
        {
            "label": "星期二",
            "value": "Tuesday"
        },
        {
            "label": "星期三",
            "value": "Wednesday"
        },
        {
            "label": "星期四",
            "value": "Thursday"
        },
        {
            "label": "星期五",
            "value": "Friday"
        },
        {
            "label": "星期六",
            "value": "Saturday"
        },
        {
            "label": "星期天",
            "value": "Sunday"
        }
    ];
    private day;
}