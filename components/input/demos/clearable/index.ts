import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input [clearable]="true" placeholder="please enter"></k-input>
            <br />
            <k-input [clearable]="true" placeholder="please enter">
                <ng-template #suffix><i class="ion-ios-search"></i></ng-template>
            </k-input>
            <br />
            <k-input [clearable]="true" [stackClearIcon]="true" placeholder="please enter">
                <ng-template #suffix><i class="ion-ios-search"></i></ng-template>
            </k-input>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }