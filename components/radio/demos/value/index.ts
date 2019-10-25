import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-radio [(value)]="value1">默认值：{{ value1 | json }}</k-radio>
            <k-radio [(value)]="value2" trueValue="checked">
                指定选中时的取值为"checked": {{ value2 | json }}
            </k-radio>
            <k-radio [(value)]="value3" [trueValue]="checkedValue">
                指定选中时的取值为对象：{{ value3 | json }}
            </k-radio>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value1;
    private value2;
    private checkedValue = {
        "test": 1
    };
    private value3;
}