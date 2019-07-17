import React from 'react';
import Input from 'kpc/components/input';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Input value={this.state.value} on$change-value={(c, value) => this.setState({value})} placeholder="please enter" ref={i => this.__test = i} /> {this.state.value}
                <br />
                <Input disabled placeholder="disabled" />
            </div>
        )
    }
}