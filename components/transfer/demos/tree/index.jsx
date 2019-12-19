import React from 'react';
import Transfer from 'kpc-react/components/transfer';
import Tree from 'kpc-react/components/tree';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "label": "database",
                    "key": "database",
                    "children": [
                        {
                            "label": "table1",
                            "key": "table1",
                            "children": [
                                {
                                    "label": "class",
                                    "key": "class"
                                },
                                {
                                    "label": "student",
                                    "key": "student"
                                }
                            ]
                        },
                        {
                            "label": "table2",
                            "key": "table2",
                            "children": [
                                {
                                    "label": "id",
                                    "key": "id"
                                },
                                {
                                    "label": "name",
                                    "key": "name"
                                }
                            ]
                        }
                    ]
                }
            ],
            "leftCheckedKeys": [],
            "rightCheckedKeys": [],
            "leftExpandedKeys": [],
            "rightExpandedKeys": [],
            "leftData": [],
            "rightData": []
        };
        this.enableAdd = this.enableAdd.bind(this);
        this.enableRemove = this.enableRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.moveData = this.moveData.bind(this);
        this.deepClone = this.deepClone.bind(this);
    }

    enableAdd() {
        return this.state.leftCheckedKeys.length > 0;
    }
    
    enableRemove() {
        return this.state.rightCheckedKeys.length > 0;
    }
    
    onAdd() {
        const {from, to} = this.moveData(this.left, this.state.leftData, this.state.rightData);
        this.setState({leftData: from, rightData: to, leftCheckedKeys: []});
    }
    
    onRemove() {
        const {from, to} = this.moveData(this.right, this.state.rightData, this.state.leftData);
        this.setState({leftData: to, rightData: from, rightCheckedKeys: []});
    }
    
    moveData(tree, from, to) {
        from = this.deepClone(from);
        to = this.deepClone(to);
        const loop = (children, from, to) => {
            let deleteCount = 0;
            children.forEach((node, index) => {
                const data = node.data;
                if (node.checked) {
                    // remove from `from` 
                    if (from) {
                        from.splice(index - deleteCount, 1);
                        deleteCount++;
                    }
                    // add to `to` 
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        to.push(this.deepClone(data));
                    } else {
                        loop(node.children, null, newData.children);
                    }
                } else if (node.indeterminate) {
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        newData = {...data, children: []};
                        to.push(newData);
                    }
                    loop(node.children, from[index - deleteCount].children, newData.children);
                }
            });
        };
    
        loop(tree.root.children, from, to);
    
        return {from, to};
    }
    
    deepClone(data) {
        if (data == null) return data;
    
        if (Array.isArray(data)) {
            return data.map(item => {
                return this.deepClone(item);
            });
        } 
    
        if (typeof data === 'object') {
            const ret = {};
            for (let key in data) {
                ret[key] = this.deepClone(data[key]);
            }           
            return ret;
        }
    
        return data;
    }
    
    render() {
        return (
            <Transfer
                b-header={(type) => {
                    return <React.Fragment>
                        {type === 'left' ?
                            <div>请选择</div> :
                            <div>已选择</div>
                        }
                    </React.Fragment>
                }}
                b-list={(type) => {
                    return <React.Fragment>
                        {type === 'left' ?
                            <Tree
                                data={this.state.leftData}
                                checkbox
                                checkedKeys={this.state.leftCheckedKeys}
                                on$change-checkedKeys={(c, leftCheckedKeys) => this.setState({leftCheckedKeys})}
                                expandedKeys={this.state.leftExpandedKeys}
                                on$change-expandedKeys={(c, leftExpandedKeys) => this.setState({leftExpandedKeys})}
                                ref={i => this.left = i}
                            /> :
                            <Tree
                                data={this.state.rightData}
                                checkbox
                                checkedKeys={this.state.rightCheckedKeys}
                                on$change-checkedKeys={(c, rightCheckedKeys) => this.setState({rightCheckedKeys})}
                                expandedKeys={this.state.rightExpandedKeys}
                                on$change-expandedKeys={(c, rightExpandedKeys) => this.setState({rightExpandedKeys})}
                                ref={i => this.right = i}
                            />
                        }
                    </React.Fragment>
                }}
                enableAdd={this.enableAdd}
                enableRemove={this.enableRemove}
                onAdd={this.onAdd}
                onRemove={this.onRemove}
            >
            </Transfer>
        )
    }
}