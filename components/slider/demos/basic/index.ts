import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-slider [(value)]="value1" [min]="min" [max]="max"></k-slider>
            <k-slider [(value)]="value2" [min]="50" [max]="500" #__test></k-slider>
            <k-button (click)="_changeRange($event)">Change Range Randomly</k-button>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    private min = 0;
    private max = 100;
    private value1 = 60;
    private value2 = 277;

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    _changeRange() {
        const max = Math.floor(Math.random() * 100);
        const min = Math.floor(Math.random() * max);
        this.set({max, min});
    }
}