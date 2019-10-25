import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-badge text="new">Message</k-badge>
            <k-badge [text]="6">
                <k-button>Message</k-button>
            </k-badge>
            <k-badge [text]="19">
                <k-button>Message</k-button>
            </k-badge>
            <k-badge [text]="100" [max]="99">
                <k-button>Message</k-button>
            </k-badge>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }