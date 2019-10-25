import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="set('show', true)">custom message</k-button>
            <k-message [(value)]="show" key="message" 
                [hideIcon]="true"
                [duration]="0" 
                [type]="percent >= 100 ? 'success' : 'info'"
            >
                <k-progress style="width: 200px" 
                    [percent]="percent"
                    (click)="add($event)"
                ></k-progress>
            </k-message>
        </div>
    `,
})
export class AppDemoComponent {
    private percent = 10;
    private show = false;

    // helper function
    set(key, value) { this[key] = value; }
    
    add() {
        this.percent = this.percent + 5;
    }
}