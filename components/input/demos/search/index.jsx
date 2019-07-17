import React from 'react';
import {Search} from 'kpc/components/input';

import Message from 'kpc/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this._search = this._search.bind(this);
    }

    _search(keywords) {
        Message.success('Search by keywords: ' + keywords);
    }
    
    render() {
        return (
            <div>
                <Search onSubmit={this._search} />
                <br />
                <Search type="line" onSubmit={this._search} />
            </div>
        )
    }
}