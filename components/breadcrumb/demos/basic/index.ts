import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-breadcrumb>
            <k-breadcrumb-item to="#/">item 1</k-breadcrumb-item>
            <k-breadcrumb-item to="/components/breadcrumb/">item 2</k-breadcrumb-item>
            <k-breadcrumb-item>item 3</k-breadcrumb-item>
        </k-breadcrumb>
    `,
})
export class AppDemoComponent { }