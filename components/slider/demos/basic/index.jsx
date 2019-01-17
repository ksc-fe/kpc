import React from 'react';
import Slider from 'kpc/components/slider';
import Button from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value1": 60,
            "value2": 277,
            "min": 0,
            "max": 100
        };
        this._changeRange = this._changeRange.bind(this);
    }

    _changeRange() {
        const max = Math.floor(Math.random() * 100);
        const min = Math.floor(Math.random() * max);
        this.setState({max, min});
    }
    
    render() {
        return (
            <div>
                <Slider value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})} min={this.state.min} max={this.state.max}/>
                <Slider value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} min={50} max={500} ref={i => this.__test = i} />
                <Button onClick={this._changeRange}>Change Range Randomly</Button>
            </div>
        )
    }
}