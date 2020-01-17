import React from 'react';
import {TreeSelect} from 'kpc-react/components/treeSelect';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "label": "parent",
                    "key": "1",
                    "children": [
                        {
                            "label": "first child",
                            "children": [],
                            "key": "1.1"
                        },
                        {
                            "label": "last child",
                            "children": [],
                            "loaded": true,
                            "key": "1.2"
                        }
                    ]
                }
            ]
        };
        this._loadData = this._loadData.bind(this);
    }

    _loadData(node) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: `child ${node.key}.1`, children: [], key: `${node.key}.1`},
                    {label: `child ${node.key}.2`, key: `${node.key}.2`},
                ]);
            }, 1000);
        });
    }
    
    render() {
        return (
            <TreeSelect data={this.state.data} 
                load={this._loadData}
            />
        )
    }
}