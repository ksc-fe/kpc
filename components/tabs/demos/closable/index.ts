import {Component} from '@angular/core';

let id = 3;

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button-group [(value)]="size" checkType="radio">
                <k-button *ngFor="let value of ['large', 'default', 'small', 'mini']; index as key"
                    [value]="value"
                >{{ value }}</k-button>
            </k-button-group>
            <br /><br />
            <k-button (click)="_add($event)">新增Tab</k-button>
            <k-tabs [(value)]="tab"
                [closable]="tabs.length > 1"
                (remove)="_remove($event)"
                *ngFor="let value of ['default', 'card', 'border-card', 'no-border-card']; index as key"
                [type]="value"
                [size]="size"
            >
                <k-tab *ngFor="let value of tabs; index as key"
                    [value]="value.value"
                    [key]="value.value"
                    [closable]="value.value !== 10"
                >{{ value.label }}</k-tab>
            </k-tabs>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private tabs = [
        {
            "value": 1,
            "label": "Tab 1"
        },
        {
            "value": 2,
            "label": "Tab 2"
        },
        {
            "value": 3,
            "label": "Tab 3"
        }
    ];
    private size = "large";
    private tab = 1;

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    _remove([value]) {
        const tabs = this.tabs.slice(0);
        const index = tabs.findIndex(item => item.value === value);
        tabs.splice(index, 1);
    
        // 如果删除当前tab，则切换至下一个
        let tab = this.tab;
        if (value === tab) {
            const item = tabs[index] || tabs[index - 1];
            tab = item ? item.value : null;
        }
    
        this.set({tabs, tab});
    }
    
    _add() {
        const tabs = this.tabs.slice(0);
        id++;
        tabs.push({
            value: id,
            label: `Tab ${id}`,
        });
        this.set({tabs, tab: id});
    }
}