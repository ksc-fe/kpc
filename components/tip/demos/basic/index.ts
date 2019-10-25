import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tip *ngFor="let value of ['default', 'primary', 'success', 'warning', 'danger']; index as key"
                [type]="value"
            >{{ value }}</k-tip>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }