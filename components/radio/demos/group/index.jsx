import React from 'react';
import Radio from 'kpc/components/radio';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Radio name="language" trueValue="Javascript" value={this.state.language} on$change-value={(c, language) => this.setState({language})}>Javascript</Radio>
                <Radio name="language" trueValue="C++" value={this.state.language} on$change-value={(c, language) => this.setState({language})}>C++</Radio>
                <Radio name="language" trueValue="PHP" value={this.state.language} on$change-value={(c, language) => this.setState({language})}>PHP</Radio>
                Your selected: {this.state.language}
            </div>
        )
    }
}