import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.oData = [
            {name: '主机1', status: 'active'},
            {name: '主机2', status: 'stopped'},
            {name: '主机3', status: 'active'},
        ];
        this.state = {
            "data": this.oData,
            "group": {
                "status": ""
            },
            "multipleData": this.oData,
            "multipleGroup": {
                "status": []
            }
        };
        this._onChangeGroup = this._onChangeGroup.bind(this);
        this._onChangeMultipleGroup = this._onChangeMultipleGroup.bind(this);
    }
    
    _onChangeGroup(c, group) {
        console.log(group);
        const data = this.oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value && item[key] !== value) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });
    
        this.setState({data: data});
    }
    
    _onChangeMultipleGroup(c, group) {
        console.log(group);
        const data = this.oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value.length && value.indexOf(item[key]) === -1) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });
    
        this.setState({multipleData: data});
    }
    
    render() {
        const scheme = {
            name: '名称',
            status: {
                title: '状态',
                template(data) {
                    return <span>{data.status === 'active' ? '运行中' : '已关闭'}</span>
                },
                group: [
                    {label: '全部', value: ''},
                    {label: '运行中', value: 'active'},
                    {label: '已关闭', value: 'stopped'},
                ]
            }
        };
    
        return (
            <div className='no-data-template'>
                <Table scheme={scheme} 
                    data={this.state.data} 
                    group={this.state.group}
                    on$change-group={(c, group) => this.setState({group})}
                    on$change-group={this._onChangeGroup}
                    ref={i => this.__test1 = i}
                />
                <Table data={this.state.multipleData} 
                    group={this.state.multipleGroup}
                    on$change-group={(c, multipleGroup) => this.setState({multipleGroup})}
                    on$change-group={this._onChangeMultipleGroup}
                    ref={i => this.__test2 = i}
                >
                    <TableColumn title='名称' key='name' />
                    <TableColumn title='状态' key='status'
                        b-template={(data) => {
                            return <>
                                <span>{data.status === 'active' ? '运行中' : '已关闭'}</span>
                            </>
                        }}
                        group={[ 
                            {label: '运行中', value: 'active'},
                            {label: '已关闭', value: 'stopped'},
                        ]}
                        multiple
                    >
                    </TableColumn>
                </Table>
            </div>
        )
    }
}