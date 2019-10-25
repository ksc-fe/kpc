import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button-group>
                <ng-container *ngFor="let value of ['large', 'default', 'small', 'mini']; index as key">
                    <k-button (click)="set('show' + value + '', true)">Show {{ value }} Dialog</k-button>
                    <k-dialog [(value)]="this['show' + value + '']" title="Dialog Title" [size]="value">
                        Size: {{ value }}
                    </k-dialog>
                </ng-container>
            </k-button-group>
            <br /><br />
            <k-button (click)="set('customSize', true)">Show 300px wide dialog</k-button>
            <k-dialog [(value)]="customSize" title="Dialog Title" [width]="300">
                width: 300px
            </k-dialog>
        </div>
    `,
})
export class AppDemoComponent {
    private customSize;

    // helper function
    set(key, value) { this[key] = value; }
}