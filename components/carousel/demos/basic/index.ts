import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-carousel>
            <k-carousel-item><ng-template #children>1</ng-template></k-carousel-item>
            <k-carousel-item><ng-template #children>2</ng-template></k-carousel-item>
            <k-carousel-item><ng-template #children>3</ng-template></k-carousel-item>
            <k-carousel-item><ng-template #children>4</ng-template></k-carousel-item>
        </k-carousel>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }