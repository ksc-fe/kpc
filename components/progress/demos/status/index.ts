import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-progress percent="50"></k-progress>
            <k-progress percent="50" status="normal"></k-progress>
            <k-progress percent="50" status="warning"></k-progress>
            <k-progress percent="50" status="error"></k-progress>
            <k-progress percent="50" status="success"></k-progress>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }