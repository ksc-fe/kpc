import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-spinner size="large"></k-spinner>
            <k-spinner></k-spinner>
            <k-spinner size="small"></k-spinner>
            <k-spinner size="mini"></k-spinner>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }