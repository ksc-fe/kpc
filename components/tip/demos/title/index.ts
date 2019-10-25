import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tip *ngFor="let value of ['default', 'primary', 'success', 'warning', 'danger']; index as key"
                [key]="value"
                [type]="value"
                [closable]="true"
            >
                <ng-template #title>{{ value }}</ng-template>
                This is a {{ value }} tip.
            </k-tip>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }