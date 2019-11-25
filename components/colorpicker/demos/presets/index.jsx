import React from 'react';
import Colorpicker from 'kpc/components/colorpicker';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "color1": "#36acef",
            "color2": "#d99123"
        };
    }

    render() {
        return (
            <div>
                <Colorpicker value={this.state.color1}
                    on$change-value={(c, color1) => this.setState({color1})}
                    presets={['transparent', 'red', '#d99123', 'rgb(255, 51, 33)', 'hsl(126, 54%, 46%)']}
                />
                <Colorpicker value={this.state.color2}
                    on$change-value={(c, color2) => this.setState({color2})}
                    presets={[]}
                />
            </div>
        )
    }
}