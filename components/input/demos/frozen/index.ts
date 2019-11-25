import {Component} from '@angular/core';

import tinycolor from 'tinycolor2';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input [value]="value" (input)="_onInput($event)"></k-input>
            <br />
            <k-input [frozenOnInput]="true" [value]="value" (input)="_onInput($event)"></k-input>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private value = "#ddd";

    _onInput([e]) {
        const value = e.target.value.trim();
        const color = tinycolor(value);
        if (color.isValid()) {
            const newValue = color.toHexString();
            this.value = newValue;
        }
    }
}