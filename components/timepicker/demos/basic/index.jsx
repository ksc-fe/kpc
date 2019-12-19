import React from 'react';
import Timepicker from 'kpc-react/components/timepicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Timepicker value={this.state.time} on$change-value={(c, time) => this.setState({time})} min="01:34:56" max="15:02:59" />
                You selected: {this.state.time}
                <br /><br />
                <Timepicker value={this.state.timeArray} on$change-value={(c, timeArray) => this.setState({timeArray})} multiple clearable />
                You selected: {JSON.stringify(this.state.timeArray)}
            </div>
        )
    }
}