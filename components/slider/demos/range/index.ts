import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-slider [isRange]="true" [(value)]="values"></k-slider>
    `,
})
export class AppDemoComponent {
    private values = [
        50,
        76
    ];
}