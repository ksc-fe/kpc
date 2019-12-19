import React from 'react';
import Slider from 'kpc-react/components/slider';

export default class Demo extends React.Component {
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