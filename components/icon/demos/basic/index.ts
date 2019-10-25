import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-icon *ngFor="let value of ['36', 'large', 'default', 'small', 'mini']; index as key"
                 class="ion-happy-outline" 
                 [size]="value"
            ></k-icon>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }