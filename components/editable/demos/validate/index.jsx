import React from 'react';
import Editable from 'kpc/components/editable';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": 100
        };
        this._showErrorTip = this._showErrorTip.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _showErrorTip(c, value) {
        Message.error('Please enter digits.');
    }
    
    _onChange(c, newValue, oldValue) {
        console.log(newValue, oldValue);
    }
    
    render() {
        return (
            <div>
                <Editable value={this.state.value} on$change-value={(c, value) => this.setState({value})} validate={value => /\d+/.test(value)}
                    ref={i => this.__test1 = i}
                    onChange={this._onChange}
                >{this.state.value}</Editable>
                <br />
                <Editable value={this.state.value} on$change-value={(c, value) => this.setState({value})} validate={/\d+/}
                    ref={i => this.__test2 = i}
                >{this.state.value}</Editable>
                <br />
                <Editable value={this.state.value} on$change-value={(c, value) => this.setState({value})} validate="\d+"
                    onError={this._showErrorTip}
                    ref={i => this.__test3 = i}
                >{this.state.value}</Editable>
            </div>
        )
    }
}