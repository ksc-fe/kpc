import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-rate [(value)]="value">
            <ng-template #icon><k-icon class="ion-heart"></k-icon></ng-template>
        </k-rate>
    `,
})
export class AppDemoComponent {
    private value = 2;
}