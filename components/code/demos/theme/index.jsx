import React from 'react';
import Code from 'kpc/components/code';
import {ButtonGroup, Button} from 'kpc/components/button';
import './index.styl';
const code = `function test() {
    console.log('hello world');
}`;

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                主题：<ButtonGroup value={this.state.theme} on$change-value={(c, theme) => this.setState({theme})} checkType="radio">
                    {['vs', 'vs-dark', 'hc-black'].map((value, key) => {
                        return (
                            <Button
                                value={value}
                            >{value}</Button>
                        )
                    })}
                </ButtonGroup>
                <Code value={this.state.value} on$change-value={(c, value) => this.setState({value})} height="200px" theme={this.state.theme} />
            </div>
        )
    }
}