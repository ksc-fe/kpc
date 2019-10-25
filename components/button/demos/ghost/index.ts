import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class="wrapper">
            <k-button [ghost]="true">default</k-button>
            <k-button type="primary" [ghost]="true">primay</k-button>
            <k-button type="warning" [ghost]="true">warning</k-button>
            <k-button type="danger" [ghost]="true">danger</k-button>
            <k-button type="success" [ghost]="true">success</k-button>
            <k-button type="none" [ghost]="true">none</k-button>
            <k-button type="primary" [ghost]="true" [disabled]="true">primay</k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }