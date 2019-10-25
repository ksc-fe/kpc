import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-badge [disabled]="true">Message</k-badge>
            <k-badge [disabled]="true">
                <k-button>Message</k-button>
            </k-badge>
            <k-badge [text]="19" [disabled]="true">
                <k-button>Message</k-button>
            </k-badge>
            <k-badge [text]="100" [max]="99" [disabled]="true">
                <k-button>Message</k-button>
            </k-badge>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }