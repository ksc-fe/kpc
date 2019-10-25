import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-carousel [clonedAmount]="2">
            <k-carousel-item class="one"><ng-template #children>1</ng-template></k-carousel-item>
            <k-carousel-item class="two"><ng-template #children>2</ng-template></k-carousel-item>
            <k-carousel-item class="three"><ng-template #children>3</ng-template></k-carousel-item>
            <k-carousel-item class="four"><ng-template #children>4</ng-template></k-carousel-item>
        </k-carousel>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }