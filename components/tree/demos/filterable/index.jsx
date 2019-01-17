import React from 'react';
import Tree from 'kpc/components/tree';
import Input from 'kpc/components/input';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [
                "2",
                "2-1"
            ]
        };
        this._filter = this._filter.bind(this);
    }

    _filter(data) {
        const keywords = this.state.keywords;
        if (!keywords) return true;
        return data.label.includes(keywords);
    }
    
    render() {
        return (
            <div>
                <Input value={this.state.keywords} on$change-value={(c, keywords) => this.setState({keywords})} placeholder="Please enter keywords to filter node."/>
                <Tree 
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
                                            label: 'Third floor-1.1.1',
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
                                    disabled: true,
                                    key: '2-2',
                                    children: [
                                        {
                                            label: 'Third floor-2.2.1',
                                            key: '2-2-1'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]}
                    expandedKeys={this.state.expandedKeys}
                    on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})}
                    filter={this._filter}
                />
            </div>
        )
    }
}