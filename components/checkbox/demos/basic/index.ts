import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-checkbox [(value)]="value">checkbox</k-checkbox>
            <k-checkbox [disabled]="true">disabled checkbox</k-checkbox>
            <k-checkbox [value]="true" [disabled]="true">disabled checked checkbox</k-checkbox>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value;
}