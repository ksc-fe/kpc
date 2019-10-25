import {Component} from '@angular/core';
import {DatepickerComponent as Datepicker} from 'kpc-angular';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker [(value)]="date" [shortcuts]="[
                Datepicker.yesterday,
                Datepicker.today,
                Datepicker.tomorrow,
                Datepicker.afterOneWeek,
                Datepicker.afterOneMonth,
                Datepicker.afterThreeMonths,
                Datepicker.beforeOneWeek,
                Datepicker.beforeOneMonth,
                Datepicker.beforeThreeMonths
            ]"></k-datepicker>
            <k-datepicker [range]="true" type="datetime" 
                [shortcuts]="[
                    Datepicker.lastWeek,
                    Datepicker.lastMonth,
                    Datepicker.lastThreeMonths,
                    Datepicker.nextWeek,
                    Datepicker.nextMonth,
                    Datepicker.nextThreeMonths
                ]"
            ></k-datepicker>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private date;
    private Datepicker = Datepicker;
}