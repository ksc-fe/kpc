import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-datepicker [clearable]="true" [(value)]="date"></k-datepicker>
    `,
})
export class AppDemoComponent {
    private date;
}