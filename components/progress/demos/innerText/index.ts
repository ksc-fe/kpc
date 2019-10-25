import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-progress percent="0" [isInnerText]="true" [isOuterText]="false"></k-progress>
            <k-progress percent="50" [isInnerText]="true" [isOuterText]="false"></k-progress>
            <k-progress percent="60" status="error" [isInnerText]="true" [isOuterText]="false"></k-progress>
            <k-progress percent="70" status="success" [isInnerText]="true" [isOuterText]="false"></k-progress>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }