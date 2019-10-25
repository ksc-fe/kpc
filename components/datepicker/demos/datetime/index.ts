import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker type="datetime" [(value)]="datetime1"></k-datepicker>
            <k-datepicker type="datetime" [(value)]="datetime2" 
                placeholder="时间精确到小时"
                [disabledMinutes]="true"
                [disabledSeconds]="true"
            ></k-datepicker>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private datetime1;
    private datetime2;
}