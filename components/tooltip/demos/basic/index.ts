import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tooltip content="hello">
                hover the text
            </k-tooltip>
            <br /><br />
            <k-tooltip>
                don't show anything if content is empty 
            </k-tooltip>
            <br /><br />
            <k-tooltip content="hello" theme="light">
                light theme 
            </k-tooltip>
            <br /><br />
            <k-tooltip content="hello" [disabled]="true">
                disabled
            </k-tooltip>
        </div>
    `,
})
export class AppDemoComponent { }