import React from 'react';
import Table from 'kpc/components/table';

export default class extends React.Component {
    render() {
        return (
            <Table scheme={{a: '类型'}} data={[{a: 'border类型'}]} type="border" />
        )
    }
}