import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-icon 
                *ngFor="let value of ['default', 'primary', 'warning', 'danger', 'success', 'red', '#0000ea', 'rgb(183, 18, 193)']; index as key"
                class="ion-happy-outline" 
                size="large"
                [color]="value"
            ></k-icon>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }