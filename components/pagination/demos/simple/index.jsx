import React from 'react';
import Pagination from 'kpc/components/pagination';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Pagination simple total={200} size="large" />
                <Pagination simple total={200} />
                <Pagination simple total={200} size="small" />
                <Pagination simple total={200} size="mini" />
            </div>
        )
    }
}