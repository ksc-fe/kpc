import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "a": "第一行",
                    "b": "哈哈2"
                },
                {
                    "a": "第二行",
                    "b": "哈哈2"
                }
            ]
        };
        this._onSelectedKeysChanged = this._onSelectedKeysChanged.bind(this);
    }

    _onSelectedKeysChanged(table) {
        console.log(table.getSelectedData());
    }
    
    render() {
        return (
            <div>
                <Table data={this.state.data} 
                    rowSelectable
                    on$change-selectedKeys={this._onSelectedKeysChanged}
                    rowCheckable={false}
                    ref={i => this.__test1 = i}
                >
                    <TableColumn key="a" title="表头1" />
                    <TableColumn key="b" title="表头2" />
                </Table>
                <Table data={this.state.data}
                    rowSelectable="multiple"
                    rowCheckable={false}
                    ref={i => this.__test2 = i}
                >
                    <TableColumn key="a" title="表头1" />
                    <TableColumn key="b" title="表头2" />
                </Table>
            </div>
        )
    }
}