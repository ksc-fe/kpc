import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class Demo extends React.Component {
    render() {
        return (
            <Table
                b-tooltip={(data, index) => {
                    return <React.Fragment>
                        <div>{data.a}</div>
                    </React.Fragment>
                }}
                data={[
                    {a: '第一行', b: '哈哈1'}, 
                    {a: '第二行', b: '哈哈2'},
                    {a: '第三行', b: '哈哈3'}
                ]}
            >
                <TableColumn key="a" title="表头1" />
                <TableColumn key="b" title="表头2" />
            </Table>
        )
    }
}