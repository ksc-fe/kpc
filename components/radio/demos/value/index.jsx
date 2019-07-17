import React from 'react';
import Radio from 'kpc/components/radio';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "checkedValue": {
                "test": 1
            }
        };
    }

    render() {
        return (
            <div>
                <Radio value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})}>默认值：{JSON.stringify(this.state.value1)}</Radio>
                <Radio value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} trueValue="checked">
                    指定选中时的取值为"checked": {JSON.stringify(this.state.value2)}
                </Radio>
                <Radio value={this.state.value3} on$change-value={(c, value3) => this.setState({value3})} trueValue={this.state.checkedValue}>
                    指定选中时的取值为对象：{JSON.stringify(this.state.value3)}
                </Radio>
            </div>
        )
    }
}