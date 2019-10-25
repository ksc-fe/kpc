import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="set('showDrawer', true)"
                type="primary"
            >Show Drawer</k-button>
            <k-drawer [(value)]="showDrawer" title="Drawer Title" #__demoOne>
                <k-select>
                    <k-option value="1">Option 1</k-option>
                    <k-option value="2">Option 2</k-option>
                </k-select>
        
                Drawer Body 
            </k-drawer>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__demoOne', {static: false}) __demoOne;

    private showDrawer;

    // helper function
    set(key, value) { this[key] = value; }
}