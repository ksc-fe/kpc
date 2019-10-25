import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <div class="contextmenu-area" (contextmenu)="_showMenu($event)">
                right click this area to show context menu
            </div>
            <k-dropdown-menu [(value)]="show" 
                [of]="event"
                [position]="{my: 'left+1 top', at: 'right bottom'}"
            >
                <k-dropdown-item>Option 1</k-dropdown-item>
                <k-dropdown-item>Option 2</k-dropdown-item>
                <k-dropdown-item>Option 3</k-dropdown-item>
            </k-dropdown-menu>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private event = null;
    private show = false;

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    _showMenu(event) {
        event.preventDefault();
        this.set({
            show: true,
            event: event,
        });
    }
}