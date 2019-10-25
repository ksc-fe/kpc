import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input type="textarea" placeholder="please enter"></k-input>
            <br />
            <k-input type="textarea" rows="5" placeholder="please enter"></k-input>
        </div>
    `,
})
export class AppDemoComponent { }