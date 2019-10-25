import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tag *ngFor="let value of ['default', 'primary', 'success', 'warning', 'danger']; index as key"
                [type]="value"
            >{{ value }}</k-tag>
            <k-tag [disabled]="true">disabled</k-tag>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }