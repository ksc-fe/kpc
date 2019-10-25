import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-button-group>
            <k-tooltip *ngFor="let value of ['left', 'right', 'top', 'bottom']; index as key"
                [content]="value"
                [position]="value"
            >
                <k-button>{{ value }}</k-button>
            </k-tooltip>
        </k-button-group>
    `,
})
export class AppDemoComponent { }