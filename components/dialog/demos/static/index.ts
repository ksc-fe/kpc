import {Component} from '@angular/core';

import Dialog from 'kpc-angular/components/dialog';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button-group>
                <k-button 
                    *ngFor="let value of ['success', 'warning', 'error', 'confirm']; index as key"
                    (click)="showDialog(value)"
                >Show {{ value[0].toUpperCase() + value.substring(1) }} Dialog</k-button>
            </k-button-group>
            <br />
            <br />
            <k-button-group>
                <k-button 
                    *ngFor="let value of ['success', 'warning', 'error', 'confirm']; index as key"
                    (click)="showDialogWithTitle(value)"
                >Show {{ value[0].toUpperCase() + value.substring(1) }} Dialog with Title</k-button>
            </k-button-group>
        </div>
    `,
})
export class AppDemoComponent {
    showDialog(type) {
        Dialog[type]({
            content: type,
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }
    
    showDialogWithTitle(type) {
        Dialog[type]({
            title: type[0].toUpperCase() + type.substring(1),
            content: type + ' dialog',
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }
}