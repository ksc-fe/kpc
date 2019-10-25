import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-split min="40" max="50%+10" firstSize="80px">
            <ng-template #first><div class="panel">left</div></ng-template>
            <ng-template #last><div class="panel">right</div></ng-template>
        </k-split>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }