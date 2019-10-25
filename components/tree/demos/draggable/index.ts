import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <k-tree 
            [draggable]="true"
            (dragend)="_onDragEnd($event)"
            [allowDrag]="_allowDrag"
            [allowDrop]="_allowDrop"
            (denydrag)="_onDenyDrag($event)"
            (denydrop)="_onDenyDrop($event)"
            [data]="[
                {
                    label: 'First floor-1',
                    key: '1',
                    children: [
                        {
                            label: 'Second floor-1.1',
                            key: '1-1',
                            children: [
                                {
                                    label: 'This node can not be dragged and dropped.',
                                    key: '1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'First floor-2',
                    key: '2',
                    children: [
                        {
                            label: 'Second floor-2.1',
                            key: '2-1',
                            children: [
                                {
                                    label: 'Third floor-2.1.1',
                                    key: '2-1-1' 
                                },
                                {
                                    label: 'Third floor-2.1.2',
                                    key: '2-1-2'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.2',
                            key: '2-2',
                            children: [
                                {
                                    label: 'Third floor-2.2.1',
                                    key: '2-2-1'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.3',
                            key: '2-3',
                            disabled: true
                        }
                    ]
                }
            ]"
            [(expandedKeys)]="expandedKeys"
        ></k-tree>
    `,
})
export class AppDemoComponent {
    private expandedKeys = [
        "2",
        "2-1"
    ];

    _onDragEnd([data]) {
        console.log(data);
    }
    
    _allowDrag = (node) => {
        return node.key !== '1-1-1';
    }
    
    _allowDrop = (node) => {
        return node.key !== '1-1-1';
    }
    
    _onDenyDrag([node]) {
        Message.error(node.data.label);
    }
    
    _onDenyDrop([node]) {
        Message.error(node.data.label);
    }
}