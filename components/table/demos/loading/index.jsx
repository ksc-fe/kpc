import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';
import {Switch} from 'kpc/components/switch';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Table 
                    data={[
                        {a: '第一行', b: '哈哈1'}, 
                        {a: '第二行', b: '哈哈2'},
                        {a: '第三行', b: '哈哈3'},
                    ]}
                    loading={!!this.state.loading}
                >
                    <TableColumn key="a" title="表头1" />
                    <TableColumn key="b" title="表头2" />
                </Table>
                切换loading状态: <Switch value={this.state.loading} on$change-value={(c, loading) => this.setState({loading})}></Switch>
            </div>
        )
    }
}