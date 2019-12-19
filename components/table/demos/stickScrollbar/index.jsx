import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';

export default class Demo extends React.Component {
    render() {
        const data = [
            {name: 'John'},
            {name: 'Tom'},
            {name: 'Javey'},
        ].map(item => {
            for (let i = 0; i < 4; i++) {
                item[`column${i + 1}`] = 'test';
            }
            return item;
        });
    
        return (
            <Table data={data} resizable stickScrollbar>
                <TableColumn key="name" title="Name" width="200" />
                <TableColumn key="column1" title="Column1" width="300" />
                <TableColumn key="column2" title="Column2" width="300" />
                <TableColumn key="column3" title="Column3" width="300" />
                <TableColumn key="column4" title="Column4" width="300" />
                <TableColumn key="action" title="Action" width="200"
                    b-template={(data) => {
                        return <React.Fragment>
                            <a>action</a>
                        </React.Fragment>
                    }}
                >
                </TableColumn>
            </Table>
        )
    }
}