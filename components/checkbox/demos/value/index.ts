import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-checkbox [(value)]="value1">默认值: {{ value1 | json }}</k-checkbox>
            <k-checkbox [(value)]="value2" trueValue="checked">
                指定选中时取值为"checked": {{ value2 | json }}
            </k-checkbox>
            <k-checkbox [(value)]="value3" [trueValue]="0" [falseValue]="uncheckedValue">
                指定非选中时取值为对象：{{ value3 | json }}
            </k-checkbox>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value1;
    private value2;
    private uncheckedValue = {
        "unchecked": true
    };
    private value3;
}