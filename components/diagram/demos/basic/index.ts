import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-diagram>
            <k-d-tree-layout type="vertical">
                <k-d-rectangle label="<h1>hello</h1>" key="1"></k-d-rectangle>
                <k-d-diamond key="2" label="world"></k-d-diamond>
                <k-d-circle key="3" label="kpc"></k-d-circle>
                <k-d-line from="1" to="2" type="rounded"></k-d-line>
                <k-d-line from="1" to="3" type="rounded"></k-d-line>
            </k-d-tree-layout>
        </k-diagram>
    `,
})
export class AppDemoComponent { }