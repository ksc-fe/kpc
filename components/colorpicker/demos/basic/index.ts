import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-colorpicker [(value)]="color"></k-colorpicker>
            <span [style]="{color: color, marginLeft: '10px', verticalAlign: 'middle'}">
                Hello, Colorpicker!
            </span>
        </div>
    `,
})
export class AppDemoComponent {
    private color = "#d99123";
}