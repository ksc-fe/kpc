import {Component} from '@angular/core';
import Message from 'kpc-angular/components/message';

@Component({
    selector: 'app-demo',
    template: `
        <k-diagram (selectionChanged)="_onSelect($event)">
            <k-d-tree-layout type="vertical">
                <k-d-circle *ngFor="let node of nodes"
                    [key]="node.key"
                    [label]="node.label"
                    [selectable]="node.selectable"
                    [data]="node.data"
                ></k-d-circle>
                <k-d-line *ngFor="let line of lines"
                    [from]="line.from"
                    [to]="line.to"
                    type="rounded"
                ></k-d-line>
            </k-d-tree-layout>
        </k-diagram>
    `,
})
export class AppDemoComponent {
    private data = {
        "key": "Database",
        "children": [
            {
                "key": "Table1",
                "children": [
                    {
                        "key": "Column1-1"
                    },
                    {
                        "key": "Column1-2"
                    }
                ]
            },
            {
                "key": "Table2",
                "disabled": true,
                "children": [
                    {
                        "key": "Column2-1"
                    },
                    {
                        "key": "Column2-2"
                    }
                ]
            }
        ]
    };
    private nodes = [];
    private lines = [];

    _onSelect([shapes]) {
        if (!shapes.length) {
            Message.info('You selected nothing.');
        } else {
            const data = shapes[0].data;
            Message.info(`You selected ${data.key}.`);
        }
    }

    ngOnInit() {
        const nodes = [];
        const lines = [];
        const loop = (children, parent = null, disabled = false) => {
            for (let i = 0; i < children.length; i++) {
                const data = children[i];

                // if parent is disabled, disable all children
                if (!disabled && data.disabled) disabled = true; 

                nodes.push({
                    key: data.key, 
                    label: data.key,
                    selectable: !disabled,
                    data: data
                });

                // add line if it has parent
                if (parent) {
                    lines.push({from: parent.key, to: data.key});
                }
                if (data.children) {
                    loop(data.children, data, disabled);
                }
            }
        };
        loop([this.data]);

        this.nodes = nodes;
        this.lines = lines;
    }
}