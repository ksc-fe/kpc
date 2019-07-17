import React from 'react';
import Transfer from 'kpc/components/transfer';
import Input from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import Tag from 'kpc/components/tag';
import './index.styl';
function mockApi(policy) {
    const data = [
        {name: 'AdministratorAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'OSSFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'SupportFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'BSSFullSupportAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限', disabled: true},
        {name: 'SystemFullAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'CommonAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
    ];

    return new Promise(resolve => {
        setTimeout(() => {
            if (policy === 'all') resolve(data);
            else resolve(data.filter(item => item.policy === policy));
        }, 500);
    });
}

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "policy": "all",
            "data": []
        };
        this._fetch = this._fetch.bind(this);
        this._filter = this._filter.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setState = this.setState.bind(this);
    }

    _fetch() {
        mockApi(this.state.policy).then(data => {
            this.originData = data;
            this._filter();
        });
    }
    
    _filter() {
        const keywords = this.state.keywords;
        const data = keywords ? 
            this.originData.filter(data => {
                return data.name.includes(keywords);
            }) :
            this.originData;
        this.setState({data: data});
    }
    
    componentDidMount() {
        this._fetch();
    }
    
    setState(state, cb) {
        if ('policy' in state) {
            super.setState(state, this._fetch);
        } else if ('keywords' in state) {
            super.setState(state, this._filter);
        } else {
            super.setState(state, cb);
        }
    }
    
    render() {
        return (
            <div>
                <Transfer data={this.state.data}
                    b-filter={(type) => {
                        return <React.Fragment>
                            {type === 'left' ?
                                <Input size="small"
                                    b-prepend={<React.Fragment>
                                        <Select value={this.state.policy} on$change-value={(c, policy) => this.setState({policy})} width="100" size="small">
                                            <Option value="all">全部策略</Option>
                                            <Option value="system">系统策略</Option>
                                            <Option value="common">通用策略</Option>
                                        </Select>
                                    </React.Fragment>}
                                    placeholder="请输入"
                                    clearable
                                    value={this.state.keywords}
                                    on$change-value={(c, keywords) => this.setState({keywords})}
                                >
                                </Input> :
                                undefined
                            }
                        </React.Fragment>
                    }}
                    b-label={(data, index, type) => {
                        return <React.Fragment>
                            <div>
                                <div>
                                    {data.name}
                                    {data.policy === 'system' ?
                                        <Tag type="warning" size="mini">系统策略</Tag> :
                                        undefined
                                    }
                                </div>
                                <p>{data.members}人 / {data.desc}</p>
                            </div>
                        </React.Fragment>
                    }}
                    filterable
                    keyName="name"
                    value={this.state.value}
                    on$change-value={(c, value) => this.setState({value})}
                    ref={i => this.__test = i}
                >
                </Transfer>
                <p>You selected: {JSON.stringify(this.state.value)}</p>
            </div>
        )
    }
}