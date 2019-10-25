import {Component} from '@angular/core';

const code = `function test() {
    console.log('hello world');
}`;

@Component({
    selector: 'app-demo',
    template: `
        <div>
            主题：<k-button-group [(value)]="theme" checkType="radio">
                <k-button *ngFor="let value of ['vs', 'vs-dark', 'hc-black']; index as key"
                    [value]="value"
                >{{ value }}</k-button>
            </k-button-group>
            <k-code [(value)]="value" height="200px" [theme]="theme"></k-code>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private theme;
    private value;
}