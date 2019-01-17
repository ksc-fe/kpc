import React from 'react';
import Pagination from 'kpc/components/pagination';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(v) {
        console.log(v);
    }
    
    render() {
        return (
            <div>
                <Pagination total={200} ref={i => this.__test = i} onChange={this._onChange}/>
                <Pagination total={200} limit={20} />
                <Pagination total={200} limit={20} limits={[10, 20, 50, 100]}/>
            </div>
        )
    }
}