import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Datepicker value={this.state.from} on$change-value={(c, from) => this.setState({from})} placeholder="开始日期"
                    maxDate={this.state.to}
                    minDate={new Date()}
                /> ~
                <Datepicker value={this.state.to} on$change-value={(c, to) => this.setState({to})} placeholder="结束日期"
                    minDate={this.state.from}
                />
                <br />
                <br />
                <Datepicker value={this.state.fromTime} on$change-value={(c, fromTime) => this.setState({fromTime})} placeholder="开始时间"
                    type="datetime"
                    maxDate={this.state.toTime || new Date()}
                /> ~
                <Datepicker value={this.state.toTime} on$change-value={(c, toTime) => this.setState({toTime})} placeholder="结束时间"
                    type="datetime"
                    minDate={this.state.fromTime}
                    maxDate={new Date()}
                />
            </div>
        )
    }
}