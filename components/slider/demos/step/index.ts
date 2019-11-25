import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-slider [(value)]="value1" [step]="5" [isShowEnd]="false"></k-slider>
            <k-slider [(value)]="value2" [min]="50" [max]="500" [step]="0.1"></k-slider>
            <k-slider [value]="0.234234" [max]="1" [step]="0"></k-slider>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value1;
    private value2;
}