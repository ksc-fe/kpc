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
                <Datepicker value={this.state.date} on$change-value={(c, date) => this.setState({date})} ref={i => this.__demo = i}/>
                <Datepicker disabled value="2018-01-01"/>
            </div>
        )
    }
}