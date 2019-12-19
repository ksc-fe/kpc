import React from 'react';
import Checkbox from 'kpc-react/components/checkbox';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "uncheckedValue": {
                "unchecked": true
            }
        };
    }

    render() {
        return (
            <div>
                <Checkbox value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})}>默认值: {JSON.stringify(this.state.value1)}</Checkbox>
                <Checkbox value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} trueValue="checked">
                    指定选中时取值为"checked": {JSON.stringify(this.state.value2)}
                </Checkbox>
                <Checkbox value={this.state.value3} on$change-value={(c, value3) => this.setState({value3})} trueValue={0} falseValue={this.state.uncheckedValue}>
                    指定非选中时取值为对象：{JSON.stringify(this.state.value3)}
                </Checkbox>
            </div>
        )
    }
}