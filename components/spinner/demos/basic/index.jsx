import React from 'react';
import Spinner from 'kpc/components/spinner';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Spinner value={this.state.value} on$change-value={(c, value) => this.setState({value})} />
                <Spinner disabled />
            </div>
        )
    }
}