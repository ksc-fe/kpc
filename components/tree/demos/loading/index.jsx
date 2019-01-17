import React from 'react';
import Tree from 'kpc/components/tree';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "label": "parent",
                    "children": []
                }
            ]
        };
        this._loadData = this._loadData.bind(this);
    }

    _loadData(node) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: 'child1', children: []},
                    {label: 'child2'},
                ]);
            }, 1000);
        });
    }
    
    render() {
        const data = this.state.data;
    
        return (
            <Tree data={data} 
                checkbox
                load={this._loadData}
            />
        )
    }
}