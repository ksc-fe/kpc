import React from 'react';
import Pagination from 'kpc/components/pagination';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Pagination noBorder total={200} size="large" />
                <Pagination noBorder total={200} />
                <Pagination noBorder total={200} size="small" />
                <Pagination noBorder total={200} size="mini" />
            </div>
        )
    }
}