import React from 'react';
import Table from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Table scheme={{a: '100px'}} 
                    data={[{a: '表头固定，但内容没有超出最高高度'}]}
                    fixHeader="100"
                />
                <Table scheme={{a: '100px' }} 
                    data={[{a: '表头固定啦'}, {a: '下拉'}, {a: 'yeah!'}]}
                    fixHeader="100" 
                />
            </div>
        )
    }
}