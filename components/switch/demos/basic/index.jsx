import React from 'react';
import {Switch} from 'kpc/components/switch';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Switch value={this.state.value} on$change-value={(c, value) => this.setState({value})} />
                <Switch disabled />
            </div>
        )
    }
}