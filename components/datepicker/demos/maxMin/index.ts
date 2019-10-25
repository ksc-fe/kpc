import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker [(value)]="from" placeholder="开始日期"
                [maxDate]="to"
                [minDate]="now"
            ></k-datepicker> ~
            <k-datepicker [(value)]="to" placeholder="结束日期"
                [minDate]="from"
            ></k-datepicker>
            <br />
            <br />
            <k-datepicker [(value)]="fromTime" placeholder="开始时间"
                type="datetime"
                [maxDate]="toTime || now"
            ></k-datepicker> ~
            <k-datepicker [(value)]="toTime" placeholder="结束时间"
                type="datetime"
                [minDate]="fromTime"
                [maxDate]="now"
            ></k-datepicker>
        </div>
    `,
})
export class AppDemoComponent {
    private to;
    private from;
    private toTime;
    private fromTime;
    private now = new Date();
}