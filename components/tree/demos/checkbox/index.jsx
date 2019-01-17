import React from 'react';
import Tree from 'kpc/components/tree';
import Button from 'kpc/components/button';

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
            ],
            "checkedKeys": [
                "floor-2.1.1"
            ]
        };
        this._getCheckedData = this._getCheckedData.bind(this);
        this._getCheckedLeavesData = this._getCheckedLeavesData.bind(this);
    }

    _getCheckedData() {
        console.log(this.tree.getCheckedData());
    }
    
    _getCheckedLeavesData() {
        console.log(this.tree.getCheckedData(true));
    }
    
    render() {
        const data = this.state.data;
    
        return (
            <div>
                <Button onClick={this._getCheckedData}>get checked data</Button>
                <Button onClick={this._getCheckedLeavesData}>get checked leaves data</Button>
                <br />
                <br />
                <Tree data={data} 
                    checkbox
                    ref={i => this.tree = i}
                    checkedKeys={this.state.checkedKeys}
                    on$change-checkedKeys={(c, checkedKeys) => this.setState({checkedKeys})}
                />
            </div>
        )
    }
}