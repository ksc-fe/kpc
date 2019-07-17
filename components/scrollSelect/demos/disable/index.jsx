import React from 'react';
import ScrollSelect from 'kpc/components/scrollSelect';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": 2018
        };
        this.generateData = this.generateData.bind(this);
        this.disable = this.disable.bind(this);
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
    
    disable(value) {
        // 排除闰年
        return value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0);
    }
    
    render() {
        return (
            <ScrollSelect
                data={this.generateData}
                value={this.state.value}
                on$change-value={(c, value) => this.setState({value})}
                disable={this.disable}
            />
        )
    }
}