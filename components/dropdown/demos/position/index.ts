import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-dropdown [position]="{my: 'left top', at: 'left bottom+5'}">
                <k-button type="primary">
                    left <k-icon class="ion-ios-arrow-down"></k-icon>
                </k-button>
                <k-dropdown-menu>
                    <k-dropdown-item>item 1</k-dropdown-item>
                    <k-dropdown-item>item 2</k-dropdown-item>
                    <k-dropdown-item>item 3</k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        
            <k-dropdown [position]="{my: 'right top', at: 'right bottom+5'}">
                <k-button type="primary">
                    right <k-icon class="ion-ios-arrow-down"></k-icon>
                </k-button>
                <k-dropdown-menu>
                    <k-dropdown-item>item 1</k-dropdown-item>
                    <k-dropdown-item>item 2</k-dropdown-item>
                    <k-dropdown-item>item 3</k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        
            <k-dropdown [position]="{my: 'center bottom-5', at: 'center top'}">
                <k-button type="primary">
                    top center <k-icon class="ion-ios-arrow-down"></k-icon>
                </k-button>
                <k-dropdown-menu>
                    <k-dropdown-item>item 1</k-dropdown-item>
                    <k-dropdown-item>item 2</k-dropdown-item>
                    <k-dropdown-item>item 3</k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }