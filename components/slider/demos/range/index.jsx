import React from 'react';
import Slider from 'kpc/components/slider';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "values": [
                50,
                76
            ]
        };
    }

    render() {
        return (
            <Slider isRange value={this.state.values} on$change-value={(c, values) => this.setState({values})} />
        )
    }
}