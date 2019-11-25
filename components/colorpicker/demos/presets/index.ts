import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-colorpicker [(value)]="color1"
                [presets]="['transparent', 'red', '#d99123', 'rgb(255, 51, 33)', 'hsl(126, 54%, 46%)']"
            ></k-colorpicker>
            <k-colorpicker [(value)]="color2"
                [presets]="[]"
            ></k-colorpicker>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private color1 = "#36acef";
    private color2 = "#d99123";
}