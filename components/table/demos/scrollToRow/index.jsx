import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';
import {Button, ButtonGroup} from 'kpc-react/components/button';
import './index.styl';
import {range} from 'kpc-react/components/utils';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.scrollToRowByIndex = this.scrollToRowByIndex.bind(this);
        this.scrollToRowByKey = this.scrollToRowByKey.bind(this);
    }

    scrollToRowByIndex() {
        this.table.scrollToRowByIndex(19);
    }
    
    scrollToRowByKey() {
        this.table.scrollToRowByKey('name 25');
    }
    
    render() {
        return (
            <div className="wrapper">
                <ButtonGroup>
                    <Button onClick={this.scrollToRowByIndex}>Scroll to the 20th row</Button>
                    <Button onClick={this.scrollToRowByKey}>Scroll to the "name 25" row</Button>
                </ButtonGroup>
                <Table fixHeader="300"
                    data={this.state.data}
                    ref={i => this.table = i}
                    rowKey={item => item.name}
                >
                    <TableColumn title="Name" key="name" fixed="left" />
                    <TableColumn title="IP" key="ip" />
                    <TableColumn title="Operation" key="op" fixed="right"
                        b-template={(data) => {
                            return <React.Fragment>
                                <a>Remove</a> 
                            </React.Fragment>
                        }}
                    >
                    </TableColumn>
                </Table>
            </div>
        )
    }
}