---
title: 图形选择联动
order: 4
---

当图形支持选择时`selectable`时，用户选择不同的图形`Diagram`会触发`selectionChanged`事件，组件会将选择的图形以
数组的形式传给事件回调函数，如果图形添加了`data`属性，则我们可以通过图形对象获取到该数据`shape.data`

```vdt
import {Diagram, DTreeLayout, DCircle, DLine} from 'kpc/components/diagram';

<Diagram ev-selectionChanged={this.onSelect}>
    <DTreeLayout type="vertical">
        <DCircle v-for={this.get('nodes')}
            key={$value.key}
            label={$value.label}
            selectable={$value.selectable}
            data={$value.data}
        />
        <DLine v-for={this.get('lines')}
            from={$value.from}
            to={$value.to}
            type="rounded"
        />
    </DTreeLayout>
</Diagram>
```

```ts
import {Message} from 'kpc';

interface Props {
    data: DataItem
    nodes: Node[]
    lines: Line[]
}

type DataItem = {
    key: string
    children?: DataItem[]
    disabled?: boolean
}

type Node = {
    key: string
    label: string
    selectable: boolean
    data: DataItem
}

type Line = {
    from: string
    to: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: {
                key: 'Database',
                children: [
                    {
                        key: 'Table1',
                        children: [
                            {
                                key: 'Column1-1',
                            },
                            {
                                key: 'Column1-2',
                            }
                        ]
                     },
                     {
                        key: 'Table2',
                        disabled: true,
                        children: [
                            {
                                key: 'Column2-1',
                            },
                            {
                                key: 'Column2-2',
                            }
                        ]
                     },
                ] 
            },
            nodes: [],
            lines: [],
        } as Props;
    }

    init() {
        const nodes: Node[] = [];
        const lines: Line[] = [];
        const loop = (children: DataItem[], parent?: DataItem, disabled?: boolean) => {
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
        loop([this.get('data')]);

        this.set({nodes, lines});
    }

    onSelect(shapes: any[]) {
        if (!shapes.length) {
            Message.info('You selected nothing.');
        } else {
            const data = shapes[0].data;
            Message.info(`You selected ${data.key}.`);
        }
    }
}
```

```angular
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
```
