import React from 'react';
import ScrollSelect from 'kpc/components/scrollSelect';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": 2018
        };
        this.generateData = this.generateData.bind(this);
    }

    generateData(value) {
        const start = value - 5;
        return Array.apply(null, {length: 10})
            .map((v, i) => {
                const year = start + i; 
                return {
                    label: `${year}年`,
                    value: year
                };
            });
    }
    
    render() {
        return (
            <ScrollSelect
                data={this.generateData}
                value={this.state.value}
                on$change-value={(c, value) => this.setState({value})}
            />
        )
    }
}