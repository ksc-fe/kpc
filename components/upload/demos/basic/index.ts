import {Component} from '@angular/core';

import Dialog from 'kpc-angular/components/dialog';
import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <k-upload [multiple]="true"
            [beforeRemove]="_beforeRemove"
            action="//jsonplaceholder.typicode.com/posts/"
            accept=".jpg, .png"
            [maxSize]="500"
            (error)="_showError($event)"
        >
            <ng-template #tip>只能上传JPG/PNG格式文件，且不超过500kb</ng-template>
        </k-upload>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    _beforeRemove = (file) => {
        return new Promise((resolve, reject) => {
            const dialog = new Dialog({
                size: 'mini',
                title: '确认删除',
                children: `确认删除文件：${file.name}`, 
            });
            dialog.show();
            dialog.on('ok', resolve);
            dialog.on('cancel', reject);
        });
    }
    
    _showError([e]) {
        Message.error(e.message);
    }
}