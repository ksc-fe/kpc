import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-radio [(value)]="value">radio</k-radio>
            <k-radio [disabled]="true">disabled radio</k-radio>
            <k-radio [value]="true" [disabled]="true">disabled checked radio</k-radio>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value;
}