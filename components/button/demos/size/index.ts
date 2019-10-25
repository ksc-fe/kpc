import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button size="large">large</k-button>
            <k-button>default</k-button>
            <k-button size="small">small</k-button>
            <k-button size="mini">mini</k-button>
            <br /><br />
            <k-button [icon]="true" [circle]="true" size="large"><k-icon class="ion-ios-search" size="large"></k-icon></k-button>
            <k-button [icon]="true" [circle]="true"><k-icon class="ion-ios-search"></k-icon></k-button>
            <k-button [icon]="true" [circle]="true" size="small"><k-icon class="ion-ios-search" size="small"></k-icon></k-button>
            <k-button [icon]="true" [circle]="true" size="mini"><k-icon class="ion-ios-search" size="mini"></k-icon></k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }