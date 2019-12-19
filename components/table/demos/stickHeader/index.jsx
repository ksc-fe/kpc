import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';

export default class Demo extends React.Component {
    render() {
        return (
            <Table data={[
                {name: 'Javey', sex: 'male'},
                {name: 'Lisa', sex: 'female'}
            ]} stickHeader="87" resizable>
                <TableColumn title="姓名" key="name"
                    b-template={(data) => {
                        return <React.Fragment>
                            {data.name}
                        </React.Fragment>
                    }}
                >
                </TableColumn>
                <TableColumn title="性别" key="sex"
                    b-template={(data) => {
                        return <React.Fragment>
                            {data.sex}
                        </React.Fragment>
                    }}
                >
                </TableColumn>
            </Table>
        )
    }
}