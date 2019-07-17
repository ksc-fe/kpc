import React from 'react';
import {Select, Option} from 'kpc/components/select';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "label": "星期一",
                    "value": "Monday"
                },
                {
                    "label": "星期二",
                    "value": "Tuesday"
                },
                {
                    "label": "星期三",
                    "value": "Wednesday"
                },
                {
                    "label": "星期四",
                    "value": "Thursday"
                },
                {
                    "label": "星期五",
                    "value": "Friday"
                },
                {
                    "label": "星期六",
                    "value": "Saturday"
                },
                {
                    "label": "星期天",
                    "value": "Sunday"
                }
            ]
        };
    }

    render() {
        return (
            <Select value={this.state.day} on$change-value={(c, day) => this.setState({day})} filterable>
                {this.state.data.map((value, key) => {
                    return (
                        <Option value={value.value} label={value.label}>
                            <div>
                                <span>{value.label}</span>
                                <span style={{"float":"right","color":"#ccc"}}>{value.value}</span>
                            </div>
                        </Option>
                    )
                })}
            </Select>
        )
    }
}