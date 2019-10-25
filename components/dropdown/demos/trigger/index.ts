import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-dropdown>
                <k-button type="primary">
                    hover <k-icon class="ion-ios-arrow-down"></k-icon>
                </k-button>
                <k-dropdown-menu>
                    <k-dropdown-item>item 1</k-dropdown-item>
                    <k-dropdown-item>item 2</k-dropdown-item>
                    <k-dropdown-item>item 3</k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        
            <k-dropdown trigger="click">
                <k-button type="primary">
                    click <k-icon class="ion-ios-arrow-down"></k-icon>
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