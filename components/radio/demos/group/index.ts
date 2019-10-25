import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-radio name="language" trueValue="Javascript" [(value)]="language">Javascript</k-radio>
            <k-radio name="language" trueValue="C++" [(value)]="language">C++</k-radio>
            <k-radio name="language" trueValue="PHP" [(value)]="language">PHP</k-radio>
            Your selected: {{ language }}
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private language;
}