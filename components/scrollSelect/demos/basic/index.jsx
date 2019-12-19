import React from 'react';
import ScrollSelect from 'kpc-react/components/scrollSelect';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "label": "1月",
                    "value": 0
                },
                {
                    "label": "2月",
                    "value": 1
                },
                {
                    "label": "3月",
                    "value": 2
                },
                {
                    "label": "4月",
                    "value": 3
                },
                {
                    "label": "5月",
                    "value": 4
                },
                {
                    "label": "6月",
                    "value": 5
                },
                {
                    "label": "7月",
                    "value": 6
                },
                {
                    "label": "8月",
                    "value": 7
                },
                {
                    "label": "9月",
                    "value": 8
                },
                {
                    "label": "10月",
                    "value": 9
                },
                {
                    "label": "11月",
                    "value": 10
                },
                {
                    "label": "12月",
                    "value": 11
                }
            ]
        };
    }

    render() {
        return (
            <ScrollSelect
                data={this.state.data}
                value={this.state.value}
                on$change-value={(c, value) => this.setState({value})}
            />
        )
    }
}