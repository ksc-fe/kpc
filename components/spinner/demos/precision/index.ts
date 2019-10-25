import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-spinner [(value)]="value1"
                [max]="10"
                [min]="0"
                [precision]="0"
            ></k-spinner>
            <k-spinner [(value)]="value2"
                [max]="10"
                [min]="-10" 
                [step]="0.1"
                [precision]="1"
            ></k-spinner>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value1;
    private value2;
}