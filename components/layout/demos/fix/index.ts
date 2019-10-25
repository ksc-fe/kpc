import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-layout class="layout">
            <k-header [fixed]="true">
                <div class="logo">LOGO</div>
                <k-menu type="horizontal">
                    <k-menu-item key="1">menu 1</k-menu-item>
                    <k-menu-item key="2" [disabled]="true">menu 2</k-menu-item>
                    <k-menu-item key="3">
                        menu 3
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
                    <k-menu-item key="4">menu 4</k-menu-item>
                </k-menu>
            </k-header>
            <k-layout>
                <k-aside [fixed]="true">
                    <k-menu
                        [(expandedKeys)]="expandedKeys" 
                        [(selectedKey)]="selectedKey"
                        theme="light"
                    >
                        <k-menu-item key="1">
                            <k-icon class="ion-flag"></k-icon>menu 1
                            <k-menu>
                                <k-menu-item key="1-1">sub menu 1</k-menu-item>
                                <k-menu-item key="1-2">sub menu 2</k-menu-item>
                                <k-menu-item key="1-3" [disabled]="true">sub menu 3</k-menu-item>
                                <k-menu-item key="1-4">sub menu 4</k-menu-item>
                            </k-menu>
                        </k-menu-item>
                        <k-menu-item key="2" [disabled]="true"><k-icon class="ion-star"></k-icon>menu 2</k-menu-item>
                        <k-menu-item key="3">
                            <i class="k-icon ion-heart"></i>menu 3
                            <k-menu>
                                <k-menu-item key="3-1">sub menu 1</k-menu-item>
                                <k-menu-item key="3-2">sub menu 2</k-menu-item>
                                <k-menu-item key="3-3" [disabled]="true">sub menu 3</k-menu-item>
                                <k-menu-item key="3-4">sub menu 4</k-menu-item>
                            </k-menu>
                        </k-menu-item>
                        <k-menu-item key="4"><k-icon class="ion-gear-b"></k-icon>menu 4</k-menu-item>
                    </k-menu>
                </k-aside>
                <k-body>
                    <k-breadcrumb>
                        <k-breadcrumb-item>Home</k-breadcrumb-item>
                        <k-breadcrumb-item>Detail</k-breadcrumb-item>
                    </k-breadcrumb>
                    <div *ngFor="let value of data; index as key">content</div>
                </k-body>
            </k-layout>
        </k-layout>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private expandedKeys = [];
    private selectedKey = '3-1';
    private data = Array.apply(null, {length: 100});
}