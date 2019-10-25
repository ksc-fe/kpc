import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-menu [(expandedKeys)]="expandedKeys" theme="light">
            <k-menu-item key="1"><k-icon class="ion-flag"></k-icon>menu 1</k-menu-item>
            <k-menu-item key="2" [disabled]="true"><k-icon class="ion-star"></k-icon>menu 2</k-menu-item>
            <k-menu-item key="3">
                <k-icon class="ion-heart"></k-icon>menu 3
                <k-menu>
                    <k-menu-item key="3-1">sub menu 1</k-menu-item>
                    <k-menu-item key="3-2">sub menu 2</k-menu-item>
                    <k-menu-item key="3-3" [disabled]="true">sub menu 3</k-menu-item>
                    <k-menu-item key="3-4">sub menu 4</k-menu-item>
                </k-menu>
            </k-menu-item>
            <k-menu-item key="4"><k-icon class="ion-gear-b"></k-icon>menu 4</k-menu-item>
        </k-menu>
    `,
})
export class AppDemoComponent {
    private expandedKeys = [
        "3"
    ];
}