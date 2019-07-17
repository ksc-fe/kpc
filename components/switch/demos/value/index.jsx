import React from 'react';
import {Switch} from 'kpc/components/switch';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div style={{"marginBottom":"20px"}}>
                    <Switch value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})} />
                    {JSON.stringify(this.state.value1)}
                </div>
                <div>
                    <Switch value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} trueValue={1} falseValue="1" />
                    {JSON.stringify(this.state.value2)}
                </div>
            </div>
        )
    }
}