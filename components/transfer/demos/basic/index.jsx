import React from 'react';
import Transfer from 'kpc/components/transfer';

const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            value: [
                data[0],
                data[1]
            ]
        };
    }
    
    render() {
        return (
            <div>
                <Transfer data={this.state.data} value={this.state.value} on$change-value={(c, value) => this.setState({value})} ref={i => this.__test = i} />
                <p>You selected: {JSON.stringify(this.state.value)}</p>
            </div>
        )
    }
}