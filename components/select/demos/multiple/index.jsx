import React from 'react';
import {Select, Option} from 'kpc-react/components/select';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Select value={this.state.day} on$change-value={(c, day) => this.setState({day})} multiple>
                    <Option value="Monday">星期一</Option>
                    <Option value="Tuesday">星期二</Option>
                    <Option value="Wednesday">星期三</Option>
                    <Option value="Thursday">星期四</Option>
                    <Option value="Friday">星期五</Option>
                    <Option value="Saturday">星期六</Option>
                    <Option value="Sunday">星期天</Option>
                </Select>
                You selected: {JSON.stringify(this.state.day)} 
            </div>
        )
    }
}