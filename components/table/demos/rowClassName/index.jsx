import React from 'react';
import Table from 'kpc/components/table';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Table scheme={{a: '偶数行背景变换'}} 
                    data={[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]} 
                    rowClassName={(value, index) => index % 2 === 0 ? 'odd' : 'even'}
                />
                <Table scheme={{a: '偶数行背景变换'}} 
                    data={[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]} 
                    stripe
                />
            </div>
        )
    }
}