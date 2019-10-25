import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-badge></k-badge>
            <k-badge text="new"></k-badge>
            <k-badge [text]="19"></k-badge>
            <k-badge [text]="100" [max]="99"></k-badge>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }