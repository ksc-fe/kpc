import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tag *ngFor="let value of ['large', 'default', 'small', 'mini']; index as key"
                [size]="value"
            >{{ value }}</k-tag>
            <br /><br />
            <k-tag *ngFor="let value of [['large', 'primary'], ['default', 'warning'], ['small', 'success'], ['mini', 'danger']]; index as key"
                [size]="value[0]"
                [type]="value[1]"
            >{{ value[0] }}</k-tag>
            <br /><br />
            <k-tag *ngFor="let value of ['large', 'default', 'small', 'mini']; index as key"
                type="primary"
                [size]="value"
                [closable]="true"
            >{{ value }}</k-tag>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }