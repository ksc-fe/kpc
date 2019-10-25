import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tooltip content="hello" [always]="true" [value]="true">
                always show this tootip 
            </k-tooltip>
            <br /><br />
            <k-tooltip content="" [always]="true" [value]="true">
                don't show if content is empty
            </k-tooltip>
        </div>
    `,
})
export class AppDemoComponent { }