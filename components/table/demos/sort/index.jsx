import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "name": "aa",
                    "age": 1
                },
                {
                    "name": "cc",
                    "age": 5
                },
                {
                    "name": "bb",
                    "age": 9
                }
            ],
            "scheme": {
                "name": {
                    "title": "姓名",
                    "sortable": true
                },
                "age": {
                    "title": "年龄",
                    "sortable": true
                }
            },
            "sort": {}
        };
        this._onSort = this._onSort.bind(this);
    }

    _onSort(c, sort) {
        console.log(sort);
        const data = this.state.data.slice(0);
        data.sort((a, b) => {
            return sort.type === 'desc' ? 
                (a[sort.key] > b[sort.key] ? -1 : 1) : 
                (a[sort.key] > b[sort.key] ? 1 : -1);
        });
        this.setState({data, sort});
    }
    
    render() {
        return (
            <div className='no-data-template'>
                <Table scheme={this.state.scheme} 
                    data={this.state.data} 
                    sort={this.state.sort}
                    on$change-sort={this._onSort}
                />
                <Table data={this.state.data} 
                    sort={this.state.sort}
                    on$change-sort={this._onSort}
                >
                    <TableColumn title='姓名' key='name' sortable />
                    <TableColumn title='年龄' key='age' sortable />
                </Table>
            </div>
        )
    }
}