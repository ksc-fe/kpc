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
                <Datepicker type="year" value={this.state.year} on$change-value={(c, year) => this.setState({year})} />
                <Datepicker type="month" value={this.state.month} on$change-value={(c, month) => this.setState({month})} clearable />
            </div>
        )
    }
}