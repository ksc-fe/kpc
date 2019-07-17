import React from 'react';
import Split from 'kpc/components/split';
import {Table, TableColumn} from 'kpc/components/table';
import {Pagination} from 'kpc/components/pagination';
import {Tabs, Tab} from 'kpc/components/tabs';
import {FormItem} from 'kpc/components/form';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';
import './index.styl';
import {range} from 'kpc/components/utils';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: range(0, 10).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
            tab: 'detail',
            size: '0px',
            selectedData: {},
            checkedKeys: [],
        };
        this._classNames = this._classNames.bind(this);
        this._close = this._close.bind(this);
        this._open = this._open.bind(this);
        this._togglePanel = this._togglePanel.bind(this);
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
    
    _close() {
        this.setState({size: '0px'});
    }
    
    _open() {
        if (this.state.size === '0px') {
            this.setState({size: '200px'});
        }
    }
    
    _togglePanel(table, keys) {
        if (keys.length === 1) {
            // 只选中一行时，展开详情面板
            const data = table.getCheckedData()[0];
            this.setState({selectedData: data});
            this._open();
        } else {
            this._close();
        }
    }
    
    _onClickRow(data, index, key) {
        const checkedKeys = this.state.checkedKeys;
        if (checkedKeys.length === 1 && checkedKeys[0] === key) {
            // 如果只选中了一行，再次点击当前行，则取消选中
            key = [];
        } else {
            // 否则只选中当前行
            key = [key];
        }
        this.setState({checkedKeys: key});
    }
    
    render() {
        return (
            <div className="split-container">
                <Split mode="vertical"
                    b-first={<React.Fragment>
                        <Table data={this.state.data}
                            fixHeader
                            ref={i => this.table = i}
                            rowCheckable={false}
                            checkedKeys={this.state.checkedKeys}
                            on$change-checkedKeys={(c, checkedKeys) => this.setState({checkedKeys})}
                            onClick-row={this._onClickRow}
                            on$change-checkedKeys={this._togglePanel}
                        >
                            <TableColumn title="名称" key="name" />
                            <TableColumn title="网段" key="ip" />
                            <TableColumn title="操作" key="op"
                                b-template={(data) => {
                                    return <React.Fragment>
                                        <a>删除</a> 
                                    </React.Fragment>
                                }}
                            >
                            </TableColumn>
                        </Table>
                        <Pagination total={100} size="small" />
                    </React.Fragment>}
                    b-last={<React.Fragment>
                        <Button type="none" icon className="close"
                            onClick={this._close}
                        >
                            <Icon className="ion-ios-close-empty" size="40" />
                        </Button>
                        <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})}>
                            <Tab value="detail">详情</Tab>
                            <Tab value="data">流量统计</Tab>
                            <Tab value="tag">标签</Tab>
                        </Tabs>
                        {this.state.tab === 'detail' ?
                            <div className="tab-panel">
                                <FormItem label="创建时间：">2018-09-28 17:31:25</FormItem>
                                <FormItem label="弹性IP：">{this.state.selectedData.ip}</FormItem>
                                <FormItem label="名称：">{this.state.selectedData.name}</FormItem>
                            </div> :
                            undefined
                        }
                    </React.Fragment>}
                    b-drag={<React.Fragment><Icon className="ion-drag" /></React.Fragment>}
                    lastSize={this.state.size}
                    on$change-lastSize={(c, size) => this.setState({size})}
                    className={this._classNames({closed: this.state.size === '0px'})}
                    min={10}
                >
                </Split>
            </div>
        )
    }
}