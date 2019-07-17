import React from 'react';
import Rate from 'kpc/components/rate';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": 2
        };
    }

    render() {
        return (
            <Rate value={this.state.value} on$change-value={(c, value) => this.setState({value})} clearable />
        )
    }
}