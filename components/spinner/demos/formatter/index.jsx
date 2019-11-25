import React from 'react';
import Spinner from 'kpc/components/spinner';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "money": 1000,
            "percent": 78
        };
    }

    render() {
        return (
            <div>
                <Spinner vertical 
                    value={this.state.money}
                    on$change-value={(c, money) => this.setState({money})}
                    formatter={value => ('￥' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/￥|,/g, '')}
                />
                <Spinner vertical 
                    prefix="增长率 "
                    suffix="%"
                    value={this.state.percent}
                    on$change-value={(c, percent) => this.setState({percent})}
                />
            </div>
        )
    }
}