import React from 'react';
import Radio from 'kpc/components/radio';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Radio value={this.state.value} on$change-value={(c, value) => this.setState({value})}>radio</Radio>
                <Radio disabled>disabled radio</Radio>
                <Radio value={true} disabled>disabled checked radio</Radio>
            </div>
        )
    }
}