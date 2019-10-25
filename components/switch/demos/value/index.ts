import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <div style="margin-bottom: 20px">
                <k-switch [(value)]="value1"></k-switch>
                {{ value1 | json }}
            </div>
            <div>
                <k-switch [(value)]="value2" [trueValue]="1" falseValue="1"></k-switch>
                {{ value2 | json }}
            </div>
        </div>
    `,
})
export class AppDemoComponent {
    private value1;
    private value2;
}