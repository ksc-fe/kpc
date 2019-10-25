import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-spinner [max]="5" [min]="-5" [vertical]="true" size="large"></k-spinner>
            <k-spinner [max]="5" [min]="-5" [vertical]="true"></k-spinner>
            <k-spinner [max]="5" [min]="-5" [vertical]="true" size="small"></k-spinner>
            <k-spinner [max]="5" [min]="-5" [vertical]="true" size="mini"></k-spinner>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }