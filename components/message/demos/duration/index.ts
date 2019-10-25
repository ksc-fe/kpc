import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <k-button-group>
            <k-button (click)="showMessage1($event)">close after 10s</k-button>
            <k-button (click)="showMessage2($event)">stick message</k-button>
        </k-button-group>
    `,
})
export class AppDemoComponent {
    showMessage1() {
        Message.info('close after 10s', 10000);
    }
    
    showMessage2() {
        Message.info('stick message', 0);
    }
}