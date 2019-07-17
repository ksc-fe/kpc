import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';
import './index.styl';

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
            <div>
                <Table data={data} resizable stickHeader="87">
                    <TableColumn fixed="left" key="name" title="Name" width="200" className="name" />
                    <TableColumn key="column1" title="Column1" width="300"
                        b-title={<React.Fragment><div>Column1</div></React.Fragment>}
                    >
                    </TableColumn>
                    <TableColumn key="column2" title="Column2" width="300" />
                    <TableColumn key="column3" title="Column3" width="300" />
                    <TableColumn key="column4" title="Column4" width="300" />
                    <TableColumn fixed="right" key="action" title="Action" width="200"
                        b-template={(data) => {
                            return <React.Fragment>
                                <a>action</a>
                            </React.Fragment>
                        }}
                    >
                    </TableColumn>
                </Table>
                <Table data={data} fixHeader="100" resizable ref={i => this.__test = i} type="grid">
                    <TableColumn fixed="left" key="name" title="Name" width="200" />
                    <TableColumn key="column1" title="Column1" width="300" />
                    <TableColumn key="column2" title="Column2" width="300" />
                    <TableColumn key="column3" title="Column3" width="300" />
                    <TableColumn key="column4" title="Column4" width="300" />
                    <TableColumn fixed="right" key="action" title="Action" width="200"
                        b-template={(data) => {
                            return <React.Fragment>
                                <a>action</a>
                            </React.Fragment>
                        }}
                    >
                    </TableColumn>
                </Table>
            </div>
        )
    }
}