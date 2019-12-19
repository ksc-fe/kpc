import React from 'react';
import Tree from 'kpc-react/components/tree';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
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
                    "key": "floor-2",
                    "children": [
                        {
                            "label": "Second floor-2.1",
                            "key": "floor-2.1",
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
            ],
            "selectedKeys": [
                "floor-2.1.1"
            ],
            "expandedKeys": [
                "floor-2",
                "floor-2.1",
                "floor-2.1.1"
            ]
        };
        this._getSelectedData = this._getSelectedData.bind(this);
    }

    _getSelectedData() {
        console.log(this.tree.getSelectedData());
    }
    
    render() {
        const data = this.state.data;
    
        return (
            <div>
                <Button onClick={this._getSelectedData}>get selected data</Button>
                <br />
                <br />
                <Tree data={data} 
                    ref={i => this.tree = i}
                    selectedKeys={this.state.selectedKeys}
                    on$change-selectedKeys={(c, selectedKeys) => this.setState({selectedKeys})}
                    expandedKeys={this.state.expandedKeys}
                    on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})}
                    multiple
                />
            </div>
        )
    }
}