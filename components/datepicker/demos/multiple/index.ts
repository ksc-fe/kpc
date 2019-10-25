import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker [multiple]="true" [(value)]="date" [clearable]="true"></k-datepicker>
            You selected: {{ date | json }}
            <br /><br />
            <k-datepicker [multiple]="true" [(value)]="datetime" type="datetime"></k-datepicker>
            You selected: {{ datetime | json }}
        </div>
    `,
})
export class AppDemoComponent {
    private date;
    private datetime;
}