import {Component, ViewChild} from '@angular/core';

import Form from 'kpc-angular/components/form';


@Component({
    selector: 'app-demo',
    template: `
        <k-form #form>
            <k-form-item label="用户名" model="userName"
                [rules]="{required: true, userName: validateUserName}"
            >
                <k-input [(value)]="userName"></k-input>
            </k-form-item>
        </k-form>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('form', {static: false}) form;

    private userName;

    validateUserName(value) {
        // mock api
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    reject({message: `用户名 ${value} 已被占用`});
                } else {
                    resolve(true);
                }
            });
        });
    }
}