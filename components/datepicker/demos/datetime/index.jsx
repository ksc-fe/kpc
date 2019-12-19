import React from 'react';
import Datepicker from 'kpc-react/components/datepicker';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Datepicker type="datetime" value={this.state.datetime1} on$change-value={(c, datetime1) => this.setState({datetime1})} />
                <Datepicker type="datetime" value={this.state.datetime2}
                    on$change-value={(c, datetime2) => this.setState({datetime2})} 
                    placeholder="时间精确到小时"
                    disabledMinutes
                    disabledSeconds
                />
            </div>
        )
    }
}