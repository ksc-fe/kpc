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
                <Timepicker className="time" value={this.state.time} on$change-value={(c, time) => this.setState({time})} step="00:30:00"/>
                You selected: {JSON.stringify(this.state.time)}
                <br /><br />
                <Timepicker value={this.state.timeArray} on$change-value={(c, timeArray) => this.setState({timeArray})} multiple clearable
                    step="00:30:00" 
                    min="09:00:00"
                    max="18:00:00"
                />
                You selected: {JSON.stringify(this.state.timeArray)}
            </div>
        )
    }
}