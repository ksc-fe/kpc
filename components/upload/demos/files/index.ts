import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-upload [multiple]="true"
            action="//jsonplaceholder.typicode.com/posts/"
            [defaultFiles]="[
                {name: 'test1.jpg', url: 'http://www.example.com/test1.jpg'},
                {name: 'test2.png', url: 'http://www.example.com/test2.png'}
            ]"
        ></k-upload>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }