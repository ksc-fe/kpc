import React from 'react';
import Tree from 'kpc/components/tree';
import Input from 'kpc/components/input';

import Message from 'kpc/components/message';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [
                "2",
                "2-1"
            ]
        };
        this._onDragEnd = this._onDragEnd.bind(this);
        this._allowDrag = this._allowDrag.bind(this);
        this._allowDrop = this._allowDrop.bind(this);
        this._onDenyDrag = this._onDenyDrag.bind(this);
        this._onDenyDrop = this._onDenyDrop.bind(this);
    }

    _onDragEnd(data) {
        console.log(data);
    }
    
    _allowDrag(node) {
        return node.key !== '1-1-1';
    }
    
    _allowDrop(node) {
        return node.key !== '1-1-1';
    }
    
    _onDenyDrag(node) {
        Message.error(node.data.label);
    }
    
    _onDenyDrop(node) {
        Message.error(node.data.label);
    }
    
    render() {
        return (
            <Tree 
                draggable
                onDragend={this._onDragEnd}
                allowDrag={this._allowDrag}
                allowDrop={this._allowDrop}
                onDenydrag={this._onDenyDrag}
                onDenydrop={this._onDenyDrop}
                data={[
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
                                disabled: true,
                            },
                        ]
                    }
                ]}
                expandedKeys={this.state.expandedKeys}
                on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})}
            />
        )
    }
}