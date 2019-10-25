import {Component, ViewChild} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button type="primary"
                (click)="set('show', true)"
            >Close Dialog Asynchronously</k-button>
            <k-dialog [(value)]="show" title="Customized ok callback"
                [ok]="ok"
            >
                <k-form #form>
                    <k-form-item model="code" [rules]="{required: true, digits: true}" label="Code:">
                        <k-input placeholder="please enter digits" [(value)]="code"></k-input>
                    </k-form-item>
                </k-form>
            </k-dialog>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('form', {static: false}) form;

    private show;
    private code;

    // helper function
    set(key, value) { this[key] = value; }
    
    ok = async (dialog) => {
        // validate the form firstly
        const valid = await this.form.validate();
        if (valid) {
            // make the ok button show loading
            dialog.showLoading(); 
            // mock api
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 2000);
            }).then(() => {
                // if success, close dialog 
                dialog.hideLoading();
                dialog.close();
            }, () => {
                // if error, don't close dialog
                dialog.hideLoading();
                Message.error('error occured');
            });
        }
    }
}