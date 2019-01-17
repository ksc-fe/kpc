import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Datepicker clearable value={this.state.date} on$change-value={(c, date) => this.setState({date})}/>
        )
    }
}