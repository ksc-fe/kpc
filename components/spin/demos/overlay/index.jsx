import React from 'react';
import Spin from 'kpc/components/spin';
import {Table, TableColumn} from 'kpc/components/table';
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
                },
                {
                    "a": "第三行",
                    "b": "哈哈3"
                }
            ]
        };
    }

    render() {
        return (
            <div className="wrapper">
                <Table data={this.state.data}>
                    <TableColumn key="a" title="表头1" />
                    <TableColumn key="b" title="表头2" />
                </Table>
                <Spin overlay />
            </div>
        )
    }
}