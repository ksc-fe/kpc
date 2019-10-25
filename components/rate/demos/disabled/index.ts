import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-rate [value]="2" [disabled]="true"></k-rate>
    `,
})
export class AppDemoComponent { }