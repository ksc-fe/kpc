import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="set('noOverlay', true)"
                type="primary"
            >Show Drawer Without Overlay</k-button>
            <k-drawer [(value)]="noOverlay" 
                title="Drawer Title"
                #__demoOne
                [overlay]="false"
            >
                Drawer Without Overlay
            </k-drawer>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__demoOne', {static: false}) __demoOne;

    private noOverlay;

    // helper function
    set(key, value) { this[key] = value; }
}