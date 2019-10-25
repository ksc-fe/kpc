import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-split>
                <ng-template #first><div class="panel">left</div></ng-template>
                <ng-template #last><div class="panel">right</div></ng-template>
            </k-split>
            <k-split firstSize="80px">
                <ng-template #first><div class="panel">left</div></ng-template>
                <ng-template #last><div class="panel">right</div></ng-template>
            </k-split>
            <k-split lastSize="80px">
                <ng-template #first><div class="panel">left</div></ng-template>
                <ng-template #last><div class="panel">right</div></ng-template>
            </k-split>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }