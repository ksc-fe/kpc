import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button [icon]="true"><k-icon class="ion-ios-search"></k-icon></k-button>
            <k-button [icon]="true" [circle]="true"><k-icon class="ion-ios-search"></k-icon></k-button>
            <k-button type="danger" size="large" [icon]="true" [circle]="true"><k-icon class="ion-ios-search" size="large"></k-icon></k-button>
            <k-button type="primary"><k-icon class="ion-ios-search" size="small"></k-icon>搜索</k-button>
            <k-button [circle]="true" type='primary'><k-icon class="ion-ios-search" size="small"></k-icon>搜索</k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }