import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <div>
                <k-datepicker [(value)]="date1" format="MM/DD/YYYY"></k-datepicker>
                value: {{ date1 }}
            </div>
            <div>
                <k-datepicker [(value)]="date2" showFormat="YYYY年M月D日"></k-datepicker>
                value: {{ date2 }}
            </div>
            <div>
                <k-datepicker type="datetime" [(value)]="date3" valueFormat="YYYY-MM-DDTHH:mm:ss.SSS[Z]"></k-datepicker>
                value: {{ date3 }}
            </div>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private date1;
    private date2;
    private date3;
}