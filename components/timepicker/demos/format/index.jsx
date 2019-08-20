import React from 'react';
import Timepicker from 'kpc/components/timepicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Timepicker 
                    value={this.state.time1}
                    on$change-value={(c, time1) => this.setState({time1})}
                    min="01:34 am"
                    max="03:02 pm" 
                    format="hh:mm a"
                />
                <span>You selected: {this.state.time1}</span>
                <br /><br />
                <Timepicker value={this.state.time2}
                    on$change-value={(c, time2) => this.setState({time2})}
                    step="00:30:00"
                    showFormat="HH:mm"
                />
                <span>You selected: {this.state.time2}</span>
                <br /><br />
                <Timepicker
                    value={this.state.time3}
                    on$change-value={(c, time3) => this.setState({time3})}
                    step="00:30:00"
                    range 
                    clearable
                    valueFormat="HH:mm:ss.SSS"
                    showFormat="HH:mm"
                />
                <span>You selected: {JSON.stringify(this.state.time3)}</span>
            </div>
        )
    }
}