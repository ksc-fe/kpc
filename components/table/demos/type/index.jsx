import React from 'react';
import Table from 'kpc/components/table';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Table scheme={{a: '类型', b: '属性'}}
                    data={[{a: 'border类型', b: 'type="border"'}]}
                    type="border" 
                />
                <Table scheme={{a: '类型', b: '属性'}}
                    data={[{a: 'grid类型', b: 'type="grid"'}]}
                    type="grid" 
                />
            </div>
        )
    }
}