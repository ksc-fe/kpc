import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            large: <k-switch size="large"></k-switch>
            default: <k-switch></k-switch>
            small: <k-switch size='small'></k-switch>
            mini: <k-switch size='mini'></k-switch>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }