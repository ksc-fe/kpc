import React from 'react';
import Pagination from 'kpc/components/pagination';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "current": 1
        };
        this._fetch = this._fetch.bind(this);
    }

    _fetch(c, current) {
        // fetch data
        this.setState({current: current});
        Message.info(`current page: ${current}`);
    }
    
    render() {
        return (
            <div>
                <Pagination total={200} 
                    current={this.state.current}
                    on$change-current={this._fetch} 
                />
            </div>
        )
    }
}