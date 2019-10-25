import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button type="primary" [loading]="true">确认</k-button>
            <k-button [icon]="true" [circle]="true" [loading]="true"><i class="k-icon ion-ios-search"></i></k-button>
            <br /> <br />
            <k-button type="primary" 
                [loading]="loading1"
                (click)="onClick('loading1')"
            >点击加载</k-button>
            <k-button type="primary" 
                [loading]="loading2"
                (click)="onClick('loading2')"
            ><k-icon class="ion-ios-search"></k-icon>点击加载</k-button>
            <k-button [icon]="true" [circle]="true"
                [loading]="loading3"
                (click)="onClick('loading3')"
            ><k-icon class="ion-ios-search"></k-icon></k-button>
            <k-button type="primary" 
                [loading]="loading4"
                (click)="onClick('loading4')"
            >图标在右侧<k-icon class="ion-ios-search"></k-icon></k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private loading1;
    private loading2;
    private loading3;
    private loading4;

    onClick(name) {
        this[name] = true;
    }
}