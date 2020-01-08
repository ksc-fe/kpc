import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker [range]="true" [(value)]="date" [clearable]="true"></k-datepicker>
            You selected: {{ date | json }}
            <br /><br />
            <k-datepicker [range]="true" type="datetime" [(value)]="time" [clearable]="true"></k-datepicker>
            You selected: {{ time | json }}
        </div>
    `,
})
export class AppDemoComponent {
    private date;
    private time;
}