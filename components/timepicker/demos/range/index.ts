import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-timepicker [(value)]="time" [range]="true" [clearable]="true"></k-timepicker>
            You selected: {{ time | json }}
        </div>
    `,
})
export class AppDemoComponent {
    private time;
}