import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input size="large" value="large"></k-input>
            <br />
            <k-input value="default"></k-input>
            <br />
            <k-input value="small" size="small"></k-input>
            <k-input size="small" placeholder="please enter">
                <ng-template #prepend>http://</ng-template>
                <ng-template #append>.com</ng-template>
            </k-input>
            <k-input size="small" placeholder="please enter">
                <ng-template #prefix><i class="ion-earth"></i></ng-template>
                <ng-template #suffix><i class="ion-ios-search"></i></ng-template>
                <ng-template #append><k-button size="small" [icon]="true" type="primary"><i class="ion-ios-search"></i></k-button></ng-template>
            </k-input>
            <k-input size="small" placeholder="please enter" [clearable]="true">
                <ng-template #append><k-button type="primary" size="small">Search</k-button></ng-template>
            </k-input>
        
            <k-input value="mini" size="mini"></k-input>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }