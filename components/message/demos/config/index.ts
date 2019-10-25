import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <k-button-group>
            <k-button *ngFor="let value of ['info', 'error', 'warning', 'success']; index as key"
                (click)="showMessage(value)"
            >{{ value }}</k-button>
        </k-button-group>
    `,
})
export class AppDemoComponent {
    showMessage(type) {
        Message[type]({
            content: type,
            duration: 3000,
            type: type,
            closable: false,
            hideIcon: true,
        });
    }
}