import React from 'react';
import Checkbox from 'kpc/components/checkbox';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Checkbox value={this.state.value} on$change-value={(c, value) => this.setState({value})}>checkbox</Checkbox>
                <Checkbox disabled>disabled checkbox</Checkbox>
                <Checkbox value={true} disabled>disabled checked checkbox</Checkbox>
            </div>
        )
    }
}