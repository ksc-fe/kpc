import React from 'react';
import Code from 'kpc-react/components/code';

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
            <Code value={this.state.value} on$change-value={(c, value) => this.setState({value})} height="200px" readonly />
        )
    }
}