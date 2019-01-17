import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Datepicker multiple value={this.state.date} on$change-value={(c, date) => this.setState({date})} />
                You selected: {JSON.stringify(this.state.date)}
                <br /><br />
                <Datepicker multiple value={this.state.datetime} on$change-value={(c, datetime) => this.setState({datetime})} type="datetime" />
                You selected: {JSON.stringify(this.state.datetime)}
            </div>
        )
    }
}