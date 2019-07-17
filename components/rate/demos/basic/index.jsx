import React from 'react';
import Rate from 'kpc/components/rate';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value1": 2,
            "value2": 2.5
        };
    }

    render() {
        return (
            <div>
                <Rate value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})} />
                <br />
                <Rate value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} half />
            </div>
        )
    }
}