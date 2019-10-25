import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-rate [(value)]="value1"></k-rate>
            <br />
            <k-rate [(value)]="value2" [half]="true"></k-rate>
        </div>
    `,
})
export class AppDemoComponent {
    private value1 = 2;
    private value2 = 2.5;
}