import React from 'react';
import Table from 'kpc/components/table';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div className='no-data-template'>
                <Table scheme={{a: '点击整行不选中', b: 'B'}}
                    data={[{a: 'A', b: 'B'}, {a: 'A', b: '点我不会选中整行'}]}
                    rowCheckable={false}
                />
                <Table scheme={{a: '点击整行选中', b: 'B'}} 
                    data={[{a: 'A', b: '任何位置都可以哦～'}, {a: 'A', b: '点我会选中整行'}]}
                />
            </div>
        )
    }
}