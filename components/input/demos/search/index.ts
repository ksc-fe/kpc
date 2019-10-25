import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-search (submit)="_search($event)"></k-search>
            <br />
            <k-search type="line" (submit)="_search($event)"></k-search>
        </div>
    `,
})
export class AppDemoComponent {
    _search([keywords]) {
        Message.success('Search by keywords: ' + keywords);
    }
}