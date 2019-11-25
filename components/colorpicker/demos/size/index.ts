import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-colorpicker *ngFor="let value of ['large', 'default', 'small', 'mini']; index as key"
                [size]="value"
                value="#36acef"
            ></k-colorpicker>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }