import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-datepicker [disabledDate]="disabledDate"></k-datepicker>
    `,
})
export class AppDemoComponent {
    disabledDate = (date, dateObject) => {
        // 禁用掉每月的5号和15号
        const d = dateObject.date();
        return d === 5 || d === 15;
    }
}