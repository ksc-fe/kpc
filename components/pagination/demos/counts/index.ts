import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-pagination [total]="200" counts="10"></k-pagination>
            <k-pagination [total]="200" counts="9"></k-pagination>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }