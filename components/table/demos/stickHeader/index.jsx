import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class extends React.Component {
    render() {
        return (
            <Table data={[
                {name: 'Javey', sex: 'male'},
                {name: 'Lisa', sex: 'female'}
            ]} stickHeader="87" resizable>
                <TableColumn title="姓名" key="name"
                    b-template={(data) => {
                        return <>
                            {data.name}
                        </>
                    }}
                >
                </TableColumn>
                <TableColumn title="性别" key="sex"
                    b-template={(data) => {
                        return <>
                            {data.sex}
                        </>
                    }}
                >
                </TableColumn>
            </Table>
        )
    }
}