import React from 'react';
import Pagination from 'kpc/components/pagination';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Pagination total={200} counts="10" />
                <Pagination total={200} counts="9" />
            </div>
        )
    }
}