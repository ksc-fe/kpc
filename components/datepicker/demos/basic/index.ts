import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-datepicker [(value)]="date" #__demo></k-datepicker>
            <k-datepicker [disabled]="true" value="2018-01-01"></k-datepicker>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__demo', {static: false}) __demo;

    private date;
}