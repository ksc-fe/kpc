import React from 'react';
import Slider from 'kpc/components/slider';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Slider value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})} step={5} isShowEnd={false} />
                <Slider value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} min={50} max={500} step={0.1} />
                <Slider value={0.234234} max={1} step={0} />
            </div>
        )
    }
}