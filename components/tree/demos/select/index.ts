import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="_getSelectedData($event)">get selected data</k-button>
            <br />
            <br />
            <k-tree [data]="data" 
                #tree
                [(selectedKeys)]="selectedKeys"
                [(expandedKeys)]="expandedKeys"
                [multiple]="true"
            ></k-tree>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('tree', {static: false}) tree;

    private selectedKeys = [
        "floor-2.1.1"
    ];
    private expandedKeys = [
        "floor-2",
        "floor-2.1",
        "floor-2.1.1"
    ];
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
            "key": "floor-2",
            "children": [
                {
                    "label": "Second floor-2.1",
                    "key": "floor-2.1",
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

    _getSelectedData() {
        console.log(this.tree.getSelectedData());
    }
}