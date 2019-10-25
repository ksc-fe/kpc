import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-badge>Message</k-badge>
            <k-badge>
                <k-button>Message</k-button>
            </k-badge>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }