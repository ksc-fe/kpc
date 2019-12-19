import React from 'react';
import {Input} from 'kpc-react/components/input';
import './index.styl';
import tinycolor from 'tinycolor2';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": "#ddd"
        };
        this._onInput = this._onInput.bind(this);
    }

    _onInput(e) {
        const value = e.target.value.trim();
        const color = tinycolor(value);
        if (color.isValid()) {
            const newValue = color.toHexString();
            this.setState({value: newValue});
        }
    }
    
    render() {
        return (
            <div>
                <Input value={this.state.value} onInput={this._onInput} />
                <br />
                <Input frozenOnInput value={this.state.value} onInput={this._onInput} />
            </div>
        )
    }
}