import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="onClick($event)" type="primary">Show Dialog</k-button>
            <k-dialog [(value)]="show" title="Dialog Title" #__demo mode="hide">
                <k-input></k-input>
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
}