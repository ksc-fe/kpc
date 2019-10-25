import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-timeline>
            <k-timeline-item type="success">
                <ng-template #dot><i class="ion-trophy"></i></ng-template>
                August
            </k-timeline-item>
            <k-timeline-item>July</k-timeline-item>
            <k-timeline-item>June</k-timeline-item>
            <k-timeline-item>May</k-timeline-item>
        </k-timeline>
    `,
})
export class AppDemoComponent { }