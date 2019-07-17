import React from 'react';
import Tree from 'kpc/components/tree';
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
    }

    render() {
        const data = this.state.data;
    
        return (
            <Tree data={data} 
                checkbox
                checkedKeys={this.state.checkedKeys}
                on$change-checkedKeys={(c, checkedKeys) => this.setState({checkedKeys})}
                uncorrelated
            />
        )
    }
}