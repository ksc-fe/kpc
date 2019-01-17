import React from 'react';
import Editable from 'kpc/components/editable';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "text": "editable text"
        };
    }

    render() {
        return (
            <div>
                <Editable value={this.state.text} on$change-value={(c, text) => this.setState({text})} ref={i => this.__test = i}>
                    <i className="ion-ios-location"></i>
                    <a href="">{this.state.text}</a>
                </Editable>
                <br />
                <Editable value="disabled editable text" disabled>
                    <i className="ion-ios-location"></i>
                    <a href="">disabled editable text</a>
                </Editable>
            </div>
        )
    }
}