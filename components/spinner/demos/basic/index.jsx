import React from 'react';
import Spinner from 'kpc-react/components/spinner';
import './index.styl';

export default class Demo extends React.Component {
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