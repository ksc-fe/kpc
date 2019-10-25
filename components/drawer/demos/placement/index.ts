import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button-group>
                <k-button *ngFor="let value of showList; index as key" 
                    (click)="showDrawer(value.key)"
                >{{ value.value }}</k-button>
            </k-button-group>
        
            <k-drawer v-model='show'
                title='Drawer Title' 
                #__demoTwo 
                [placement]="showPosition" 
                size='small'
            >
                Drawer Body
            </k-drawer>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__demoTwo', {static: false}) __demoTwo;

    private showList = [
        {
            "key": "top",
            "value": "从上侧出现"
        },
        {
            "key": "bottom",
            "value": "从下侧出现"
        },
        {
            "key": "left",
            "value": "从左侧出现"
        },
        {
            "key": "right",
            "value": "从右侧出现"
        }
    ];
    private showPosition = "right";
    private show = false;

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    showDrawer(value) {
        this.set({
            'showPosition': value,
            'show': true
        });
    }
}