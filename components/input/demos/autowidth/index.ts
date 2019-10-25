import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-input placeholder="auto width" [autoWidth]="true"></k-input>
    `,
})
export class AppDemoComponent { }