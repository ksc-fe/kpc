import {Component} from '@angular/core';

import Dialog from 'kpc-angular/components/dialog';


@Component({
    selector: 'app-demo',
    template: `
        <k-upload [multiple]="true"
            type="drag"
            [beforeRemove]="_beforeRemove"
            action="//jsonplaceholder.typicode.com/posts/"
        ></k-upload>
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
}