import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker type="year" [(value)]="year"></k-datepicker>
            <k-datepicker type="month" [(value)]="month" [clearable]="true"></k-datepicker>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private year;
    private month;
}