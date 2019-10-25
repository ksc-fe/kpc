import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-pagination [simple]="true" [total]="200" size="large"></k-pagination>
            <k-pagination [simple]="true" [total]="200"></k-pagination>
            <k-pagination [simple]="true" [total]="200" size="small"></k-pagination>
            <k-pagination [simple]="true" [total]="200" size="mini"></k-pagination>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }