import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';
import {Button} from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "a": "第一行",
                    "b": "哈哈1",
                    "c": "自定义1"
                },
                {
                    "a": "第二行",
                    "b": "哈哈2",
                    "c": "自定义2"
                }
            ]
        };
        this._export = this._export.bind(this);
        this._exportData = this._exportData.bind(this);
    }

    _export() {
        this.table.exportTable();
    }
    
    _exportData() {
        this.table.exportTable([
            {a: '第一行', b: '哈哈1', c: '自定义1'}, 
            {a: '第二行', b: '哈哈2', c: '自定义2'},
            {a: '第三行', b: '哈哈3', c: '自定义3'}
        ]);
    }
    
    render() {
        return (
            <div>
                <Button type="primary" onClick={this._export}>导出表格</Button>
                <Button type="primary" onClick={this._exportData}>导出自定义数据</Button>
                <Table data={this.state.data} ref={i => this.table = i}>
                    <TableColumn title="定义该列单元格内容" key="a"
                        b-template={(data) => {
                            return <React.Fragment>
                                <a>{data.a}</a>
                            </React.Fragment>
                        }}
                    >
                    </TableColumn>
                    <TableColumn title="普通文本" key="b" />
                    <TableColumn title="自定义导出文本" key="c"
                        b-template={(data) => {
                            return <React.Fragment>
                                <div data-text={'自定义导出文本:' + data.c}>
                                    {data.c}
                                </div>
                            </React.Fragment>
                        }}
                    >
                    </TableColumn>
                    <TableColumn title="操作" key="op" ignore align="right"
                        b-template={(data) => {
                            return <React.Fragment>
                                <a>删除</a> 
                            </React.Fragment>
                        }}
                    >
                    </TableColumn>
                </Table>
            </div>
        )
    }
}