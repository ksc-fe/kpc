import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-upload 
            [directory]="true"
            action="//jsonplaceholder.typicode.com/posts/"
        ></k-upload>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }