import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="set('show', true)"
                type="primary"
            >Show Dialog</k-button>
            <k-dialog [(value)]="show" title="Dialog Title"
                (ok)="onOk($event)"
                (cancel)="onCancel($event)"
            >Dialog Body</k-dialog>
        </div>
    `,
})
export class AppDemoComponent {
    private show;

    // helper function
    set(key, value) { this[key] = value; }
    
    onOk() {
        Message.success('You clicked ok button.');
    }
    
    onCancel() {
        Message.error('You clicked cancel button.');
    }
}