import React from 'react';
import Transfer from 'kpc/components/transfer';

export default class extends React.Component {
    constructor(props) {
        super(props);
        const data = [
            {label: '主机名0', key: 0},
            {label: '主机名1', key: 1, disabled: true},
            {label: '主机名2', key: 2},
            {label: '主机名3', key: 3, disabled: true},
            {label: '主机名4', key: 4},
        ];
        this.state = {
            data: data,
            checked: [data[0], data[2]]
        };
    }
    
    render() {
        return (
            <div>
                <Transfer data={this.state.data} 
                    leftChecked={this.state.checked}
                    on$change-leftChecked={(c, checked) => this.setState({checked})}
                />
                <p>You checked left side: {JSON.stringify(this.state.checked)}</p>
            </div>
        )
    }
}