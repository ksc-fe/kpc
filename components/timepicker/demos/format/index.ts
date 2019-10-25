import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-timepicker 
                [(value)]="time1"
                min="01:34 am"
                max="03:02 pm" 
                format="hh:mm a"
            ></k-timepicker>
            <span>You selected: {{ time1 }}</span>
            <br /><br />
            <k-timepicker [(value)]="time2"
                step="00:30:00"
                showFormat="HH:mm"
            ></k-timepicker>
            <span>You selected: {{ time2 }}</span>
            <br /><br />
            <k-timepicker
                [(value)]="time3"
                step="00:30:00"
                [range]="true" 
                [clearable]="true"
                valueFormat="HH:mm:ss.SSS"
                showFormat="HH:mm"
            ></k-timepicker>
            <span>You selected: {{ time3 | json }}</span>
        </div>
    `,
})
export class AppDemoComponent {
    private time1;
    private time2;
    private time3;
}