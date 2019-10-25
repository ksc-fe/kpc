import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tip *ngFor="let value of ['default', 'primary', 'success', 'warning', 'danger']; index as key"
                [key]="value"
                [type]="value"
                [closable]="true"
            >{{ value }}</k-tip>
            <k-tip [closable]="true">
                custom closing content
                <ng-template #close>No longer show</ng-template>
            </k-tip>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }