import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-pagination [total]="200" [showGoto]="true"></k-pagination>
        </div>
    `,
})
export class AppDemoComponent { }