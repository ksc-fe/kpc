import React from 'react';
import Tree from 'kpc/components/tree';
import {DropdownMenu, DropdownItem} from 'kpc/components/dropdown';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [
                "2",
                "2-1"
            ],
            "show": false,
            "event": null,
            "node": null
        };
        this._showMenu = this._showMenu.bind(this);
        this._appendNode = this._appendNode.bind(this);
        this._removeNode = this._removeNode.bind(this);
    }

    _showMenu(node, e) {
        e.preventDefault();
        this.setState({
            show: true, 
            event: e,
            node: node,
        });
    }
    
    _appendNode() {
        this.state.node.append({
            label: 'Appended node',
        });
    }
    
    _removeNode() {
        this.state.node.remove();
    }
    
    render() {
        return (
            <div>
                <Tree 
                    data={[
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
                    ]}
                    expandedKeys={this.state.expandedKeys}
                    on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})}
                    onRightclick-node={this._showMenu}
                />
                <DropdownMenu value={this.state.show}
                    on$change-value={(c, show) => this.setState({show})}
                    of={this.state.event}
                    position={{my: 'left+1 top', at: 'right bottom'}}
                >
                    <DropdownItem onSelect={this._appendNode}>Append</DropdownItem>
                    <DropdownItem onSelect={this._removeNode}>Remove</DropdownItem>
                </DropdownMenu>
            </div>
        )
    }
}