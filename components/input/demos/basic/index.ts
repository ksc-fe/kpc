import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input [(value)]="value" placeholder="please enter" #__test></k-input> {{ value }}
            <br />
            <k-input [disabled]="true" placeholder="disabled"></k-input>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    private value;
}