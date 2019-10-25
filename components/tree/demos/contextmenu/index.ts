import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tree 
                [data]="[
                    {
                        label: 'First floor-1',
                        children: [
                            {
                                label: 'Second floor-1.1',
                                children: [
                                    {
                                        label: 'Third floor-1.1.1'
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
                                children: [
                                    {
                                        label: 'Third floor-2.1.1',
                                        key: '2-1' 
                                    },
                                    {
                                        label: 'Third floor-2.1.2'
                                    }
                                ]
                            },
                            {
                                label: 'Second floor-2.2',
                                disabled: true,
                                children: [
                                    {
                                        label: 'Third floor-2.2.1'
                                    }
                                ]
                            }
                        ]
                    }
                ]"
                [(expandedKeys)]="expandedKeys"
                (rightclick-node)="_showMenu($event)"
            ></k-tree>
            <k-dropdown-menu [(value)]="show"
                [of]="event"
                [position]="{my: 'left+1 top', at: 'right bottom'}"
            >
                <k-dropdown-item (select)="_appendNode($event)">Append</k-dropdown-item>
                <k-dropdown-item (select)="_removeNode($event)">Remove</k-dropdown-item>
            </k-dropdown-menu>
        </div>
    `,
})
export class AppDemoComponent {
    private event = null;
    private expandedKeys = [
        "2",
        "2-1"
    ];
    private show = false;
    private node = null;

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    _showMenu([node, e]) {
        e.preventDefault();
        this.set({
            show: true, 
            event: e,
            node: node,
        });
    }
    
    _appendNode() {
        this.node.append({
            label: 'Appended node',
        });
    }
    
    _removeNode() {
        this.node.remove();
    }
}