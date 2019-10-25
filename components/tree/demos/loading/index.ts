import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-tree [data]="data" 
            [checkbox]="true"
            [load]="_loadData"
        ></k-tree>
    `,
})
export class AppDemoComponent {
    private data = [
        {
            "label": "parent",
            "children": [
                {
                    "label": "first child",
                    "children": []
                },
                {
                    "label": "last child",
                    "children": [],
                    "loaded": true
                }
            ]
        }
    ];

    _loadData = (node) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: 'child1', children: []},
                    {label: 'child2'},
                ]);
            }, 1000);
        });
    }
}