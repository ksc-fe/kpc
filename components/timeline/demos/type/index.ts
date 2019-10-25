import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-timeline>
            <k-timeline-item>August</k-timeline-item>
            <k-timeline-item type="success" size="small">July</k-timeline-item>
            <k-timeline-item type="danger" size="large">June</k-timeline-item>
            <k-timeline-item type="warning" size="mini">May</k-timeline-item>
        </k-timeline>
    `,
})
export class AppDemoComponent { }