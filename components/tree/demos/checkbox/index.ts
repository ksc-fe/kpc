import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="_getCheckedData($event)">get checked data</k-button>
            <k-button (click)="_getCheckedLeavesData($event)">get checked leaves data</k-button>
            <br />
            <br />
            <k-tree [data]="data" 
                [checkbox]="true"
                #tree
                [(checkedKeys)]="checkedKeys"
            ></k-tree>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('tree', {static: false}) tree;

    private checkedKeys = [
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

    _getCheckedData() {
        console.log(this.tree.getCheckedData());
    }
    
    _getCheckedLeavesData() {
        console.log(this.tree.getCheckedData(true));
    }
}