import {Component, ViewChild} from '@angular/core';

import Dialog from 'kpc-angular/components/dialog';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="onClick($event)" type="primary">Show Dialog</k-button>
            <k-dialog [(value)]="show" title="Dialog Title" #__demo
                [terminate]="_terminate"
                [cancel]="_terminate"
            >
                Dialog Body 
            </k-dialog>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__demo', {static: false}) __demo;

    private show;

    onClick() {
        this.show = true;
    }
    
    _terminate = () => {
        Dialog.confirm({
            content: 'Are you sure you want to close the dialog?'
        }).then(() => {
            this.show = false;
        }, () => {});
    }
}