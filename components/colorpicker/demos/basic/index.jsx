import React from 'react';
import Colorpicker from 'kpc/components/colorpicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "color": "#d99123"
        };
    }

    render() {
        return (
            <div>
                <Colorpicker value={this.state.color} on$change-value={(c, color) => this.setState({color})} />
                <span style={{color: this.state.color, marginLeft: '10px', verticalAlign: 'middle'}}>
                    Hello, Colorpicker!
                </span>
            </div>
        )
    }
}