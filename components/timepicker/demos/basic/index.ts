import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-timepicker [(value)]="time" min="01:34:56" max="15:02:59"></k-timepicker>
            You selected: {{ time }}
            <br /><br />
            <k-timepicker [(value)]="timeArray" [multiple]="true" [clearable]="true"></k-timepicker>
            You selected: {{ timeArray | json }}
        </div>
    `,
})
export class AppDemoComponent {
    private time;
    private timeArray;
}