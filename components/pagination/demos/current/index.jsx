import React from 'react';
import Pagination from 'kpc/components/pagination';

import Message from 'kpc/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "current1": 1,
            "current2": 1,
            "limit": 20
        };
        this._fetch1 = this._fetch1.bind(this);
        this._fetch2 = this._fetch2.bind(this);
    }

    _fetch1(c, current) {
        // fetch data
        this.setState({current1: current});
        Message.info(`current page: ${current}`);
    }
    
    _fetch2({current, limit}) {
        Message.info(`current page: ${current}, limit: ${limit}`);
    }
    
    render() {
        return (
            <div>
                <Pagination total={200} 
                    current={this.state.current1}
                    on$change-current={this._fetch1} 
                />
                <br /><br />
                <Pagination total={200} 
                    current={this.state.current2}
                    on$change-current={(c, current2) => this.setState({current2})}
                    limit={this.state.limit}
                    on$change-limit={(c, limit) => this.setState({limit})}
                    onChange={this._fetch2}
                />
            </div>
        )
    }
}