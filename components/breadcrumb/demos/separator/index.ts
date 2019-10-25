import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-breadcrumb>
            <ng-template #separator>
                <b class="separator">=></b>
            </ng-template>
            <k-breadcrumb-item to="/">
                <i class="ion-home"></i> item 1
            </k-breadcrumb-item>
            <k-breadcrumb-item to="/components/breadcrumb/">
                <i class="ion-earth"></i> item 2
            </k-breadcrumb-item>
            <k-breadcrumb-item>
                <i class="ion-planet"></i> item 3
            </k-breadcrumb-item>
        </k-breadcrumb>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }