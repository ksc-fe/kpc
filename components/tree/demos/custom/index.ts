import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class="wrapper">
            <div class="c-clearfix">
                <k-button-group>
                    <k-button [icon]="true" size="small" (click)="_appendToRoot($event)">+</k-button>
                </k-button-group>
            </div>
            <k-tree [data]="data" #tree [checkbox]="true">
                <ng-template #label let-data="args[0]" let-node="args[1]">
                    <span class="k-text">{{ data.label }}</span>
                    <k-button-group *ngIf="!data.disabled">
                        <k-button [icon]="true" size="small" (click)="_append(node)">+</k-button>
                        <k-button [icon]="true" size="small" (click)="_remove(node)">-</k-button>
                    </k-button-group>
                </ng-template>
            </k-tree>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('tree', {static: false}) tree;

    private data = [
        {
            "label": "First floor-1",
            "children": [
                {
                    "label": "Second floor-1.1",
                    "children": [
                        {
                            "label": "Third floor-1.1.1"
                        }
                    ]
                }
            ]
        },
        {
            "label": "First floor-2",
            "children": [
                {
                    "label": "Second floor-2.1",
                    "children": [
                        {
                            "label": "Third floor-2.1.1",
                            "key": "floor-2.1.1"
                        },
                        {
                            "label": "Third floor-2.1.2"
                        }
                    ]
                },
                {
                    "label": "Second floor-2.2",
                    "disabled": true,
                    "children": [
                        {
                            "label": "Third floor-2.2.1"
                        }
                    ]
                }
            ]
        }
    ];

    _append(node) {
        node.append({
            label: 'Appended node',
        });
    }
    
    _remove(node) {
        node.remove();
    }
    
    _appendToRoot() {
        this.tree.root.append({
            label: 'Appended root node'
        });
    }
}