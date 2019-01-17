import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class extends React.Component {
    render() {
        const scheme = {a: '表头1', b: '表头2'};
        const data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];
    
        return (
            <div>
                <Table scheme={scheme} data={data} resizable ref={i => this.__test = i} />
                <Table data={data} resizable >
                    <TableColumn key="a" title="表头1" />
                    <TableColumn key="b" title="表头2" />
                </Table>
            </div>
        )
    }
}