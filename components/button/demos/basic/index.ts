import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button>default</k-button>
            <k-button type="primary">primay</k-button>
            <k-button type="secondary">secondary</k-button>
            <k-button type="warning">warning</k-button>
            <k-button type="danger">danger</k-button>
            <k-button type="success">success</k-button>
            <k-button type="none">none</k-button>
            <k-button type="link">link</k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }