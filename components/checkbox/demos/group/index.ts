import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-checkbox name="languages" trueValue="Javascript" [(value)]="languages">Javascript</k-checkbox>
            <k-checkbox name="languages" trueValue="C++" [(value)]="languages">C++</k-checkbox>
            <k-checkbox name="languages" trueValue="PHP" [(value)]="languages">PHP</k-checkbox>
            Your selected: {{ languages | json }}
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private languages = [];
}