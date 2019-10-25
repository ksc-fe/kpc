import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-checkbox [indeterminate]="length > 0 && length < 3"
                [value]="length === 3"
                ($change-value)="_toggleSelectAll($event)"
            >全选</k-checkbox>
            <hr />
            <k-checkbox *ngFor="let value of options; index as key"
                name="languages" 
                [trueValue]="value"
                [(value)]="languages"
            >{{ value }}</k-checkbox>
            Your selected: {{ languages | json }}
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private options = [
        "Javascript",
        "C++",
        "PHP"
    ];
    private languages = [];

    _toggleSelectAll([c, checked]) {
        if (checked) {
            this.languages = ['Javascript', 'C++', 'PHP'];
        } else {
            this.languages = [];
        }
    }
    
    get length() {
        return this.languages.length;
    }
}