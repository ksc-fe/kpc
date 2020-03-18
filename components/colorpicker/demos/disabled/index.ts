import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-colorpicker [(value)]="color" [disabled]="true"></k-colorpicker>
    `,
})
export class AppDemoComponent {
    private color = "#d99123";
}