import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-split mode="vertical" lastSize="80px">
            <ng-template #first><div class="panel">top</div></ng-template>
            <ng-template #last><div class="panel">bottom</div></ng-template>
        </k-split>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }