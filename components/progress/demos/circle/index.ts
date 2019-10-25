import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-progress type="circle" percent="50"></k-progress>
        </div>
    `,
})
export class AppDemoComponent { }