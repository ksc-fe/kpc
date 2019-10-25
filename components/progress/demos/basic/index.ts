import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-progress percent="50"></k-progress>
            <k-progress percent="100"></k-progress>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }