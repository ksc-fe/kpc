import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-tree-select [data]="data" 
            [load]="_loadData"
        ></k-tree-select>
    `,
})
export class AppDemoComponent {
    private data = [
        {
            "label": "parent",
            "key": "1",
            "children": [
                {
                    "label": "first child",
                    "children": [],
                    "key": "1.1"
                },
                {
                    "label": "last child",
                    "children": [],
                    "loaded": true,
                    "key": "1.2"
                }
            ]
        }
    ];

    _loadData = (node) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: `child ${node.key}.1`, children: [], key: `${node.key}.1`},
                    {label: `child ${node.key}.2`, key: `${node.key}.2`},
                ]);
            }, 1000);
        });
    }
}