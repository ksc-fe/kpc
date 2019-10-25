import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-rate [(value)]="value" [clearable]="true"></k-rate>
    `,
})
export class AppDemoComponent {
    private value = 2;
}