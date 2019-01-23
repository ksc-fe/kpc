import React from 'react';
import Tree from 'kpc/components/tree';
import {Button, ButtonGroup} from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
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
            ]
        };
        this._append = this._append.bind(this);
        this._remove = this._remove.bind(this);
        this._appendToRoot = this._appendToRoot.bind(this);
    }

    _append(node) {
        node.append({
            label: 'Appended node',
        });
    }
    
    _remove(node) {
        node.remove();
    }
    
    _appendToRoot() {
        this.tree.root.append({
            label: 'Appended root node'
        });
    }
    
    render() {
        const data = this.state.data;
    
        return (
            <div className="wrapper">
                <div className="c-clearfix">
                    <ButtonGroup>
                        <Button icon size="small" onClick={this._appendToRoot}>+</Button>
                    </ButtonGroup>
                </div>
                <Tree data={data} ref={i => this.tree = i} checkbox
                    b-label={(data, node) => {
                        return <>
                            <span className="k-text">{data.label}</span>
                            {!data.disabled ?
                                <ButtonGroup>
                                    <Button icon size="small" onClick={this._append.bind(this, node)}>+</Button>
                                    <Button icon size="small" onClick={this._remove.bind(this, node)}>-</Button>
                                </ButtonGroup> :
                                undefined
                            }
                        </>
                    }}
                >
                </Tree>
            </div>
        )
    }
}