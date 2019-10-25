import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-tree [data]="data" 
            [checkbox]="true"
            [(checkedKeys)]="checkedKeys"
            [uncorrelated]="true"
        ></k-tree>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
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
}