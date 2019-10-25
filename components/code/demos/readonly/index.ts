import {Component} from '@angular/core';

const code = `function test() {
    console.log('hello world');
}`;

@Component({
    selector: 'app-demo',
    template: `
        <k-code [(value)]="value" height="200px" [readonly]="true"></k-code>
    `,
})
export class AppDemoComponent {
    private value;
}