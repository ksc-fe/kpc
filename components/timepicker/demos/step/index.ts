import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-timepicker class="time" [(value)]="time" step="00:30:00"></k-timepicker>
            You selected: {{ time | json }}
            <br /><br />
            <k-timepicker [(value)]="timeArray" [multiple]="true" [clearable]="true"
                step="00:30:00" 
                min="09:00:00"
                max="18:00:00"
            ></k-timepicker>
            You selected: {{ timeArray | json }}
        </div>
    `,
})
export class AppDemoComponent {
    private time;
    private timeArray;
}