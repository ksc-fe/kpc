import React from 'react';
import Checkbox from 'kpc/components/checkbox';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "languages": []
        };
    }

    render() {
        return (
            <div>
                <Checkbox name="languages" trueValue="Javascript" value={this.state.languages} on$change-value={(c, languages) => this.setState({languages})}>Javascript</Checkbox>
                <Checkbox name="languages" trueValue="C++" value={this.state.languages} on$change-value={(c, languages) => this.setState({languages})}>C++</Checkbox>
                <Checkbox name="languages" trueValue="PHP" value={this.state.languages} on$change-value={(c, languages) => this.setState({languages})}>PHP</Checkbox>
                Your selected: {JSON.stringify(this.state.languages)}
            </div>
        )
    }
}