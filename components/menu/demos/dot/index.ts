import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-menu 
            [(expandedKeys)]="expandedKeys"
            [(selectedKey)]="selectedKey"
            [dot]="true" 
            theme="light"
        >
            <ng-template #header><k-icon class="ion-star"></k-icon>Header</ng-template>
            <k-menu-item key="1" (select)="onSelect($event)">menu 1</k-menu-item>
            <k-menu-item key="2" [disabled]="true">menu 2</k-menu-item>
            <k-menu-item key="3" [dot]="false">
                <k-icon class="ion-heart"></k-icon>menu 3
                <k-menu>
                    <k-menu-item key="3-1">sub menu 1</k-menu-item>
                    <k-menu-item key="3-2">sub menu 2</k-menu-item>
                    <k-menu-item key="3-3" [disabled]="true">sub menu 3</k-menu-item>
                    <k-menu-item key="3-4">sub menu 4</k-menu-item>
                </k-menu>
            </k-menu-item>
            <k-menu-item key="4" to="/">menu 4</k-menu-item>
        </k-menu>
    `,
})
export class AppDemoComponent {
    private expandedKeys = [
        "3"
    ];
    private selectedKey = "3-1";

    onSelect([item]) {
        console.log('key', item.get('key'));
    }
}