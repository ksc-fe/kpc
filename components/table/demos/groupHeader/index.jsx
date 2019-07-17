import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Table data={this.state.data} type="grid"
                    scheme={{
                        weekday: {title: 'Weekday'},
                        forenoon: {
                            title: 'Forenoon',
                            scheme: {
                                forenoonTime: {title: 'Time'},
                                classes: {
                                    title: 'Classes',
                                    scheme: {
                                        class1: {title: 'Class 1'},
                                        class2: {title: 'Class 2'},
                                        class3: {title: 'Class 3'},
                                        class4: {title: 'Class 4'},
                                    }
                                }
                            } 
                        },
                        afternoon: {
                            title: 'Afternoon',
                            scheme: {
                                afternoonTime: {title: 'Time'},
                                class5: {title: 'Class 5'},
                                class6: {title: 'Class 6'},
                                class7: {title: 'Class 7'},
                            } 
                        }
                    }}
                />
                <Table data={this.state.data} checkType="none" type="grid" resizable stickHeader="87">
                    <TableColumn title="Weekday" key='weekday' fixed="left"/>
                    <TableColumn title="Forenoon" key="forenoon">
                        <TableColumn title="Time" key="forenoonTime" fixed="left" />
                        <TableColumn title="Classes" key="classes">
                            <TableColumn title="Class 1" key='class1' />
                            <TableColumn title="Class 2" key='class2' />
                            <TableColumn title="Class 3" key='class3' />
                            <TableColumn title="Class 4" key='class4' />
                        </TableColumn>
                    </TableColumn>
                    <TableColumn title="Afternoon" key="afternoon">
                        <TableColumn title="Time" key="afternoonTime" />
                        <TableColumn title="Class 5" key='class5' />
                        <TableColumn title="Class 6" key='class6' />
                        <TableColumn title="Class 7" key='class7' fixed="right" />
                    </TableColumn>
                </Table>
            </div>
        )
    }
}