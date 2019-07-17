import React from 'react';
import Rate from 'kpc/components/rate';
import Icon from 'kpc/components/icon';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": 2
        };
    }

    render() {
        return (
            <Rate value={this.state.value} on$change-value={(c, value) => this.setState({value})}
                b-icon={<React.Fragment><Icon className="ion-heart" /></React.Fragment>}
            >
            </Rate>
        )
    }
}