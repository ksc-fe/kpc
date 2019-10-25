import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-switch [(value)]="value"></k-switch>
            <k-switch [disabled]="true"></k-switch>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value;
}