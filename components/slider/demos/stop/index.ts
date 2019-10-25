import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-slider [value]="45" [step]="5" [isShowStop]="true" [isShowInput]="false"></k-slider>
            <k-slider [value]="[0.3, 0.6]" [min]="0" [max]="1" [step]="0.1" [isRange]="true" [isShowStop]="true"></k-slider>
        </div>
    `,
})
export class AppDemoComponent { }