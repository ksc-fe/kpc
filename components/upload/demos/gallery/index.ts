import {Component} from '@angular/core';

import Dialog from 'kpc-angular/components/dialog';
import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <k-upload [multiple]="true"
            action="//jsonplaceholder.typicode.com/posts/"
            type="gallery"
            [limit]="3"
            accept=".jpg, .png"
            (error)="_onError($event)"
        ></k-upload>
    `,
})
export class AppDemoComponent {
    _onError([err]) {
        Message.error(err.message);
    }
}