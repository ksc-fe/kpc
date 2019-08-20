import React from 'react';
import Datepicker from 'kpc/components/datepicker';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <Datepicker value={this.state.date1} on$change-value={(c, date1) => this.setState({date1})} format="MM/DD/YYYY" />
                    value: {this.state.date1}
                </div>
                <div>
                    <Datepicker value={this.state.date2} on$change-value={(c, date2) => this.setState({date2})} showFormat="YYYY年M月D日"/>
                    value: {this.state.date2}
                </div>
                <div>
                    <Datepicker type="datetime" value={this.state.date3} on$change-value={(c, date3) => this.setState({date3})} valueFormat="YYYY-MM-DDTHH:mm:ss.SSS[Z]"/>
                    value: {this.state.date3}
                </div>
            </div>
        )
    }
}