import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input placeholder="please enter">
                <ng-template #prepend>http://</ng-template>
                <ng-template #append>.com</ng-template>
            </k-input>
            <k-input placeholder="please enter">
                <ng-template #append><k-button [icon]="true" type="none"><i class="ion-ios-search"></i></k-button></ng-template>
            </k-input>
            <k-input placeholder="please enter">
                <ng-template #append><k-button [icon]="true" type="primary"><i class="ion-ios-search"></i></k-button></ng-template>
            </k-input>
            <k-input placeholder="please enter">
                <ng-template #append><k-button type="primary">搜索</k-button></ng-template>
            </k-input>
            <k-input placeholder="please enter">
                <ng-template #prefix><i class="ion-earth"></i></ng-template>
                <ng-template #suffix><i class="ion-ios-search"></i></ng-template>
            </k-input>
            <k-input placeholder="please enter">
                <ng-template #prepend>http://</ng-template>
                <ng-template #append>.com</ng-template>
                <ng-template #prefix><i class="ion-earth"></i></ng-template>
                <ng-template #suffix><i class="ion-ios-search"></i></ng-template>
            </k-input>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }