import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-dropdown [disabled]="true">
                <k-button type="primary">
                    disabled <k-icon class="ion-ios-arrow-down"></k-icon>
                </k-button>
                <k-dropdown-menu>
                    <k-dropdown-item>item 1</k-dropdown-item>
                    <k-dropdown-item>item 2</k-dropdown-item>
                    <k-dropdown-item>item 3</k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        
            <k-dropdown>
                <k-button type="primary">
                    disabled item <k-icon class="ion-ios-arrow-down"></k-icon>
                </k-button>
                <k-dropdown-menu>
                    <k-dropdown-item>item 1</k-dropdown-item>
                    <k-dropdown-item [disabled]="true">item 2</k-dropdown-item>
                    <k-dropdown-item>item 3</k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }