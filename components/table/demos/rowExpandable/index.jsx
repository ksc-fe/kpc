import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [],
            "data": [
                {
                    "name": "Javey",
                    "email": "jiawei23716@sina.com"
                },
                {
                    "name": "Jiawei",
                    "email": "zoujiawei@gmail.com"
                }
            ]
        };
        this._classNames = this._classNames.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    _classNames(classNames) {
        const ret = [];
        for (let key in classNames) {
            const value = classNames[key];
            if (value) {
                ret.push(key);
            }
        }
        return ret.join(' ');
    }
    
    toggleExpand(data, index) {
        const expandedKeys = this.state.expandedKeys.slice(0);
        const i = expandedKeys.indexOf(index);
        if (i > -1) {
            expandedKeys.splice(i, 1);
        } else {
            expandedKeys.push(index);
        }
        this.setState({expandedKeys: expandedKeys});
    }
    
    render() {
        return (
            <div className='no-data-template'>
                <Table
                    b-expand={(data, index) => {
                        return <>
                            <div>Email: {data.email}</div>
                        </>
                    }}
                    data={this.state.data} 
                    checkType="none"
                    ref={i => this.__test1 = i}
                >
                    <TableColumn title="点击整行展开内容" key="name" />
                </Table>
            
                <Table
                    b-expand={(data, index) => {
                        return <>
                            <div>Email: {data.email}</div>
                        </>
                    }}
                    data={this.state.data} 
                    checkType="none"
                    rowExpandable={false}
                    expandedKeys={this.state.expandedKeys}
                    ref={i => this.__test2 = i}
                >
                    <TableColumn title="点击+，展开内容" key="name"
                        b-template={(data, index) => {
                            return <>
                                <div>
                                    <i 
                                        className={this._classNames({
                                            'icon': true,
                                            'ion-ios-plus-outline': this.state.expandedKeys.indexOf(index) < 0,
                                            'ion-ios-minus-outline': this.state.expandedKeys.indexOf(index) > -1,
                                        })}
                                        onClick={this.toggleExpand.bind(this, data, index)}
                                    ></i>
                                    {data.name}
                                </div>
                            </>
                        }}
                    >
                    </TableColumn>
                </Table>
            </div>
        )
    }
}