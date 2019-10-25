import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-switch on="开" off="关"></k-switch>
            <k-switch [value]="true">
                <ng-template #on><i class="ion-ios-checkmark-empty"></i></ng-template>
                <ng-template #off><i class="ion-ios-close-empty"></i></ng-template>
            </k-switch>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }