import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-spin *ngFor="let value of ['large', 'default', 'small', 'mini']; index as key"
                [size]="value"
            ></k-spin>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }