import React from 'react';
import Pagination from 'kpc/components/pagination';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Pagination total={200} size="large" />
                <Pagination total={200} />
                <Pagination total={200} size="small" />
                <Pagination total={200} size="mini" />
            </div>
        )
    }
}