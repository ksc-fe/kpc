import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-spinner [(value)]="value"></k-spinner>
            <k-spinner [disabled]="true"></k-spinner>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value;
}