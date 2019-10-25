import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-switch on="收起" off="展开" [(value)]="isCollapse" width="60" style="margin-right: 16px;"></k-switch>
            <k-switch on="light" off="dark" [(value)]="theme" width="60" trueValue="light" falseValue="dark"></k-switch>
            <br /><br />
            <k-menu [(expandedKeys)]="expandedKeys" 
                [collapse]="isCollapse"
                [theme]="theme"
            >
                <k-menu-item key="1"><k-icon class="ion-flag"></k-icon>menu 1</k-menu-item>
                <k-menu-item key="2" [disabled]="true"><k-icon class="ion-star"></k-icon>menu 2</k-menu-item>
                <k-menu-item key="3">
                    <k-icon class="ion-heart"></k-icon>menu 3
                    <k-menu>
                        <k-menu-item key="3-1">sub menu 1</k-menu-item>
                        <k-menu-item key="3-2">sub menu 2</k-menu-item>
                        <k-menu-item key="3-3" [disabled]="true">sub menu 3</k-menu-item>
                        <k-menu-item key="3-4">
                            sub menu 4
                            <k-menu>
                                <k-menu-item key="3-4-1">option 1</k-menu-item>
                                <k-menu-item key="3-4-2">option 2</k-menu-item>
                            </k-menu>
                        </k-menu-item>
                    </k-menu>
                </k-menu-item>
                <k-menu-item key="4"><k-icon class="ion-gear-b"></k-icon>menu 4</k-menu-item>
            </k-menu>
        </div>
    `,
})
export class AppDemoComponent {
    private isCollapse;
    private theme;
    private expandedKeys = [
        "3"
    ];
}