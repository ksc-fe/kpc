import React from 'react';
import Rate from 'kpc/components/rate';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": 2
        };
    }

    render() {
        return (
            <Rate value={this.state.value} on$change-value={(c, value) => this.setState({value})}
                b-icon={<><Icon className="ion-heart" /></>}
            >
            </Rate>
        )
    }
}