import React from 'react';
import {Diagram, DTreeLayout, DRectangle, DLine} from 'kpc-react/components/diagram';
import {Select, Option} from 'kpc-react/components/select';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "cities": [
                {
                    "name": "北京",
                    "value": "beijing"
                },
                {
                    "name": "上海",
                    "value": "shanghai"
                },
                {
                    "name": "深圳",
                    "value": "shenzhen"
                }
            ],
            "from": "",
            "to": ""
        };
    }

    render() {
        const cities = this.state.cities;
    
        return (
            <Diagram>
                <DTreeLayout>
                    <DRectangle key="from" strokeStyle="dashed" height="100">
                        <div className="container">
                            <div>始发站</div>
                            <Select value={this.state.from} on$change-value={(c, from) => this.setState({from})} fluid>
                                {cities.map((value, key) => {
                                    return (
                                        <Option value={value.value}>
                                            {value.name}
                                        </Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </DRectangle>
                    <DRectangle key="to" strokeStyle="dashed" height="100">
                        <div className="container">
                            <div>终点站</div>
                            <Select value={this.state.to} on$change-value={(c, to) => this.setState({to})} fluid>
                                {cities.map((value, key) => {
                                    return (
                                        <Option value={value.value}>
                                            {value.name}
                                        </Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </DRectangle>
                    <DLine from="from" to="to" />
                </DTreeLayout>
            </Diagram>
        )
    }
}