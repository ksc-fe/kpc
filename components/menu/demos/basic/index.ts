import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-menu
            [(expandedKeys)]="expandedKeys" 
            [(selectedKey)]="selectedKey"
        >
            <k-menu-item key="1" (select)="onSelect($event)">
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
                    <k-menu-item key="3-4">
                        sub menu 4
                        <k-menu>
                            <k-menu-item key="3-4-1">Option 1</k-menu-item>
                            <k-menu-item key="3-4-2">Option 2</k-menu-item>
                        </k-menu>
                    </k-menu-item>
        
                </k-menu>
            </k-menu-item>
            <k-menu-item key="4" to="/"><k-icon class="ion-gear-b"></k-icon>menu 4</k-menu-item>
        </k-menu>
    `,
})
export class AppDemoComponent {
    private expandedKeys = [];
    private selectedKey = "3-1";

    onSelect([item]) {
        console.log('key', item.get('key'));
    }
}