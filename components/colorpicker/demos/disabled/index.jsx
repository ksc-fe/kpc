import React from 'react';
import Colorpicker from 'kpc-react/components/colorpicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "color": "#d99123"
        };
    }

    render() {
        return (
            <Colorpicker value={this.state.color} on$change-value={(c, color) => this.setState({color})} disabled />
        )
    }
}