import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-slider [disabled]="true" [value]="50"></k-slider>
            <k-slider [disabled]="true" [isRange]="true" [value]="[55, 80]" [min]="50" [max]="100"></k-slider>
        </div>
    `,
})
export class AppDemoComponent { }