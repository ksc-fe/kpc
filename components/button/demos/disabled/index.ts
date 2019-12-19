import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button [disabled]="true">disabled</k-button>
            <k-button [disabled]="true" type="none">disabled text</k-button>
            <k-button [disabled]="true" [icon]="true" [circle]="true"><i class="k-icon ion-ios-search"></i></k-button>
            <k-button [disabled]="true" type="link">link</k-button>
        </div>
    `,
})
export class AppDemoComponent { }